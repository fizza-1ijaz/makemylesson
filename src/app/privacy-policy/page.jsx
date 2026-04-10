import LegalPolicyPage from '@/pages/LegalPolicyPage'

export const metadata = {
  title: 'Privacy Policy — Make My Lesson',
  description: 'Privacy policy for Make My Lesson by Skyen Solutions / Qismat Ventures W.L.L.',
}

export default function PrivacyPolicyRoutePage() {
  return (
    <LegalPolicyPage
      title="Privacy Policy"
      lead="Full policy text will be published here. For privacy enquiries, contact the team at Skyen Solutions / Make My Lesson."
    />
  )
}
