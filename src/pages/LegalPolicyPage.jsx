export default function LegalPolicyPage({ title, lead }) {
  return (
    <div className="min-h-[calc(100vh-56px)] border-t border-white/10 bg-mml-navy-mid px-6 pb-24 pt-16">
      <article className="mx-auto max-w-2xl">
        <h1 className="font-display text-[clamp(26px,4vw,36px)] font-normal text-white">{title}</h1>
        <p className="mt-4 text-base font-light leading-relaxed text-white">{lead}</p>
      </article>
    </div>
  )
}
