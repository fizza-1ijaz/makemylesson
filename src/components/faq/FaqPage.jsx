'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle } from 'lucide-react'
import { cn } from '@/lib/cn'
import Container, { pageShellClass, sectionYClass } from '@/components/layout/Container'

import { faqItems } from '@/data/faqItems'
import { FAQ_META, AYLA_CATEGORY_INTRO } from '@/data/faqMeta'

function groupFaqByCategory(items) {
  const map = new Map()
  for (const item of items) {
    if (!map.has(item.cat)) {
      map.set(item.cat, { id: item.cat, title: item.catTitle, items: [] })
    }
    map.get(item.cat).items.push(item)
  }
  return [...map.values()]
}

function FaqAccordionItem({ item, isOpen, onToggle }) {
  const paragraphs = item.a.split(/\n\n+/).filter(Boolean)

  return (
    <div className="border-b border-slate-200 last:border-b-0">
      <h3 className="m-0 w-full font-display text-[15px] font-normal leading-snug text-slate-900 sm:text-[16px]">
        <button
          type="button"
          onClick={onToggle}
          className="flex w-full items-start gap-3 py-4 text-left transition-colors hover:bg-slate-50 sm:gap-4 sm:py-5"
          aria-expanded={isOpen}
        >
          <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-mml-teal/15 text-[11px] font-bold text-mml-teal-dark">
            Q{item.id}
          </span>
          <span className="min-w-0 flex-1">{item.q}</span>
          <ChevronDown
            className={cn(
              'mt-1 h-5 w-5 shrink-0 text-slate-500 transition-transform duration-200',
              isOpen && 'rotate-180',
            )}
            aria-hidden
          />
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-5 pl-[44px] pr-2 sm:pl-[52px]">
              <div className="space-y-3 text-[13.5px] leading-relaxed text-slate-600 sm:text-sm">
                {paragraphs.map((p, i) => (
                  <p key={i} className="whitespace-pre-wrap">
                    {p.trim()}
                  </p>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FaqPage() {
  const categories = useMemo(() => groupFaqByCategory(faqItems), [])
  const [openId, setOpenId] = useState(null)

  return (
    <div className={cn(pageShellClass, 'border-slate-200 bg-white')}>
      <Container variant="content" className={cn(sectionYClass, 'relative pb-20 lg:pb-28')}>
        <header className="text-center">
          <h1 className="font-display text-[clamp(28px,5vw,44px)] font-normal leading-[1.1] tracking-tight text-slate-900">
            {FAQ_META.title}
          </h1>
          {FAQ_META.subheading ? (
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
              {FAQ_META.subheading}
            </p>
          ) : null}
        </header>

        <nav
          className="sticky top-14 z-20 -mx-1 mt-8 mb-8 flex gap-2 overflow-x-auto pb-1 scrollbar-thin sm:flex-wrap sm:justify-center"
          aria-label="FAQ categories"
        >
          {categories.map((cat) => (
            <a
              key={cat.id}
              href={`#${cat.id}`}
              className="shrink-0 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-[11px] font-medium text-slate-700 transition-colors hover:border-mml-teal/40 hover:bg-mml-teal/10 hover:text-slate-900 sm:text-xs"
            >
              {cat.title.replace(/^Category \d+ — /, '')}
            </a>
          ))}
        </nav>

        <div className="space-y-12 lg:space-y-16">
          {categories.map((cat) => (
            <section key={cat.id} id={cat.id} className="scroll-mt-28">
              <div className="mb-4 flex items-start gap-3 sm:mb-6">
                <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-mml-teal/15 text-mml-teal-dark">
                  <HelpCircle className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <h2 className="font-display text-[clamp(18px,2.5vw,24px)] font-normal leading-tight text-slate-900">
                    {cat.title}
                  </h2>
                  {cat.id === 'cat4' && (
                    <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600">{AYLA_CATEGORY_INTRO}</p>
                  )}
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50/80 px-2 shadow-sm sm:px-4">
                {cat.items.map((item) => (
                  <FaqAccordionItem
                    key={item.id}
                    item={item}
                    isOpen={openId === item.id}
                    onToggle={() => setOpenId((prev) => (prev === item.id ? null : item.id))}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>

        <p className="mt-14 text-center text-[13px] text-slate-600">
          Still stuck?{' '}
          <Link href="/contact" className="font-medium text-mml-teal-dark underline-offset-2 hover:text-mml-teal hover:underline">
            Contact us
          </Link>{' '}
          or explore{' '}
          <Link href="/pricing" className="font-medium text-mml-teal-dark underline-offset-2 hover:text-mml-teal hover:underline">
            pricing
          </Link>
          .
        </p>
      </Container>
    </div>
  )
}
