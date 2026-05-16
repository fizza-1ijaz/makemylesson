import Link from 'next/link'
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react'

import { MML_APP } from '@/lib/appUrls'
import { Reveal } from '../shared'

/** Replace `#` with real URLs when ready. */
export const CTA_LINKS = {
  social: {
    youtube: '#',
    x: '#',
    linkedin: '#',
    instagram: '#',
    facebook: '#',
    tiktok: '#',
  },
  app: {
    appStore: '#',
    googlePlay: '#',
  },
}

function TikTokIcon({ className, size = 20 }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.7 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  )
}

function AppleIcon({ className }) {
  return (
    <svg className={className} width={22} height={22} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  )
}

function GooglePlayIcon({ className }) {
  return (
    <svg className={className} width={22} height={22} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12 3.84 21.85c-.5-.24-.84-.76-.84-1.35zm13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27zm3.35-4.31c.34.27.54.68.54 1.13s-.2.86-.54 1.13L17.69 15l-9.64-9.64L15.5 2.5" />
    </svg>
  )
}

const SOCIAL_ICONS = [
  { key: 'youtube', href: CTA_LINKS.social.youtube, label: 'YouTube', Icon: Youtube },
  { key: 'x', href: CTA_LINKS.social.x, label: 'X', Icon: Twitter },
  { key: 'linkedin', href: CTA_LINKS.social.linkedin, label: 'LinkedIn', Icon: Linkedin },
  { key: 'instagram', href: CTA_LINKS.social.instagram, label: 'Instagram', Icon: Instagram },
  { key: 'facebook', href: CTA_LINKS.social.facebook, label: 'Facebook', Icon: Facebook },
  { key: 'tiktok', href: CTA_LINKS.social.tiktok, label: 'TikTok' },
]

export default function CtaBandSection() {
  return (
    <section className="final-cta">
      <div className="W final-cta-inner">
        <Reveal>
          <h2>Your next lesson. Ready in minutes.</h2>
          <p className="final-cta-lead">
            Join teachers across Australia, the UK, Canada, and internationally who are spending less time preparing and
            more time teaching.
          </p>
          <a href={MML_APP.stage1} className="btn btn-teal btn-lg final-cta-btn final-cta-btn--primary">
            Build Your First Teaching Pack Free
            <svg width={18} height={18} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <p className="final-cta-sub">10 free credits · No credit card required · Cancel anytime</p>

          <hr className="final-cta-rule" aria-hidden />

          <p className="final-cta-section-label">Follow us</p>
          <div className="final-cta-socials">
            {SOCIAL_ICONS.map(({ key, href, label, Icon }) => (
              <a
                key={key}
                href={href}
                className="final-cta-social-link"
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
              >
                {key === 'tiktok' ? (
                  <TikTokIcon className="final-cta-social-ico" size={20} />
                ) : (
                  <Icon className="final-cta-social-ico" size={20} strokeWidth={1.75} aria-hidden />
                )}
              </a>
            ))}
          </div>

          <hr className="final-cta-rule" aria-hidden />

          <p className="final-cta-section-label">Teach anywhere. Download the app.</p>
          <div className="final-cta-app-row">
            <a
              href={CTA_LINKS.app.appStore}
              className="final-cta-app-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AppleIcon className="final-cta-app-ico" />
              App Store
            </a>
            <a
              href={CTA_LINKS.app.googlePlay}
              className="final-cta-app-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GooglePlayIcon className="final-cta-app-ico" />
              Google Play
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
