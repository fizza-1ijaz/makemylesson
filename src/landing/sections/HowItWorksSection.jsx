import { Reveal } from '../shared'

const STAGES = [
  {
    id: 's1',
    num: '01',
    badge: '📋 Plan',
    title: 'Lesson Plan',
    cost: '1 credit · Standalone or foundation for all stages',
    twoDocs: null,
    paragraphs: [
      {
        kind: 'plain',
        text: "Enter your curriculum, year level, subject, topic, teaching method and lesson duration. Make My Lesson generates a fully structured lesson plan including learning objectives written in your curriculum's exact outcome language, a sequenced teaching structure, Bloom's Taxonomy alignment across all objectives, differentiation strategies for varied learner needs, a formative assessment check, and a homework task.",
      },
      {
        kind: 'strongThenRest',
        strong: 'This is not a template with blanks to fill in.',
        rest: ' It is a complete, curriculum-aligned, classroom-ready lesson plan written specifically for your route, your grade, and your topic.',
      },
    ],
    tags: [
      'Learning objectives',
      'Starter / Hook activity',
      'Main teaching sequence',
      "Bloom's Taxonomy alignment",
      'Differentiation strategies',
      'Assessment for learning',
      'Homework / Next step',
    ],
  },
  {
    id: 's2',
    num: '02',
    badge: '📊 Present',
    title: 'Classroom Presentation',
    cost: '1 credit · Inherits context from Stage 1',
    twoDocs: null,
    paragraphs: [
      {
        kind: 'plain',
        text: 'Your lesson plan becomes a classroom-ready slide deck. Every slide performs a specific teaching job — not a generic summary. Slides include curriculum-accurate content, per-slide speaker notes, and AI-generated educational images where they have the highest learning value. Lesson duration drives slide count: a 45-minute lesson produces 9 slides, a 60-minute lesson produces 12.',
      },
      {
        kind: 'plain',
        text: 'Export directly to PPTX, PDF, Google Classroom, or Microsoft Teams. Present directly from the app.',
      },
    ],
    tags: [
      '6–12 slides (duration-calibrated)',
      'Per-slide speaker notes',
      'AI-generated educational images',
      '3 presentation styles',
      'PPTX export',
      'Google Classroom',
      'Microsoft Teams',
    ],
  },
  {
    id: 's3',
    num: '03',
    badge: '✏️ Practise',
    title: 'Classroom Activity',
    cost: '1 credit · Always two documents',
    twoDocs: '⚡ Always two separate documents — student sheet + teacher answer key',
    paragraphs: [
      {
        kind: 'plain',
        text: 'Every Stage 3 generation always produces two separate documents: a student-facing activity sheet and a teacher answer key — always, without exception. Choose your activity format, question types from 17 options, and difficulty track. The activity is formative, differentiated, and fully aligned to the lesson objectives from Stage 1.',
      },
      {
        kind: 'plainStrong',
        text: 'No more building a worksheet and then separately writing the answer key. Both arrive together.',
      },
    ],
    tags: [
      'Student activity sheet',
      'Teacher answer key',
      '17 question types',
      'Quick Check / Practice Worksheet',
      'Exit Ticket / Guided Activity',
      'Support · Core · Stretch difficulty tracks',
    ],
  },
  {
    id: 's4',
    num: '04',
    badge: '📝 Assess',
    title: 'Summative Assessment',
    cost: '1 credit · Always two documents',
    twoDocs: '⚡ Always two separate documents — assessment paper + mark scheme',
    paragraphs: [
      {
        kind: 'plain',
        text: "A complete, curriculum-aligned assessment paper with a detailed teacher mark scheme — always two separate documents. Duration and mark range are your choice. Bloom's Taxonomy balancing is applied automatically to every assessment — no paper that only tests recall, no paper that accidentally skips application.",
      },
      {
        kind: 'strongThenRest',
        strong: 'This is the stage that replaces the most time.',
        rest: ' Designing a proper assessment paper with a mark scheme from scratch typically takes a teacher 60–90 minutes. Make My Lesson generates both in minutes.',
      },
    ],
    tags: [
      'Student assessment paper',
      'Teacher mark scheme',
      "Mandatory Bloom's balance",
      '15 / 20 / 30 / 40 / 45 / 60 min options',
      '5–50 mark range',
      '5 question type families',
    ],
  },
]

function StageParagraph({ block }) {
  if (block.kind === 'plain') {
    return <p className="stage-desc">{block.text}</p>
  }
  if (block.kind === 'strongThenRest') {
    return (
      <p className="stage-desc">
        <strong>{block.strong}</strong>
        {block.rest}
      </p>
    )
  }
  if (block.kind === 'plainStrong') {
    return (
      <p className="stage-desc">
        <strong>{block.text}</strong>
      </p>
    )
  }
  return null
}

export default function HowItWorksSection() {
  return (
    <section className="hiw" id="how-it-works">
      <div className="W">
        <Reveal className="hiw-intro">
          <span className="section-eyebrow">How it works</span>
          <h2 className="hiw-title-main">
            Four stages. One topic.
            <br />
            <em>Everything you need.</em>
          </h2>
          <p className="section-intro">
            Your four-stage teaching pack: each stage adds classroom-ready instructional materials. Every stage costs one
            credit; a complete pack costs 4 credits. Use inquiry-based learning and 16 embedded teaching methods with
            mandatory Bloom&apos;s Taxonomy balancing—use all four stages together or any stage on its own.
          </p>
        </Reveal>

        <div className="stage-cards">
          {STAGES.map((stage, i) => (
            <Reveal key={stage.id} delay={80 + i * 70} className="stage-card-wrap">
              <article className="stage-card">
                <div className="stage-card-left">
                  <div className="stage-card-left-inner">
                    <div className="stage-num">{stage.num}</div>
                    <span className="stage-badge">{stage.badge}</span>
                    <h3>{stage.title}</h3>
                    <span className="stage-cost">{stage.cost}</span>
                  </div>
                </div>
                <div className="stage-card-right">
                  {stage.twoDocs ? <div className="two-docs-badge">{stage.twoDocs}</div> : null}
                  {stage.paragraphs.map((block, j) => (
                    <StageParagraph key={j} block={block} />
                  ))}
                  <div className="stage-tags">
                    {stage.tags.map((t) => (
                      <span key={t} className="stage-tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
