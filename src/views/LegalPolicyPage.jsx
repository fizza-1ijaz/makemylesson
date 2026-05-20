import PolicyPageShell from '@/components/layout/PolicyPageShell'

export default function LegalPolicyPage({ title, lead }) {
  return (
    <PolicyPageShell>
      <article className="max-w-2xl">
        <h1 className="font-display text-[clamp(26px,4vw,36px)] font-normal text-white">{title}</h1>
        <p className="mt-4 text-base font-light leading-relaxed text-white">{lead}</p>
      </article>
    </PolicyPageShell>
  )
}
