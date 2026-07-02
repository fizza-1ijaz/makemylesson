import FeatureSectionImage from '@/components/features/FeatureSectionImage'
import TeachingMethodTitle from '@/components/teaching-methods/TeachingMethodTitle'

export default function FeatureHero({ feature, title, intro }) {
  return (
    <header className="tm-hero">
      <div className="tm-hero-content">
        <TeachingMethodTitle title={title} />
        {intro ? <p className="tm-quick-answer">{intro}</p> : null}
      </div>

      <FeatureSectionImage feature={feature} className="tm-hero-visual" imageClassName="tm-hero-img" />
    </header>
  )
}
