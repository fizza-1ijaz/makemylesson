import FaqPage from '@/components/faq/FaqPage'
import { faqItems } from '@/data/faqItems'
import { FAQ_SCHEMA_IDS, FAQ_PAGE_URL } from '@/data/faqMeta'
import { buildFaqJsonLd } from '@/lib/faqJsonLd'

export const metadata = {
  title: 'FAQ — Make My Lesson | AI Lesson Planner & Curriculum-Aligned Teaching Packs',
  description:
    'Frequently asked questions about Make My Lesson: AI lesson planner, four-stage teaching packs, curriculum routes, credits, pricing, Ayla AI assistant, library and export.',
  alternates: { canonical: '/faq' },
}

export default function FaqRoutePage() {
  const jsonLd = buildFaqJsonLd(faqItems, FAQ_SCHEMA_IDS, FAQ_PAGE_URL)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FaqPage />
    </>
  )
}
