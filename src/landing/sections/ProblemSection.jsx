import { Reveal } from '../shared'

const PAIN_ITEMS = [
  {
    icon: '📋',
    strong: 'Lesson plan in Word/Google Docs',
    body: '30–60 minutes per plan. Starting from scratch. Checking curriculum alignment manually. Formatting objectives, differentiation, homework.',
    highlight: false,
  },
  {
    icon: '📊',
    strong: 'Presentation in PowerPoint/Google Slides',
    body: '45–90 minutes. Finding images. Formatting slides. Writing speaker notes. None of it connected to the lesson plan you just wrote.',
    highlight: false,
  },
  {
    icon: '✏️',
    strong: 'Worksheet from scratch or Teachers Pay Teachers',
    body: '30–60 minutes. Adapting something generic. Writing the answer key separately. Checking it matches what you actually taught.',
    highlight: false,
  },
  {
    icon: '📝',
    strong: 'Assessment paper + mark scheme',
    body: '60–90 minutes. Designing questions. Balancing difficulty. Writing the mark scheme. Making sure it tests what you actually covered.',
    highlight: false,
  },
  {
    icon: '⏱',
    strong: 'Total: 2.5 – 5 hours per complete lesson',
    body: "Across 5 different tools that don't know what each other did. Nothing automatically aligned. Nothing curriculum-specific.",
    highlight: true,
  },
]

export default function ProblemSection() {
  return (
    <section id="problem" className="problem-section" aria-labelledby="problem-heading">
      <div className="W">
        <div className="problem-cols">
          <Reveal className="problem-side">
            <span className="section-eyebrow">The problem</span>
            <h2 id="problem-heading">
              You became a teacher to teach.
              <br />
              Not to spend hours every week building resources.
            </h2>
            <p>
              The average teacher works 49 hours a week — 10 hours more than their contracted hours. Save time lesson
              planning and reduce teacher workload on the tasks Make My Lesson handles: writing lesson plans, building slide
              decks, creating
              student worksheets, and designing assessments.
            </p>
            <p>
              One 45-minute lesson can take <strong>2 hours to prepare fully</strong>. A lesson plan. A presentation. An
              activity. An assessment. That is four separate documents, across four different tools, all needing to align
              with your specific curriculum route — not some generic standard on the other side of the world.
            </p>
            <p>
              Make My Lesson was built to change that. Not by cutting corners. Not by replacing your professional
              judgement. But by doing the structural, time-consuming generation work so that the time you do spend on
              your teaching goes into refining, adapting, and making it yours.
            </p>
          </Reveal>

          <Reveal delay={90}>
            <ul className="pain-list">
              {PAIN_ITEMS.map((item) => (
                <li key={item.strong} className={`pain-item${item.highlight ? ' pain-item--highlight' : ''}`}>
                  <div className="pain-icon" aria-hidden>
                    {item.icon}
                  </div>
                  <div className="pain-text">
                    <strong>{item.strong}</strong> {item.body}
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
