import Link from 'next/link'
import { Reveal } from '../shared'

const PLANS = [
  {
    key: 'free',
    name: 'Free Trial',
    priceDisplay: 'text',
    priceText: 'Free',
    period: 'No time limit',
    spacer: true,
    credits: {
      main: '10 free generation credits',
      sub: '2 complete teaching packs, or 10 individual stages',
    },
    features: [
      'All 4 stages available',
      'All 71 curriculum routes',
      'Full library and favourites',
      'All export formats',
      'No credit card required',
    ],
    cta: { label: 'Start Free', variant: 'outline', href: '/lesson/stage1' },
  },
  {
    key: 'annual',
    featured: true,
    badge: 'BEST VALUE',
    name: 'Individual — Annual',
    priceDisplay: 'split',
    dollars: '99',
    cents: '.99',
    period: 'per year',
    saveLine: 'Save 36% vs monthly · ~$8.33/month',
    credits: {
      main: '30 credits per month',
      sub: 'Resets on your billing date each month',
    },
    features: [
      '30 generation credits/month',
      'All 4 stages · All 71 routes',
      'Full library and favourites',
      'All export formats',
      'Google Classroom & Teams',
      'Manual editing always free',
    ],
    cta: { label: 'Start Annual — Save 36%', variant: 'primary', href: '/lesson/stage1' },
  },
  {
    key: 'monthly',
    name: 'Individual — Monthly',
    priceDisplay: 'split',
    dollars: '12',
    cents: '.99',
    period: 'per month · Cancel anytime',
    spacer: true,
    credits: {
      main: '30 credits per month',
      sub: 'Resets on your billing date each month',
    },
    features: [
      '30 generation credits/month',
      'All 4 stages · All 71 routes',
      'Full library and favourites',
      'All export formats',
      'Google Classroom & Teams',
      'Manual editing always free',
    ],
    cta: { label: 'Start Monthly', variant: 'outline', href: '/lesson/stage1' },
  },
]

export default function PricingSection() {
  return (
    <section className="pricing" id="pricing">
      <div className="W pricing-inner">
        <Reveal className="pricing-head">
          <span className="section-eyebrow">Pricing</span>
          <h2 className="pricing-head-title">Start free. No credit card needed.</h2>
          <p className="section-intro pricing-intro">
            Every new account gets <strong>10 free generation credits</strong>. That is 2 complete four-stage teaching packs
            — or up to 10 individual stage generations — at no cost.
          </p>
        </Reveal>

        <div className="pricing-grid">
          {PLANS.map((plan, i) => (
            <Reveal
              key={plan.key}
              delay={i * 70}
              className={`price-card${plan.featured ? ' price-card--featured' : ''}`}
            >
              {plan.badge ? <div className="featured-badge">{plan.badge}</div> : null}
              <div className="plan-name">{plan.name}</div>

              {plan.priceDisplay === 'text' ? (
                <div className="plan-price plan-price--plain">{plan.priceText}</div>
              ) : (
                <div className="plan-price plan-price--split">
                  <sup>$</sup>
                  {plan.dollars}
                  <span className="plan-price-cents">{plan.cents}</span>
                </div>
              )}

              <div className="plan-period">{plan.period}</div>

              {plan.saveLine ? <div className="plan-save">{plan.saveLine}</div> : null}
              {plan.spacer ? <div className="plan-spacer" aria-hidden /> : null}

              <div className="plan-credits">
                {plan.credits.main}
                <br />
                <small className="plan-credits-sub">{plan.credits.sub}</small>
              </div>

              <ul className="plan-features">
                {plan.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>

              <Link
                href={plan.cta.href}
                className={`btn-plan btn-plan--${plan.cta.variant}`}
              >
                {plan.cta.label}
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={220}>
          <p className="pricing-note">
            School and department plans also available — Department (up to 5 seats, $349/year) and School (up to 10 seats,
            $599/year).
            <br />
            Contact us at{' '}
            <a href="mailto:hello@makemylesson.ai">hello@makemylesson.ai</a>
          </p>
        </Reveal>
      </div>
    </section>
  )
}
