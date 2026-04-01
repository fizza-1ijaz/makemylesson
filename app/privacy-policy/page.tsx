import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Make My Lesson",
  description:
    "Privacy Policy for Make My Lesson (makemylesson.ai). Interim pre-launch version under Bahrain PDPL No. 30 of 2018.",
};

export default function PrivacyPolicyPage() {
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

          <h1 className="ds-h1 mt-6 font-extrabold text-mm-navy">Privacy Policy</h1>

          <div className="mt-6 space-y-2 rounded-xl border border-mm-primary/15 bg-mm-surface p-4 text-sm text-mm-muted sm:p-5">
            <p>
              <span className="font-semibold text-mm-navy">Status:</span> Interim — pre-launch version.
            </p>
            <p>
              <span className="font-semibold text-mm-navy">Governing Law:</span> Bahrain Personal Data Protection Law
              (PDPL) No. 30 of 2018
            </p>
            <p>
              <span className="font-semibold text-mm-navy">Last Updated:</span> 27th March, 2026
            </p>
          </div>

          <div className="mt-10 space-y-10 text-base leading-relaxed text-mm-muted">
            <section aria-labelledby="privacy-who-we-are">
              <h2 id="privacy-who-we-are" className="ds-h4 font-bold text-mm-navy">
                1. Who We Are
              </h2>
              <p className="mt-3">
                Make My Lesson is an AI-powered lesson planning platform developed by Skyen Solutions, a trade name of
                Qismat Ventures W.L.L. (CR 190698-1), registered in Bahrain.
              </p>
              <p className="mt-3">
                In this Privacy Policy, &apos;Make My Lesson&apos;, &apos;we&apos;, &apos;us&apos;, and &apos;our&apos;
                refer to the team operating the website at{" "}
                <a
                  href="https://makemylesson.ai"
                  className="font-medium text-mm-primary underline decoration-mm-primary/35 underline-offset-2 hover:text-mm-primary-dark"
                >
                  makemylesson.ai
                </a>
                . If you have questions about how we handle your data, please contact us at{" "}
                <a
                  href="mailto:privacy@makemylesson.ai"
                  className="font-medium text-mm-primary underline decoration-mm-primary/35 underline-offset-2 hover:text-mm-primary-dark"
                >
                  privacy@makemylesson.ai
                </a>{" "}
                or at our registered address: Office 501, Building 1025, Road 3621, Block 436, Al Seef, Bahrain.
              </p>
            </section>

            <section aria-labelledby="privacy-what-covers">
              <h2 id="privacy-what-covers" className="ds-h4 font-bold text-mm-navy">
                2. What This Policy Covers
              </h2>
              <p className="mt-3">
                This interim Privacy Policy applies to the Make My Lesson website at makemylesson.ai during its
                pre-launch phase. It covers two types of data collection currently active on this website: website
                analytics (via Google Analytics) and email addresses submitted through our launch notification form.
              </p>
              <p className="mt-3">
                Make My Lesson is not yet a live product. When the platform launches and user accounts, learning data,
                and additional features become active, this policy will be updated in full before those features go live.
              </p>
            </section>

            <section aria-labelledby="privacy-what-data">
              <h2 id="privacy-what-data" className="ds-h4 font-bold text-mm-navy">
                3. What Data We Collect
              </h2>

              <div className="mt-4 space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-mm-navy">3.1 Analytics Data</h3>
                  <p className="mt-2">
                    We use Google Analytics to understand how visitors find and use this website. Google Analytics
                    automatically collects technical information including your IP address, browser type, device type,
                    pages visited, time on page, and approximate geographic location. This data is aggregated and does
                    not identify you personally.
                  </p>
                  <p className="mt-3">
                    Analytics cookies are only placed on your device with your consent, which you provide through our
                    cookie consent banner.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-mm-navy">3.2 Email Address — Launch Notification</h3>
                  <p className="mt-2">
                    If you submit your email address through our &apos;Notify Me&apos; form, we collect and store that
                    email address for the sole purpose of sending you a notification when Make My Lesson launches. We
                    will not use your email address for any other purpose without your explicit consent. You may withdraw
                    your consent and have your email removed from our list at any time by contacting us at{" "}
                    <a
                      href="mailto:support@makemylesson.ai"
                      className="font-medium text-mm-primary underline decoration-mm-primary/35 underline-offset-2 hover:text-mm-primary-dark"
                    >
                      support@makemylesson.ai
                    </a>
                    .
                  </p>
                </div>
              </div>
            </section>

            <section aria-labelledby="privacy-legal-basis">
              <h2 id="privacy-legal-basis" className="ds-h4 font-bold text-mm-navy">
                4. Legal Basis for Processing
              </h2>
              <p className="mt-3">
                We process analytics data on the basis of your consent, provided through the cookie consent banner on
                this website. You may withdraw consent at any time through the cookie settings panel.
              </p>
              <p className="mt-3">
                We process email addresses submitted through the notification form on the basis of your consent, given
                at the point of submission. You may withdraw this consent at any time.
              </p>
            </section>

            <section aria-labelledby="privacy-share">
              <h2 id="privacy-share" className="ds-h4 font-bold text-mm-navy">
                5. How We Share Your Data
              </h2>
              <p className="mt-3">
                We do not sell your data. We do not share your email address with third parties for marketing purposes.
              </p>
              <p className="mt-3">
                Analytics data is processed by Google in accordance with Google&apos;s own privacy policies. Email
                addresses may be stored using a third-party email service provider — any such provider is bound by a
                data processing agreement and is not permitted to use your data for its own purposes.
              </p>
            </section>

            <section aria-labelledby="privacy-retention">
              <h2 id="privacy-retention" className="ds-h4 font-bold text-mm-navy">
                6. How Long We Keep Your Data
              </h2>
              <p className="mt-3">
                Email addresses collected through the notification form will be retained until the Make My Lesson
                platform launches and notifications are sent, or until you request removal — whichever comes first.
                Following the launch notification, we will ask for your separate consent before sending any further
                communications.
              </p>
              <p className="mt-3">
                Analytics data is retained in accordance with Google Analytics&apos; standard retention settings.
              </p>
            </section>

            <section aria-labelledby="privacy-rights">
              <h2 id="privacy-rights" className="ds-h4 font-bold text-mm-navy">
                7. Your Rights
              </h2>
              <p className="mt-3">
                Depending on your location, you may have rights to access, correct, delete, or restrict the processing
                of your personal data, and to withdraw consent at any time. To exercise any of these rights, please
                contact us at{" "}
                <a
                  href="mailto:privacy@makemylesson.ai"
                  className="font-medium text-mm-primary underline decoration-mm-primary/35 underline-offset-2 hover:text-mm-primary-dark"
                >
                  privacy@makemylesson.ai
                </a>
                . We will respond within 30 days.
              </p>
            </section>

            <section aria-labelledby="privacy-changes">
              <h2 id="privacy-changes" className="ds-h4 font-bold text-mm-navy">
                8. Changes to This Policy
              </h2>
              <p className="mt-3">
                This policy will be updated before the Make My Lesson platform goes live. Material changes will be
                communicated to users who have submitted their email address through the notification form.
              </p>
            </section>

            <section aria-labelledby="privacy-contact">
              <h2 id="privacy-contact" className="ds-h4 font-bold text-mm-navy">
                9. Contact
              </h2>
              <ul className="mt-3 list-none space-y-2">
                <li>
                  <span className="font-semibold text-mm-navy">Email:</span>{" "}
                  <a
                    href="mailto:support@makemylesson.ai"
                    className="font-medium text-mm-primary underline decoration-mm-primary/35 underline-offset-2 hover:text-mm-primary-dark"
                  >
                    support@makemylesson.ai
                  </a>
                </li>
                <li>
                  <span className="font-semibold text-mm-navy">Website:</span>{" "}
                  <a
                    href="https://makemylesson.ai"
                    className="font-medium text-mm-primary underline decoration-mm-primary/35 underline-offset-2 hover:text-mm-primary-dark"
                  >
                    makemylesson.ai
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
