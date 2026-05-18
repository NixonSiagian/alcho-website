"use client";

import { useEffect, useState } from "react";

/**
 * Detects whether the viewport is below the desktop breakpoint.
 * Used to disable heavy parallax and simplify animations on mobile.
 */
export function useIsMobile(breakpoint = 1024): boolean {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mql = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    const update = () => setIsMobile(mql.matches);
    update();

    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, [breakpoint]);

  return isMobile;
}

/**
 * Honors the OS-level "prefers-reduced-motion" setting.
 */
export function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mql.matches);
    update();

    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);

  return reduced;
}

/**
 * Combined helper: returns `true` when parallax should be disabled.
 * Either mobile device OR reduced-motion preference.
 * On mobile: use simple opacity fade + small translateY (20-30px) instead.
 */
export function useShouldReduceParallax(breakpoint = 1024): boolean {
  const isMobile = useIsMobile(breakpoint);
  const prefersReduced = usePrefersReducedMotion();
  return isMobile || prefersReduced;
}
