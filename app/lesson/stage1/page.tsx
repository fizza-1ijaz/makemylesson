import Link from "next/link";

export default function LessonStage1Page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-mm-light px-6 text-center">
      <h1 className="font-[family-name:var(--font-nunito)] text-2xl font-bold text-mm-navy sm:text-3xl">
        Lesson builder
      </h1>
      <p className="mt-3 max-w-md text-mm-muted">
        This step is not live yet. Join the waitlist on the home page to get early access.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex rounded-full bg-mm-primary px-6 py-3 text-sm font-bold text-mm-navy transition hover:brightness-105"
      >
        Back to home
      </Link>
    </div>
  );
}
