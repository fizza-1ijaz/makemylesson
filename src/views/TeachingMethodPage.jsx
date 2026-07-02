import { PageShell } from '@/components/layout/Container'
import TeachingMethodCta from '@/components/teaching-methods/TeachingMethodCta'
import TeachingMethodFaq from '@/components/teaching-methods/TeachingMethodFaq'
import TeachingMethodHero from '@/components/teaching-methods/TeachingMethodHero'

const TM_PAGE_SHELL = 'tm-page-shell border-slate-200 bg-white'

function TeachingMethodSection({ section }) {
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

function TeachingMethodArticle({ method, content }) {
  const title = content.metaTitle ?? method.label
  const intro = content.quickAnswer ?? method.description

  return (
    <PageShell variant="policy" className={TM_PAGE_SHELL} contentClassName="pb-24">
      <article className="tm-article w-full">
        <TeachingMethodHero method={method} title={title} intro={intro} />

        <div className="tm-body">
          {content.sections.map((section) => (
            <TeachingMethodSection key={section.heading} section={section} />
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

function TeachingMethodPlaceholder({ method }) {
  return (
    <PageShell variant="policy" className={TM_PAGE_SHELL} contentClassName="pb-24">
      <article className="tm-article w-full">
        <TeachingMethodHero method={method} title={method.label} intro={method.description} />

        <div className="tm-body">
          <section className="tm-section">
            <p className="tm-paragraph">
              Detailed guidance for {method.label.toLowerCase()} is coming soon. Make My Lesson already
              supports this approach when you generate lesson plans — choose your method in the app and
              receive structured resources aligned to your curriculum.
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

export default function TeachingMethodPage({ method, content }) {
  if (content) {
    return <TeachingMethodArticle method={method} content={content} />
  }

  return <TeachingMethodPlaceholder method={method} />
}
