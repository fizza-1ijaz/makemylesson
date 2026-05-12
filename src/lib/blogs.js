/**
 * Blog data loaders for server components. Live Supabase reads on every request when routes use
 * `dynamic = 'force-dynamic'` (see `src/app/blog/layout.jsx`). React `cache()` only dedupes within one request.
 */
import { cache } from 'react'
import { supabase } from '@/lib/supabaseClient'

/** Must match `sites.site_key` for Make My Lesson in Supabase. */
const MAKE_MY_LESSON_SITE_KEY = (
  process.env.NEXT_PUBLIC_MML_BLOG_SITE_KEY || 'makemylesson'
).trim()

const SUPABASE_QUERY_RETRIES = Math.max(1, Number(process.env.SUPABASE_BUILD_RETRIES || '5'))
const SUPABASE_RETRY_DELAY_MS = Math.max(500, Number(process.env.SUPABASE_BUILD_RETRY_DELAY_MS || '2000'))

function isTransientSupabaseFailure(message) {
  if (!message) return false
  if (message.includes('<!DOCTYPE') || message.includes('Bad gateway')) return true
  return /502|503|504|Cloudflare|timeout|fetch failed|ECONNRESET|ETIMEDOUT|NetworkError|Failed to fetch/i.test(
    message
  )
}

async function pause(ms) {
  await new Promise((r) => setTimeout(r, ms))
}

function truncateForError(message, max = 420) {
  const t = message.replace(/\s+/g, ' ').trim()
  return t.length > max ? `${t.slice(0, max)}…` : t
}

async function execPostgrestWithRetries(label, op) {
  let lastMsg = ''
  for (let attempt = 1; attempt <= SUPABASE_QUERY_RETRIES; attempt++) {
    const { data, error } = await op()
    if (!error) return data

    lastMsg = error.message || error.code || 'unknown error'

    if (!isTransientSupabaseFailure(lastMsg)) {
      throw new Error(`${label}: ${truncateForError(lastMsg)}`)
    }

    if (attempt >= SUPABASE_QUERY_RETRIES) break

    console.warn(
      `[blogs] ${label}: transient failure (attempt ${attempt}/${SUPABASE_QUERY_RETRIES}), retrying in ${SUPABASE_RETRY_DELAY_MS * attempt}ms…`
    )
    await pause(SUPABASE_RETRY_DELAY_MS * attempt)
  }

  throw new Error(`${label}: ${truncateForError(lastMsg)}`)
}

const BLOG_SEO_FIELDS =
  'slug, title, description, meta_title, meta_description, cover_image_url, display_date, author_name, keywords, article_section'

const DEFAULT_INDEX_SEO = {
  title: 'Blog — Make My Lesson',
  description:
    'Teaching ideas, lesson planning tips, and product updates from Make My Lesson — AI lesson planner for teachers.',
  headline: 'Make My Lesson Blog',
  subheadline: 'Ideas for teachers, curriculum insights, and news from the platform.',
  empty_state_message: 'Blog posts will appear here once they are published.',
}

function normalizeCategory(value) {
  if (!value) return null
  // PostgREST sometimes returns a one-to-one embed as a single-element array
  if (Array.isArray(value)) {
    if (value.length === 1) return normalizeCategory(value[0])
    return null
  }
  if (typeof value !== 'object') return null
  const row = value
  if (!row.id || !row.name || !row.slug) return null
  return {
    id: row.id,
    name: row.name,
    slug: row.slug,
  }
}

/** Prefer embed, then category_id / blog_category_id against the site’s category list */
function attachCategoryToPost(row, catById) {
  let category = normalizeCategory(row.category)
  const cid = row.category_id ?? row.blog_category_id
  if (!category && cid && catById[cid]) {
    const c = catById[cid]
    category = { id: c.id, name: c.name, slug: c.slug }
  }
  const { category: _c, category_id: _cid, blog_category_id: _bc, ...rest } = row
  return { ...rest, category }
}

/**
 * Load blog rows. Tries `category_id` + embed (manual join fixes null/wrong embeds), then simpler selects.
 */
async function loadBlogPostsWithFallback(client, siteId) {
  const ordered = (sel) =>
    applyPublishedFilterIfConfigured(
      client.from('blogs').select(sel).eq('site_id', siteId),
    ).order('display_date', { ascending: false })

  const attempts = [
    {
      label: 'load makemylesson blogs',
      sel: `id, category_id, ${BLOG_SEO_FIELDS}, category:blog_categories(id, name, slug)`,
    },
    {
      label: 'load makemylesson blogs (embed only)',
      sel: `id, ${BLOG_SEO_FIELDS}, category:blog_categories(id, name, slug)`,
    },
    {
      label: 'load makemylesson blogs (blog_category_id + embed)',
      sel: `id, blog_category_id, ${BLOG_SEO_FIELDS}, category:blog_categories(id, name, slug)`,
    },
    {
      label: 'load makemylesson blogs (category_id only)',
      sel: `id, category_id, ${BLOG_SEO_FIELDS}`,
    },
    {
      label: 'load makemylesson blogs (blog_category_id only)',
      sel: `id, blog_category_id, ${BLOG_SEO_FIELDS}`,
    },
  ]

  let lastError
  for (const { label, sel } of attempts) {
    try {
      const data = await execPostgrestWithRetries(label, () => ordered(sel))
      if (process.env.NODE_ENV === 'development') {
        const n = data?.length ?? 0
        if (n > 0) console.info(`[blogs] ${label}: ${n} post(s)`)
      }
      return data ?? []
    } catch (e) {
      lastError = e
      const msg = e instanceof Error ? e.message : String(e)
      console.warn(`[blogs] ${label} failed:`, truncateForError(msg))
    }
  }
  throw lastError
}

function applyPublishedFilterIfConfigured(query) {
  const flag = process.env.SUPABASE_BLOGS_PUBLISHED_COLUMN?.trim()
  if (!flag) return query
  // e.g. SUPABASE_BLOGS_PUBLISHED_COLUMN=is_published  → .eq('is_published', true)
  // or   SUPABASE_BLOGS_PUBLISHED_COLUMN=published
  return query.eq(flag, true)
}

function toSeo(site) {
  if (!site) return DEFAULT_INDEX_SEO
  return {
    title: site.blog_page_meta_title?.trim() || DEFAULT_INDEX_SEO.title,
    description: site.blog_page_meta_description?.trim() || DEFAULT_INDEX_SEO.description,
    headline: site.blog_page_headline?.trim() || DEFAULT_INDEX_SEO.headline,
    subheadline: site.blog_page_subheadline?.trim() || DEFAULT_INDEX_SEO.subheadline,
    empty_state_message:
      site.blog_page_empty_state_message?.trim() || DEFAULT_INDEX_SEO.empty_state_message,
  }
}

export const getSiteIdForMakeMyLesson = cache(async () => {
  const client = supabase
  if (!client) return null

  const data = await execPostgrestWithRetries('resolve makemylesson site_id', () =>
    client.from('sites').select('id').eq('site_key', MAKE_MY_LESSON_SITE_KEY).limit(1).maybeSingle()
  )

  return data?.id ?? null
})

async function loadMakeMyLessonBlogPageSeo(siteId) {
  const client = supabase
  if (!client) return null

  try {
    return await execPostgrestWithRetries('load makemylesson blog page seo', () =>
      client
        .from('sites')
        .select(
          'id, blog_page_meta_title, blog_page_meta_description, blog_page_headline, blog_page_subheadline, blog_page_empty_state_message'
        )
        .eq('id', siteId)
        .limit(1)
        .maybeSingle()
    )
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error)
    const missingEmptyStateColumn =
      message.includes('blog_page_empty_state_message') && message.includes('does not exist')

    if (!missingEmptyStateColumn) {
      throw error
    }

    return await execPostgrestWithRetries('load makemylesson blog page seo (legacy schema)', () =>
      client
        .from('sites')
        .select('id, blog_page_meta_title, blog_page_meta_description, blog_page_headline, blog_page_subheadline')
        .eq('id', siteId)
        .limit(1)
        .maybeSingle()
    )
  }
}

export async function getBlogIndexDataForMakeMyLesson() {
  const siteId = await getSiteIdForMakeMyLesson()

  if (!siteId) {
    return {
      site_id: '',
      seo: DEFAULT_INDEX_SEO,
      categories: [],
      posts: [],
    }
  }

  const client = supabase
  if (!client) {
    return {
      site_id: siteId,
      seo: DEFAULT_INDEX_SEO,
      categories: [],
      posts: [],
    }
  }

  const [siteRow, categoriesData, postsData] = await Promise.all([
    loadMakeMyLessonBlogPageSeo(siteId),
    execPostgrestWithRetries('load makemylesson blog categories', () =>
      client
        .from('blog_categories')
        .select('id, name, slug, sort_order')
        .eq('site_id', siteId)
        .order('sort_order', { ascending: true })
        .order('name', { ascending: true })
    ),
    loadBlogPostsWithFallback(client, siteId),
  ])

  const categories = (categoriesData ?? []).map((row) => ({
    id: row.id,
    name: row.name,
    slug: row.slug,
    sort_order: row.sort_order ?? 0,
  }))

  const catById = Object.fromEntries(categories.map((c) => [c.id, c]))
  const posts = (postsData ?? []).map((row) => attachCategoryToPost(row, catById))

  if (process.env.NODE_ENV === 'development' && posts.length === 0 && categories.length > 0) {
    console.warn(
      '[blogs] 0 posts but categories exist — check blogs.site_id, RLS policies on `blogs`, and draft/published flags. Optional: set SUPABASE_BLOGS_PUBLISHED_COLUMN to the boolean column name if rows are filtered in the DB.'
    )
  }

  return {
    site_id: siteId,
    seo: toSeo(siteRow),
    categories,
    posts,
  }
}

async function loadBlogPostBySlugWithFallback(client, siteId, slug) {
  const one = (sel) =>
    applyPublishedFilterIfConfigured(
      client.from('blogs').select(sel).eq('site_id', siteId).eq('slug', slug),
    ).maybeSingle()

  const attempts = [
    `id, content, category_id, ${BLOG_SEO_FIELDS}, category:blog_categories(id, name, slug)`,
    `id, content, ${BLOG_SEO_FIELDS}, category:blog_categories(id, name, slug)`,
    `id, content, blog_category_id, ${BLOG_SEO_FIELDS}, category:blog_categories(id, name, slug)`,
    `id, content, category_id, ${BLOG_SEO_FIELDS}`,
    `id, content, blog_category_id, ${BLOG_SEO_FIELDS}`,
  ]

  let lastError
  let anySucceeded = false
  for (const sel of attempts) {
    try {
      const row = await execPostgrestWithRetries(`fetch makemylesson blog "${slug}"`, () => one(sel))
      anySucceeded = true
      if (row) return row
    } catch (e) {
      lastError = e
      const msg = e instanceof Error ? e.message : String(e)
      console.warn(`[blogs] fetch blog "${slug}" select failed:`, truncateForError(msg))
    }
  }
  // Only throw if every attempt failed (never got a valid PostgREST response)
  if (!anySucceeded && lastError) throw lastError
  return null
}

function normalizeBlogSlug(slug) {
  if (slug == null || typeof slug !== 'string') return ''
  try {
    return decodeURIComponent(slug.trim())
  } catch {
    return slug.trim()
  }
}

export async function getBlogBySlugForMakeMyLesson(slug) {
  const siteId = await getSiteIdForMakeMyLesson()
  if (!siteId) return null

  const client = supabase
  if (!client) return null

  const normalizedSlug = normalizeBlogSlug(slug)
  if (!normalizedSlug) return null

  const [categoriesData, row] = await Promise.all([
    execPostgrestWithRetries('load blog_categories for post', () =>
      client.from('blog_categories').select('id, name, slug').eq('site_id', siteId),
    ),
    loadBlogPostBySlugWithFallback(client, siteId, normalizedSlug),
  ])

  if (!row) return null

  const catById = Object.fromEntries((categoriesData ?? []).map((c) => [c.id, c]))
  return attachCategoryToPost(row, catById)
}

export async function getBlogsForConfiguredSite() {
  try {
    const data = await getBlogIndexDataForMakeMyLesson()
    return data.posts
  } catch (e) {
    if (process.env.BUILD_SKIP_BLOGS_ON_SUPABASE_ERROR === '1') {
      console.warn(
        '[blogs] BUILD_SKIP_BLOGS_ON_SUPABASE_ERROR=1: returning empty blog list after Supabase failure.'
      )
      return []
    }
    throw e
  }
}

export async function getBlogBySlugForConfiguredSite(slug) {
  return getBlogBySlugForMakeMyLesson(slug)
}

export async function getBlogSlugsForConfiguredSite() {
  const siteId = await getSiteIdForMakeMyLesson()
  if (!siteId) return []

  const client = supabase
  if (!client) return []

  try {
    const data = await execPostgrestWithRetries('fetch blog slugs', () =>
      applyPublishedFilterIfConfigured(client.from('blogs').select('slug, display_date').eq('site_id', siteId)),
    )
    return data ?? []
  } catch (e) {
    if (process.env.BUILD_SKIP_BLOGS_ON_SUPABASE_ERROR === '1') {
      console.warn(
        '[blogs] BUILD_SKIP_BLOGS_ON_SUPABASE_ERROR=1: returning no static blog slugs after Supabase failure.'
      )
      return []
    }
    throw e
  }
}
