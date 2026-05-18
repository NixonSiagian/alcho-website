"use client";

import { useEffect, useState } from "react";

/**
 * Detects whether the viewport is below the desktop breakpoint OR the user
 * has expressed a preference for reduced motion. Either condition disables
 * heavy parallax effects in favour of static layouts (luxury > flashy).
 */
export function useIsMobile(breakpoint = 1024): boolean {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mql = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    const update = () => setIsMobile(mql.matches);
    update();

    // Safari < 14 quirk: addListener fallback
    if (mql.addEventListener) {
      mql.addEventListener("change", update);
      return () => mql.removeEventListener("change", update);
    } else {
      mql.addListener(update);
      return () => mql.removeListener(update);
    }
  }, [breakpoint]);

  return isMobile;
}

/**
 * Honors the OS-level "prefers-reduced-motion" setting so we can disable
 * non-essential animations for users who need them off.
 */
export function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mql.matches);
    update();

    if (mql.addEventListener) {
      mql.addEventListener("change", update);
      return () => mql.removeEventListener("change", update);
    } else {
      mql.addListener(update);
      return () => mql.removeListener(update);
    }
  }, []);

  return reduced;
}

/**
 * Combined helper: returns `true` when parallax should be disabled — either
 * because the user is on a mobile device or has reduced-motion enabled.
 * Use this as the master gate for any heavy scroll-driven animation.
 */
export function useShouldReduceParallax(breakpoint = 1024): boolean {
  const isMobile = useIsMobile(breakpoint);
  const prefersReduced = usePrefersReducedMotion();
  return isMobile || prefersReduced;
}
