const audiences = [
  {
    title: "Classroom teachers",
    description:
      "Plan units and daily lessons with clarity—aligned to what your students need next.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.01 50.01 0 0 1 12 2.25c2.407 0 4.742.18 7.012.514" />
      </svg>
    ),
  },
  {
    title: "Instructional coaches",
    description:
      "Give teams a shared starting point so collaboration stays focused on practice.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.09 9.09 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 1 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      </svg>
    ),
  },
  {
    title: "Department leads",
    description:
      "Keep scope and sequence coherent while still leaving room for teacher voice.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
      </svg>
    ),
  },
  {
    title: "New and alternate-route educators",
    description:
      "Build confidence faster with exemplars you can adapt as you learn your craft.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
] as const;

export function Cards() {
  return (
    <section className="section-space bg-mm-light" aria-labelledby="audience-heading">
      <div className="site-container">
        <h2
          id="audience-heading"
          className="ds-h2 max-w-2xl font-extrabold text-mm-navy"
        >
          Who is it for?
        </h2>
        <p className="mt-4 max-w-2xl text-mm-muted">
          Designed for educators who plan with care—and need tools that keep up.
        </p>
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:gap-8">
          {audiences.map((item) => (
            <li key={item.title}>
              <article className="ui-card group h-full border border-mm-muted/15 bg-mm-surface p-8 transition hover:-translate-y-1 hover:shadow-xl">
                <div
                  className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-mm-primary/10 text-mm-primary-dark transition group-hover:bg-mm-primary/15"
                  aria-hidden
                >
                  {item.icon}
                </div>
                <h3 className="ds-h3 font-semibold text-mm-navy">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-mm-muted">{item.description}</p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
