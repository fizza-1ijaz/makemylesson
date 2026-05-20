import Link from 'next/link'
import { PageShell } from '@/components/layout/Container'

const SUPPORT_EMAIL = 'support@makemylesson.ai'

/** Opens Gmail compose in the browser with To: pre-filled (user must be signed into Google). */
const GMAIL_COMPOSE_URL = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(SUPPORT_EMAIL)}`

export default function ContactPage() {
  return (
    <PageShell variant="narrow" contentClassName="max-w-xl text-center">
        <p className="font-mono text-[11px] font-medium uppercase tracking-[2px] text-mml-teal">Contact</p>
        <h1 className="mt-3 font-display text-[clamp(24px,4vw,36px)] font-normal text-white">Contact us</h1>
        <p className="mt-4 text-base font-light leading-relaxed text-white/80">
          Questions about Make My Lesson, billing, or your account? Reach our team by email.
        </p>

        <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.04] p-8">
          <p className="text-[13px] font-medium uppercase tracking-wider text-white/50">Email</p>
          <a
            href={GMAIL_COMPOSE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex break-all text-lg font-semibold text-mml-teal underline decoration-mml-teal/30 underline-offset-4 transition-colors hover:text-white hover:decoration-white"
          >
            {SUPPORT_EMAIL}
          </a>
          <p className="mt-4 text-[13px] leading-relaxed text-white/60">
            Tap to open your email app, or copy the address below.
          </p>
        </div>

        <p className="mt-10 text-sm text-white/55">
          <Link href="/" className="text-mml-teal hover:underline">
            ← Back to home
          </Link>
        </p>
    </PageShell>
  )
}
