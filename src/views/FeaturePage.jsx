import { PageShell } from '@/components/layout/Container'
import FeatureHero from '@/components/features/FeatureHero'
import TeachingMethodCta from '@/components/teaching-methods/TeachingMethodCta'
import TeachingMethodFaq from '@/components/teaching-methods/TeachingMethodFaq'

const FEATURE_PAGE_SHELL = 'tm-page-shell border-slate-200 bg-white'

function FeatureSection({ section }) {
  return (
    <section className="tm-section">
      <h2 className="tm-section-heading">{section.heading}</h2>
      {section.paragraphs.map((paragraph) => (
        <p key={paragraph.slice(0, 48)} className="tm-paragraph">
          {paragraph}
        </p>
      ))}
    </section>
  )
}

function FeatureArticle({ feature, content }) {
  const title = content.metaTitle ?? feature.title
  const intro = content.quickAnswer ?? feature.description

  return (
    <PageShell variant="policy" className={FEATURE_PAGE_SHELL} contentClassName="pb-24">
      <article className="tm-article w-full">
        <FeatureHero feature={feature} title={title} intro={intro} />

        <div className="tm-body">
          {content.sections.map((section) => (
            <FeatureSection key={section.heading} section={section} />
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
        <FeatureHero feature={feature} title={feature.title} intro={feature.description} />

        <div className="tm-body">
          <section className="tm-section">
            <p className="tm-paragraph">
              Full details for {feature.title.toLowerCase()} are coming soon. Make My Lesson already
              includes this capability when you build a teaching pack — start planning and generate
              curriculum-aligned resources in minutes.
            </p>
          </section>

          <TeachingMethodCta
            heading="Start planning today"
            body="Try Make My Lesson and generate your first curriculum-aligned lesson plan in minutes."
          />
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
