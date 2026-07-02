import Image from 'next/image'
import { cn } from '@/lib/cn'
import { getTeachingMethodHeroImagePath } from '@/data/teachingMethods'

export default function TeachingMethodSectionImage({
  method,
  className = 'tm-section-visual',
  imageClassName = 'tm-section-img',
}) {
  const imageSrc = getTeachingMethodHeroImagePath(method)
  if (!imageSrc) return null

  return (
    <div className={cn(className)}>
      <Image
        src={imageSrc}
        alt={`${method.label} teaching method illustration`}
        fill
        className={imageClassName}
        sizes="(max-width: 768px) 100vw, 42vw"
        priority
      />
    </div>
  )
}
