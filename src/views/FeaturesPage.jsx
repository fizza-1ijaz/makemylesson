'use client'

import { Suspense, startTransition, useCallback, useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import ActivityCta from '@/components/features/ActivityCta'
import ActivityHowItWorks from '@/components/features/ActivityHowItWorks'
import ActivityMethodShape from '@/components/features/ActivityMethodShape'
import ActivityNextStages from '@/components/features/ActivityNextStages'
import ActivityStageHero from '@/components/features/ActivityStageHero'
import ActivityTakeAnywhere from '@/components/features/ActivityTakeAnywhere'
import ActivityTeacherCopy from '@/components/features/ActivityTeacherCopy'
import ActivityTypes from '@/components/features/ActivityTypes'
import AssessmentCta from '@/components/features/AssessmentCta'
import AssessmentCurriculumWording from '@/components/features/AssessmentCurriculumWording'
import AssessmentExportCircle from '@/components/features/AssessmentExportCircle'
import AssessmentHowItWorks from '@/components/features/AssessmentHowItWorks'
import AssessmentMarkScheme from '@/components/features/AssessmentMarkScheme'
import AssessmentPaperStyles from '@/components/features/AssessmentPaperStyles'
import AssessmentStageHero from '@/components/features/AssessmentStageHero'
import FeatureStageSelector from '@/components/features/FeatureStageSelector'
import LessonPlanCognitiveBalance from '@/components/features/LessonPlanCognitiveBalance'
import LessonPlanCta from '@/components/features/LessonPlanCta'
import LessonPlanDifferentiation from '@/components/features/LessonPlanDifferentiation'
import LessonPlanHowItWorks from '@/components/features/LessonPlanHowItWorks'
import LessonPlanNextStages from '@/components/features/LessonPlanNextStages'
import LessonPlanStageHero from '@/components/features/LessonPlanStageHero'
import LessonPlanTakeAnywhere from '@/components/features/LessonPlanTakeAnywhere'
import LessonPlanWhatsInside from '@/components/features/LessonPlanWhatsInside'
import SlideDeckCta from '@/components/features/SlideDeckCta'
import SlideDeckDuration from '@/components/features/SlideDeckDuration'
import SlideDeckHowItWorks from '@/components/features/SlideDeckHowItWorks'
import SlideDeckNextStages from '@/components/features/SlideDeckNextStages'
import SlideDeckSequence from '@/components/features/SlideDeckSequence'
import SlideDeckSpeakerNotes from '@/components/features/SlideDeckSpeakerNotes'
import SlideDeckStageHero from '@/components/features/SlideDeckStageHero'
import {
  FEATURE_STAGE_ITEMS,
  getFeatureBySlug,
  getFeaturePath,
} from '@/data/features'

const DEFAULT_STAGE = FEATURE_STAGE_ITEMS[0].slug

function resolveStage(stage) {
  return getFeatureBySlug(stage) ? stage : DEFAULT_STAGE
}

function LessonPlanStage() {
  return (
    <>
      <div className="mx-auto max-w-[1200px] px-4 pb-2 pt-6 sm:px-6 sm:pt-8 md:px-8">
        <LessonPlanStageHero />
        <LessonPlanHowItWorks />
      </div>
      <LessonPlanWhatsInside />
      <LessonPlanDifferentiation />
      <LessonPlanCognitiveBalance />
      <LessonPlanTakeAnywhere />
      <LessonPlanNextStages />
      <LessonPlanCta />
    </>
  )
}

function SlideDeckStage() {
  return (
    <>
      <div className="mx-auto max-w-[1200px] px-4 pb-2 pt-6 sm:px-6 sm:pt-8 md:px-8">
        <SlideDeckStageHero />
      </div>
      <div className="h-10 bg-white sm:h-14" aria-hidden />
      <SlideDeckHowItWorks />
      <SlideDeckSequence />
      <SlideDeckSpeakerNotes />
      <SlideDeckDuration />
      <SlideDeckNextStages />
      <SlideDeckCta />
    </>
  )
}

function ActivityStage() {
  return (
    <>
      <div className="mx-auto max-w-[1200px] px-4 pb-2 pt-6 sm:px-6 sm:pt-8 md:px-8">
        <ActivityStageHero />
      </div>
      <ActivityHowItWorks />
      <ActivityTypes />
      <ActivityTeacherCopy />
      <ActivityMethodShape />
      <ActivityTakeAnywhere />
      <ActivityNextStages />
      <ActivityCta />
    </>
  )
}

function AssessmentStage() {
  return (
    <>
      <div className="mx-auto max-w-[1200px] px-4 pb-2 pt-6 sm:px-6 sm:pt-8 md:px-8">
        <AssessmentStageHero />
      </div>
      <AssessmentHowItWorks />
      <AssessmentPaperStyles />
      <AssessmentMarkScheme />
      <AssessmentCurriculumWording />
      <AssessmentExportCircle />
      <AssessmentCta />
    </>
  )
}

function StageContent({ slug }) {
  switch (slug) {
    case 'presentation-maker':
      return <SlideDeckStage />
    case 'classroom-activities':
      return <ActivityStage />
    case 'test-generator':
      return <AssessmentStage />
    case 'lesson-plan-generator':
    default:
      return <LessonPlanStage />
  }
}

function FeaturesPageInner() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const urlStage = resolveStage(searchParams.get('stage'))
  const [activeSlug, setActiveSlug] = useState(urlStage)

  useEffect(() => {
    setActiveSlug(urlStage)
  }, [urlStage])

  const setStage = useCallback(
    (slug) => {
      const next = resolveStage(slug)
      if (next === activeSlug) return

      setActiveSlug(next)
      startTransition(() => {
        router.replace(getFeaturePath(next), { scroll: false })
      })

      requestAnimationFrame(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      })
    },
    [activeSlug, router],
  )

  return (
    <div className="tm-page-wrap min-h-[calc(100vh-4rem)] bg-white">
      <FeatureStageSelector activeSlug={activeSlug} onSelect={setStage} />
      <div key={activeSlug}>
        <StageContent slug={activeSlug} />
      </div>
    </div>
  )
}

function FeaturesPageFallback() {
  return (
    <div className="tm-page-wrap min-h-[calc(100vh-4rem)] bg-white">
      <FeatureStageSelector activeSlug={DEFAULT_STAGE} />
      <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 md:px-8" aria-hidden>
        <div className="h-40 animate-pulse rounded-[28px] bg-[#ade5df]/60" />
      </div>
    </div>
  )
}

export default function FeaturesPage() {
  return (
    <Suspense fallback={<FeaturesPageFallback />}>
      <FeaturesPageInner />
    </Suspense>
  )
}
