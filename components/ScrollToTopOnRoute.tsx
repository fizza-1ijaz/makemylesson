"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function ScrollToTopOnRoute() {
  const pathname = usePathname();

  useEffect(() => {
    // Respect explicit anchor navigation like /#section-id.
    if (window.location.hash) return;

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}
