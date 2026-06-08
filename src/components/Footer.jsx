'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import BrandMark from '@/components/BrandMark'
import Container from '@/components/layout/Container'

const STUDIELY_URL = 'https://www.studiely.com'
const LINGUATUDE_URL = 'https://linguatude.com'
const SKYEN_SYSTEMS_URL = 'https://skyensystems.com'

/** Compliance and legal — matches indexable policy routes in sitemap. */
const FOOTER_NAV = [
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/terms-of-service', label: 'Terms of Service' },
  { href: '/acceptable-use-policy', label: 'Acceptable Use Policy' },
  { href: '/cookie-policy', label: 'Cookie Policy' },
  { href: '/disclaimer', label: 'Disclaimer' },
  { href: '/refund-payments-policy', label: 'Refund & Payments Policy' },
  { href: '/account-data-deletion', label: 'Account & Data Deletion' },
]

export default function Footer() {
  const pathname = usePathname()
  const year = new Date().getFullYear()

  if (pathname?.startsWith('/app')) {
    return null
  }

  return (
    <footer id="contact" className="mt-auto w-full min-w-0 border-t border-white/10 bg-mml-navy text-white">
      <Container className="py-6 sm:py-7">
        <div className="flex w-full flex-col gap-3 border-b border-white/10 pb-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:pb-5">
          <Link
            href="/"
            className="flex shrink-0 items-center gap-2 no-underline"
            aria-label="Make My Lesson home"
          >
            <BrandMark className="h-8 w-8 shrink-0 object-contain" />
            <span className="font-display text-[17px] font-normal leading-[1.85] text-white">
              Make My <strong className="font-bold text-mml-teal">Lesson</strong>
            </span>
          </Link>

          <nav
            className="flex w-full flex-wrap items-center gap-x-5 gap-y-2 sm:w-auto sm:justify-end"
            aria-label="Compliance and legal documents"
          >
            {FOOTER_NAV.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="whitespace-nowrap text-[17px] font-medium leading-[1.85] text-white no-underline transition-colors hover:text-mml-teal"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-4 grid w-full grid-cols-1 gap-x-10 gap-y-2 text-[17px] leading-[1.85] text-white sm:mt-5 lg:grid-cols-2 lg:gap-y-0">
          <div className="space-y-2 text-center lg:text-left">
            <p>
              AI-powered lesson planning for teachers across Australia, United Kingdom, Canada, International Baccalaureate and
              United States.
            </p>
            <p>
              Make My Lesson is a product of Skyen Solutions, a trade name of Qismat Ventures W.L.L. (CR 190698-1) — Office 501,
              Building 1025, Road 3621, Block 436, Al Seef, Bahrain.
            </p>
          </div>

          <div className="space-y-2 text-center lg:text-left">
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
        </div>

        <p className="mt-4 text-center text-[17px] leading-[1.85] text-white sm:mt-5">
          © {year} Qismat Ventures W.L.L. All rights reserved.
        </p>
      </Container>
    </footer>
  )
}
