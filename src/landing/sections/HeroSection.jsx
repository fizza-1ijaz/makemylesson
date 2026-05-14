import Link from 'next/link'
import { Label, Reveal } from '../shared'
import { MML_APP } from '@/lib/appUrls'

export default function HeroSection() {
  return (
    <section className="hero" id="hero">
      <div className="hero-glow" />
      <div className="hero-grid-bg" />

      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="hero-inner">
          
          {/* LEFT */}
          <div className="hero-left">
            <Reveal>
              <Label center>AI lesson planner for teachers</Label>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="hero-title font-display text-slate-900">
                <span className="hero-title-line">The AI Lesson Planner</span>
                <span className="hero-title-line">and Lesson Plan Generator</span>
                <span className="hero-title-line hero-title-line--last">
                  <em>for Curriculum-Aligned Teaching Packs</em>
                </span>
              </h1>
            </Reveal>

            <Reveal delay={120}>
              <p className="hero-sub hero-sub-lead">
                Your curriculum, your output. Select your route, enter your topic, and get a standards-based, classroom-ready
                pack—lesson plan, AI presentation, classroom activity, and summative assessment with mark scheme—{' '}
                <strong>in minutes, not hours.</strong> Save 2–3 hours per lesson and cut lesson preparation time.
              </p>
            </Reveal>

            <Reveal delay={140}>
              <p className="hero-sub hero-sub-fine">
                Not a generic template—this lesson planning app is built for your exact curriculum. Make My Lesson replaces
                multiple tools with one teaching pack generator: instructional materials, learning objectives, and
                pedagogically sound structure for primary and secondary teachers, heads of department, and early-career
                teachers alike—aligned to GCSE, HSC, IB, Common Core, NGSS, and more.
              </p>
            </Reveal>

            <Reveal delay={220}>
              <div className="hero-ctas">
                <Link href={MML_APP.stage1} className="btn btn-teal btn-lg">
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

                <div className="hero-preview-trust" aria-label="Plan highlights">
                  <span className="hero-preview-trust-item">10 free credits</span>
                  <span className="hero-preview-trust-sep" aria-hidden>
                    |
                  </span>
                  <span className="hero-preview-trust-item">No credit card required</span>
                  <span className="hero-preview-trust-sep" aria-hidden>
                    |
                  </span>
                  <span className="hero-preview-trust-item">71 curriculum routes</span>
                  <span className="hero-preview-trust-sep" aria-hidden>
                    |
                  </span>
                  <span className="hero-preview-trust-item hero-preview-trust-item--regions">
                    Australia · UK · Canada · IB · US
                  </span>
                </div>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  )
}