import { Reveal } from '../shared'

const METHOD_CHIPS = [
  { icon: '🎓', label: 'General (Teacher-Led)' },
  { icon: '🔄', label: 'Flipped Classroom' },
  { icon: '💻', label: 'Blended Learning' },
  { icon: '🎮', label: 'Gamification' },
  { icon: '🏗️', label: 'Project-Based Learning' },
  { icon: '🔍', label: 'Inquiry-Based Learning' },
  { icon: '👥', label: 'Collaborative Learning' },
  { icon: '🎯', label: 'Personalised Learning' },
  { icon: '✅', label: 'Competency-Based Learning' },
  { icon: '🌱', label: 'Experiential Learning' },
  { icon: '🧘', label: 'Mindfulness & SEL' },
  { icon: '🔁', label: 'Spaced Learning' },
  { icon: '🤝', label: 'Service Learning' },
  { icon: '💡', label: 'Problem-Based Learning' },
  { icon: '🌐', label: 'Crossover Learning' },
  { icon: '🤸', label: 'Kinesthetic Learning' },
]

export default function MethodsSection() {
  return (
    <section id="teaching-methods" className="methods-section">
      <div className="W">
        <Reveal className="methods-intro-block">
          <span className="section-eyebrow methods-eyebrow">Teaching methods</span>
          <h2 className="methods-headline">
            16 teaching methods.
            <br />
            <em>Actually embedded.</em> Not just labelled.
          </h2>
          <p className="section-intro methods-intro">
            When you select a teaching method, Make My Lesson doesn&apos;t just add a label to the top of your lesson
            plan. The method shapes how every section of every document is structured — the starter activity, the main
            teaching sequence, the activity format, the assessment style. Select Inquiry-Based Learning and every output
            is built around questions, discovery and student exploration. Select Collaborative Learning and every activity
            includes structured pair and group work.
          </p>
        </Reveal>

        <Reveal delay={90}>
          <div className="methods-grid">
            {METHOD_CHIPS.map((m) => (
              <div key={m.label} className="method-chip">
                <span className="method-chip-icon" aria-hidden>
                  {m.icon}
                </span>
                {m.label}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
