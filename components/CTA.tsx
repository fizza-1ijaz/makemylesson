import { EmailForm } from "./EmailForm";

export function CTA() {
  return (
    <section
      id="contact"
      className="section-space bg-mm-navy bg-gradient-to-b from-mm-accent/20 to-mm-navy"
      aria-labelledby="cta-heading"
    >
      <div className="site-container">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="cta-heading"
            className="ds-h2 text-balance font-extrabold text-white"
          >
            Make My Lesson is coming soon.
          </h2>
          <p className="mt-4 text-white/75">
            Be the first to know when we open early access.
          </p>
          <div className="mt-10">
            <EmailForm variant="cta" />
          </div>
        </div>
      </div>
    </section>
  );
}
