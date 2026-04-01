import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-mm-light px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold text-mm-navy">Privacy Policy</h1>
        <p className="mt-6 leading-relaxed text-mm-muted">
          This is a placeholder privacy policy. Replace with your final legal copy before
          launch.
        </p>
        <Link href="/" className="mt-10 inline-block text-mm-primary-dark underline-offset-4 hover:underline">
          ← Back to home
        </Link>
      </div>
    </div>
  );
}
