import ProfilePage from '@/views/ProfilePage'

export const metadata = {
  title: 'Profile — Make My Lesson',
  description: 'Account and profile settings for Make My Lesson.',
  robots: { index: false, follow: true },
}

export default function ProfileRoutePage() {
  return <ProfilePage />
}
