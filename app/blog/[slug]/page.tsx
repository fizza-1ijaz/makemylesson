import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBlogPostBySlug, getSiteId, isCmsConfigured } from "@/lib/cms";
import { absoluteUrl, DEFAULT_OG_IMAGE_PATH, SITE_URL } from "@/lib/site";

export const revalidate = 60;

type Props = { params: Promise<{ slug: string }> };

function formatDate(iso: string | null | undefined) {
  if (!iso) {
    return null;
  }
  try {
    return new Intl.DateTimeFormat("en", { dateStyle: "long" }).format(new Date(iso));
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (!isCmsConfigured()) {
    return { title: "Blog | Make My Lesson" };
  }
  const siteId = await getSiteId();
  if (!siteId) {
    return { title: "Blog | Make My Lesson" };
  }
  const post = await getBlogPostBySlug(siteId, slug);
  if (!post) {
    return { title: "Post not found | Make My Lesson" };
  }

  const headline = post.meta_title?.trim() || post.title;
  const description =
    post.meta_description?.trim() || post.excerpt || post.description?.trim() || undefined;
  const canonical = `${SITE_URL.replace(/\/$/, "")}/blog/${post.slug}`;
  const ogImages = post.cover_image_url
    ? [{ url: post.cover_image_url, alt: post.title }]
    : [{ url: absoluteUrl(DEFAULT_OG_IMAGE_PATH), alt: "Make My Lesson" }];

  return {
    title: `${headline} | Make My Lesson`,
    description,
    alternates: { canonical },
    openGraph: {
      type: "article",
      title: headline,
      description,
      url: canonical,
      siteName: "Make My Lesson",
      publishedTime: post.published_at
        ? new Date(post.published_at).toISOString()
        : undefined,
      images: ogImages,
    },
    twitter: {
      card: "summary_large_image",
      title: headline,
      description,
      images: ogImages.map((i) => i.url),
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  if (!isCmsConfigured()) {
    notFound();
  }

  const siteId = await getSiteId();
  if (!siteId) {
    notFound();
  }

  const post = await getBlogPostBySlug(siteId, slug);
  if (!post) {
    notFound();
  }

  const categoryName = post.category?.name ?? "Uncategorized";

  const html = post.content ?? post.content_html ?? post.contentHtml ?? post.body ?? "";

  return (
    <main id="main" className="flex min-h-0 w-full min-w-0 flex-1 flex-col bg-mm-light">
      {/* Top bar */}
      <div className="w-full border-b border-mm-primary/10 bg-mm-surface/90 backdrop-blur-sm">
        <div className="site-container flex flex-wrap items-center justify-between gap-3 py-3.5 sm:py-4">
          <nav aria-label="Breadcrumb" className="flex min-w-0 flex-1 flex-wrap items-center gap-2 text-sm text-mm-muted">
            <Link href="/" className="shrink-0 font-medium text-mm-primary transition hover:text-mm-primary-dark">
              Home
            </Link>
            <span className="shrink-0 text-mm-muted/60" aria-hidden>
              /
            </span>
            <Link href="/blog" className="shrink-0 font-medium text-mm-primary transition hover:text-mm-primary-dark">
              Blog
            </Link>
            <span className="shrink-0 text-mm-muted/60" aria-hidden>
              /
            </span>
            <span className="min-w-0 truncate font-semibold text-mm-navy" title={post.title}>
              {post.title}
            </span>
          </nav>
          <div className="flex shrink-0 items-center gap-4">
            <Link
              href="/blog"
              className="text-sm font-semibold text-mm-navy transition hover:text-mm-primary"
            >
              All posts
            </Link>
            <Link
              href="/"
              className="text-sm font-semibold text-mm-navy transition hover:text-mm-primary"
            >
              ← Home
            </Link>
          </div>
        </div>
      </div>

      {/* Cover — full width within container, cinematic ratio */}
      {post.cover_image_url ? (
        <div className="w-full bg-mm-navy/5">
          <div className="site-container py-6 sm:py-8 lg:py-10">
            <div className="overflow-hidden rounded-2xl border border-mm-primary/10 shadow-lg shadow-mm-navy/5">
              <div className="aspect-[2/1] w-full sm:aspect-[21/9]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.cover_image_url}
                  alt={post.title}
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      ) : null}

      <article className="site-container w-full flex-1 py-8 sm:py-10 lg:py-12">
        <div className="mx-auto w-full max-w-[48rem] lg:max-w-[52rem]">
          <header className="border-b border-mm-primary/12 pb-8 sm:pb-10">
            <h1 className="ds-h1 text-balance font-extrabold leading-tight text-mm-navy">{post.title}</h1>
            <p className="mt-4 inline-flex rounded-full bg-mm-sky/50 px-3 py-1 text-sm font-semibold text-mm-navy">
              {categoryName}
            </p>
            {formatDate(post.published_at ?? post.publishedAt) ? (
              <p className="mt-4 text-sm font-medium text-mm-muted sm:text-base">
                {formatDate(post.published_at ?? post.publishedAt)}
              </p>
            ) : null}
          </header>

          {post.excerpt ? (
            <p className="mt-8 text-lg font-medium leading-relaxed text-mm-navy/90 sm:text-xl">{post.excerpt}</p>
          ) : null}

          {html ? (
            <div
              className="prose-blog mt-10 max-w-none text-base leading-relaxed text-mm-muted sm:text-[1.0625rem]"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          ) : (
            <p className="mt-10 text-mm-muted">No content available for this post.</p>
          )}
        </div>
      </article>
    </main>
  );
}
