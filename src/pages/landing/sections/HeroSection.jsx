import Link from 'next/link'
import { Label, Reveal } from '../shared'

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-glow" />
      <div className="hero-grid-bg" />

      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="hero-inner">
          
          {/* LEFT */}
          <div className="hero-left">
            <Reveal>
              <Label center>AI-Powered for Teachers</Label>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="hero-title font-display text-slate-900">
                <span className="hero-title-line">The AI Lesson Planner</span>
                <span className="hero-title-line">That Builds Your</span>
                <span className="hero-title-line hero-title-line--last">
                  <em>Complete Teaching Pack</em>
                </span>
              </h1>
            </Reveal>

            <Reveal delay={120}>
              <p className="hero-sub hero-sub-lead">
                Select your curriculum. Enter your topic. Get a lesson plan, classroom presentation, student activity
                and summative assessment — <strong>in minutes. Not hours.</strong>
              </p>
            </Reveal>

            <Reveal delay={140}>
              <p className="hero-sub hero-sub-fine">
                Make My Lesson is not a generic AI writing tool. It is a purpose-built lesson planning platform for
                teachers who are tired of spending Sunday evenings building resources from scratch. Every teaching pack
                is generated fresh, aligned to your exact curriculum route, and ready to use in your classroom the moment
                it lands.
              </p>
            </Reveal>

            <Reveal delay={220}>
              <div className="hero-ctas">
                <Link href="/lesson/stage1" className="btn btn-teal btn-lg">
                  Build Your First Teaching Pack Free
                  <svg width={16} height={16} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
                <a href="#how-it-works" className="btn btn-ghost btn-lg">
                  See how it works ↓
                </a>
              </div>
            </Reveal>

            <Reveal delay={280}>
              <div className="hero-trust">
                <div className="trust-item">
                  <svg width={14} height={14} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  10 free credits
                </div>
                <div className="trust-item">
                  <svg width={14} height={14} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  No credit card required
                </div>
                <div className="trust-item">
                  <svg width={14} height={14} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  71 curriculum routes
                </div>
                <div className="trust-item">
                  <svg width={14} height={14} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Australia · UK · Canada · IB · US
                </div>
              </div>
            </Reveal>
          </div>

          {/* RIGHT */}
          <Reveal delay={200} className="hero-right-wrap">
            <div className="hero-right hero-right-visual">
              <div className="hero-visual">
                <div className="hero-floating">
                  <span className="hero-floating-main" aria-hidden>
                    ⏱ 2–3 hours saved
                  </span>
                  <span className="hero-floating-sub">per complete teaching pack</span>
                </div>

                <div className="hero-card">
                  <div className="hero-card-header">
                    <span className="hch-dot" />
                    <span className="hch-title">Lesson Plan Generated</span>
                    <span className="stage-label">Stage 1 · 1 credit</span>
                  </div>

                  <h3 className="hero-card-h3">Year 10 Physics — Newton&apos;s Laws of Motion</h3>
                  <p className="hero-card-meta">
                    NSW Secondary · 45 minutes · Inquiry-Based Learning
                  </p>

                  <div className="hero-section-row">
                    <span className="hsr-label">Learning Objectives</span>
                    <div className="hsr-bar">
                      <div className="hsr-fill hsr-fill--d0" style={{ width: '88%' }} />
                    </div>
                  </div>
                  <div className="hero-section-row">
                    <span className="hsr-label">Teaching Sequence</span>
                    <div className="hsr-bar">
                      <div className="hsr-fill hsr-fill--d1" style={{ width: '95%' }} />
                    </div>
                  </div>
                  <div className="hero-section-row">
                    <span className="hsr-label">Differentiation</span>
                    <div className="hsr-bar">
                      <div className="hsr-fill hsr-fill--d2" style={{ width: '79%' }} />
                    </div>
                  </div>
                  <div className="hero-section-row">
                    <span className="hsr-label">Assessment for Learning</span>
                    <div className="hsr-bar">
                      <div className="hsr-fill hsr-fill--d3" style={{ width: '85%' }} />
                    </div>
                  </div>

                  <div className="hero-card-footer">
                    <span className="hsr-label hsr-label--block">Ready to continue:</span>
                    <div className="stage-pills">
                      <span className="stage-pill pill-sky">📊 Presentation</span>
                      <span className="stage-pill pill-gold">✏️ Activity</span>
                      <span className="stage-pill pill-white">📝 Assessment</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  )
}