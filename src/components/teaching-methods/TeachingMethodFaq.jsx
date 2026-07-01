'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { useInView } from '@/landing/hooks'
import { cn } from '@/lib/cn'

function FaqCard({ item, index, visible, isOpen, onToggle }) {
  return (
    <article
      className={cn('tm-faq-card', visible && 'tm-faq-card--visible', isOpen && 'tm-faq-card--open')}
      style={{ transitionDelay: visible ? `${index * 90}ms` : undefined }}
    >
      <button
        type="button"
        className="tm-faq-card-trigger"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="tm-faq-card-q">{item.q}</span>
        <ChevronDown
          size={18}
          strokeWidth={2.25}
          className="tm-faq-card-chevron shrink-0"
          aria-hidden
        />
      </button>
      <div className="tm-faq-card-answer-wrap" hidden={!isOpen}>
        <p className="tm-faq-card-a">{item.a}</p>
      </div>
    </article>
  )
}

export default function TeachingMethodFaq({ items }) {
  const [ref, visible] = useInView({ threshold: 0.08 })
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="tm-faq" aria-labelledby="tm-faq-heading" ref={ref}>
      <h2 id="tm-faq-heading" className="tm-section-heading">
        Frequently Asked Questions
      </h2>
      <div className="tm-faq-list" role="list">
        {items.map((item, index) => (
          <FaqCard
            key={item.q}
            item={item}
            index={index}
            visible={visible}
            isOpen={openIndex === index}
            onToggle={() => setOpenIndex((current) => (current === index ? null : index))}
          />
        ))}
      </div>
    </section>
  )
}
