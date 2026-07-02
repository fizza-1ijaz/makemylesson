import TeachingMethodSectionImage from '@/components/teaching-methods/TeachingMethodSectionImage'
import TeachingMethodTitle from '@/components/teaching-methods/TeachingMethodTitle'

export default function TeachingMethodHero({ method, title, intro }) {
  return (
    <header className="tm-hero">
      <div className="tm-hero-content">
        <TeachingMethodTitle title={title} />
        {intro ? <p className="tm-quick-answer">{intro}</p> : null}
      </div>

      <TeachingMethodSectionImage method={method} className="tm-hero-visual" imageClassName="tm-hero-img" />
    </header>
  )
}
