'use client'

import { BookOpen, Compass, GraduationCap, Lightbulb, Sparkles, Target } from 'lucide-react'
import { useInView } from '@/landing/hooks'
import { cn } from '@/lib/cn'
import { parseParagraphForCard } from '@/lib/teachingMethodCard'
import {
  builderStepTitle,
  getSectionLayout,
  sectionAnchorId,
} from '@/lib/teachingMethodLayout'

const CARD_ICONS = [Lightbulb, BookOpen, Target, Compass, Sparkles, GraduationCap]

function SectionHeader({ heading, visible }) {
  return (
    <h2 className={cn('tm-section-heading', visible && 'tm-section-heading--visible')}>{heading}</h2>
  )
}

function ContentCard({ paragraph, index, visible, sectionIndex }) {
  const { title, body } = parseParagraphForCard(paragraph)
  const Icon = CARD_ICONS[(sectionIndex + index) % CARD_ICONS.length]
  const displayBody = title ? body : paragraph

  return (
    <article
      className={cn('tm-content-card', visible && 'tm-content-card--visible')}
      style={{ transitionDelay: visible ? `${120 + index * 90}ms` : undefined }}
    >
      <div className="tm-content-card-icon" aria-hidden>
        <Icon size={18} strokeWidth={2} />
      </div>
      {title ? <h3 className="tm-content-card-title">{title}</h3> : null}
      <p className="tm-content-card-body">{displayBody}</p>
    </article>
  )
}

function IntroLayout({ section, visible, sectionIndex }) {
  return (
    <div className="tm-intro-grid">
      <div className="tm-section-plain">
        {section.paragraphs.map((paragraph, index) => (
          <p
            key={`${section.heading}-plain-${index}`}
            className={cn('tm-paragraph', visible && 'tm-paragraph--visible')}
            style={{ transitionDelay: visible ? `${80 + index * 60}ms` : undefined }}
          >
            {paragraph}
          </p>
        ))}
      </div>
      <div className="tm-definition-panel">
        <div className="tm-model-flow">
          {section.paragraphs.map((paragraph, index) => {
            const { title, body } = parseParagraphForCard(paragraph)
            const Icon = CARD_ICONS[(sectionIndex + index) % CARD_ICONS.length]
            return (
              <div
                key={`${section.heading}-flow-${index}`}
                className={cn('tm-flow-item', visible && 'tm-flow-item--visible')}
                style={{ transitionDelay: visible ? `${140 + index * 80}ms` : undefined }}
              >
                <div className="tm-flow-icon" aria-hidden>
                  <Icon size={22} strokeWidth={2} />
                </div>
                <div>
                  <h3 className="tm-flow-title">{title ?? `Key point ${index + 1}`}</h3>
                  <p className="tm-flow-body">{body || paragraph}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

function CompareLayout({ section, visible }) {
  const tags = ['Key idea', 'In practice']

  return (
    <div className="tm-compare-grid">
      {section.paragraphs.map((paragraph, index) => {
        const { title, body } = parseParagraphForCard(paragraph)
        return (
          <article
            key={`${section.heading}-compare-${index}`}
            className={cn(
              'tm-compare-card',
              index === 1 && 'tm-compare-card--accent',
              visible && 'tm-compare-card--visible',
            )}
            style={{ transitionDelay: visible ? `${100 + index * 100}ms` : undefined }}
          >
            <span className="tm-compare-tag">{tags[index] ?? 'Insight'}</span>
            {title ? <h3 className="tm-compare-title">{title}</h3> : null}
            <p className="tm-compare-body">{body || paragraph}</p>
          </article>
        )
      })}
    </div>
  )
}

function BuilderLayout({ section, visible }) {
  return (
    <div className="tm-step-list">
      {section.paragraphs.map((paragraph, index) => (
        <div
          key={`${section.heading}-step-${index}`}
          className={cn('tm-step-mini', visible && 'tm-step-mini--visible')}
          style={{ transitionDelay: visible ? `${100 + index * 90}ms` : undefined }}
        >
          <div className="tm-step-num">{index + 1}</div>
          <div>
            <h3 className="tm-step-title">{builderStepTitle(index)}</h3>
            <p className="tm-step-body">{paragraph}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

function WhenUseLayout({ section, visible, sectionIndex }) {
  return (
    <div className={cn('tm-use-grid', section.paragraphs.length === 1 && 'tm-use-grid--single')}>
      {section.paragraphs.map((paragraph, index) => {
        const { title, body } = parseParagraphForCard(paragraph)
        const Icon = CARD_ICONS[(sectionIndex + index) % CARD_ICONS.length]
        return (
          <article
            key={`${section.heading}-use-${index}`}
            className={cn('tm-use-card', visible && 'tm-use-card--visible')}
            style={{ transitionDelay: visible ? `${100 + index * 90}ms` : undefined }}
          >
            <div className="tm-use-icon" aria-hidden>
              <Icon size={22} strokeWidth={2} />
            </div>
            <h3 className="tm-use-title">{title ?? `Guideline ${index + 1}`}</h3>
            <p className="tm-use-body">{body || paragraph}</p>
          </article>
        )
      })}
    </div>
  )
}

function ProofLayout({ section, visible, entity, pageType = 'teaching-method' }) {
  const category =
    pageType === 'feature' ? 'Features' : entity?.columnHeading ?? 'Teaching Methods'
  const pills = [entity?.label, category, 'Australian Curriculum', 'Make My Lesson'].filter(Boolean)

  return (
    <div className="tm-proof-layout">
      <div className="tm-proof-highlight">
        <p className="tm-proof-highlight-label">Built for Australian classrooms</p>
        <p className="tm-proof-highlight-text">
          Curriculum-aligned lesson structures designed with input from teachers who use this approach
          every day.
        </p>
      </div>
      <div className="tm-proof-content">
        {section.paragraphs.map((paragraph, index) => (
          <p
            key={`${section.heading}-proof-${index}`}
            className={cn('tm-paragraph', visible && 'tm-paragraph--visible')}
            style={{ transitionDelay: visible ? `${80 + index * 60}ms` : undefined }}
          >
            {paragraph}
          </p>
        ))}
        <div className="tm-proof-pills">
          {pills.map((pill) => (
            <span key={pill} className="tm-proof-pill">
              {pill}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function TeachingMethodSection({
  section,
  sectionIndex = 0,
  method,
  pageType = 'teaching-method',
}) {
  const [ref, visible] = useInView({ threshold: 0.1 })
  const layout = getSectionLayout(section.heading, section.paragraphs.length, {
    pageType,
    sectionIndex,
  })
  const hasMultiple = section.paragraphs.length > 1
  const isSoft = layout === 'compare' || layout === 'when-use'
  const entity = method

  return (
    <section
      id={sectionAnchorId(section.heading)}
      className={cn('tm-section', isSoft && 'tm-section--soft', visible && 'tm-section--visible')}
      ref={ref}
    >
      <SectionHeader heading={section.heading} visible={visible} />

      {layout === 'intro' && (
        <IntroLayout section={section} visible={visible} sectionIndex={sectionIndex} />
      )}
      {layout === 'compare' && <CompareLayout section={section} visible={visible} />}
      {layout === 'builder' && <BuilderLayout section={section} visible={visible} />}
      {layout === 'when-use' && (
        <WhenUseLayout section={section} visible={visible} sectionIndex={sectionIndex} />
      )}
      {layout === 'proof' && (
        <ProofLayout section={section} visible={visible} entity={entity} pageType={pageType} />
      )}
      {layout === 'cards' && (
        <div className={cn('tm-content-cards', hasMultiple && 'tm-content-cards--multi')}>
          {section.paragraphs.map((paragraph, index) => (
            <ContentCard
              key={`${section.heading}-${index}`}
              paragraph={paragraph}
              index={index}
              visible={visible}
              sectionIndex={sectionIndex}
            />
          ))}
        </div>
      )}
    </section>
  )
}
