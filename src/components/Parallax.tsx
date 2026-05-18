"use client";

import { useRef, ReactNode } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useShouldReduceParallax } from "@/hooks/useResponsive";

/* ═══════════════════════════════════════════════════════════════
   PARALLAX — Minimal, Performance-First
   - Max movement: 80–120px
   - Smooth spring easing (luxurious feel)
   - Completely disabled on mobile (opacity fade only)
   - ONLY used in Hero + one Highlight section
   ═══════════════════════════════════════════════════════════════ */

const springConfig = { stiffness: 70, damping: 22, mass: 0.5 };

/* ─── ParallaxLayer ─── */
interface ParallaxLayerProps {
  children: ReactNode;
  offset?: number; // -120 to 120
  className?: string;
}

export function ParallaxLayer({
  children,
  offset = -80,
  className,
}: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useShouldReduceParallax();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const smooth = useSpring(scrollYProgress, springConfig);
  const clampedOffset = Math.max(-120, Math.min(120, offset));
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
  strength?: number; // 80–120
}

export function ParallaxImage({
  children,
  className,
  strength = 80,
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useShouldReduceParallax();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const smooth = useSpring(scrollYProgress, springConfig);
  const clampedStrength = Math.max(80, Math.min(120, strength));
  const y = useTransform(smooth, [0, 1], [-clampedStrength, clampedStrength]);

  return (
    <div ref={ref} className={className}>
      {reduce ? (
        // Mobile: static, no parallax
        <div className="absolute inset-0">{children}</div>
      ) : (
        // Desktop: smooth parallax movement
        <motion.div style={{ y }} className="absolute inset-[-8%] gpu">
          {children}
        </motion.div>
      )}
    </div>
  );
}

/* ─── Re-export FadeIn for backward compatibility ─── */
export { FadeIn } from "@/components/ScrollAnimations";
