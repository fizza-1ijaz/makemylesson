'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/cn'
import { Star, Menu, X } from 'lucide-react'

const navLinks = [
  { href: '/#features', label: 'Features' },
  { href: '/#pricing', label: 'Pricing' },
  { href: '/faq', label: 'FAQs' },
  { href: '/blog', label: 'Blogs' },
  { href: '/#ayla-ai', label: 'Ayla AI' },
  { href: '/#contact', label: 'Contact Us' },
]

export default function Navbar() {
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
      className={cn(
        'fixed left-0 right-0 top-0 z-[1000] border-b border-transparent backdrop-blur-xl transition-all duration-300',
        scrolled
          ? 'border-white/[0.06] bg-[rgba(15,27,45,0.97)] shadow-[0_4px_30px_rgba(0,0,0,0.3)]'
          : 'bg-[rgba(15,27,45,0.85)]',
      )}
    >
      <div className="mx-auto flex h-14 max-w-7xl items-center gap-4 px-5 max-[480px]:px-4">
        <Link href="/" className="flex shrink-0 items-center gap-1.5 no-underline">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-mml-teal/15 text-mml-teal">
            <Star size={14} fill="currentColor" />
          </span>
          <span className="font-display text-[14px] font-normal text-white">
            Make My <strong className="font-bold text-mml-teal">Lesson</strong>
          </span>
        </Link>

        <div className="hidden min-w-0 flex-1 items-center justify-center gap-0.5 overflow-x-auto min-[901px]:flex">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="shrink-0 rounded-lg px-2.5 py-1.5 font-sans text-[12px] font-medium text-white no-underline transition-colors hover:bg-mml-teal/[0.08] hover:text-mml-teal min-[1100px]:px-3 min-[1100px]:text-[13px]"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <button
          type="button"
          className="ml-auto flex h-10 w-10 items-center justify-center rounded-lg border-none bg-transparent text-white transition-colors hover:bg-white/[0.08] min-[901px]:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div
        className={cn(
          'flex max-h-0 flex-col overflow-hidden border-t border-white/[0.06] bg-mml-navy-mid transition-[max-height] duration-300 ease-out min-[901px]:hidden',
          mobileOpen && 'max-h-[480px]',
        )}
      >
        <div className="flex flex-col px-4 py-3">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-white no-underline transition-colors hover:bg-mml-teal/[0.08] hover:text-mml-teal"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
