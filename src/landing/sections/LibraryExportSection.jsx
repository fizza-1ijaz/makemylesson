import { Reveal } from '../shared'

/** SECTION 8 — Export destinations (order matches copy). */
const EXPORT_CHIPS = [
  { icon: '📄', label: 'PDF' },
  { icon: '📝', label: 'DOCX' },
  { icon: '📊', label: 'PPTX' },
  { icon: '🏫', label: 'Google Classroom', variant: 'classroom' },
  { icon: '💼', label: 'Microsoft Teams', variant: 'teams' },
  { icon: '🖨️', label: 'Print' },
  { icon: '📦', label: 'ZIP Download', variant: 'zip' },
]

export default function LibraryExportSection() {
  return (
    <section id="library-export" className="library-section library-section--alt">
      <div className="W">
        <Reveal className="library-intro">
          <span className="section-eyebrow">Library & export</span>
          <h2 className="library-headline">
            Every teaching pack saved. Every document exportable. Everywhere you teach.
          </h2>
          <p className="library-intro-body">
            Every generation saves automatically to My Library, organised by stage and subject. Mark your best packs as
            favourites. Search and filter by curriculum, subject, or topic. Export any document as PDF, DOCX, or PPTX.
            Download a complete four-stage teaching pack as a single ZIP file. Or send directly to Google Classroom or
            Microsoft Teams with one tap — no downloading, re-uploading, or reformatting.
          </p>
        </Reveal>

        <Reveal delay={90}>
          <div className="library-chips-wrap">
            <ul className="export-chips" aria-label="Export destinations">
              {EXPORT_CHIPS.map((c) => (
                <li key={c.label} className={`export-chip${c.variant ? ` export-chip--${c.variant}` : ''}`}>
                  <span className="export-chip-icon" aria-hidden>
                    {c.icon}
                  </span>
                  {c.label}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
