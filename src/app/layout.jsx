import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
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

export const metadata = {
  title: 'Make My Lesson – AI-Powered for Teachers',
  description:
    'AI-powered lesson creation for teachers who want to spend less time planning and more time teaching.',
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
