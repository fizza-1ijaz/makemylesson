import { Reveal } from '../shared'

const STATS = [
  {
    num: '49h',
    label: 'per week the average teacher works — 10 hours above their contracted hours',
    source: 'RAND State of the American Teacher, 2025',
  },
  {
    num: '2–3h',
    label: 'saved per complete teaching pack vs. building across 5 separate tools',
    source: 'Based on lesson plan + presentation + activity + assessment preparation',
  },
  {
    num: '71',
    label: 'curriculum routes — Australia, UK, Canada, IB and US. Every route dedicated, never generic.',
    source: null,
  },
  {
    num: '16',
    label: 'teaching methods genuinely embedded throughout every stage — not just labelled',
    source: null,
  },
]

export default function StatsSection() {
  return (
    <div className="stats stats-bar">
      <div className="W">
        <div className="stats-grid">
          {STATS.map((s, i) => (
            <Reveal key={`stat-${i}`} delay={i * 70} className="stat stat-item">
              <span className="stat-num">{s.num}</span>
              <span className="stat-label">{s.label}</span>
              {s.source ? <span className="stat-source">{s.source}</span> : null}
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  )
}
