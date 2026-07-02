/** Feature pages linked from the navbar Features dropdown. */

export const FEATURES_BASE = '/features'

export const FEATURE_ITEMS = [
  {
    slug: 'lesson-plan-generator',
    label: 'AI Lesson Plan Generator',
    title: 'AI Lesson Plan Generator for Teachers',
    heroImage: 'AI Planner.png',
    description:
      "Make My Lesson is an AI lesson plan generator that helps teachers create curriculum-aligned lesson plans in minutes instead of hours. It's built for Australian classrooms and aligns automatically with the Australian Curriculum.",
  },
  {
    slug: 'test-generator',
    label: 'AI Test Generator',
    title: 'AI Test Generator for Teachers',
    heroImage: 'Ai test.png',
    description:
      'Make My Lesson is an AI test generator that helps teachers create formative and summative assessments, quizzes, and question papers in minutes, fully aligned with Australian curriculum standards.',
  },
  {
    slug: 'presentation-maker',
    label: 'AI Presentation Maker',
    title: 'AI Presentation Maker for Teachers',
    heroImage: 'Ai presentation.png',
    description:
      'Make My Lesson is an AI presentation maker for teachers that turns lesson topics into classroom-ready slides in minutes, fully aligned with Australian curriculum content.',
  },
  {
    slug: 'classroom-activities',
    label: 'AI Classroom Activities',
    title: 'AI Classroom Activity Generator for Teachers',
    heroImage: 'AI Classroom Activity.png',
    description:
      'Make My Lesson is an AI classroom activity generator that helps teachers create engaging, curriculum-aligned activities in minutes, designed specifically for Australian classrooms.',
  },
]

export function getFeatureBySlug(slug) {
  return FEATURE_ITEMS.find((item) => item.slug === slug) ?? null
}

export function getFeaturePath(slug) {
  return `${FEATURES_BASE}/${slug}`
}

export function isFeaturesPath(pathname) {
  return pathname === FEATURES_BASE || pathname.startsWith(`${FEATURES_BASE}/`)
}

export function getFeatureHeroImagePath(feature) {
  if (!feature?.heroImage) return null
  return `/features-images/${encodeURIComponent(feature.heroImage).replace(/%2F/g, '/')}`
}
