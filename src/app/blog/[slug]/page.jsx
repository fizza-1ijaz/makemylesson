import Link from 'next/link'
import { PageShell } from '@/components/layout/Container'
import { notFound } from 'next/navigation'
import { getBlogBySlugForMakeMyLesson } from '@/lib/blogs'
import { buildBlogPostingJsonLd, buildBreadcrumbSchema } from '@/lib/blogJsonLd'
import {
  DEFAULT_OG_IMAGE_ALT,
  DEFAULT_OG_IMAGE_HEIGHT,
  DEFAULT_OG_IMAGE_PATH,
  DEFAULT_OG_IMAGE_WIDTH,
  SITE_URL,
} from '@/lib/siteUrl'

async function loadPost(slug) {
  const blog = await getBlogBySlugForMakeMyLesson(slug)
  if (!blog) return null
  return { blog }
}

export async function generateMetadata({ params }) {
  const slug = params?.slug
  if (!slug) return { title: 'Blog Post' }

  const result = await loadPost(slug)
  if (!result) return { title: 'Blog Post' }

  const { blog } = result
  const title = blog.meta_title || blog.title
  const description =
    blog.meta_description ||
    blog.description ||
    'A Make My Lesson article for teachers — lesson planning, curriculum, and product updates.'

  const canonical = `${SITE_URL}/blog/${blog.slug}`
  const ogImage = blog.cover_image_url
    ? [{ url: blog.cover_image_url, alt: blog.title }]
    : [
        {
          url: DEFAULT_OG_IMAGE_PATH,
          width: DEFAULT_OG_IMAGE_WIDTH,
          height: DEFAULT_OG_IMAGE_HEIGHT,
          alt: DEFAULT_OG_IMAGE_ALT,
        },
      ]

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type: 'article',
      title,
      description,
      url: canonical,
      siteName: 'Make My Lesson',
      locale: 'en_US',
      publishedTime: blog.display_date ? new Date(blog.display_date).toISOString() : undefined,
      images: ogImage,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ogImage.map((i) => i.url),
    },
  }
}

const htmlArticleClass =
  'blog-html text-[15px] leading-relaxed text-white/90 [&_p]:mb-4 [&_h2]:mt-8 [&_h2]:mb-3 [&_h2]:font-display [&_h2]:text-xl [&_h2]:text-white [&_h3]:mt-6 [&_h3]:mb-2 [&_h3]:font-display [&_h3]:text-lg [&_h3]:text-white [&_a]:text-mml-teal [&_a]:underline [&_a]:underline-offset-2 [&_ul]:my-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:my-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_img]:max-w-full [&_img]:rounded-lg [&_blockquote]:border-l-2 [&_blockquote]:border-mml-teal/50 [&_blockquote]:pl-4 [&_blockquote]:italic'

export default async function BlogPostPage({ params }) {
  const slug = params?.slug
  if (!slug) notFound()

  const result = await loadPost(slug)
  if (!result) {
    if (slug !== 'coming-soon') notFound()
    const breadcrumbSchema = buildBreadcrumbSchema('Coming soon', '/blog/coming-soon')
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema),
          }}
        />
        <PageShell variant="narrow" contentClassName="pb-24">
          <header className="border-b border-white/10 pb-8 text-center">
            <p className="font-mono text-[11px] font-medium uppercase tracking-[2px] text-mml-teal">Blog</p>
            <h1 className="mt-3 font-display text-[clamp(22px,3.5vw,32px)] font-normal text-white">Coming soon</h1>
            <p className="mt-4 text-sm text-white/75">
              New articles will appear here once they are published in Supabase for this site.
            </p>
          </header>
          <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.04] p-6 md:p-8">
            <p className="text-[15px] text-white/85">We&apos;re working on new content. Check back soon.</p>
            <p className="mt-4">
              <Link href="/blog" className="text-[14px] font-semibold text-mml-teal hover:text-white hover:underline">
                View all articles
              </Link>
            </p>
          </div>
        </PageShell>
      </>
    )
  }

  const { blog } = result
  const jsonLd = buildBlogPostingJsonLd(blog)
  const breadcrumbSchema = buildBreadcrumbSchema(blog.title, `/blog/${blog.slug}`)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      <PageShell variant="narrow" contentClassName="pb-24">
        <header className="border-b border-white/10 pb-8 text-center sm:text-left">
          <p className="font-mono text-[11px] font-medium uppercase tracking-[2px] text-mml-teal">
            {blog.category?.name ? `Blog · ${blog.category.name}` : 'Blog'}
          </p>
          <h1 className="mt-3 font-display text-[clamp(22px,3.5vw,34px)] font-normal text-white">{blog.title}</h1>
          {blog.display_date && (
            <p className="mt-3 text-[13px] text-white/60">
              {new Date(blog.display_date).toLocaleDateString('en-GB', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
              {blog.author_name ? ` · ${blog.author_name}` : ''}
            </p>
          )}
          {(blog.description || blog.meta_description) && (
            <p className="mt-4 text-base font-light leading-relaxed text-white/80">
              {blog.description || blog.meta_description}
            </p>
          )}
        </header>

        <article className="mt-10 rounded-2xl border border-white/10 bg-white/[0.04] p-6 md:p-8">
          {blog.cover_image_url && (
            <div className="mb-8 overflow-hidden rounded-xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={blog.cover_image_url} alt="" className="h-auto w-full object-cover" />
            </div>
          )}
          {blog.category && (
            <p className="mb-6 inline-flex items-center rounded-full border border-white/15 px-2.5 py-1 text-[11px] text-white/70">
              {blog.category.name}
            </p>
          )}
          {blog.content ? (
            <div className={htmlArticleClass} dangerouslySetInnerHTML={{ __html: blog.content }} />
          ) : (
            <p className="text-[13px] text-white/65">Content for this article has not been added yet.</p>
          )}
          <nav className="mt-10 border-t border-white/10 pt-8" aria-label="Related pages">
            <Link href="/blog" className="text-[14px] font-semibold text-mml-teal hover:text-white hover:underline">
              ← All articles
            </Link>
          </nav>
        </article>
      </PageShell>
    </>
  )
}
