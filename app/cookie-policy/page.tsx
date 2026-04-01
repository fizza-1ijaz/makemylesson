import Link from "next/link";
import type { Metadata } from "next";

const linkClass =
  "font-medium text-mm-primary underline decoration-mm-primary/35 underline-offset-2 hover:text-mm-primary-dark";

export const metadata: Metadata = {
  title: "Cookie Policy | Make My Lesson",
  description:
    "Cookie Policy for Make My Lesson (makemylesson.ai). Interim pre-launch version — how we use cookies and analytics.",
};

export default function CookiePolicyPage() {
  return (
    <main id="main" className="flex min-h-0 w-full min-w-0 flex-1 flex-col">
      <article className="flex-1 bg-mm-light px-6 py-12 sm:py-16">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/"
            className="inline-block text-sm font-medium text-mm-primary-dark underline-offset-4 transition hover:text-mm-primary hover:underline"
          >
            ← Back to home
          </Link>

          <h1 className="ds-h1 mt-6 font-extrabold text-mm-navy">Cookie Policy</h1>

          <div className="mt-6 space-y-2 rounded-xl border border-mm-primary/15 bg-mm-surface p-4 text-sm text-mm-muted sm:p-5">
            <p>
              <span className="font-semibold text-mm-navy">Status:</span> Interim — pre-launch version.
            </p>
            <p>
              <span className="font-semibold text-mm-navy">Last Updated:</span> 27th March, 2026
            </p>
          </div>

          <div className="mt-10 space-y-10 text-base leading-relaxed text-mm-muted">
            <section aria-labelledby="cookie-what">
              <h2 id="cookie-what" className="ds-h4 font-bold text-mm-navy">
                1. What Are Cookies?
              </h2>
              <p className="mt-3">
                Cookies are small text files placed on your device when you visit a website. They help websites function
                correctly, remember your preferences, and provide information to website owners about how their site is
                being used.
              </p>
            </section>

            <section aria-labelledby="cookie-current">
              <h2 id="cookie-current" className="ds-h4 font-bold text-mm-navy">
                2. Cookies We Currently Use
              </h2>

              <div className="mt-4 space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-mm-navy">2.1 Strictly Necessary Cookies</h3>
                  <p className="mt-2">
                    These cookies are essential for the website to work. They manage your session and remember your
                    cookie consent choice. They do not require your consent and cannot be switched off.
                  </p>
                  <ul className="mt-3 list-disc space-y-2 pl-5">
                    <li>
                      <span className="font-semibold text-mm-navy">Cookie consent preference</span> — remembers your
                      cookie settings choice | <span className="text-mm-navy">Duration:</span> 12 months
                    </li>
                    <li>
                      <span className="font-semibold text-mm-navy">Session management</span> — maintains your active
                      session | <span className="text-mm-navy">Duration:</span> Session
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-mm-navy">2.2 Analytics Cookies — Google Analytics (With Consent Only)</h3>
                  <p className="mt-2">
                    We use Google Analytics to understand how visitors use this website. These cookies are only placed
                    with your consent and collect aggregated, anonymised data. They do not identify you personally.
                  </p>
                  <ul className="mt-3 list-disc space-y-2 pl-5">
                    <li>
                      <span className="font-semibold text-mm-navy">_ga</span> — distinguishes unique visitors |{" "}
                      <span className="text-mm-navy">Duration:</span> 2 years
                    </li>
                    <li>
                      <span className="font-semibold text-mm-navy">_ga_[ID]</span> — maintains session state |{" "}
                      <span className="text-mm-navy">Duration:</span> 2 years
                    </li>
                    <li>
                      <span className="font-semibold text-mm-navy">_gid</span> — distinguishes visitors within 24 hours |{" "}
                      <span className="text-mm-navy">Duration:</span> 24 hours
                    </li>
                  </ul>
                  <p className="mt-3">
                    You can opt out of Google Analytics at any time using the Google Analytics Opt-Out Browser Add-on at{" "}
                    <a href="https://tools.google.com/dlpage/gaoptout" className={linkClass}>
                      tools.google.com/dlpage/gaoptout
                    </a>
                    .
                  </p>
                </div>
              </div>
            </section>

            <section aria-labelledby="cookie-not-used">
              <h2 id="cookie-not-used" className="ds-h4 font-bold text-mm-navy">
                3. Cookies We Do Not Currently Use
              </h2>
              <p className="mt-3">
                This website does not currently use advertising cookies, social media tracking cookies, or remarketing
                cookies. If this changes, this policy will be updated and your consent will be requested before any new
                cookies are placed.
              </p>
            </section>

            <section aria-labelledby="cookie-choices">
              <h2 id="cookie-choices" className="ds-h4 font-bold text-mm-navy">
                4. Your Cookie Choices
              </h2>
              <p className="mt-3">
                When you first visit{" "}
                <a href="https://makemylesson.ai" className={linkClass}>
                  makemylesson.ai
                </a>
                , a cookie consent banner will appear. You may accept all cookies, accept strictly necessary cookies
                only, or adjust your preferences. You may change your preferences at any time via the Cookie Settings
                link in the footer.
              </p>
              <p className="mt-3">
                You may also manage cookies through your browser settings. The following links provide guidance for common
                browsers:
              </p>
              <ul className="mt-3 list-none space-y-2">
                <li>
                  <span className="font-semibold text-mm-navy">Google Chrome:</span>{" "}
                  <a href="https://support.google.com/chrome/answer/95647" className={linkClass}>
                    support.google.com/chrome/answer/95647
                  </a>
                </li>
                <li>
                  <span className="font-semibold text-mm-navy">Mozilla Firefox:</span>{" "}
                  <a href="https://support.mozilla.org/en-US/kb/cookies" className={linkClass}>
                    support.mozilla.org/en-US/kb/cookies
                  </a>
                </li>
                <li>
                  <span className="font-semibold text-mm-navy">Apple Safari:</span>{" "}
                  <a href="https://support.apple.com/guide/safari/manage-cookies" className={linkClass}>
                    support.apple.com/guide/safari/manage-cookies
                  </a>
                </li>
                <li>
                  <span className="font-semibold text-mm-navy">Microsoft Edge:</span>{" "}
                  <a href="https://support.microsoft.com/en-us/microsoft-edge/cookies" className={linkClass}>
                    support.microsoft.com/en-us/microsoft-edge/cookies
                  </a>
                </li>
              </ul>
            </section>

            <section aria-labelledby="cookie-changes">
              <h2 id="cookie-changes" className="ds-h4 font-bold text-mm-navy">
                5. Changes to This Policy
              </h2>
              <p className="mt-3">
                This Cookie Policy will be updated before the Make My Lesson platform goes live. The &apos;Last
                Updated&apos; date at the top of this page will reflect any changes.
              </p>
            </section>

            <section aria-labelledby="cookie-contact">
              <h2 id="cookie-contact" className="ds-h4 font-bold text-mm-navy">
                6. Contact
              </h2>
              <ul className="mt-3 list-none space-y-2">
                <li>
                  <span className="font-semibold text-mm-navy">Email:</span>{" "}
                  <a href="mailto:support@makemylesson.ai" className={linkClass}>
                    support@makemylesson.ai
                  </a>
                </li>
                <li>
                  <span className="font-semibold text-mm-navy">Postal address:</span> Office 501, Building 1025, Road
                  3621, Block 436, Al Seef, Bahrain
                </li>
              </ul>
            </section>
          </div>
        </div>
      </article>
    </main>
  );
}
