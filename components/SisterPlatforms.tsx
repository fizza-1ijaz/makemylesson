import type { ReactNode } from "react";

const STUDIELY_URL = "https://www.studiely.com";
const LINGUATUDE_URL = "https://linguatude.com";

function ExternalLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="font-semibold text-mm-primary underline decoration-mm-primary/35 underline-offset-2 transition hover:text-mm-primary-dark hover:decoration-mm-primary"
    >
      {children}
    </a>
  );
}

export function SisterPlatforms() {
  return (
    <section className="section-space bg-mm-light" aria-labelledby="sister-platforms-heading">
      <div className="site-container">
        <h2
          id="sister-platforms-heading"
          className="text-center text-xs font-bold uppercase tracking-[0.18em] text-mm-primary"
        >
          Sister Platforms
        </h2>

        <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-2 lg:items-stretch lg:gap-6 xl:gap-8">
          <article className="flex h-full flex-col rounded-2xl border border-mm-primary/20 bg-mm-surface p-6 shadow-sm sm:p-8">
            <header className="flex shrink-0 flex-col gap-3 text-center">
              <p className="text-sm font-bold uppercase tracking-[0.12em] text-mm-primary">
                Studiely – Start Learning Smarter
              </p>
              <h3 className="text-lg font-extrabold text-mm-navy sm:text-xl">
                The student side of the same mission.
              </h3>
            </header>
            <div className="mt-4 flex flex-1 flex-col gap-4 text-base leading-relaxed text-mm-muted">
              <p>
                Make My Lesson is part of the Skyen Solutions family of EdTech platforms — built on the belief that
                quality education should be accessible and affordable for everyone.
              </p>
              <p>
                Our sister platform,{" "}
                <ExternalLink href={STUDIELY_URL}>Studiely</ExternalLink>, is an AI-powered study platform built for
                students across the same curriculum systems Make My Lesson serves. Where Make My Lesson supports the
                teacher preparing the lesson, <ExternalLink href={STUDIELY_URL}>Studiely</ExternalLink> supports the
                student on the other side of it.
              </p>
            </div>
          </article>

          <article className="flex h-full flex-col rounded-2xl border border-mm-primary/20 bg-mm-surface p-6 shadow-sm sm:p-8">
            <header className="flex shrink-0 flex-col gap-3 text-center">
              <p className="text-sm font-bold uppercase tracking-[0.12em] text-mm-primary">
                Linguatude — AI Language Test Preparation
              </p>
              <h3 className="text-lg font-extrabold text-mm-navy sm:text-xl">
                For the learner whose next opportunity depends on an English test.
              </h3>
            </header>
            <div className="mt-4 flex flex-1 flex-col gap-4 text-base leading-relaxed text-mm-muted">
              <p>
                Our second sister platform, <ExternalLink href={LINGUATUDE_URL}>Linguatude</ExternalLink>, is an
                AI-powered English test preparation platform built for learners preparing for internationally
                recognised proficiency examinations — IELTS, TOEFL iBT, PTE Academic, Cambridge B1 Preliminary, and
                Cambridge B2 First.
              </p>
              <p>
                Where Make My Lesson supports the teacher planning the lesson,{" "}
                <ExternalLink href={LINGUATUDE_URL}>Linguatude</ExternalLink> supports the learner whose next opportunity
                depends on passing a high-stakes English test. Two sides of the same commitment to making quality
                education accessible to the people who need it.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
