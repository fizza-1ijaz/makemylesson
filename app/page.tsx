import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { WhatIsMakeMyLesson } from "@/components/WhatIsMakeMyLesson";
import { WhoIsItFor } from "@/components/WhoIsItFor";
import { CurriculumCoverage } from "@/components/CurriculumCoverage";
import { SisterPlatforms } from "@/components/SisterPlatforms";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Make My Lesson — AI-Powered Lesson Planning for Teachers | Coming Soon",
  description:
    "Make My Lesson is an AI-powered lesson planning platform built for teachers. Generate curriculum-aligned lesson plans, presentations, classroom activities, and assessments — in minutes. Coming soon.",
  keywords: [
    "AI lesson planning",
    "lesson planning for teachers",
    "curriculum-aligned lesson plans",
    "AI teaching tools",
    "lesson plan generator",
    "teacher planning platform",
    "EdTech for teachers",
    "AI-powered lesson planner",
    "classroom planning tools",
    "automated lesson planning",
  ],
  openGraph: {
    title: "Make My Lesson — AI Lesson Planning for Teachers",
    description:
      "Built for teachers who spend too many hours preparing and not enough time teaching. Coming soon to makemylesson.ai",
    type: "website",
    url: "https://makemylesson.ai",
    siteName: "Make My Lesson",
    images: [
      {
        url: "https://makemylesson.ai/og-hero-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Make My Lesson hero banner",
      },
    ],
  },
};

export default function Home() {
  return (
    <main id="main" className="flex min-h-0 w-full min-w-0 flex-1 flex-col overflow-x-clip">
      <Hero />
      <Problem />
      <WhatIsMakeMyLesson />
      <WhoIsItFor />
      <CurriculumCoverage />
      <SisterPlatforms />
    </main>
  );
}
