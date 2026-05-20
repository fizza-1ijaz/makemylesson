import Link from 'next/link'
import { PageShell } from '@/components/layout/Container'

const INDIVIDUAL_FEATURES = [
  '30 generation credits per month',
  'Access to all 4 stages',
  'All 71 curriculum routes',
  'Full library & favourites',
  'Google Classroom & Teams export',
  'AI-generated images (Stage 2)',
  'Manual editing always free',
  'No hidden fees. Credits are only used when content is generated.',
]

function SectionTitle({ children, id }) {
  return (
    <h2 id={id} className="mb-4 font-display text-xl font-normal text-white sm:text-2xl">
      {children}
    </h2>
  )
}

function SubTitle({ children }) {
  return <h3 className="mb-3 mt-8 font-display text-base font-normal text-mml-teal">{children}</h3>
}

export default function PricingPage() {
  return (
    <PageShell variant="content">
      <article>
        <header className="border-b border-white/10 pb-10 text-center">
          <p className="font-mono text-[11px] font-medium uppercase tracking-[2px] text-mml-teal">Pricing &amp; Subscription</p>
          <h1 className="mt-3 font-display text-[clamp(22px,3.5vw,32px)] font-normal text-white">
            Pricing &amp; Subscription Model
          </h1>
          <p className="mt-3 text-sm text-white/75">
            Make My Lesson <span className="text-white/40">·</span> Master Reference Document
          </p>
        </header>

        <div className="mt-10 space-y-12 text-[14px] leading-relaxed text-white/90 sm:text-[15px]">
          {/* Free credits */}
          <section className="rounded-2xl border border-mml-teal/25 bg-mml-teal/[0.06] p-5 sm:p-6">
            <p className="text-[15px] font-medium text-white">
              <span className="mr-2" aria-hidden>
                🎁
              </span>
              Every new account receives <strong className="text-mml-teal">5 free generation credits</strong> — no credit
              card required. Each credit = one stage generation. A complete 4-stage teaching pack costs{' '}
              <strong className="text-white">4 credits</strong>.
            </p>
          </section>

          {/* Individual */}
          <section>
            <SectionTitle id="individual">Individual Plans</SectionTitle>
            <p className="mb-6 text-white/80">
              One price globally. All currencies shown at local equivalent. Monthly and annual billing available.
            </p>
            <div className="grid gap-5 md:grid-cols-2">
              <div className="flex max-w-full flex-col items-center rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center lg:items-stretch lg:text-left">
                <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-mml-teal">Monthly</div>
                <div className="font-display text-3xl text-white sm:text-4xl">
                  $14.99 <span className="text-lg font-normal text-white/60">/ month</span>
                </div>
                <p className="mt-1 text-sm text-white/65">Billed monthly · Cancel anytime</p>
                <ul className="mt-5 w-full space-y-2.5 border-t border-white/10 pt-5 text-[13px] text-white/85">
                  {INDIVIDUAL_FEATURES.map((f) => (
                    <li key={f} className="flex justify-center gap-2 lg:justify-start lg:text-left">
                      <span className="mt-0.5 shrink-0 text-mml-teal">✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative flex max-w-full flex-col items-center rounded-2xl border border-mml-teal/40 bg-mml-teal/[0.08] p-6 text-center shadow-[0_0_0_1px_rgba(212,160,18,0.15)] lg:items-stretch lg:text-left">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-mml-teal px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-mml-navy">
                  Best value
                </div>
                <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-mml-teal">Annual</div>
                <div className="font-display text-3xl text-white sm:text-4xl">
                  $99.99 <span className="text-lg font-normal text-white/60">/ year</span>
                </div>
                <p className="mt-1 text-sm text-mml-teal/90">~$8.33/month · Save 45% vs monthly</p>
                <ul className="mt-5 w-full space-y-2.5 border-t border-white/10 pt-5 text-[13px] text-white/85">
                  {INDIVIDUAL_FEATURES.map((f) => (
                    <li key={`a-${f}`} className="flex justify-center gap-2 lg:justify-start lg:text-left">
                      <span className="mt-0.5 shrink-0 text-mml-teal">✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="mt-6 text-sm text-white/70">
              Pricing is set in USD. Local currency equivalents are displayed at checkout based on the teacher&apos;s location
              (AU$, £, CA$, €). The underlying price is identical globally.
            </p>
          </section>

          {/* Additional credits */}
          <section>
            <SectionTitle id="additional-credits">Additional Credits (One-Time Purchase)</SectionTitle>
            <div className="flex max-w-full flex-col items-center rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center lg:items-stretch lg:text-left">
              <div className="font-display text-2xl text-white sm:text-3xl">$19.99 – 50 Credits</div>
              <p className="mt-1 text-sm text-white/65">One-time purchase · No subscription required</p>
              <ul className="mt-5 w-full space-y-2 text-[13px] text-white/85">
                {[
                  '50 generation credits added instantly',
                  'Credits do not expire — use them anytime',
                  'Continue working without waiting for monthly reset',
                  'Use alongside your existing monthly credits',
                  'Same rules — 1 credit per stage generation',
                  'Ideal for busy weeks or full unit planning',
                  'No hidden fees — pay only when you need more',
                ].map((t) => (
                  <li key={t} className="flex justify-center gap-2 lg:justify-start lg:text-left">
                    <span className="shrink-0 text-mml-teal">✓</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 w-full border-t border-white/10 pt-5 text-sm text-white/70 lg:text-left">
                Additional credits are optional and designed for flexibility. Monthly plans remain the most cost-effective way
                to use Make My Lesson regularly.
              </p>
            </div>
          </section>

          {/* School & department */}
          <section>
            <SectionTitle id="school-plans">School &amp; Department Plans</SectionTitle>
            <p className="mb-6 text-white/80">
              Annual billing only. Each teacher receives their own individual account, their own library, and their own 30
              credits per month. One admin manages seats — no shared logins.
            </p>
            <div className="overflow-x-auto rounded-xl border border-white/10">
              <table className="w-full min-w-[520px] border-collapse text-left text-[13px]">
                <thead>
                  <tr className="border-b border-white/10 bg-white/[0.04]">
                    <th className="px-4 py-3 font-semibold text-white">Plan</th>
                    <th className="px-4 py-3 font-semibold text-white">Teacher Seats</th>
                    <th className="px-4 py-3 font-semibold text-white">Annual Price</th>
                    <th className="px-4 py-3 font-semibold text-white">Effective per Seat</th>
                    <th className="px-4 py-3 font-semibold text-white">Credits / Month</th>
                  </tr>
                </thead>
                <tbody className="text-white/85">
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3 font-medium text-white">Department Plan</td>
                    <td className="px-4 py-3">Up to 5</td>
                    <td className="px-4 py-3">$349/year</td>
                    <td className="px-4 py-3">$5.83/seat/mo</td>
                    <td className="px-4 py-3">30 credits per teacher</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3 font-medium text-white">School Plan</td>
                    <td className="px-4 py-3">Up to 10</td>
                    <td className="px-4 py-3">$599/year</td>
                    <td className="px-4 py-3">$5.00/seat/mo</td>
                    <td className="px-4 py-3">30 credits per teacher</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-white">School Plan+</td>
                    <td className="px-4 py-3">10+</td>
                    <td className="px-4 py-3 text-mml-teal">Contact us</td>
                    <td className="px-4 py-3">Custom</td>
                    <td className="px-4 py-3">30 credits per teacher</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <SubTitle>How it works</SubTitle>
            <p className="text-white/85">
              The school or department head purchases a plan and receives a unique invite link. Each teacher signs up
              individually using that link. Every teacher has their own account, their own library, and their own credits.
              The admin can view seat usage and add or remove teachers from a simple dashboard.
            </p>
            <p className="mt-4 text-sm text-white/70">
              School and department plans include a <strong className="text-white">14-day money-back guarantee</strong>. No
              free trial period. For 10+ seats, contact us directly for a custom quote —{' '}
              <a href="mailto:hello@makemylesson.ai" className="text-mml-teal underline-offset-2 hover:underline">
                hello@makemylesson.ai
              </a>
              .
            </p>
          </section>

          {/* Credit system */}
          <section>
            <SectionTitle id="credit-system">Credit System</SectionTitle>
            <p className="mb-4 text-white/80">
              Credits are consumed by AI generation only — not by accessing the platform, editing content, browsing the
              library, or exporting documents.
            </p>
            <div className="overflow-x-auto rounded-xl border border-white/10">
              <table className="w-full min-w-[400px] border-collapse text-left text-[13px]">
                <thead>
                  <tr className="border-b border-white/10 bg-white/[0.04]">
                    <th className="px-4 py-3 font-semibold text-white">Rule</th>
                    <th className="px-4 py-3 font-semibold text-white">Detail</th>
                  </tr>
                </thead>
                <tbody className="text-white/85">
                  {[
                    ['Free generations on signup', '5 credits — no credit card required'],
                    ['Cost per generation', '1 credit per stage generation'],
                    ['Complete 4-stage pack', '4 credits total (1 per stage)'],
                    ['Manual editing', 'Always free — never consumes a credit'],
                    ['AI regeneration', '1 credit — treated as a new generation'],
                    ['Credit deduction timing', 'After successful generation AND save only'],
                    ['Monthly cap — all paid plans', '30 credits per account per month'],
                    ['Reminder at 2 credits', 'Soft banner shown — generation not blocked'],
                    ['Reminder at 1 credit', 'Final warning banner — generation not blocked'],
                    ['At 0 credits', 'Generation blocked — subscription paywall shown'],
                  ].map(([rule, detail]) => (
                    <tr key={rule} className="border-b border-white/10 last:border-0">
                      <td className="px-4 py-3 font-medium text-white">{rule}</td>
                      <td className="px-4 py-3">{detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* What's included */}
          <section>
            <SectionTitle id="included">What&apos;s Included in All Paid Plans</SectionTitle>
            <SubTitle>Generation &amp; Content</SubTitle>
            <ul className="list-disc space-y-1.5 pl-5 text-white/85">
              <li>Stage 1 — Lesson Plan</li>
              <li>Stage 2 — Presentation with AI images</li>
              <li>Stage 3 — Classroom Activity + Answer Key</li>
              <li>Stage 4 — Assessment + Mark Scheme</li>
              <li>Complete 4-stage teaching pack (4 credits)</li>
              <li>All 71 curriculum routes across 5 families</li>
              <li>16 embedded teaching methods</li>
              <li>Mandatory Bloom&apos;s Taxonomy balancing</li>
            </ul>
            <SubTitle>Export</SubTitle>
            <ul className="list-disc space-y-1.5 pl-5 text-white/85">
              <li>PDF, DOCX, PPTX download</li>
              <li>Google Classroom — direct post</li>
              <li>Microsoft Teams — direct post</li>
              <li>Print</li>
              <li>Complete pack ZIP (all 6 documents)</li>
            </ul>
            <SubTitle>Library &amp; Management</SubTitle>
            <ul className="list-disc space-y-1.5 pl-5 text-white/85">
              <li>My Library — auto-saves all generations</li>
              <li>Organised by stage tab</li>
              <li>Complete Packs tab (all 4 stages)</li>
              <li>Favourites — mark any generation</li>
              <li>Manual editing — always free, no credit</li>
              <li>AI regeneration — 1 credit</li>
            </ul>
            <SubTitle>Account</SubTitle>
            <ul className="list-disc space-y-1.5 pl-5 text-white/85">
              <li>Credit balance visible at all times</li>
              <li>Referral programme — 5 referrals = 1 free month</li>
              <li>Curriculum selection saved between sessions</li>
              <li>Global access — all currencies supported</li>
            </ul>
          </section>

          {/* Referral */}
          <section>
            <SectionTitle id="referral">Referral Programme</SectionTitle>
            <p className="text-white/85">
              Every <strong className="text-white">5 successful referrals = 1 free month</strong> of Premium. Stackable with
              no ceiling. 10 referrals = 2 free months. 15 referrals = 3 free months.
            </p>
            <p className="mt-3 text-white/85">
              Each referred user counted once. Available to all individual subscribers via Profile → Refer &amp; Earn.
            </p>
          </section>

          {/* Quick reference */}
          <section>
            <SectionTitle id="summary">Quick Reference Summary</SectionTitle>
            <div className="overflow-x-auto rounded-xl border border-white/10">
              <table className="w-full min-w-[560px] border-collapse text-left text-[13px]">
                <thead>
                  <tr className="border-b border-white/10 bg-white/[0.04]">
                    <th className="px-3 py-3 font-semibold text-white">Plan</th>
                    <th className="px-3 py-3 font-semibold text-white">Price</th>
                    <th className="px-3 py-3 font-semibold text-white">Seats</th>
                    <th className="px-3 py-3 font-semibold text-white">Credits/Month</th>
                    <th className="px-3 py-3 font-semibold text-white">Billing</th>
                  </tr>
                </thead>
                <tbody className="text-white/85">
                  {[
                    ['Individual Monthly', '$14.99/mo', '1', '30/month', 'Monthly'],
                    ['Individual Annual', '$99.99/yr', '1', '30/month', 'Annual'],
                    ['One-Time Purchase', '$19.99', '—', '50', 'One-Time'],
                    ['Department Plan', '$349/yr', 'Up to 5', '30/month each', 'Annual only'],
                    ['School Plan', '$599/yr', 'Up to 10', '30/month each', 'Annual only'],
                    ['School Plan+', 'Contact us', '10+', '30/month each', 'Annual only'],
                    ['Free Trial', 'Free', '1', '5 (one-time)', 'No card needed'],
                  ].map((row) => (
                    <tr key={row[0]} className="border-b border-white/10 last:border-0">
                      {row.map((cell, j) => (
                        <td key={`${row[0]}-${j}`} className="px-3 py-2.5">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <div className="flex flex-wrap justify-center gap-3 border-t border-white/10 pt-10">
            <Link
              href="/lesson/stage1"
              className="inline-flex items-center justify-center rounded-xl bg-mml-teal px-6 py-3 font-sans text-sm font-semibold text-mml-navy no-underline transition-colors hover:bg-mml-teal-dark"
            >
              Start with free credits
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl border border-white/20 px-6 py-3 font-sans text-sm font-semibold text-white no-underline transition-colors hover:border-mml-teal hover:text-mml-teal"
            >
              Contact us
            </Link>
          </div>
        </div>
      </article>
    </PageShell>
  )
}
