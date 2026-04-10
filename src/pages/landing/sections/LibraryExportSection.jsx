import { Reveal } from '../shared'

const LIB_ITEMS = [
  {
    icon: '📚',
    title: 'My Library — automatic saving',
    body: 'Every generation saves automatically, organised by stage and subject. All Packs · Complete Packs · Lesson Plans · Presentations · Activities & Assessments · Favourites.',
  },
  {
    icon: '⭐',
    title: 'Favourites',
    body: 'Star your best teaching packs for instant access. Your starred resources appear in the Favourites tab across all devices.',
  },
  {
    icon: '✏️',
    title: 'Free editing — always',
    body: 'Edit any generated content at no credit cost. Manual editing never consumes a credit. Only AI regeneration does.',
  },
  {
    icon: '🔍',
    title: 'Search and filter',
    body: 'Search by topic name, subject, or curriculum route. Filter by stage, date range, or difficulty. Find anything instantly.',
  },
]

const EXPORT_CHIPS = [
  { icon: '📄', label: 'PDF' },
  { icon: '📝', label: 'DOCX' },
  { icon: '📊', label: 'PPTX' },
  { icon: '🏫', label: 'Google Classroom', variant: 'classroom' },
  { icon: '💼', label: 'Microsoft Teams', variant: 'teams' },
  { icon: '🖨️', label: 'Print' },
  { icon: '📦', label: 'ZIP — Complete Pack', variant: 'zip' },
]

export default function LibraryExportSection() {
  return (
    <section id="library-export" className="library-section library-section--alt">
      <div className="W">
        <Reveal className="library-intro">
          <span className="section-eyebrow">Library & export</span>
          <h2 className="library-headline">
            Every teaching pack saved.
            <br />
            Every document exportable. <em>Everywhere you teach.</em>
          </h2>
        </Reveal>

        <div className="library-grid">
          <Reveal>
            <div className="library-feature">
              {LIB_ITEMS.map((item) => (
                <div key={item.title} className="lib-item">
                  <div className="lib-icon" aria-hidden>
                    {item.icon}
                  </div>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={90}>
            <div className="library-export-col">
              <h3 className="library-export-h3">Export to wherever you teach</h3>
              <p className="library-export-lead">
                Export any document as PDF, DOCX, or PPTX. Download a complete four-stage teaching pack as a single ZIP
                file containing all seven documents. Or send directly to Google Classroom or Microsoft Teams with one tap
                — no downloading, re-uploading, or reformatting.
              </p>
              <div className="export-chips">
                {EXPORT_CHIPS.map((c) => (
                  <div
                    key={c.label}
                    className={`export-chip${c.variant ? ` export-chip--${c.variant}` : ''}`}
                  >
                    <span className="export-chip-icon" aria-hidden>
                      {c.icon}
                    </span>
                    {c.label}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
