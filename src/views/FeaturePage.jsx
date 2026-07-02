import { PageShell } from '@/components/layout/Container'
import TeachingMethodCta from '@/components/teaching-methods/TeachingMethodCta'
import TeachingMethodFaq from '@/components/teaching-methods/TeachingMethodFaq'
import Link from 'next/link'
import { MML_APP } from '@/lib/appUrls'

const FEATURE_PAGE_SHELL = 'tm-page-shell border-slate-200 bg-white'

function FeatureArticle({ feature, content }) {
  const title = content.metaTitle ?? feature.title
  const intro = content.quickAnswer ?? feature.description

  return (
    <PageShell variant="policy" className={FEATURE_PAGE_SHELL} contentClassName="pb-24">
      <article className="tm-article w-full">
        <header className="tm-header">
          <h1 className="tm-title">{title}</h1>
          {intro ? <p className="tm-quick-answer">{intro}</p> : null}
        </header>

        <div className="tm-body">
          {content.sections.map((section) => (
            <section key={section.heading} className="tm-section">
              <h2 className="tm-section-heading">{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className="tm-paragraph">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}

          {content.cta && (
            <TeachingMethodCta heading={content.cta.heading} body={content.cta.body} />
          )}

          {content.faq?.length > 0 && <TeachingMethodFaq items={content.faq} />}
        </div>
      </article>
    </PageShell>
  )
}

function FeaturePlaceholder({ feature }) {
  return (
    <PageShell variant="policy" className={FEATURE_PAGE_SHELL} contentClassName="pb-24">
      <article className="tm-article w-full">
        <header className="tm-header">
          <h1 className="tm-title">{feature.title}</h1>
          <p className="tm-paragraph tm-intro">{feature.description}</p>
        </header>

        <div className="tm-body">
          <section className="tm-section">
            <p className="tm-paragraph">
              Full details for {feature.title.toLowerCase()} are coming soon. Make My Lesson already
              includes this capability when you build a teaching pack — start planning and generate
              curriculum-aligned resources in minutes.
            </p>
          </section>

          <div className="tm-cta-actions">
            <Link href={MML_APP.stage1} className="site-nav-cta inline-flex no-underline">
              Get started free
            </Link>
          </div>
        </div>
      </article>
    </PageShell>
  )
}

export default function FeaturePage({ feature, content }) {
  if (content) {
    return <FeatureArticle feature={feature} content={content} />
  }

  return <FeaturePlaceholder feature={feature} />
}
