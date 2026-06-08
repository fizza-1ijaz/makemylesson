'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import BrandMark from '@/components/BrandMark'
import Container from '@/components/layout/Container'

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

        <p className="mt-4 text-center text-[17px] leading-[1.85] text-white sm:mt-5">
          © {year} Qismat Ventures W.L.L. All rights reserved.
        </p>
      </Container>
    </footer>
  )
}
