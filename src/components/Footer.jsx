import Link from 'next/link'
import { Star } from 'lucide-react'

const STUDIELY_URL = 'https://www.studiely.com'
const LINGUATUDE_URL = 'https://linguatude.ai'
const SKYEN_SYSTEMS_URL = 'https://skyensolutions.com'

const FOOTER_NAV = [
  { href: '/pricing', label: 'Pricing' },
  { href: '/faq', label: 'FAQ' },
  { href: '/blog', label: 'Blog' },
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/terms-of-service', label: 'Terms of Service' },
  { href: '/acceptable-use-policy', label: 'Acceptable Use Policy' },
  { href: '/cookie-policy', label: 'Cookie Policy' },
  { href: '/disclaimer', label: 'Disclaimer' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer id="contact" className="mt-auto w-full border-t border-white/10 bg-mml-navy text-white">
      <div className="w-full px-5 pb-8 pt-8 sm:px-6 lg:px-10 xl:px-14 2xl:px-20">
        <div className="flex w-full flex-col gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
          <Link href="/" className="flex shrink-0 items-center gap-2 no-underline">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-mml-teal/15 text-mml-teal">
              <Star size={16} fill="currentColor" aria-hidden />
            </span>
            <span className="font-display text-[15px] font-normal text-white sm:text-base">
              Make My <strong className="font-bold text-mml-teal">Lesson</strong>
            </span>
          </Link>

          <nav
            className="flex w-full flex-wrap items-center gap-x-5 gap-y-2 sm:w-auto sm:justify-end"
            aria-label="Compliance and site links"
          >
            {FOOTER_NAV.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="whitespace-nowrap text-[13px] font-medium text-white no-underline transition-colors hover:text-mml-teal"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mx-auto mt-5 w-full max-w-3xl space-y-3 text-center text-sm leading-relaxed text-white">
            
          <p>
            AI-powered lesson planning for teachers across Australia, United Kingdom, Canada, International Baccalaureate and
            United States.
          </p>
          <p>
            Make My Lesson is a product of Skyen Solutions, a trade name of Qismat Ventures W.L.L. (CR 190698-1) — Office 501,
            Building 1025, Road 3621, Block 436, Al Seef, Bahrain.
          </p>
          <p>
            Make My Lesson is a sister platform of{' '}
            <a
              href={STUDIELY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-mml-teal underline decoration-white/20 underline-offset-2 transition-colors hover:decoration-mml-teal"
            >
              Studiely
            </a>{' '}
            and{' '}
            <a
              href={LINGUATUDE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-mml-teal underline decoration-white/20 underline-offset-2 transition-colors hover:decoration-mml-teal"
            >
              Linguatude
            </a>
            .
          </p>
          <p>
            Make My Lesson is part of the Skyen Solutions family of EdTech products. For custom software development,
            websites, and mobile applications, visit{' '}
            <a
              href={SKYEN_SYSTEMS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-mml-teal underline decoration-white/20 underline-offset-2 transition-colors hover:decoration-mml-teal"
            >
              Skyen Systems
            </a>
            .
          </p>
        </div>

        <p className="mt-6 text-center text-xs text-white">© {year} Qismat Ventures W.L.L. All rights reserved.</p>
      </div>
    </footer>
  )
}
