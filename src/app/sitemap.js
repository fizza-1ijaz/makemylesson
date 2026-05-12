import { getBlogSlugsForConfiguredSite } from '@/lib/blogs'
import { SITE_URL } from '@/lib/siteUrl'

const base = SITE_URL.replace(/\/$/, '')

/** Indexable marketing and policy routes (no app shells). */
const STATIC_PATHS = [
  { path: '/', changeFrequency: 'weekly', priority: 1 },
  { path: '/contact', changeFrequency: 'yearly', priority: 0.8 },
  { path: '/pricing', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/faq', changeFrequency: 'monthly', priority: 0.85 },
  { path: '/blog', changeFrequency: 'weekly', priority: 0.85 },
  { path: '/privacy-policy', changeFrequency: 'yearly', priority: 0.5 },
  { path: '/terms-of-service', changeFrequency: 'yearly', priority: 0.5 },
  { path: '/acceptable-use-policy', changeFrequency: 'yearly', priority: 0.5 },
  { path: '/cookie-policy', changeFrequency: 'yearly', priority: 0.5 },
  { path: '/disclaimer', changeFrequency: 'yearly', priority: 0.5 },
  { path: '/refund-payments-policy', changeFrequency: 'yearly', priority: 0.5 },
  { path: '/account-data-deletion', changeFrequency: 'yearly', priority: 0.5 },
]

export default async function sitemap() {
  const now = new Date()
  const staticEntries = STATIC_PATHS.map(({ path, changeFrequency, priority }) => ({
    url: path === '/' ? `${base}/` : `${base}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }))

  let blogEntries = []
  try {
    const rows = await getBlogSlugsForConfiguredSite()
    blogEntries = (rows ?? []).map((row) => ({
      url: `${base}/blog/${row.slug}`,
      lastModified: row.display_date ? new Date(row.display_date) : now,
      changeFrequency: 'monthly',
      priority: 0.65,
    }))
  } catch (e) {
    if (process.env.BUILD_SKIP_BLOGS_ON_SUPABASE_ERROR === '1') {
      console.warn('[sitemap] BUILD_SKIP_BLOGS_ON_SUPABASE_ERROR=1: omitting blog URLs after error.')
    } else {
      throw e
    }
  }

  return [...staticEntries, ...blogEntries]
}
