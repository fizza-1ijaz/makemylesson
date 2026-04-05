import type { Metadata } from "next";
import { CookieBanner } from "@/components/CookieBanner";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ScrollToTopOnRoute } from "@/components/ScrollToTopOnRoute";
import { Nunito, Nunito_Sans } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "Make My Lesson | Coming Soon",
  description:
    "AI-powered lesson planning for teachers. Less time planning. More time teaching.",
  icons: {
    icon: [{ url: "/logo.png", type: "image/png" }],
    apple: [{ url: "/logo.png", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${nunito.variable} ${nunitoSans.variable} h-full scroll-smooth antialiased`}
      suppressHydrationWarning
    >
      <body
        className="flex min-h-[100dvh] flex-col bg-mm-light font-sans text-foreground"
        suppressHydrationWarning
      >
        <Navbar />
        <ScrollToTopOnRoute />
        <div className="flex min-h-0 flex-1 flex-col">{children}</div>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
