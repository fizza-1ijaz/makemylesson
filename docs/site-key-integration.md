# Site key integration (connected public websites)

Each connected app is a **separate deployment** (its own repo). In the admin you create a row in `public.sites` with a stable **`site_key`** (e.g. `studiely`). That row’s **`id`** is the tenant’s **`site_id`** for queries.

## 1. Environment (this deployment)

Use the **same Supabase project** as the admin:

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Anon key (RLS must allow the reads you need) |
| `SITE_KEY` or `NEXT_PUBLIC_SITE_KEY` | Exact `sites.site_key` for this site |
| `SITE_ID` or `NEXT_PUBLIC_SITE_ID` | *(Optional)* That site’s UUID — **skips** reading `sites` by key |

Optional table overrides: `SUPABASE_SITES_TABLE`, `SUPABASE_BLOG_POSTS_TABLE`, `SUPABASE_BLOG_CATEGORIES_TABLE`.

Only deployments you configure with a matching `SITE_KEY` or `SITE_ID` load that tenant’s data; other tenants use different env values with the same query shape.

## 2. Resolve `site_id`

- **Recommended:** `SITE_KEY` → `sites.id` via `site_key` (see `getSiteId()` in `lib/cms/site.ts`).
- **No `sites` read:** set `SITE_ID` to the UUID and use it everywhere (`getSiteId()` returns it directly).

## 3. What to fetch

| Need | Query |
|------|--------|
| Blog index copy (title, meta, hero, empty state) | `sites`: `blog_page_meta_title`, `blog_page_meta_description`, `blog_page_headline`, `blog_page_subheadline`, `blog_empty_state_message` filtered by `id = site_id` |
| Posts for this site only | `blogs`: narrow `select`, `eq('site_id', siteId)`, `order('display_date', { ascending: false })` |
| Categories (shared for all sites) | `blog_categories`: `order('sort_order')` — **no** `site_id` filter |
| One post | `blogs`: `eq('site_id', siteId)`, `eq('slug', slug)`, `maybeSingle()` |

Post labels use **`blogs.category_id`** + **`blog_categories`**.

## 4. Reference in this repo

- Implementation: `lib/cms/blogs.ts`, `lib/cms/site.ts`
- Composed index loader: **`getBlogIndexPageData()`** (cached per request)
- Copy-paste barrel: `lib/blogs/websitePublicFetch.example.ts`

Blog routes: `app/blog/page.tsx`, `app/blog/[slug]/page.tsx`.

## 5. RLS

The browser (and server components using the anon key) rely on **Row Level Security**. Allow `anon` **SELECT** on `sites`, `blogs`, and `blog_categories` according to your product rules (e.g. only published content). Admin writes use the **service role** in the dashboard, not in public sites.

See also: `docs/blog-fetching.md`.
