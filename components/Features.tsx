export function Features() {
  return (
    <section id="hiw" className="section-space bg-mm-surface" aria-labelledby="features-heading">
      <div className="site-container">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="flex flex-col gap-6">
            <h2
              id="features-heading"
              className="ds-h2 font-extrabold text-mm-navy"
            >
              What is Make My Lesson?
            </h2>
            <p className="text-mm-muted">
              Make My Lesson helps you move from a topic or standard to a complete,
              classroom-ready plan—objectives, pacing, activities, checks for
              understanding, and extension ideas—without starting from a blank page
              every time.
            </p>
            <p className="text-mm-muted">
              It is built for real schools: practical, adaptable, and designed to
              amplify your judgment—not replace it.
            </p>
            <ul className="flex flex-col gap-3 text-mm-navy">
              <li className="flex gap-3">
                <span
                  className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-mm-primary"
                  aria-hidden
                />
                <span className="text-mm-muted">
                  Structured outputs you can edit quickly
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-mm-primary"
                  aria-hidden
                />
                <span className="text-mm-muted">
                  Clear language for students, families, and teams
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-mm-primary"
                  aria-hidden
                />
                <span className="text-mm-muted">
                  A workflow that fits between meetings and bell schedules
                </span>
              </li>
            </ul>
          </div>
          <div
            className="ui-card relative flex min-h-[280px] items-center justify-center overflow-hidden border border-mm-muted/15 bg-gradient-to-br from-mm-light to-white lg:min-h-[360px]"
            role="img"
            aria-label="Product preview placeholder"
          >
            <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_0%,rgba(58,191,177,0.06)_50%,transparent_100%)]" />
            <div className="relative rounded-xl border border-mm-muted/20 bg-white/80 p-8 shadow-sm backdrop-blur-sm">
              <div className="mx-auto mb-4 h-12 w-12 rounded-xl bg-mm-primary/15" />
              <div className="space-y-2">
                <div className="h-3 w-48 rounded-full bg-mm-muted/20" />
                <div className="h-3 w-40 rounded-full bg-mm-muted/15" />
                <div className="h-3 w-44 rounded-full bg-mm-muted/15" />
              </div>
              <p className="mt-6 text-center text-sm font-medium text-mm-muted">
                Lesson outline preview
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
