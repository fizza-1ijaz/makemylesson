'use client'

import AylaIcon from '@/components/AylaIcon'
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

export default function LandingPage() {
  return (
    <div className="landing-page" data-theme="light">
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

      {/* Replace href when you have the target URL */}
      <a
        href="#"
        className="landing-fab"
        aria-label="Open Ayla or help"
        title="Ayla"
      >
        <AylaIcon width={44} height={44} alt="" className="landing-fab-ayla" priority={false} />
      </a>
    </div>
  )
}