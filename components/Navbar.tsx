"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full min-w-0 shrink-0 border-b border-white/[0.07] bg-mm-navy/95 backdrop-blur-md">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-mm-accent focus:px-4 focus:py-2 focus:text-mm-navy focus:outline-none"
      >
        Skip to main content
      </a>
      <nav
        className="site-container flex items-center justify-between gap-3 py-2 md:py-2.5"
        aria-label="Primary"
      >
        <Link
          href="/"
          className="group flex min-w-0 shrink-0 items-center gap-2 sm:gap-2.5"
        >
          <Image
            src="/logo.png"
            alt=""
            width={32}
            height={32}
            className="h-8 w-8 shrink-0 object-contain"
            priority
          />
          <span className="truncate text-sm font-semibold tracking-tight text-white transition group-hover:text-mm-primary sm:text-base">
            Make My Lesson
          </span>
        </Link>

        <button
          type="button"
          className="inline-flex min-h-10 min-w-10 shrink-0 items-center justify-center rounded-lg border border-white/15 text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mm-primary md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            )}
          </svg>
        </button>

        <ul className="hidden shrink-0 items-center gap-6 md:flex">
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mm-primary focus-visible:ring-offset-2 focus-visible:ring-offset-mm-navy ${
                    active ? "text-mm-primary" : "text-white/85 hover:text-mm-primary"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div
        id="mobile-menu"
        className={`border-t border-white/[0.07] bg-mm-navy/95 px-6 py-3 backdrop-blur-md md:hidden ${open ? "block" : "hidden"}`}
      >
        <ul className="flex flex-col gap-4">
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`block py-2 text-base font-medium transition ${
                    active ? "text-mm-primary" : "text-white/90 hover:text-mm-primary"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}
