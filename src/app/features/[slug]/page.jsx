import { permanentRedirect } from 'next/navigation'
import { FEATURE_ITEMS, getFeatureBySlug, getFeaturePath } from '@/data/features'

export function generateStaticParams() {
  return FEATURE_ITEMS.map((feature) => ({ slug: feature.slug }))
}

export default function FeatureSlugRedirectPage({ params }) {
  const slug = params?.slug
  const feature = slug ? getFeatureBySlug(slug) : null
  permanentRedirect(feature ? getFeaturePath(feature.slug) : '/features')
}
