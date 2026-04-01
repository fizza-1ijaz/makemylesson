# Blog fetching (public sites)

Each marketing site is its own app with a **fixed `SITE_KEY`** matching `sites.site_key` in Supabase.

## 1. Environment

Per website project:

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Anon key (browser-safe; RLS must gate reads) |
| `SITE_KEY` or `NEXT_PUBLIC_SITE_KEY` | Same value as `sites.site_key` (e.g. `makemylesson`) |
| `SITE_ID` or `NEXT_PUBLIC_SITE_ID` | *(Optional)* That site’s UUID — skips `sites` lookup by key |

Optional: `SUPABASE_SITES_TABLE`, `SUPABASE_BLOG_POSTS_TABLE`, `SUPABASE_BLOG_CATEGORIES_TABLE` if names differ.

Full integration notes: [site-key-integration.md](./site-key-integration.md).

## 2. Resolve `site_id` once

Stable identifier is **`site_key`**, not domain.

- **`getSiteIdByKey(siteKey)`** — `sites` lookup; **throws** if missing or misconfigured (strict callers).
- **`getSiteId()`** — Cached per request; uses env `SITE_ID` if set, else `SITE_KEY` + non-throwing `sites` lookup (`maybeSingle`); **returns `null`** if no row, RLS blocks, or errors — so pages can show setup UI without surfacing a dev overlay for a missing key.

Implementation: `lib/cms/site.ts`.

## 3. Load blogs by `site_id`

- **`getBlogsForSite(siteId)`** — `blogs` filtered by `site_id`, ordered by `display_date` desc, narrow `select` (not `*` in code). **Throws** on PostgREST error.
- **`getBlogBySlugForSite(siteId, slug)`** — Single row; **throws** on error, **`null`** if not found.

Convenience (never throws; good for pages):

- **`getBlogPosts(siteId)`** / **`getBlogPostBySlug(siteId, slug)`** — Wrap the above + catch for graceful empty states.

- **`getBlogIndexPageData()`** — Cached per request: `site_id`, copy from `sites` (blog index meta/hero/empty state), global **`blog_categories`**, and posts. Use on the blog index route.

- **`getBlogPageCopyForSite(siteId)`** / **`getBlogCategories()`** — Building blocks if you don’t use the composed helper.

Implementation: `lib/cms/blogs.ts`.

## 4. Where this runs

Use **server-side** only: Next.js App Router **Server Components** (current), Route Handlers, or a small API route. Keeps logic in one place and avoids widening the client surface.

## 5. Supabase RLS

The anon key is public. **Row Level Security** must allow `SELECT` on:

- `sites` — at least the row needed for `site_key` → `id` (often a policy scoped to that key or public read of `sites` for marketing).

- `blogs` — only rows visitors should see (e.g. published-only if you add a flag).

- `blog_categories` — shared list; **no** `site_id` on this table.

Admin/dashboard writes use the **service role**; public sites rely on **anon + RLS** for reads.

## Flow summary

`SITE_KEY` → `sites.id` → `blogs` where `site_id`, on the server, with RLS permitting anonymous reads for those rows.
