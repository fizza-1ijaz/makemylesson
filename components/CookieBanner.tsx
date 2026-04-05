"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const COOKIE_CONSENT_KEY = "mml_cookie_consent";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(COOKIE_CONSENT_KEY);
      setIsVisible(saved !== "accepted");
    } catch {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    try {
      window.localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
      window.dispatchEvent(new CustomEvent("cookie-consent-updated", { detail: "accepted" }));
    } catch {
      // If storage is blocked, still close the banner for this session view.
    }

    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <aside
      className="fixed inset-x-3 bottom-3 z-[70] mx-auto w-auto max-w-3xl rounded-3xl border border-mm-accent/35 bg-gradient-to-br from-mm-navy via-[#1e3a6d] to-mm-navy/95 p-4 text-white shadow-[0_16px_40px_rgba(20,40,75,0.45)] backdrop-blur-sm sm:inset-x-6 sm:bottom-5 sm:p-5"
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-5">
        <div className="flex items-start gap-3">
          <div
            className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-mm-accent/60 bg-mm-accent/20 text-2xl leading-none shadow-[0_0_0_5px_rgba(244,197,66,0.12)]"
            aria-hidden
          >
            🍪
          </div>

          <div className="min-w-0">
            <p className="text-sm font-extrabold uppercase tracking-[0.08em] text-mm-accent">Cookie notice</p>
            <p className="mt-1 text-sm leading-relaxed text-white/92 sm:text-[0.95rem]">
              We use cookies to improve your experience and understand site usage. By clicking Accept Cookies,
              you agree to our cookie use.
            </p>
            <p className="mt-1.5 text-xs text-white/80">
              Read more in our{" "}
              <Link href="/cookie-policy" className="font-semibold text-mm-accent underline underline-offset-2">
                Cookie Policy
              </Link>{" "}
              and{" "}
              <Link href="/privacy-policy" className="font-semibold text-mm-accent underline underline-offset-2">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>

        <div className="sm:ml-auto sm:shrink-0">
          <button
            type="button"
            onClick={acceptCookies}
            className="w-full rounded-xl border border-mm-accent-dark bg-mm-accent px-4 py-2.5 text-sm font-bold text-mm-navy transition hover:-translate-y-0.5 hover:bg-[#ffd86a] hover:shadow-[0_8px_16px_rgba(244,197,66,0.34)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mm-accent focus-visible:ring-offset-2 focus-visible:ring-offset-mm-navy sm:w-auto"
          >
            Accept Cookies
          </button>
        </div>
      </div>
    </aside>
  );
}