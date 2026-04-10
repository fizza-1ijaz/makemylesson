'use client'

import { useState } from 'react'
import { Check, Star, Zap, Shield, Download, Globe, BookOpen, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/cn'

const PLANS = [
  {
    id: 'month1',
    period: '1 Month',
    price: 4.99,
    unit: 'per month',
    tag: null,
    best: false,
  },
  {
    id: 'month3',
    period: '3 Months',
    original: 49.99,
    price: 11.99,
    unit: 'per 3 months',
    tag: 'Most Popular',
    best: true,
    savings: 'Save $14',
  },
  {
    id: 'month6',
    period: '6 Months',
    price: 19.99,
    unit: 'per 6 months',
    tag: null,
    best: false,
    savings: 'Save 60%',
  },
  {
    id: 'year1',
    period: '1 Year',
    price: 29.99,
    unit: 'per year',
    tag: null,
    best: false,
    savings: 'Best value',
  },
]

const PRO_FEATURES = [
  { icon: <Zap size={15} />, label: 'AI-powered Full Lesson Kits' },
  { icon: <BookOpen size={15} />, label: 'Interactive Worksheets & Quizzes' },
  { icon: <Star size={15} />, label: 'Unlimited Lesson Generations' },
  { icon: <Download size={15} />, label: 'Export to Google, LMS & Print' },
  { icon: <Shield size={15} />, label: 'Advanced AI Editing & Differentiation' },
  { icon: <Globe size={15} />, label: 'Priority AI Processing' },
]

export default function PricingPage() {
  const [selected, setSelected] = useState('month3')

  return (
    <div className="min-h-[calc(100vh-56px)] bg-mml-navy px-6 pb-20 pt-12">
      <div className="mx-auto flex max-w-[860px] flex-col gap-7 animate-pp-up">
        <div className="text-center">
          <div className="mb-3.5 flex items-center justify-center gap-2 font-mono text-[11px] font-medium uppercase tracking-[2px] text-mml-teal">
            <span className="h-px w-4 bg-mml-teal" />
            Pricing
            <span className="h-px w-4 bg-mml-teal" />
          </div>
          <h1 className="mb-3 font-display text-[clamp(30px,4.5vw,50px)] font-normal leading-tight tracking-tight text-white">
            Choose the plan
            <br />
            <em className="italic text-mml-teal">right for you.</em>
          </h1>
          <p className="text-base font-light leading-relaxed text-white">
            Start free. Upgrade when you&apos;re ready. Cancel anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {PLANS.map((p, i) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setSelected(p.id)}
              style={{ animationDelay: `${i * 60}ms` }}
              className={cn(
                'animate-pp-up relative cursor-pointer rounded-2xl border-[1.5px] bg-mml-navy-card p-5 pb-5 text-left transition-all duration-200 hover:-translate-y-1 hover:shadow-mml',
                p.best && 'border-mml-teal bg-mml-teal/10 shadow-[0_0_0_1px_rgba(212,160,18,0.35)]',
                selected === p.id && 'border-mml-teal shadow-[0_0_0_3px_rgba(212,160,18,0.18)]',
                !p.best && selected !== p.id && 'border-white/10',
              )}
            >
              {p.tag && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-mml-teal px-3 py-1 text-[9.5px] font-bold uppercase tracking-wide text-mml-navy">
                  {p.tag}
                </div>
              )}
              <div className="mb-3 font-mono text-[10.5px] font-medium uppercase tracking-wide text-white">
                {p.period}
              </div>
              {p.original != null && (
                <div className="mb-0.5 text-xs text-white line-through">${p.original}</div>
              )}
              <div className="mb-0.5 flex items-baseline gap-0.5">
                <span className="mt-1.5 self-start font-display text-lg text-white">$</span>
                <span
                  className={cn(
                    'font-display text-[clamp(28px,3vw,36px)] font-normal tracking-tight text-white',
                    p.best && 'text-mml-teal',
                  )}
                >
                  {p.price}
                </span>
              </div>
              <div className="mb-2.5 text-[11.5px] font-light leading-snug text-white">{p.unit}</div>
              {p.savings && (
                <div className="mb-3.5 inline-block rounded-full border border-green-500/20 bg-green-500/10 px-2 py-0.5 text-[10.5px] font-bold text-green-400">
                  {p.savings}
                </div>
              )}
              <div
                className={cn(
                  'mx-auto mt-2 flex h-[18px] w-[18px] items-center justify-center rounded-full border-[1.5px] bg-mml-navy-mid transition-colors',
                  selected === p.id ? 'border-mml-teal bg-mml-teal text-mml-navy' : 'border-white/15',
                )}
              >
                {selected === p.id && <Check size={10} />}
              </div>
            </button>
          ))}
        </div>

        <div className="rounded-2xl border border-white/10 bg-mml-navy-card p-6 shadow-mml">
          <div className="mb-5 flex flex-wrap items-center gap-2.5">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-amber-500/20 bg-amber-500/10 text-amber-500">
              <Star size={15} fill="currentColor" />
            </div>
            <span className="flex-1 font-display text-lg text-white">Everything in PRO</span>
            <span className="rounded-full border border-mml-teal/30 bg-mml-teal/10 px-2.5 py-0.5 text-[10.5px] font-bold tracking-wide text-mml-teal">
              All plans include
            </span>
          </div>
          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            {PRO_FEATURES.map((f, i) => (
              <div
                key={i}
                className="flex items-center gap-2.5 rounded-lg border border-white/10 bg-mml-navy-mid px-3 py-2.5 transition-colors hover:border-mml-teal"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-mml-teal/30 bg-mml-teal/10 text-mml-teal">
                  {f.icon}
                </span>
                <span className="text-[13px] font-normal text-white">{f.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-white/10 bg-mml-navy-mid px-5 py-4">
          <span className="text-[13px] font-light text-white">Accepted payments</span>
          <div className="flex flex-wrap gap-2">
            {['VISA', 'Mastercard', 'PayPal', 'Apple Pay'].map((m) => (
              <div
                key={m}
                className="rounded-md border border-white/10 bg-mml-navy-card px-3.5 py-1.5 font-mono text-[11px] font-bold tracking-wide text-white"
              >
                {m}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2.5">
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-[10px] bg-mml-teal px-8 py-3.5 font-sans text-[15px] font-semibold text-mml-navy transition-colors hover:bg-mml-teal-dark"
          >
            Get Started <ArrowRight size={15} />
          </button>
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-[10px] border-[1.5px] border-white/15 bg-transparent px-6 py-3.5 font-sans text-[15px] font-semibold text-white transition-colors hover:border-mml-teal hover:text-mml-teal"
          >
            ✏️ Customize
          </button>
        </div>

        <div className="flex items-center justify-center gap-2 text-[13px] font-light text-white">
          <Shield size={14} className="shrink-0 text-mml-teal" />
          <span>30-day money-back guarantee. No questions asked.</span>
        </div>
      </div>
    </div>
  )
}
