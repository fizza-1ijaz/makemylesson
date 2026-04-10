'use client'

export default function BlogPage() {
  return (
    <div className="min-h-[calc(100vh-56px)] border-t border-white/10 bg-mml-navy-mid px-6 pb-24 pt-16">
      <div className="mx-auto max-w-2xl text-center">
        <p className="font-mono text-[11px] font-medium uppercase tracking-[2px] text-mml-teal">Blog</p>
        <h1 className="mt-3 font-display text-[clamp(24px,4vw,36px)] font-normal text-white">Make My Lesson</h1>
        <p className="mt-4 text-base font-light leading-relaxed text-white">
          Blog — teaching ideas and product updates coming soon.
        </p>
      </div>
    </div>
  )
}
