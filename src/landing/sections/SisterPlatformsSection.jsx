import Image from 'next/image'
import { Reveal } from '../shared'

const STUDIELY_URL = 'https://www.studiely.com'
const LINGUATUDE_URL = 'https://linguatude.com'

export default function SisterPlatformsSection() {
  return (
    <section id="sister-platforms" className="sister-platforms">
      <div className="W">
        <Reveal className="sister-intro">
          <span className="section-eyebrow">Sister Platforms</span>
        </Reveal>

        <div className="sister-grid">
          <Reveal className="sister-card">
            <div className="sister-platform-name-row">
              <Image
                src="/logo-studiely.jpeg"
                alt=""
                width={112}
                height={112}
                className="sister-platform-logo"
              />
              <p className="sister-platform-name">Studiely – Start Learning Smarter</p>
            </div>
            <h3 className="sister-card-headline">The student side of the same mission.</h3>
            <div className="sister-card-body">
              <p>
                Make My Lesson is part of the Skyen Solutions family of EdTech platforms — built on the belief that quality
                education should be accessible and affordable for everyone.
              </p>
              <p>
                Our sister platform,{' '}
                <a href={STUDIELY_URL} target="_blank" rel="noopener noreferrer" className="sister-link">
                  Studiely
                </a>
                , is an AI-powered study platform built for students across the same curriculum systems Make My Lesson
                serves. Where Make My Lesson supports the teacher preparing the lesson, Studiely supports the student on the
                other side of it.
              </p>
            </div>
          </Reveal>

          <Reveal delay={90} className="sister-card">
            <div className="sister-platform-name-row">
              <Image
                src="/logo-linguatude.jpg"
                alt=""
                width={112}
                height={112}
                className="sister-platform-logo"
              />
              <p className="sister-platform-name">Linguatude — AI Language Test Preparation</p>
            </div>
            <h3 className="sister-card-headline">For the learner whose next opportunity depends on an English test.</h3>
            <div className="sister-card-body">
              <p>
                Our second sister platform,{' '}
                <a href={LINGUATUDE_URL} target="_blank" rel="noopener noreferrer" className="sister-link">
                  Linguatude
                </a>
                , is an AI-powered English test preparation platform built for learners preparing for internationally
                recognised proficiency examinations — IELTS, TOEFL iBT, PTE Academic, Cambridge B1 Preliminary, and Cambridge B2
                First.
              </p>
              <p>
                Where Make My Lesson supports the teacher planning the lesson,{' '}
                <a href={LINGUATUDE_URL} target="_blank" rel="noopener noreferrer" className="sister-link">
                  Linguatude
                </a>{' '}
                supports the learner whose next opportunity depends on passing a high-stakes English test. Two sides of the
                same commitment to making quality education accessible to the people who need it.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
