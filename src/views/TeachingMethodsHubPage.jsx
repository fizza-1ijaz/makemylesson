import Link from 'next/link'
import { PageShell } from '@/components/layout/Container'
import TeachingMethodHubGrid from '@/components/teaching-methods/TeachingMethodHubGrid'
import { TEACHING_METHOD_COLUMNS } from '@/data/teachingMethods'
import { MML_APP } from '@/lib/appUrls'

export default function TeachingMethodsHubPage() {
  return (
    <PageShell variant="policy" className="tm-page-shell border-slate-200 bg-white" contentClassName="pb-24">
      <div className="tm-article w-full">
        <header className="tm-header">
          <h1 className="tm-title">Teaching Methods</h1>
          <p className="tm-paragraph tm-intro">
            Explore sixteen evidence-informed approaches supported by Make My Lesson. Each method has
            its own guide so you can plan lessons that match how you teach — and help search engines
            surface the right resources for teachers.
          </p>
        </header>

        <TeachingMethodHubGrid columns={TEACHING_METHOD_COLUMNS} />

        <div className="tm-cta-actions mt-12">
          <Link href={MML_APP.stage1} className="site-nav-cta inline-flex no-underline">
            Start planning with AI
          </Link>
        </div>
      </div>
    </PageShell>
  )
}
