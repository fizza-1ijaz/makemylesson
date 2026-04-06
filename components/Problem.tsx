export function Problem() {
  return (
    <section className="section-space bg-mm-light" aria-labelledby="problem-heading">
      <div className="site-container">
        <h2 id="problem-heading" className="ds-h2 mx-auto max-w-4xl text-center font-extrabold text-mm-navy">
          Teachers are carrying too much. That has to change.
        </h2>

        <div className="mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-2">
          <article className="ui-card rounded-2xl border border-mm-primary/20 bg-mm-surface p-6">
            <p className="mb-3 inline-flex rounded-full bg-mm-primary/12 px-3 py-1 text-xs font-bold uppercase tracking-wide text-mm-primary-dark">
              Research Insight 1
            </p>
            <p className="text-base leading-relaxed text-mm-muted">
              Teaching is one of the most demanding professions in the world - and the demands are growing. According
              to a 2024 Pew Research Center survey, 84 percent of teachers say they do not have enough time during
              their regular working hours to complete essential tasks including lesson planning, grading, and
              administration.
            </p>
          </article>

          <article className="ui-card rounded-2xl border border-mm-accent/25 bg-mm-surface p-6">
            <p className="mb-3 inline-flex rounded-full bg-mm-accent/20 px-3 py-1 text-xs font-bold uppercase tracking-wide text-mm-navy">
              Research Insight 2
            </p>
            <p className="text-base leading-relaxed text-mm-muted">
              Research published by the OECD&apos;s Teaching and Learning International Survey in 2024 found that
              excessive lesson preparation is a significant and growing source of stress for teachers across the world
              - with newer teachers particularly affected. A separate 2024 study tracking over 1,800 teachers found
              that planning and preparing lessons is consistently one of the three largest drains on teacher time
              outside contracted hours.
            </p>
          </article>

          <article className="ui-card rounded-2xl border border-mm-muted/20 bg-mm-surface p-6 md:col-span-2">
            <p className="text-base leading-relaxed text-mm-muted">
              The problem is not that teachers lack skill or commitment. The problem is that the time available for
              preparation rarely matches what thorough, curriculum-faithful planning actually requires.
            </p>
            <p className="mt-4 text-center text-lg font-bold text-mm-navy">
              Make My Lesson is being built to address exactly that.
            </p>
          </article>
        </div>

        <p className="mx-auto mt-6 max-w-5xl rounded-xl border border-mm-muted/20 bg-mm-surface/80 px-4 py-3 text-sm leading-relaxed text-mm-muted/80">
          Citations: Pew Research Center (2024) - &quot;How K-12 Public Teachers Manage Their Workload&quot;; OECD
          TALIS 2024 - &quot;The Demands of Teaching&quot;; University of the West of Scotland / Birmingham City University
          / Cardiff Metropolitan University commissioned research (2024) via EIS SU4QE campaign.
        </p>
      </div>
    </section>
  );
}