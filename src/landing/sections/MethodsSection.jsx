import { Reveal } from '../shared'

/** SECTION 6 — Teaching methods (order matches product). */
const METHOD_LABELS = [
  'General (Teacher-Led)',
  'Flipped Classroom',
  'Blended Learning',
  'Gamification',
  'Project-Based Learning',
  'Inquiry-Based Learning',
  'Collaborative Learning',
  'Personalised Learning',
  'Competency-Based Learning',
  'Experiential Learning',
  'Mindfulness & SEL',
  'Spaced Learning',
  'Service Learning',
  'Problem-Based Learning',
  'Crossover Learning',
  'Kinesthetic Learning',
]

export default function MethodsSection() {
  return (
    <section id="teaching-methods" className="methods-section">
      <div className="W">
        <Reveal className="methods-intro-block">
          <span className="section-eyebrow methods-eyebrow">Teaching methods</span>
          <h2 className="methods-headline">16 teaching methods. Actually embedded. Not just labelled.</h2>
          <p className="section-intro methods-intro">
            When you select a teaching method, Make My Lesson doesn&apos;t just add a label to the top of your lesson
            plan. The method shapes how every section of every document is structured — the starter activity, the main
            teaching sequence, the activity format, the assessment style. Select Inquiry-Based Learning and every output
            is built around questions, discovery and student exploration. Select Collaborative Learning and every activity
            includes structured pair and group work.
          </p>
        </Reveal>

        <Reveal delay={90}>
          <ul className="methods-grid" aria-label="Teaching methods available in Make My Lesson">
            {METHOD_LABELS.map((label) => (
              <li key={label} className="method-chip">
                {label}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
