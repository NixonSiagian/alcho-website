"use client";

import { useRef, ReactNode } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useShouldReduceParallax } from "@/hooks/useResponsive";

/* ═══════════════════════════════════════════════════════════════
   PARALLAX — Minimal, Performance-First
   - Max 80px movement
   - Spring-smoothed for silky feel
   - Completely disabled on mobile (simple fade only)
   - Only use in Hero + one Highlight section
   ═══════════════════════════════════════════════════════════════ */

const springConfig = { stiffness: 80, damping: 24, mass: 0.4 };

/* ─── ParallaxLayer ─── */
interface ParallaxLayerProps {
  children: ReactNode;
  offset?: number; // max 80px
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
  const clampedOffset = Math.max(-80, Math.min(80, offset));
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
  strength?: number; // max 80
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
  const clampedStrength = Math.min(strength, 80);
  const y = useTransform(smooth, [0, 1], [-clampedStrength, clampedStrength]);

  return (
    <div ref={ref} className={className}>
      {reduce ? (
        <div className="absolute inset-0 scale-[1.02]">{children}</div>
      ) : (
        <motion.div style={{ y }} className="absolute inset-[-5%] gpu">
          {children}
        </motion.div>
      )}
    </div>
  );
}



/* ─── Re-export FadeIn for backward compatibility ─── */
export { FadeIn } from "@/components/ScrollAnimations";
