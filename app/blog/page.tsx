import Link from "next/link";
import type { Metadata } from "next";
import { getBlogCategories, getBlogPageCopyForSite, getBlogPosts, getSiteId, isCmsConfigured } from "@/lib/cms";

export const dynamic = "force-dynamic";

/** Section 2.1 — Blog index SEO (fixed copy; CMS fetch unchanged). */
const BLOG_INDEX_PAGE_TITLE =
  "The Make My Lesson Blog — Teaching, Planning, and AI in Education";

const BLOG_INDEX_META_DESCRIPTION =
  "Insights, guides, and research-backed articles for teachers on lesson planning, curriculum alignment, AI in education, and making more time for what matters most.";

/** Section 2.2 */
const BLOG_INDEX_HEADLINE = "Resources for Teachers Who Take Their Practice Seriously.";

/** Section 2.3 */
const BLOG_INDEX_SUBHEADLINE =
  "Articles, guides, and research on lesson planning, curriculum alignment, AI in education, and reclaiming time for the work that only you can do.";

/** Section 2.4 — shown when there are no posts yet */
const BLOG_INDEX_EMPTY_MESSAGE =
  "We are still writing. The first articles are on their way — covering lesson planning, curriculum insights, and honest perspectives on AI in education. Check back soon.";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: BLOG_INDEX_PAGE_TITLE,
    description: BLOG_INDEX_META_DESCRIPTION,
  };
}

type BlogPageProps = {
  searchParams?: Promise<{
    category?: string | string[];
  }>;
};

function normalizeQueryValue(value: string | string[] | undefined): string {
  if (Array.isArray(value)) {
    return String(value[0] ?? "").trim();
  }

  return String(value ?? "").trim();
}

function formatDate(iso: string | null | undefined) {
  if (!iso) {
    return null;
  }
  try {
    return new Intl.DateTimeFormat("en", { dateStyle: "medium" }).format(new Date(iso));
  } catch {
    return null;
  }
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const configured = isCmsConfigured();
  const resolvedSearchParams = searchParams ? await searchParams : {};
  const selectedCategoryValue = normalizeQueryValue(resolvedSearchParams.category);

  const siteId = configured ? await getSiteId() : null;
  let copy: Awaited<ReturnType<typeof getBlogPageCopyForSite>> = null;
  let categories: Awaited<ReturnType<typeof getBlogCategories>> = [];

  if (siteId) {
    [copy, categories] = await Promise.all([getBlogPageCopyForSite(siteId), getBlogCategories(siteId)]);
  }

  const categoryById = new Map(categories.map((category) => [category.id, category]));
  const categoryBySlugOrId = new Map<string, (typeof categories)[number]>();
  for (const category of categories) {
    const key = category.slug?.trim() || category.id;
    if (key) {
      categoryBySlugOrId.set(key, category);
    }
  }

  const selectedCategory = selectedCategoryValue ? categoryBySlugOrId.get(selectedCategoryValue) ?? null : null;
  const posts = siteId ? await getBlogPosts(siteId, selectedCategory?.id ?? null) : [];

  const headline = copy?.headline ?? BLOG_INDEX_HEADLINE;
  const subheadline = copy?.subheadline ?? BLOG_INDEX_SUBHEADLINE;
  const emptyMessage = selectedCategory
    ? `No posts found in ${selectedCategory.name} yet.`
    : copy?.empty_state_message ?? BLOG_INDEX_EMPTY_MESSAGE;

  const categoryLinkValue = (category: { slug: string | null; id: string }) => category.slug?.trim() || category.id;

  return (
    <main id="main" className="flex min-h-0 w-full min-w-0 flex-1 flex-col bg-mm-light">
      {/* Top bar — full width */}
      <div className="w-full border-b border-mm-primary/10 bg-mm-surface/90 backdrop-blur-sm">
        <div className="site-container flex flex-wrap items-center justify-between gap-3 py-3.5 sm:py-4">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm text-mm-muted">
            <Link href="/" className="font-medium text-mm-primary transition hover:text-mm-primary-dark">
              Home
            </Link>
            <span className="text-mm-muted/60" aria-hidden>
              /
            </span>
            <span className="font-semibold text-mm-navy">Blog</span>
          </nav>
          <Link
            href="/"
            className="text-sm font-semibold text-mm-navy transition hover:text-mm-primary"
          >
            ← Back to home
          </Link>
        </div>
      </div>

      {/* Hero — full width band */}
      <header className="w-full border-b border-mm-primary/10 bg-gradient-to-br from-white via-mm-light to-mm-sky/25">
        <div className="site-container py-10 sm:py-14 lg:py-16">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-mm-primary">Resources</p>
          <h1 className="ds-h2 mt-3 max-w-3xl font-extrabold text-mm-navy">{headline}</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-mm-muted sm:text-lg">{subheadline}</p>
        </div>
      </header>

      {/* Main content — full site-container width */}
      <div className="site-container w-full flex-1 py-10 sm:py-12 lg:py-14">
        {!configured ? (
          <div className="max-w-3xl rounded-2xl border border-mm-primary/20 bg-mm-surface p-6 text-sm text-mm-muted shadow-sm">
            <p className="font-semibold text-mm-navy">CMS not configured</p>
            <p className="mt-2">
              Add Supabase:{" "}
              <code className="rounded bg-mm-sky/40 px-1.5 py-0.5 text-mm-navy">NEXT_PUBLIC_SUPABASE_URL</code>,{" "}
              <code className="rounded bg-mm-sky/40 px-1.5 py-0.5 text-mm-navy">NEXT_PUBLIC_SUPABASE_ANON_KEY</code>, and{" "}
              <code className="rounded bg-mm-sky/40 px-1.5 py-0.5 text-mm-navy">SITE_KEY</code>,{" "}
              <code className="rounded bg-mm-sky/40 px-1.5 py-0.5 text-mm-navy">NEXT_PUBLIC_SITE_KEY</code>, or{" "}
              <code className="rounded bg-mm-sky/40 px-1.5 py-0.5 text-mm-navy">SITE_ID</code> /{" "}
              <code className="rounded bg-mm-sky/40 px-1.5 py-0.5 text-mm-navy">NEXT_PUBLIC_SITE_ID</code> in{" "}
              <code className="rounded bg-mm-sky/40 px-1.5 py-0.5 text-mm-navy">.env.local</code>. Alternatively set{" "}
              <code className="rounded bg-mm-sky/40 px-1.5 py-0.5 text-mm-navy">CMS_API_BASE_URL</code> for the REST
              integration.
            </p>
          </div>
        ) : !siteId ? (
          <div className="max-w-3xl rounded-2xl border border-mm-primary/20 bg-mm-surface p-6 text-sm text-mm-muted shadow-sm">
            <p className="font-semibold text-mm-navy">Could not resolve site</p>
            <p className="mt-2">
              Set <code className="rounded bg-mm-sky/40 px-1.5 py-0.5">SITE_ID</code> to your tenant UUID, or ensure a row
              exists in Supabase <code className="rounded bg-mm-sky/40 px-1.5 py-0.5">sites</code> with{" "}
              <code className="rounded bg-mm-sky/40 px-1.5 py-0.5">site_key</code> equal to your{" "}
              <code className="rounded bg-mm-sky/40 px-1.5 py-0.5">SITE_KEY</code>, or check your REST resolve endpoint.
            </p>
          </div>
        ) : (
          <>
            {categories.length > 0 ? (
              <div className="mb-8 flex flex-wrap gap-2">
                <Link
                  href="/blog"
                  className={[
                    "rounded-full border px-3.5 py-1.5 text-sm font-semibold transition",
                    selectedCategory
                      ? "border-mm-primary/15 bg-mm-surface text-mm-navy hover:border-mm-primary/30 hover:text-mm-primary"
                      : "border-mm-primary bg-mm-primary text-white",
                  ].join(" ")}
                >
                  All
                </Link>
                {categories.map((category) => {
                  const isActive = selectedCategory?.id === category.id;
                  const href = `/blog?category=${encodeURIComponent(categoryLinkValue(category))}`;
                  return (
                    <Link
                      key={category.id}
                      href={href}
                      className={[
                        "rounded-full border px-3.5 py-1.5 text-sm font-semibold transition",
                        isActive
                          ? "border-mm-primary bg-mm-primary text-white"
                          : "border-mm-primary/15 bg-mm-surface text-mm-navy hover:border-mm-primary/30 hover:text-mm-primary",
                      ].join(" ")}
                    >
                      {category.name}
                    </Link>
                  );
                })}
              </div>
            ) : null}

            {posts.length === 0 ? (
              <p className="mx-auto max-w-2xl text-center text-base leading-relaxed text-mm-muted sm:text-left">
                {emptyMessage}
              </p>
            ) : (
              <ul className="grid list-none grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3 xl:gap-10">
                {posts.map((post) => {
                  const categoryLabel = post.category?.id ? categoryById.get(post.category.id)?.name : null;
                  const resolvedCategory = categoryLabel ?? "Uncategorized";
                  return (
                    <li key={post.id} className="flex h-full min-h-0">
                      <article className="group flex h-full min-h-0 w-full flex-col overflow-hidden rounded-2xl border border-mm-primary/15 bg-mm-surface shadow-[0_4px_24px_rgba(20,40,75,0.06)] transition hover:border-mm-primary/30 hover:shadow-[0_12px_40px_rgba(20,40,75,0.1)]">
                        <Link
                          href={`/blog/${post.slug}`}
                          className="relative block w-full shrink-0 overflow-hidden bg-gradient-to-br from-mm-sky/40 to-mm-primary/10"
                          aria-label={`View article: ${post.title}`}
                        >
                          <div className="aspect-[16/10] w-full">
                            {post.cover_image_url ? (
                              <>
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                  src={post.cover_image_url}
                                  alt=""
                                  className="h-full w-full object-cover object-center transition duration-500 ease-out group-hover:scale-[1.03]"
                                />
                              </>
                            ) : (
                              <div className="flex h-full w-full items-center justify-center bg-mm-sky/20">
                                <span className="text-sm font-medium text-mm-muted">Make My Lesson</span>
                              </div>
                            )}
                          </div>
                        </Link>

                        <div className="flex min-h-0 flex-1 flex-col p-6 sm:p-7">
                          <div className="flex flex-wrap items-center gap-2">
                            {formatDate(post.published_at ?? post.publishedAt) ? (
                              <time
                                dateTime={post.published_at ?? post.publishedAt ?? undefined}
                                className="text-xs font-semibold uppercase tracking-wide text-mm-primary"
                              >
                                {formatDate(post.published_at ?? post.publishedAt)}
                              </time>
                            ) : null}
                            <span className="rounded-full bg-mm-sky/50 px-2.5 py-0.5 text-xs font-semibold text-mm-navy">
                              {resolvedCategory}
                            </span>
                          </div>
                          <h2 className="mt-2 text-lg font-bold leading-snug text-mm-navy sm:text-xl">
                            <Link href={`/blog/${post.slug}`} className="transition hover:text-mm-primary">
                              {post.title}
                            </Link>
                          </h2>
                          {post.excerpt ? (
                            <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-mm-muted">
                              {post.excerpt}
                            </p>
                          ) : null}
                          <Link
                            href={`/blog/${post.slug}`}
                            className="mt-5 inline-flex items-center text-sm font-bold text-mm-primary transition hover:text-mm-primary-dark"
                          >
                            Read article
                            <span className="ml-1.5 transition group-hover:translate-x-0.5" aria-hidden>
                              →
                            </span>
                          </Link>
                        </div>
                      </article>
                    </li>
                  );
                })}
              </ul>
            )}
          </>
        )}
      </div>
    </main>
  );
}
