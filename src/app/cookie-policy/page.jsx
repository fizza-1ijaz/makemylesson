import LegalPolicyPage from '@/pages/LegalPolicyPage'

export const metadata = {
  title: 'Cookie Policy — Make My Lesson',
  description: 'Cookie policy for Make My Lesson by Skyen Solutions / Qismat Ventures W.L.L.',
}

export default function CookiePolicyRoutePage() {
  return (
    <LegalPolicyPage
      title="Cookie Policy"
      lead="Full policy text will be published here. This page describes how Make My Lesson uses cookies and similar technologies."
    />
  )
}
