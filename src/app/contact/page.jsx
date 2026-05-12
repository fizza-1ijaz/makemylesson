import ContactPage from '@/views/ContactPage'

export const metadata = {
  title: 'Contact — AI Lesson Planner Support | Make My Lesson',
  description:
    'Contact support for the lesson planning app for teachers: billing, curriculum routes, Google Classroom export, Microsoft Teams, and account help at support@makemylesson.ai.',
  keywords: ['Make My Lesson contact', 'AI lesson planner support', 'lesson planning app help'],
  alternates: { canonical: '/contact' },
  robots: { index: true, follow: true },
}

export default function ContactRoutePage() {
  return <ContactPage />
}
