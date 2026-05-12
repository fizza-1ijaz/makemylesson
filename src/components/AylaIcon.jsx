'use client'

import Image from 'next/image'
import { cn } from '@/lib/cn'

const AYLA_SRC = '/Ayla.png'

/**
 * Ayla mark from `/public/Ayla.png`.
 * Circular clip + slight zoom crops typical square-canvas white padding.
 * Use `alt=""` when the UI already names “Ayla” (decorative).
 */
export default function AylaIcon({ className = '', width = 28, height = 28, alt = '', priority = false, sizes }) {
  const fillsParent =
    typeof className === 'string' && /\bh-full\b/.test(className) && /\bw-full\b/.test(className)

  const imgClass =
    'object-cover object-center [clip-path:circle(50%_at_50%_50%)] [transform:scale(1.16)]'

  return (
    <span
      className={cn(
        'relative shrink-0 overflow-hidden rounded-full align-middle',
        fillsParent ? 'block h-full w-full min-h-0 min-w-0' : 'inline-block',
        className,
      )}
      style={
        fillsParent
          ? undefined
          : {
              width,
              height,
            }
      }
    >
      <Image
        src={AYLA_SRC}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes || `${Math.max(width, height)}px`}
        className={imgClass}
      />
    </span>
  )
}
