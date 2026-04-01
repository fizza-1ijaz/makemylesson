import { EmailForm } from "./EmailForm";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section className="hero hero--full flex shrink-0 flex-col" aria-labelledby="hero-heading">
      <div className="hero-glow" aria-hidden />
      <div className="hero-grid-bg" aria-hidden />
      <div className="W">
        <div className="hero-inner hero-inner--centered">
          <div className="hero-left mx-auto w-full max-w-3xl text-center">
            <Reveal>
              <h1 id="hero-heading" className="hero-heading-funky">
                <span className="hero-soon-cluster">
                  <span className="hero-soon-pop" aria-hidden>
                    Coming Soon
                  </span>
                  <span className="hero-soon-main">Coming Soon</span>
                </span>
                <span className="hero-taglines">
                  <span className="hero-line-sm">Less Time Planning.</span>
                  <span className="hero-line-sm">More Time Teaching.</span>
                </span>
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="hero-sub">
                Make My Lesson is an AI-powered lesson planning platform built for teachers.
                Select your curriculum, type your topic, and receive a complete set of
                classroom-ready teaching materials — built to your exact curriculum route and
                grade level.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-0 flex w-full flex-col items-center gap-4 lg:mt-6">
                <p className="max-w-md px-1 text-center text-lg font-semibold leading-snug text-white/85 lg:px-0 lg:text-base">
                  Be the first to know when we launch.
                </p>
                <EmailForm variant="hero" />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
