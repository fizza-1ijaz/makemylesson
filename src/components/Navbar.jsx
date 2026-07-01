'use client'

import React, { useMemo, useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/cn'
import { MML_APP } from '@/lib/appUrls'
import BrandMark from '@/components/BrandMark'
import SectionLink from '@/components/SectionLink'
import {
  TeachingMethodsDesktopMenu,
  TeachingMethodsMobileMenu,
} from '@/components/TeachingMethodsMegaMenu'
import { scrollToTop } from '@/lib/homeScroll'
import { Menu, X } from 'lucide-react'

/** Keep logo/CTA off viewport edges on xl+ (body containers use flush gutters). */
const NAV_GUTTER = 'px-4 sm:px-6 md:px-8 xl:px-[5px]'

const NAV_CONTAINER =
  `site-nav-container mx-auto flex w-full min-w-0 max-w-[1600px] items-center gap-4 ${NAV_GUTTER}`
const NAV_BAR = 'site-nav-bar flex h-16 min-h-16 w-full items-center'
const NAV_BRAND_MARK = 'site-nav-brand-mark h-[1.875rem] w-[1.875rem] shrink-0 object-contain 2xl:h-8 2xl:w-8'
const NAV_LINK = 'site-nav-link shrink-0 no-underline'
const NAV_DESKTOP =
  'site-nav-desktop hidden min-w-0 flex-1 items-center justify-center min-[901px]:flex'
const NAV_MENU_LINK = 'site-nav-link block no-underline'

function useNavLinks() {
  return useMemo(
    () => [
      { sectionId: 'features', href: '/', label: 'Features' },
      { type: 'teaching-methods' },
      { href: '/pricing', label: 'Pricing' },
      { href: '/faq', label: 'FAQs' },
      { href: '/blog', label: 'Blog' },
      { href: MML_APP.ayla, label: 'Ayla AI' },
      { href: '/contact', label: 'Contact Us' },
    ],
    [],
  )
}

function isNavLinkActive(pathname, href) {
  if (href === '/') return false
  return pathname === href || pathname.startsWith(`${href}/`)
}

function NavLink({ item, pathname, className, onClick }) {
  const active = isNavLinkActive(pathname, item.href)
  const linkClass = cn(className, active && 'site-nav-link--active')

  if (item.sectionId) {
    return (
      <SectionLink
        sectionId={item.sectionId}
        href={item.href}
        className={linkClass}
        onClick={onClick}
      >
        {item.label}
      </SectionLink>
    )
  }

  return (
    <Link href={item.href} className={linkClass} onClick={onClick}>
      {item.label}
    </Link>
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
      className={cn('site-nav fixed left-0 right-0 top-0 z-[1100]', scrolled && 'site-nav--scrolled')}
    >
      <div className={cn(NAV_CONTAINER, NAV_BAR)}>
        <Link
          href="/"
          className="site-nav-brand flex shrink-0 items-center no-underline"
          aria-label="Make My Lesson home"
          onClick={(e) => {
            if (pathname === '/') {
              e.preventDefault()
              scrollToTop()
            }
          }}
        >
          <BrandMark className={NAV_BRAND_MARK} />
          <span className="site-nav-brand-text font-sans">
            Make My <span className="site-nav-brand-accent">Lesson</span>
          </span>
        </Link>

        <div className={NAV_DESKTOP}>
          <div className="site-nav-pill" role="list">
            {navLinks.map((item) =>
              item.type === 'teaching-methods' ? (
                <TeachingMethodsDesktopMenu key="teaching-methods" pathname={pathname} />
              ) : (
                <NavLink key={item.label} item={item} pathname={pathname} className={NAV_LINK} />
              ),
            )}
          </div>
        </div>

        <div className="site-nav-actions">
          <Link href={MML_APP.stage1} className="site-nav-cta">
            Get Started
          </Link>
          <button
            type="button"
            className="site-nav-toggle flex h-10 w-10 shrink-0 items-center justify-center border-none bg-transparent min-[901px]:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} strokeWidth={2} /> : <Menu size={22} strokeWidth={2} />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          'site-nav-drawer flex max-h-0 flex-col overflow-hidden transition-[max-height] duration-300 ease-out min-[901px]:hidden',
          mobileOpen && 'max-h-[min(85vh,720px)] overflow-y-auto',
        )}
      >
        <div className={cn(NAV_CONTAINER, 'flex flex-col gap-0.5 py-3')}>
          {navLinks.map((item) =>
            item.type === 'teaching-methods' ? (
              <TeachingMethodsMobileMenu
                key="teaching-methods"
                pathname={pathname}
                linkClassName={NAV_MENU_LINK}
                onNavigate={() => setMobileOpen(false)}
              />
            ) : (
              <NavLink
                key={item.label}
                item={item}
                pathname={pathname}
                className={NAV_MENU_LINK}
                onClick={() => setMobileOpen(false)}
              />
            ),
          )}
          <div className="site-nav-drawer-cta">
            <Link href={MML_APP.stage1} className="site-nav-cta" onClick={() => setMobileOpen(false)}>
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
