import { Reveal } from '../shared'

const ROWS = [
  {
    task: 'Lesson Plan',
    before:
      '30–60 minutes in Word/Google Docs. Starting from scratch. Checking curriculum alignment manually.',
    after:
      'Generated in minutes, aligned to your exact curriculum route, board-specific language applied automatically.',
  },
  {
    task: 'Presentation',
    before:
      '45–90 minutes in PowerPoint/Google Slides. Finding images. Writing speaker notes. Disconnected from lesson plan.',
    after:
      'Generated automatically from your lesson plan. AI images included. Speaker notes embedded. PPTX ready to export.',
  },
  {
    task: 'Student Activity',
    before:
      '30–60 minutes on a worksheet builder or Teachers Pay Teachers. Answer key written separately.',
    after:
      'Student sheet and teacher answer key generated together. 17 question types. Difficulty tracks. Formative, differentiated.',
  },
  {
    task: 'Assessment',
    before:
      "60–90 minutes designing questions and mark scheme. Manually checking Bloom's balance. Route-specific language checked by hand.",
    after:
      "Assessment paper and mark scheme generated together. Bloom's balance applied automatically. Curriculum-aligned marking conventions.",
  },
  {
    task: 'Total time',
    before:
      "2.5 – 5 hours. Across 5 different tools that don't talk to each other. Nothing automatically aligned.",
    after:
      'Under 10 minutes. One platform. One curriculum selection. Complete coherence across all four documents.',
    total: true,
  },
]

export default function ReplacesSection() {
  return (
    <section id="what-it-replaces" className="replaces-section">
      <div className="W">
        <Reveal className="replaces-intro">
          <span className="section-eyebrow">What it replaces</span>
          <h2 className="replaces-headline">
            One platform. Everything you used to need <em>five tools</em> for.
          </h2>
          <p className="section-intro replaces-intro-text">
            Most teachers piece together their lesson preparation across multiple tools — a lesson plan template in Word, a
            slide deck in PowerPoint or Google Slides, a worksheet builder somewhere else, a quiz generator, and then
            back to Word to write the assessment. Each tool doesn&apos;t know what the others did. Nothing is aligned.
            Nothing is curriculum-specific. And the whole process takes hours. Make My Lesson replaces all of it.
          </p>
        </Reveal>

        <Reveal delay={80}>
          <div className="replaces-table-wrap">
            <table className="replaces-table">
              <thead>
                <tr>
                  <th className="replaces-th replaces-th--task">Task</th>
                  <th className="replaces-th replaces-th--before">❌ Before Make My Lesson</th>
                  <th className="replaces-th replaces-th--after">✅ With Make My Lesson</th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((row) => (
                  <tr key={row.task} className={row.total ? 'replaces-total-row' : undefined}>
                    <td>{row.task}</td>
                    <td className="before-col">{row.before}</td>
                    <td className="after-col">{row.after}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
