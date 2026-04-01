function IconContext(props: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={props.className} aria-hidden>
      <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="2" className="text-mm-primary/40" />
      <path
        d="M16 20h16M16 24h10M16 28h14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        className="text-white"
      />
      <circle cx="32" cy="18" r="3" fill="currentColor" className="text-mm-accent" />
    </svg>
  );
}

function IconGenerate(props: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={props.className} aria-hidden>
      <path
        d="M24 8l3 8 8 1-6 5 2 8-7-4-7 4 2-8-6-5 8-1 3-8z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
        className="text-mm-accent"
      />
      <path d="M14 34h20M18 38h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-mm-primary" />
    </svg>
  );
}

function IconPack(props: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={props.className} aria-hidden>
      <rect x="10" y="14" width="28" height="22" rx="3" stroke="currentColor" strokeWidth="2" className="text-mm-primary" />
      <path d="M16 14v-4a4 4 0 014-4h6a4 4 0 014 4v4" stroke="currentColor" strokeWidth="2" className="text-white/80" />
      <path d="M18 24l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-mm-accent" />
    </svg>
  );
}

function IconCurriculum(props: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={props.className} aria-hidden>
      <circle cx="16" cy="24" r="6" stroke="currentColor" strokeWidth="2" className="text-mm-primary" />
      <circle cx="32" cy="18" r="5" stroke="currentColor" strokeWidth="2" className="text-mm-accent" />
      <circle cx="32" cy="32" r="5" stroke="currentColor" strokeWidth="2" className="text-white/70" />
      <path d="M21 24h6M27 20v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-white/40" />
    </svg>
  );
}

function ArrowVector(props: { className?: string }) {
  return (
    <svg viewBox="0 0 64 20" fill="none" className={props.className} aria-hidden>
      <path d="M2 10h54" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" />
      <path d="M48 3l12 7-12 7" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowVectorDown(props: { className?: string }) {
  return (
    <svg viewBox="0 0 20 56" fill="none" className={props.className} aria-hidden>
      <path d="M10 2v44" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" />
      <path d="M3 40l7 12 7-12" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

type StepItem = {
  title: string;
  body: string;
  Icon: (props: { className?: string }) => React.JSX.Element;
  highlight?: boolean;
};

const steps: StepItem[] = [
  {
    title: "Choose your teaching context",
    body: "A teacher selects their curriculum system, grade level, subject, and topic — the exact route they teach.",
    Icon: IconContext,
  },
  {
    title: "Generate a full pack from one topic",
    body: "The platform takes it from there, producing a complete set of teaching materials that cover the full planning and delivery cycle, calibrated to that teacher's specific curriculum route.",
    Icon: IconGenerate,
  },
  {
    title: "Use materials that are ready — not rough drafts",
    body: "Not a generic template. Not a starting point that still takes an hour to finish. Materials are curriculum-faithful, structured, and ready to use.",
    Icon: IconPack,
  },
  {
    title: "Stay true to your curriculum system",
    body: "Every output reflects the language, assessment expectations, and pedagogical standards of the teacher's own curriculum system. A Cambridge IGCSE class should not look the same as an Ontario Grade 10 class — and it will not.",
    Icon: IconCurriculum,
    highlight: true,
  },
];

export function WhatIsMakeMyLesson() {
  return (
    <section
      className="relative overflow-hidden py-10 sm:py-12 lg:py-14"
      aria-labelledby="what-is-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-mm-navy via-[#1a3d5c] to-mm-primary/45"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-mm-accent/25 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-mm-primary/30 blur-3xl"
        aria-hidden
      />

      <div className="site-container relative z-10">
        <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-mm-primary">
          What Is Make My Lesson?
        </p>
        <h2
          id="what-is-heading"
          className="mx-auto mt-3 max-w-4xl text-balance text-center text-[clamp(1.05rem,4vw,2.35rem)] font-extrabold tracking-tight text-white lg:max-w-none lg:whitespace-nowrap lg:text-[clamp(1.25rem,2.2vw,2.45rem)]"
        >
          A complete teaching pack — from a single topic selection.
        </h2>
        <div className="mx-auto mt-3 h-1 max-w-xs rounded-full bg-gradient-to-r from-mm-primary via-mm-accent to-mm-primary" />

        <p className="mx-auto mt-6 max-w-2xl text-center text-sm leading-relaxed text-white/85 sm:text-base">
          Make My Lesson is an AI-powered lesson planning platform built specifically for teachers. It is designed to
          reduce the volume of preparation work without reducing the quality of what gets taught.
        </p>

        <ol
          className="mt-6 flex list-none flex-col gap-0 lg:mt-8 lg:grid lg:grid-cols-4 lg:gap-4"
          aria-label="How teachers use Make My Lesson"
        >
          {steps.map((step, index) => {
            const StepIcon = step.Icon;
            const isLast = index === steps.length - 1;
            return (
              <li key={step.title} className="relative flex w-full min-w-0 flex-col lg:w-auto">
                <div
                  className={`flex min-h-0 w-full flex-col rounded-2xl border p-4 sm:p-5 lg:min-h-[18.5rem] ${
                    step.highlight
                      ? "border-mm-accent/45 bg-gradient-to-b from-mm-accent/15 to-mm-primary/10"
                      : "border-white/12 bg-white/5"
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border-2 shadow-md sm:h-12 sm:w-12 ${
                        step.highlight
                          ? "border-mm-accent/50 bg-gradient-to-br from-mm-accent/25 to-mm-primary/15"
                          : "border-white/20 bg-white/10"
                      }`}
                    >
                      <StepIcon className="h-6 w-6 sm:h-7 sm:w-7" />
                    </div>
                    <span className="font-mono text-xs font-bold tabular-nums text-mm-primary/90 sm:text-sm">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-3 text-sm font-bold leading-snug text-white sm:text-base">{step.title}</h3>
                  <p className="mt-2 flex-1 text-xs leading-relaxed text-white/82 sm:text-sm">{step.body}</p>
                </div>
                {!isLast ? (
                  <>
                    <div className="flex justify-center py-3 lg:hidden" aria-hidden>
                      <ArrowVectorDown className="h-14 w-6 text-mm-accent/85" />
                    </div>
                    <ArrowVector className="pointer-events-none absolute -right-3 top-1/2 hidden h-5 w-12 -translate-y-1/2 text-mm-accent/80 lg:block xl:-right-5 xl:w-14" />
                  </>
                ) : null}
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
