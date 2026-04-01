import Image from "next/image";

const regions = [
  {
    logo: "/australia.png",
    logoAlt: "Australian Curriculum",
    name: "Australia",
    detail: "Primary through senior certificate level across all states and territories",
  },
  {
    logo: "/UK.png",
    logoAlt: "United Kingdom curricula",
    name: "United Kingdom",
    detail: "UK National Curriculum, Cambridge International, and Pearson Edexcel",
  },
  {
    logo: "/canada.png",
    logoAlt: "Canadian curricula",
    name: "Canada",
    detail: "All provinces and territory groups, elementary through senior grades",
  },
  {
    logo: "/IB.png",
    logoAlt: "International Baccalaureate",
    name: "International Baccalaureate",
    detail: "IB PYP, IB MYP, and IB Diploma Programme",
  },
  {
    logo: "/US.png",
    logoAlt: "United States standards",
    name: "United States",
    detail: "Elementary, Middle School, High School, and Advanced Placement",
  },
] as const;

function RegionCard({
  logo,
  logoAlt,
  name,
  detail,
}: {
  logo: string;
  logoAlt: string;
  name: string;
  detail: string;
}) {
  return (
    <article className="ui-card flex h-full flex-col rounded-2xl border border-mm-primary/20 bg-mm-surface p-3.5 text-center shadow-sm transition hover:border-mm-primary/35 hover:shadow-md sm:p-5 lg:p-6">
      <div className="flex justify-center">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-mm-primary/15 bg-white p-2 shadow-sm sm:h-16 sm:w-16">
          <Image
            src={logo}
            alt={logoAlt}
            width={48}
            height={48}
            className="h-10 w-10 object-contain sm:h-11 sm:w-11"
            sizes="64px"
          />
        </div>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-mm-muted md:mt-4 md:text-[0.9375rem]">
        <span className="font-bold text-mm-navy">{name}</span>
        <span className="text-mm-muted"> — {detail}</span>
      </p>
    </article>
  );
}

export function CurriculumCoverage() {
  return (
    <section className="section-space bg-mm-surface" aria-labelledby="curriculum-coverage-heading">
      <div className="site-container">
        <p className="text-center text-xs font-bold uppercase tracking-[0.18em] text-mm-primary">Curriculum Coverage</p>
        <h2
          id="curriculum-coverage-heading"
          className="ds-h2 mx-auto mt-3 max-w-4xl text-balance text-center font-extrabold text-mm-navy"
        >
          Your curriculum. Your route. Your materials.
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-center text-base leading-relaxed text-mm-muted">
          Make My Lesson supports teachers across five major curriculum families — each with its own dedicated routes,
          terminology, and assessment framing.
        </p>

        <ul className="mx-auto mt-10 grid max-w-6xl list-none grid-cols-2 gap-4 lg:grid-cols-6 lg:gap-5">
          {regions.map((r, i) => (
            <li
              key={r.name}
              className={
                i < 3
                  ? "lg:col-span-2"
                  : i === 3
                    ? "lg:col-span-2 lg:col-start-2"
                    : "col-span-2 flex justify-center lg:col-span-2 lg:col-start-4"
              }
            >
              <div className={i === 4 ? "w-full max-w-sm lg:max-w-none" : "w-full"}>
                <RegionCard {...r} />
              </div>
            </li>
          ))}
        </ul>

        <aside
          className="mx-auto mt-10 max-w-3xl rounded-xl border border-dashed border-mm-primary/25 bg-mm-primary/5 px-4 py-4 sm:px-6 sm:py-5"
          role="note"
        >
          <p className="text-justify text-sm leading-relaxed text-mm-muted sm:text-[0.9375rem]">
            No two curriculum routes produce the same output. Every set of materials is generated to the specific
            standards, language, and expectations of the route selected — because generic lesson plans do not serve
            teachers or their students well.
          </p>
        </aside>
      </div>
    </section>
  );
}
