import Link from 'next/link'
import Container, { PageShell } from '@/components/layout/Container'
import ContactForm from '@/components/contact/ContactForm'
import { SITE_URL } from '@/lib/siteUrl'

const contactPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact Make My Lesson',
  description:
    'Contact Make My Lesson support for help with AI lesson planning, curriculum-aligned teaching packs, billing, and school plans.',
  url: `${SITE_URL}/contact`,
  mainEntity: {
    '@type': 'Organization',
    name: 'Make My Lesson',
    email: 'support@makemylesson.ai',
    url: SITE_URL,
  },
}

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageJsonLd) }}
      />
      <PageShell contentClassName="relative overflow-hidden pt-6 pb-24 md:pt-8">
        <div
          className="pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[min(100%,720px)] -translate-x-1/2 rounded-full bg-mml-teal/[0.08] blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute right-0 top-40 h-64 w-64 rounded-full bg-mml-teal/[0.05] blur-3xl"
          aria-hidden
        />

        <header className="relative border-b border-white/10 pb-12 text-center md:pb-14">
          <p className="font-mono text-[11px] font-medium uppercase tracking-[2px] text-mml-teal">
            Contact
          </p>
          <h1 className="mt-3 font-display text-[clamp(28px,4.5vw,42px)] font-normal leading-tight text-white">
            We&apos;re here to help teachers succeed
          </h1>
        </header>

        <Container variant="content" className="relative mt-12 md:mt-14">
          <section aria-labelledby="contact-form-heading">
            <h2 id="contact-form-heading" className="sr-only">
              Contact form
            </h2>
            <div className="mx-auto w-full max-w-4xl">
              <ContactForm />
            </div>
          </section>

          <p className="mt-14 text-center text-sm text-white/50">
            <Link href="/faq" className="text-mml-teal hover:underline">
              Browse FAQs
            </Link>
            <span className="mx-2 text-white/25">·</span>
            <Link href="/" className="text-mml-teal hover:underline">
              Back to home
            </Link>
          </p>
        </Container>
      </PageShell>
    </>
  )
}
