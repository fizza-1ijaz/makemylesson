import LibraryPage from '@/views/LibraryPage'

/** App UI shell — not for public search; avoids inheriting duplicate homepage metadata. */
export const metadata = {
  title: 'Library — Make My Lesson',
  description: 'Your saved lessons and teaching packs in Make My Lesson.',
  robots: { index: false, follow: true },
}

export default function LibraryRoutePage() {
  return <LibraryPage />
}
