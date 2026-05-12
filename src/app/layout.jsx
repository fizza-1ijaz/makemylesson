import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import {
  DEFAULT_OG_IMAGE_ALT,
  DEFAULT_OG_IMAGE_HEIGHT,
  DEFAULT_OG_IMAGE_PATH,
  DEFAULT_OG_IMAGE_WIDTH,
  SITE_URL,
} from '@/lib/siteUrl'
import { DM_Sans, DM_Serif_Display } from 'next/font/google'
import './globals.css'

const dmSerifDisplay = DM_Serif_Display({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-dm-serif',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

const defaultTitle = 'Make My Lesson — AI Lesson Planner for Teachers'
/** HTML meta description (full). */
const defaultDescription =
  'Generate complete, curriculum-aligned teaching packs in minutes. Lesson plan, presentation, activity and assessment — built for your exact curriculum. 71 routes. Free to try.'
/** Shorter line for Open Graph / Twitter cards (matches share preview spec). */
const defaultOgTwitterDescription =
  'Generate complete, curriculum-aligned teaching packs in minutes. Lesson plan, presentation, activity and assessment — built for your exact curriculum.'

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: defaultTitle,
  description: defaultDescription,
  icons: {
    icon: [{ url: '/logo.png', type: 'image/png' }],
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Make My Lesson',
    title: defaultTitle,
    description: defaultOgTwitterDescription,
    images: [
      {
        url: DEFAULT_OG_IMAGE_PATH,
        width: DEFAULT_OG_IMAGE_WIDTH,
        height: DEFAULT_OG_IMAGE_HEIGHT,
        alt: DEFAULT_OG_IMAGE_ALT,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultTitle,
    description: defaultOgTwitterDescription,
    images: [
      {
        url: DEFAULT_OG_IMAGE_PATH,
        width: DEFAULT_OG_IMAGE_WIDTH,
        height: DEFAULT_OG_IMAGE_HEIGHT,
        alt: DEFAULT_OG_IMAGE_ALT,
      },
    ],
  },
}

export default function RootLayout({ children }) {
  const fontVars = [dmSerifDisplay.variable, dmSans.variable].join(' ')

  return (
    <html lang="en" className={fontVars}>
      <body className="flex min-h-screen flex-col">
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="main-content flex-1 pt-14">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
