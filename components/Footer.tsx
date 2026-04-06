import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

const STUDIELY_URL = "https://www.studiely.com";
const LINGUATUDE_URL = "https://linguatude.com";
/** Skyen Systems — update if the public URL changes */
const SKYEN_SYSTEMS_URL = "https://skyensystems.com";
const INSTAGRAM_URL = "https://www.instagram.com/makemylesson";
const FACEBOOK_URL = "https://www.facebook.com/MakeMyLesson";

function ExternalLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="font-medium text-mm-primary underline decoration-mm-primary/40 underline-offset-2 transition hover:text-mm-accent hover:decoration-mm-accent"
    >
      {children}
    </a>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="mt-auto border-t border-white/[0.08] bg-mm-navy text-white/80"
      role="contentinfo"
    >
      <div className="site-container py-6 sm:py-7">
        <div className="flex flex-col gap-4 sm:gap-5">
          <div className="flex flex-col items-center gap-4 text-center lg:grid lg:grid-cols-3 lg:items-center lg:gap-6 lg:text-left">
            <Link
              href="/"
              className="group flex w-fit min-w-0 shrink-0 items-center gap-2 sm:gap-2.5 lg:justify-self-start"
            >
              <Image
                src="/logo.png"
                alt=""
                width={32}
                height={32}
                className="h-8 w-8 shrink-0 object-contain"
              />
              <span className="text-sm font-semibold tracking-tight text-white transition group-hover:text-mm-primary sm:text-base">
                Make My Lesson
              </span>
            </Link>

            <div className="flex items-center justify-center gap-3 lg:justify-self-center" aria-label="Social media">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex h-9 items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 text-xs font-semibold text-white transition hover:border-[#E4405F]/50 hover:text-[#E4405F]"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5a4.25 4.25 0 0 0 4.25 4.25h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5a4.25 4.25 0 0 0-4.25-4.25h-8.5Zm4.25 3.5A5 5 0 1 1 7 12a5 5 0 0 1 5-5Zm0 1.5A3.5 3.5 0 1 0 15.5 12 3.5 3.5 0 0 0 12 8.5Zm5.25-2.75a1.25 1.25 0 1 1-1.25 1.25 1.25 1.25 0 0 1 1.25-1.25Z" />
                </svg>
                <span>Instagram</span>
              </a>

              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="inline-flex h-9 items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 text-xs font-semibold text-white transition hover:border-[#1877F2]/50 hover:text-[#1877F2]"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                  <path d="M13.5 21.5V13.8h2.6l.4-3h-3V8.9c0-.9.3-1.5 1.6-1.5h1.5V4.7c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.2H8v3h2.4v7.7h3.1Z" />
                </svg>
                <span>Facebook</span>
              </a>
            </div>

            <nav
              className="flex w-full flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm font-medium text-mm-primary lg:w-auto lg:justify-self-end"
              aria-label="Legal"
            >
              <Link
                href="/privacy-policy"
                className="underline decoration-mm-primary/40 underline-offset-2 transition hover:text-mm-accent hover:decoration-mm-accent"
              >
                Privacy Policy
              </Link>
              <span className="text-white/35" aria-hidden>
                |
              </span>
              <Link
                href="/cookie-policy"
                className="underline decoration-mm-primary/40 underline-offset-2 transition hover:text-mm-accent hover:decoration-mm-accent"
              >
                Cookie Policy
              </Link>
            </nav>
          </div>

          <div className="space-y-2 border-t border-white/[0.08] pt-4 text-xs leading-snug text-white/72 sm:space-y-2.5 sm:text-sm sm:leading-relaxed">
            <p className="text-pretty text-justify">
              Make My Lesson is a product of Skyen Solutions, a trade name of Qismat Ventures W.L.L. (CR 190698-1) —
              Office 501, Building 1025, Road 3621, Block 436, Al Seef, Bahrain.
            </p>
            <p className="text-pretty text-justify">
              Make My Lesson is a sister platform of <ExternalLink href={STUDIELY_URL}>Studiely </ExternalLink> 
              and{" "}
              <ExternalLink href={LINGUATUDE_URL}>Linguatude</ExternalLink>
            </p>
            <p className="text-pretty text-justify">
              Make My Lesson is part of the Skyen Solutions family of EdTech products. For custom software development,
              websites, and mobile applications, visit <ExternalLink href={SKYEN_SYSTEMS_URL}>Skyen Systems</ExternalLink>.
            </p>
          </div>

          <p className="text-center text-[0.6875rem] text-white/50 sm:text-xs">© {year} Qismat Ventures W.L.L. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
