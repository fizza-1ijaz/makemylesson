function CheckIcon() {
  return (
    <svg
      className="mt-0.5 h-5 w-5 shrink-0 text-mm-primary-dark"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      aria-hidden
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
    </svg>
  );
}

const items = [
  "K–12 subjects and interdisciplinary units",
  "State and national standards alignment (where applicable)",
  "Differentiation prompts for mixed-ability classrooms",
  "Formative checks and exit strategies",
  "English learner and accessibility-minded scaffolding",
] as const;

export function Curriculum() {
  return (
    <section className="section-space bg-mm-surface" aria-labelledby="curriculum-heading">
      <div className="site-container">
        <h2
          id="curriculum-heading"
          className="ds-h2 font-extrabold text-mm-navy"
        >
          Curriculum coverage
        </h2>
        <p className="mt-4 max-w-2xl text-mm-muted">
          Built to support the breadth of what schools actually teach—without turning
          planning into a second job.
        </p>
        <ul className="mt-10 max-w-2xl space-y-4">
          {items.map((text) => (
            <li key={text} className="flex gap-3">
              <CheckIcon />
              <span className="text-mm-navy">{text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
