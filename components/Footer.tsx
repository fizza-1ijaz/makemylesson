import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

const STUDIELY_URL = "https://www.studiely.com";
const LINGUATUDE_URL = "https://linguatude.com";
/** Skyen Systems — update if the public URL changes */
const SKYEN_SYSTEMS_URL = "https://skyensystems.com";

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
          <div className="flex flex-col items-center gap-4 text-center lg:flex-row lg:items-center lg:justify-between lg:gap-6 lg:text-left">
            <Link
              href="/"
              className="group flex w-fit min-w-0 shrink-0 items-center gap-2 sm:gap-2.5"
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

            <nav
              className="flex w-full flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm font-medium text-mm-primary lg:w-auto lg:justify-end"
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
