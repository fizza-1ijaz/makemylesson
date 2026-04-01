function IconNewTeacher(props: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={props.className} aria-hidden>
      <path
        d="M12 28V14l8-5 8 5v14"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M20 9v4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      <path d="M14 18h12M14 22h8" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      <circle cx="20" cy="31" r="2.5" fill="currentColor" />
    </svg>
  );
}

function IconExperienced(props: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={props.className} aria-hidden>
      <circle cx="20" cy="20" r="11" stroke="currentColor" strokeWidth="1.75" />
      <path d="M20 14v7l5 3" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 20h3M28 20h3M20 9v3M20 28v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.45" />
    </svg>
  );
}

function IconInternational(props: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={props.className} aria-hidden>
      <circle cx="20" cy="20" r="12" stroke="currentColor" strokeWidth="1.75" />
      <path
        d="M8 20h24M20 8c3 3 4 6 4 12s-1 9-4 12M20 8c-3 3-4 6-4 12s1 9 4 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconLeads(props: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={props.className} aria-hidden>
      <circle cx="14" cy="16" r="4" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="26" cy="16" r="4" stroke="currentColor" strokeWidth="1.75" />
      <path d="M8 30c1.5-4 5.5-6 12-6s10.5 2 12 6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      <path d="M20 10v4M20 22v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}

const cards = [
  {
    category: "Teachers new to the profession",
    body: "Teachers who are new to the profession and need a reliable, curriculum-aligned scaffold for planning — without starting from a blank page every time.",
    Icon: IconNewTeacher,
  },
  {
    category: "Experienced teachers",
    body: "Experienced teachers who know their curriculum well but want to spend less time on preparation and more time on the work that only they can do.",
    Icon: IconExperienced,
  },
  {
    category: "International school teachers (IB)",
    body: "International school teachers working across IB programmes who need materials that reflect the specific demands of inquiry-based, criterion-referenced learning.",
    Icon: IconInternational,
  },
  {
    category: "Heads of department & curriculum leads",
    body: "Heads of department and curriculum leads who want consistent, high-quality planning tools available across their teams.",
    Icon: IconLeads,
  },
] as const;

const iconClass = "h-10 w-10 text-[#3ABFB1]";

export function WhoIsItFor() {
  return (
    <section className="section-space -mt-[5px] bg-mm-light" aria-labelledby="who-for-heading">
      <div className="site-container">
        <p className="text-center text-xs font-bold uppercase tracking-[0.18em] text-mm-primary">Who Is It For?</p>
        <h2
          id="who-for-heading"
          className="ds-h2 mx-auto mt-3 max-w-4xl text-balance text-center font-extrabold text-mm-navy"
        >
          Built for every teacher. Particularly useful for these ones.
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-center text-base leading-relaxed text-mm-muted">
          Make My Lesson is built for classroom teachers across all year levels and curriculum systems. It is
          particularly well suited to:
        </p>

        <ul className="mt-10 grid list-none grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
          {cards.map((card, index) => {
            const CardIcon = card.Icon;
            return (
              <li key={`who-for-${index}`}>
                <article className="ui-card flex h-full flex-col rounded-2xl border border-mm-primary/20 bg-mm-surface p-6 shadow-sm transition hover:border-mm-primary/35 hover:shadow-md">
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-mm-primary/8">
                      <CardIcon className={iconClass} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-sm font-bold leading-snug text-mm-navy md:text-base">{card.category}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-mm-muted md:text-[0.9375rem]">
                        <span className="sr-only">Card {index + 1}. </span>
                        {card.body}
                      </p>
                    </div>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
