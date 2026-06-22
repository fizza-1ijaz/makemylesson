import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CookieConsent from '@/components/CookieConsent'
import {
  DEFAULT_OG_IMAGE_ALT,
  DEFAULT_OG_IMAGE_HEIGHT,
  DEFAULT_OG_IMAGE_PATH,
  DEFAULT_OG_IMAGE_WIDTH,
  SITE_URL,
} from '@/lib/siteUrl'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  adjustFontFallback: true,
})

const defaultTitle = 'Make My Lesson — AI Lesson Planner for Teachers'
const defaultDescription =
  'Generate complete, curriculum-aligned teaching packs in minutes. Lesson plan, presentation, activity and assessment — built for your exact curriculum. 71 routes. Free to try.'
const defaultOgTwitterDescription =
  'Generate complete, curriculum-aligned teaching packs in minutes. Lesson plan, presentation, activity and assessment — built for your exact curriculum.'

export const metadata: Metadata = {
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

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="flex min-h-screen flex-col bg-mml-navy font-sans antialiased">
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="main-content flex min-h-0 flex-1 flex-col pt-16">{children}</main>
          <Footer />
          <CookieConsent />
        </div>
      </body>
    </html>
  )
}
