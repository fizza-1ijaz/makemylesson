'use client'

import { useEffect, useState } from 'react'
import FeatureSectionImage from '@/components/features/FeatureSectionImage'
import TeachingMethodJumpNav from '@/components/teaching-methods/TeachingMethodJumpNav'
import TeachingMethodTitle from '@/components/teaching-methods/TeachingMethodTitle'
import { cn } from '@/lib/cn'

export default function FeatureHero({ feature, title, intro, sections }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const id = requestAnimationFrame(() => setVisible(true))
    return () => cancelAnimationFrame(id)
  }, [])

  return (
    <div className="tm-hero-band">
      <div className="tm-hero-band-grid" aria-hidden />
      <div className={cn('tm-hero-band-content', visible && 'tm-hero-band--visible')}>
        <div className="tm-hero">
          <div className="tm-hero-content">
            <p className="tm-hero-eyebrow">Features</p>
            <TeachingMethodTitle title={title} />
            {intro ? <p className="tm-hero-copy">{intro}</p> : null}
          </div>

          <FeatureSectionImage feature={feature} className="tm-hero-visual" imageClassName="tm-hero-img" />
        </div>

        <TeachingMethodJumpNav sections={sections} pageType="feature" />
      </div>
    </div>
  )
}
