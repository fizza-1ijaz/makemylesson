import LegalPolicyPage from '@/pages/LegalPolicyPage'

export const metadata = {
  title: 'Disclaimer — Make My Lesson',
  description: 'Disclaimer for Make My Lesson.',
}

export default function DisclaimerPage() {
  return (
    <LegalPolicyPage
      title="Disclaimer"
      lead="Full disclaimer will be published here. This page is a placeholder until legal copy is added."
    />
  )
}
