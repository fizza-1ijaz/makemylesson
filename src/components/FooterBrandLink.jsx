'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import BrandMark from '@/components/BrandMark'
import { cn } from '@/lib/cn'

export default function FooterBrandLink() {
  const pathname = usePathname()
  const hideBrandLogo = pathname?.startsWith('/blog')

  return (
    <Link
      href="/"
      className={cn('flex shrink-0 items-center no-underline', hideBrandLogo ? 'gap-0' : 'gap-2')}
    >
      {!hideBrandLogo && <BrandMark className="h-7 w-7 shrink-0 object-contain sm:h-8 sm:w-8" />}
      <span className="font-display text-sm font-normal text-white sm:text-[15px] lg:text-base">
        Make My <strong className="font-bold text-mml-teal">Lesson</strong>
      </span>
    </Link>
  )
}
