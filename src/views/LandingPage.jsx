'use client'

import { useLayoutEffect, useState } from 'react'
import { cn } from '@/lib/cn'
import AylaIcon from '@/components/AylaIcon'
import { MML_APP } from '@/lib/appUrls'
import AylaSection from '@/landing/sections/AylaSection'
import CtaBandSection from '@/landing/sections/CtaBandSection'
import SisterPlatformsSection from '@/landing/sections/SisterPlatformsSection'
import CurriculumSection from '@/landing/sections/CurriculumSection'
import FeaturesSection from '@/landing/sections/FeaturesSection'
import ProblemSection from '@/landing/sections/ProblemSection'
import HeroSection from '@/landing/sections/HeroSection'
import HowItWorksSection from '@/landing/sections/HowItWorksSection'
import MethodsSection from '@/landing/sections/MethodsSection'
import ReplacesSection from '@/landing/sections/ReplacesSection'
import LibraryExportSection from '@/landing/sections/LibraryExportSection'
import PricingSection from '@/landing/sections/PricingSection'
import ReviewsSection from '@/landing/sections/ReviewsSection'
import TrustSection from '@/landing/sections/TrustSection'
import StatsSection from '@/landing/sections/StatsSection'
import LandingScrollHandler from '@/components/LandingScrollHandler'

export default function LandingPage() {
  const [revealReady, setRevealReady] = useState(false)

  useLayoutEffect(() => {
    setRevealReady(true)
  }, [])

  return (
    <div className={cn('landing-page', revealReady && 'reveal-ready')} data-theme="light">
      <LandingScrollHandler />
      <HeroSection />
      <StatsSection />
      <ProblemSection />
      <FeaturesSection />
      <HowItWorksSection />
      <MethodsSection />
      <AylaSection />
      <ReplacesSection />
      <LibraryExportSection />
      <CurriculumSection />
      <TrustSection />
      <ReviewsSection />
      <PricingSection />
      <SisterPlatformsSection />
      <CtaBandSection />

      <a
        href={MML_APP.ayla}
        className="landing-fab"
        aria-label="Open Ayla or help"
        title="Ayla"
      >
        <AylaIcon alt="" className="landing-fab-ayla h-full w-full" priority={false} />
      </a>
    </div>
  )
}