import FaqPage from '@/components/faq/FaqPage'
import { faqItems } from '@/data/faqItems'
import { FAQ_SCHEMA_IDS } from '@/data/faqMeta'
import { buildFaqJsonLd } from '@/lib/faqJsonLd'
import { SITE_URL } from '@/lib/siteUrl'

const faqCanonical = `${SITE_URL.replace(/\/$/, '')}/faq`

export const metadata = {
  title: 'Frequently Asked Questions — Make My Lesson',
  description:
    'Everything you need to know about Make My Lesson — how it works, which curriculas are supported, free credits, stages, and how to get started.',
  alternates: { canonical: faqCanonical },
  robots: { index: true, follow: true },
}

export default function FaqRoutePage() {
  const jsonLd = buildFaqJsonLd(faqItems, FAQ_SCHEMA_IDS, faqCanonical)

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
