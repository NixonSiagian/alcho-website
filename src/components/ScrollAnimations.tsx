"use client";

import { ReactNode } from "react";
import { motion, Variants } from "framer-motion";
import { useShouldReduceParallax } from "@/hooks/useResponsive";

/* ═══════════════════════════════════════════════════════════════
   SCROLL ANIMATIONS — Minimal, Elegant Reveal System
   - Only fade + translateY (no blur, no scale, no heavy effects)
   - Respects reduced motion
   - Reduced intensity on mobile (max 16px translate)
   - Uses only transform + opacity for 60fps performance
   ═══════════════════════════════════════════════════════════════ */

/* ─── ScrollReveal ─── */
interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
  delay?: number;
  duration?: number;
  once?: boolean;
}

export function ScrollReveal({
  children,
  className,
  direction = "up",
  distance = 24,
  delay = 0,
  duration = 0.75,
  once = true,
}: ScrollRevealProps) {
  const reduce = useShouldReduceParallax();

  // Mobile: reduce distance to max 16px for smooth performance
  const effectiveDistance = reduce ? Math.min(distance, 16) : distance;
  const effectiveDuration = reduce ? 0.4 : duration;

  const dirMap = {
    up: { x: 0, y: effectiveDistance },
    down: { x: 0, y: -effectiveDistance },
    left: { x: effectiveDistance, y: 0 },
    right: { x: -effectiveDistance, y: 0 },
  };

  const { x, y } = dirMap[direction];

  return (
    <motion.div
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration: effectiveDuration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── StaggerChildren ─── */
interface StaggerChildrenProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
}

export function StaggerChildren({
  children,
  className,
  stagger = 0.07,
  delay = 0.08,
}: StaggerChildrenProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: stagger, delayChildren: delay },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

/* ─── FadeIn ─── */
interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}

export function FadeIn({ children, className, delay = 0, y = 16 }: FadeInProps) {
  const reduce = useShouldReduceParallax();
  const dist = reduce ? Math.min(y, 10) : y;

  return (
    <motion.div
      initial={{ opacity: 0, y: dist }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: reduce ? 0.35 : 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
