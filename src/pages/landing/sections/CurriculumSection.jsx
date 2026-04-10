import { Reveal } from '../shared'

const REGIONS = [
  {
    key: 'us',
    flag: '🇺🇸',
    title: 'United States',
    routes: '4 curriculum frameworks',
    body: 'Elementary (Grades 1–5, CCSS/NGSS), Middle School (Grades 6–8), High School Standard (Grades 9–12), and Advanced Placement / AP Pathway (Grades 9–12, College Board CED aligned). Pre-AP handling for Grades 9–10 and full AP framing for Grades 11–12.',
    tags: ['Common Core', 'NGSS', 'AP / Advanced Placement', 'College Board CED', 'Pre-AP', 'Middle School', 'High School'],
    wide: true,
  },
  {
    key: 'au',
    flag: '🇦🇺',
    title: 'Australia',
    routes: '23 curriculum routes',
    body: 'NSW, Victoria, Queensland, Western Australia, South Australia, Tasmania, ACT and Northern Territory — across Primary, Secondary and Senior Certificate levels. Australian teachers are among the most underserved by international lesson planning tools. Every output is calibrated to your state authority — not a generic ACARA interpretation.',
    tags: ['HSC', 'VCE', 'QCE', 'WACE', 'SACE', 'TCE', 'NESA', 'VCAA', 'QCAA', 'SCSA'],
  },
  {
    key: 'uk',
    flag: '🇬🇧',
    title: 'United Kingdom',
    routes: '14 curriculum routes',
    body: 'UK National Curriculum (DfE), Cambridge International (CAIE) and Pearson Edexcel — from KS1 through KS5. All outputs are aligned to the specific board — AQA, OCR, Edexcel and WJEC terminology, command words and assessment objectives are applied automatically. GCSE and A Level teachers no longer need to manually check board-specific language.',
    tags: ['GCSE', 'A Level', 'IGCSE', 'Cambridge', 'Edexcel', 'KS3', 'KS4', 'KS5', 'AQA', 'OCR'],
  },
  {
    key: 'ca',
    flag: '🇨🇦',
    title: 'Canada',
    routes: '24 curriculum routes',
    body: 'Eight province and territory groups across three levels. Ontario OSSD, British Columbia Dogwood Diploma, Alberta Diploma, Quebec QEP/MEES, Manitoba, Saskatchewan, Atlantic Canada and Northern Territories. Every province uses its own terminology — Make My Lesson applies the right language automatically. You never see generic output that ignores your provincial framework.',
    tags: ['Ontario OSSD', 'BC Dogwood', 'Alberta Diploma', 'Quebec QEP', 'Manitoba', 'Saskatchewan', 'APEF'],
  },
  {
    key: 'ib',
    flag: '🌍',
    title: 'International Baccalaureate',
    routes: '3 programmes',
    body: 'PYP, MYP, and Diploma Programme. IB pedagogy — inquiry-based learning, conceptual understanding, ATL skills, global contexts, and criterion-referenced assessment — is embedded throughout, not just labelled. PYP generates no exam-style content. MYP content is criterion-aligned. DP content separates HL and SL appropriately. IB teachers are among the hardest-working professionals in education.',
    tags: ['PYP', 'MYP', 'Diploma DP', 'ATL Skills', 'HL / SL', 'Criterion-referenced'],
  },
]

export default function CurriculumSection() {
  return (
    <section className="cur cur-alt" id="curriculum">
      <div className="W">
        <Reveal className="curriculum-intro">
          <span className="section-eyebrow">Curriculum coverage</span>
          <h2 className="cur-head-title">
            Your curriculum. Your route.
            <br />
            <em>Your output.</em> Not a generic template.
          </h2>
          <p className="section-intro cur-head-sub">
            Make My Lesson supports 71 curriculum routes across five curriculum families. Every route has its own dedicated
            prompt with exact syllabus authority, grade-appropriate language, assessment framing, and safety guardrails. A
            NSW HSC output is different from a VCE output. A Cambridge IGCSE output is different from an Edexcel GCSE
            output. Because they should be.
          </p>
        </Reveal>

        <div className="curriculum-grid">
          {REGIONS.map((r, i) => (
            <Reveal
              key={r.key}
              delay={i * 55}
              className={`curr-card curr-${r.key}${r.wide ? ' curr-wide' : ''}`}
            >
              <span className="curr-flag" aria-hidden>
                {r.flag}
              </span>
              <h3>{r.title}</h3>
              <span className="curr-routes">{r.routes}</span>
              <p>{r.body}</p>
              <div className="curr-tags">
                {r.tags.map((t) => (
                  <span key={t} className="curr-tag">
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
