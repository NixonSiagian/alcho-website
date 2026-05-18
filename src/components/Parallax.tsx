"use client";

import { useRef, ReactNode } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useShouldReduceParallax } from "@/hooks/useResponsive";

/* ═══════════════════════════════════════════════════════════════
   PARALLAX — Refined, Cinematic, Subtle
   - Reduced max movement: 60–90px (was 80–120)
   - Smoother spring for silkier feel
   - Completely static on mobile (no jitter)
   - ONLY used in Hero + one Highlight section
   ═══════════════════════════════════════════════════════════════ */

const springConfig = { stiffness: 50, damping: 26, mass: 0.7 };

/* ─── ParallaxLayer ─── */
interface ParallaxLayerProps {
  children: ReactNode;
  offset?: number; // -90 to 90
  className?: string;
}

export function ParallaxLayer({
  children,
  offset = -60,
  className,
}: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useShouldReduceParallax();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const smooth = useSpring(scrollYProgress, springConfig);
  const clampedOffset = Math.max(-90, Math.min(90, offset));
  const y = useTransform(smooth, [0, 1], [clampedOffset, -clampedOffset]);

  if (reduce) {
    return <div ref={ref} className={className}>{children}</div>;
  }

  return (
    <motion.div ref={ref} style={{ y }} className={`${className ?? ""} gpu`}>
      {children}
    </motion.div>
  );
}

/* ─── ParallaxImage (background image with subtle depth) ─── */
interface ParallaxImageProps {
  children: ReactNode;
  className?: string;
  strength?: number; // 60–90
}

export function ParallaxImage({
  children,
  className,
  strength = 60,
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useShouldReduceParallax();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const smooth = useSpring(scrollYProgress, springConfig);
  const clampedStrength = Math.max(40, Math.min(90, strength));
  const y = useTransform(smooth, [0, 1], [-clampedStrength, clampedStrength]);

  return (
    <div ref={ref} className={className}>
      {reduce ? (
        <div className="absolute inset-0">{children}</div>
      ) : (
        <motion.div style={{ y }} className="absolute inset-[-6%] gpu">
          {children}
        </motion.div>
      )}
    </div>
  );
}

/* ─── Re-export FadeIn for backward compatibility ─── */
export { FadeIn } from "@/components/ScrollAnimations";
