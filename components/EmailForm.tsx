"use client";

import { FormEvent, useState } from "react";

type EmailFormProps = {
  variant: "hero" | "cta";
  id?: string;
};

export function EmailForm({ variant, id }: EmailFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [status, setStatus] = useState<"success" | "error" | null>(null);
  const isHero = variant === "hero";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const email = String(formData.get("Email") ?? "").trim();

    if (!email) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);
    setStatus(null);
    setMessage(null);

    try {
      const response = await fetch("/api/notify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email,
        }),
      });

      if (!response.ok) {
        throw new Error("Unable to submit right now.");
      }

      form.reset();
      setStatus("success");
      setMessage(
        "Thank you! Your email has been added to our waitlist. You will hear from us when the app is ready to launch.",
      );
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  const inputClassName = isHero
    ? "ui-input min-h-12 min-w-0 w-full flex-1 border border-white/15 bg-white/10 px-4 py-3 text-base text-white placeholder:text-white/50 outline-none transition focus:border-mm-primary focus:ring-2 focus:ring-mm-primary/40 sm:min-h-[52px]"
    : "ui-input min-h-12 min-w-0 w-full flex-1 border border-mm-muted/25 bg-mm-surface px-4 py-3 text-base text-mm-navy placeholder:text-mm-muted outline-none transition focus:border-mm-primary focus:ring-2 focus:ring-mm-primary/35 sm:min-h-[52px]";

  const buttonClassName = isHero
    ? "ui-btn inline-flex min-h-12 w-full min-w-0 shrink-0 items-center justify-center bg-mm-accent px-6 py-3 font-semibold text-mm-navy shadow-md transition hover:scale-[1.02] hover:bg-mm-accent-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mm-accent focus-visible:ring-offset-2 focus-visible:ring-offset-mm-navy disabled:cursor-not-allowed disabled:opacity-70 sm:h-auto sm:w-auto sm:min-h-[52px] sm:min-w-[9.5rem] sm:px-8"
    : "ui-btn inline-flex min-h-12 w-full min-w-0 shrink-0 items-center justify-center bg-mm-accent px-6 py-3 font-semibold text-mm-navy shadow-md transition hover:scale-[1.02] hover:bg-mm-accent-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mm-accent focus-visible:ring-offset-2 focus-visible:ring-offset-mm-light disabled:cursor-not-allowed disabled:opacity-70 sm:h-auto sm:w-auto sm:min-h-[52px] sm:min-w-[9.5rem] sm:px-8";

  return (
    <div
      className={
        isHero
          ? "flex w-full min-w-0 flex-col items-center justify-center"
          : "flex w-full min-w-0 flex-col items-center"
      }
    >
      <form
        id={id}
        action="/api/notify"
        method="post"
        onSubmit={handleSubmit}
        className={
          isHero
            ? "mx-auto flex w-full max-w-lg flex-col items-stretch gap-3 sm:max-w-2xl sm:flex-row sm:items-stretch sm:justify-center sm:gap-3"
            : "mx-auto flex w-full max-w-lg flex-col items-stretch gap-3 sm:flex-row sm:items-stretch sm:justify-center sm:gap-3"
        }
      >
        <label htmlFor={`email-${variant}`} className="sr-only">
          Email address
        </label>
        <input
          id={`email-${variant}`}
          name="Email"
          type="email"
          autoComplete="email"
          placeholder="you@school.edu"
          required
          className={inputClassName}
        />
        <input type="hidden" name="_subject" value="New Waitlist Signup - Make my lesson" />
        <input type="hidden" name="Source" value="Landing page waitlist" />
        <input type="hidden" name="_captcha" value="false" />
        <button type="submit" className={buttonClassName} disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Notify Me"}
        </button>
      </form>
      {message ? (
        <p
          className={`mt-3 max-w-[min(100%,28rem)] px-1 text-center text-sm leading-snug sm:px-0 ${status === "success" ? (isHero ? "text-mm-primary" : "text-mm-primary-dark") : "text-red-400"}`}
          role="status"
        >
          {message}
        </p>
      ) : null}
    </div>
  );
}
