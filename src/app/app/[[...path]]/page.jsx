import FlutterAppEmbed from '@/components/FlutterAppEmbed'

export const metadata = {
  title: 'Make My Lesson',
  robots: { index: false, follow: true },
}

export default function AppCatchAllPage({ params }) {
  return <FlutterAppEmbed segments={params.path ?? []} />
}
