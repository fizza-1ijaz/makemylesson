'use client'

import React, { useMemo, useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/cn'
import { MML_APP } from '@/lib/appUrls'
import BrandMark from '@/components/BrandMark'
import SectionLink from '@/components/SectionLink'
import { scrollToTop } from '@/lib/homeScroll'
import { Menu, X } from 'lucide-react'

/** Fixed nav shell — same bar height, logo, and 17px type on every viewport */
const NAV_CONTAINER = 'site-nav-container mx-auto flex w-full min-w-0 items-center gap-4 px-4'
const NAV_BAR = 'site-nav-bar flex h-16 min-h-16 items-center'
const NAV_BRAND_MARK = 'site-nav-brand-mark h-8 w-8 shrink-0 object-contain'
const NAV_BRAND_TEXT = 'site-nav-brand-text font-display font-normal text-white'
const NAV_LINK =
  'site-nav-link shrink-0 rounded-lg px-3 py-2 font-sans font-medium text-white no-underline transition-colors hover:bg-mml-teal/[0.08] hover:text-mml-teal'
const NAV_MENU_LINK =
  'site-nav-link block rounded-lg px-3 py-2.5 font-sans font-medium text-white no-underline transition-colors hover:bg-mml-teal/[0.08] hover:text-mml-teal'

function useNavLinks() {
  return useMemo(
    () => [
      { sectionId: 'features', href: '/', label: 'Features' },
      { href: '/pricing', label: 'Pricing' },
      { href: '/faq', label: 'FAQs' },
      { href: '/blog', label: 'Blogs' },
      { href: MML_APP.ayla, label: 'Ayla AI' },
      { href: '/contact', label: 'Contact Us' },
    ],
    [],
  )
}

export default function Navbar() {
  const navLinks = useNavLinks()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <nav
      id="site-nav"
      aria-label="Main navigation"
      className={cn(
        'site-nav fixed left-0 right-0 top-0 z-[1100] border-b border-transparent backdrop-blur-xl transition-all duration-300',
        scrolled
          ? 'border-white/[0.06] bg-[rgba(15,27,45,0.97)] shadow-[0_4px_30px_rgba(0,0,0,0.3)]'
          : 'bg-[rgba(15,27,45,0.85)]',
      )}
    >
      <div className={cn(NAV_CONTAINER, NAV_BAR)}>
        <Link
          href="/"
          className="site-nav-brand flex shrink-0 items-center gap-2 no-underline"
          aria-label="Make My Lesson home"
          onClick={(e) => {
            if (pathname === '/') {
              e.preventDefault()
              scrollToTop()
            }
          }}
        >
          <BrandMark className={NAV_BRAND_MARK} />
          <span className={NAV_BRAND_TEXT}>
            Make My <strong className="font-bold text-mml-teal">Lesson</strong>
          </span>
        </Link>

        <div className="site-nav-desktop hidden min-w-0 flex-1 items-center justify-center gap-1 overflow-x-auto min-[901px]:flex">
          {navLinks.map((item) =>
            item.sectionId ? (
              <SectionLink
                key={item.label}
                sectionId={item.sectionId}
                href={item.href}
                className={NAV_LINK}
              >
                {item.label}
              </SectionLink>
            ) : (
              <Link key={item.href} href={item.href} className={NAV_LINK}>
                {item.label}
              </Link>
            ),
          )}
        </div>

        <button
          type="button"
          className="site-nav-toggle ml-auto flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border-none bg-transparent text-white transition-colors hover:bg-white/[0.08] min-[901px]:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} strokeWidth={2} /> : <Menu size={24} strokeWidth={2} />}
        </button>
      </div>

      <div
        className={cn(
          'site-nav-drawer flex max-h-0 flex-col overflow-hidden border-t border-white/[0.06] bg-mml-navy-mid transition-[max-height] duration-300 ease-out min-[901px]:hidden',
          mobileOpen && 'max-h-[480px]',
        )}
      >
        <div className={cn(NAV_CONTAINER, 'flex flex-col gap-0.5 py-3')}>
          {navLinks.map((item) =>
            item.sectionId ? (
              <SectionLink
                key={item.label}
                sectionId={item.sectionId}
                href={item.href}
                className={NAV_MENU_LINK}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </SectionLink>
            ) : (
              <Link key={item.href} href={item.href} className={NAV_MENU_LINK}>
                {item.label}
              </Link>
            ),
          )}
        </div>
      </div>
    </nav>
  )
}
