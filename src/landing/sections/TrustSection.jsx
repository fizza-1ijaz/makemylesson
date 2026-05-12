import { Reveal } from '../shared'

export default function TrustSection() {
  return (
    <section id="trust" className="trust-section">
      <div className="W">
        <div className="trust-inner">
          <Reveal className="trust-intro">
            <span className="section-eyebrow">Editorial integrity</span>
            <h2 className="trust-headline">Built to respect your professional judgement. Not to replace it.</h2>
          </Reveal>

          <Reveal delay={80}>
            <div className="trust-box">
              <p>
                Every generated output includes a verification footer: &ldquo;Content generated aligns with [curriculum name
                and route]. Always verify against current official documentation and adapt to your learners&apos; needs.
                &rdquo; This is not legal boilerplate. It is a genuine acknowledgement that AI generation is a starting
                point, not a final product. Your knowledge of your students, your classroom, and your school context is what
                makes a lesson plan come to life.
              </p>
              <p>
                Make My Lesson does not claim to generate official exam papers. It does not guarantee alignment with
                syllabuses that change every year without manual review. What it does is handle the structural,
                time-consuming generation work so that the professional time you spend on lesson preparation is focused on
                quality, adaptation, and your learners — not on typing out objectives, formatting slide decks, and writing
                mark schemes from scratch.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
