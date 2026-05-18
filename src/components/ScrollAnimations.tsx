"use client";

import { useRef, ReactNode } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  Variants,
} from "framer-motion";
import { useShouldReduceParallax } from "@/hooks/useResponsive";

/* ═══════════════════════════════════════════════════════════════
   SCROLL ANIMATIONS — Cinematic Premium Motion Toolkit
   ─────────────────────────────────────────────────────────────
   A collection of reusable scroll-driven animation components
   designed for luxury/premium websites. Each component:
   • Uses only transform + opacity (GPU composited)
   • Respects reduced motion preferences
   • Reduces intensity on mobile automatically
   • Provides smooth spring-based easing
   ═══════════════════════════════════════════════════════════════ */

const luxurySpring = { stiffness: 60, damping: 22, mass: 0.5 };
const snappySpring = { stiffness: 80, damping: 24, mass: 0.4 };

/* ─────────────────────────────────────────────────────────────
   ScrollReveal
   ─────────────────────────────────────────────────────────────
   Elegant on-scroll reveal with configurable direction, distance
   and blur. Designed to feel like content is emerging from a
   cinematic fog — luxurious, not jarring.
   ──────────────────────────────────────────────────────────── */
type RevealDirection = "up" | "down" | "left" | "right" | "none";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  direction?: RevealDirection;
  /** Distance in pixels (auto-reduced on mobile) */
  distance?: number;
  /** Delay in seconds */
  delay?: number;
  /** Duration in seconds */
  duration?: number;
  /** Add a subtle blur-to-sharp effect */
  blur?: boolean;
  /** Trigger once or every time */
  once?: boolean;
  /** Scale from this value to 1 */
  scale?: number;
  /** Viewport margin for early/late triggering */
  viewportMargin?: string;
}

export function ScrollReveal({
  children,
  className,
  direction = "up",
  distance = 40,
  delay = 0,
  duration = 0.8,
  blur = false,
  once = true,
  scale,
  viewportMargin = "-80px",
}: ScrollRevealProps) {
  const reduce = useShouldReduceParallax();

  // Reduce intensity on mobile
  const effectiveDistance = reduce ? Math.min(distance, 16) : distance;
  const effectiveDuration = reduce ? Math.min(duration, 0.5) : duration;

  const directionMap: Record<RevealDirection, { x: number; y: number }> = {
    up: { x: 0, y: effectiveDistance },
    down: { x: 0, y: -effectiveDistance },
    left: { x: effectiveDistance, y: 0 },
    right: { x: -effectiveDistance, y: 0 },
    none: { x: 0, y: 0 },
  };

  const { x, y } = directionMap[direction];

  const initial: Record<string, number | string> = {
    opacity: 0,
    x,
    y,
  };
  if (scale) initial.scale = scale;
  if (blur && !reduce) initial.filter = "blur(6px)";

  const animate: Record<string, number | string> = {
    opacity: 1,
    x: 0,
    y: 0,
  };
  if (scale) animate.scale = 1;
  if (blur && !reduce) animate.filter = "blur(0px)";

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once, margin: viewportMargin }}
      transition={{
        duration: effectiveDuration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────────
   ParallaxSection
   ─────────────────────────────────────────────────────────────
   A section wrapper that adds cinematic depth via differential
   scroll speeds. Content inside moves at a slightly different
   rate than the page scroll, creating a subtle depth illusion.
   ──────────────────────────────────────────────────────────── */
interface ParallaxSectionProps {
  children: ReactNode;
  className?: string;
  /** Scroll speed multiplier. 0 = static, negative = opposite direction */
  speed?: number;
  /** Enable subtle scale on scroll */
  scale?: boolean;
  /** Enable opacity fade at edges */
  fade?: boolean;
}

export function ParallaxSection({
  children,
  className,
  speed = -0.1,
  scale: enableScale = false,
  fade = false,
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useShouldReduceParallax();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const smooth = useSpring(scrollYProgress, luxurySpring);

  // Convert speed to pixel offset range
  const offset = speed * 100;
  const y = useTransform(smooth, [0, 1], [offset, -offset]);
  const scaleVal = useTransform(smooth, [0, 0.5, 1], [0.97, 1, 1.03]);
  const opacity = useTransform(smooth, [0, 0.15, 0.85, 1], [0.5, 1, 1, 0.5]);

  if (reduce) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      style={{
        y,
        ...(enableScale && { scale: scaleVal }),
        ...(fade && { opacity }),
      }}
      className={`${className ?? ""} gpu`}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────────
   StaggerChildren
   ─────────────────────────────────────────────────────────────
   A container that staggers the reveal of its children with
   elegant timing. Perfect for card grids and feature lists.
   ──────────────────────────────────────────────────────────── */
interface StaggerChildrenProps {
  children: ReactNode;
  className?: string;
  /** Stagger delay between children */
  stagger?: number;
  /** Starting delay */
  delay?: number;
  /** Viewport margin */
  viewportMargin?: string;
}

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export function StaggerChildren({
  children,
  className,
  stagger = 0.08,
  delay = 0.1,
  viewportMargin = "-60px",
}: StaggerChildrenProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: viewportMargin }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: stagger,
            delayChildren: delay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* Companion child variant — use on direct children inside StaggerChildren */
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* ─────────────────────────────────────────────────────────────
   CinematicDivider
   ─────────────────────────────────────────────────────────────
   A scroll-triggered gold line that grows from center on reveal.
   Provides elegant visual separation between sections.
   ──────────────────────────────────────────────────────────── */
interface CinematicDividerProps {
  className?: string;
}

export function CinematicDivider({ className }: CinematicDividerProps) {
  return (
    <motion.div
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      className={`w-full max-w-xs mx-auto h-px bg-gradient-to-r from-transparent via-gold-400/50 to-transparent ${className ?? ""}`}
    />
  );
}

/* ─────────────────────────────────────────────────────────────
   FloatingElement
   ─────────────────────────────────────────────────────────────
   Adds a gentle floating animation to any element. Used for
   decorative accents that should feel weightless and alive.
   ──────────────────────────────────────────────────────────── */
interface FloatingElementProps {
  children: ReactNode;
  className?: string;
  /** Float amplitude in pixels */
  amplitude?: number;
  /** Animation duration in seconds */
  duration?: number;
  /** Delay offset */
  delay?: number;
}

export function FloatingElement({
  children,
  className,
  amplitude = 12,
  duration = 5,
  delay = 0,
}: FloatingElementProps) {
  const reduce = useShouldReduceParallax();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      animate={{ y: [0, -amplitude, 0] }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────────
   ScrollScale
   ─────────────────────────────────────────────────────────────
   Scale content based on scroll progress within the viewport.
   Creates a cinematic "zooming in" or "zooming out" feel as
   sections come into view.
   ──────────────────────────────────────────────────────────── */
interface ScrollScaleProps {
  children: ReactNode;
  className?: string;
  /** Starting scale (before entering viewport) */
  from?: number;
  /** Ending scale (when fully in viewport) */
  to?: number;
  /** Also fade in/out */
  fade?: boolean;
}

export function ScrollScale({
  children,
  className,
  from = 0.92,
  to = 1,
  fade = true,
}: ScrollScaleProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useShouldReduceParallax();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const smooth = useSpring(scrollYProgress, snappySpring);
  const scale = useTransform(smooth, [0, 1], [from, to]);
  const opacity = useTransform(smooth, [0, 0.4, 1], [0, 1, 1]);

  if (reduce) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      style={{
        scale,
        ...(fade && { opacity }),
      }}
      className={`${className ?? ""} gpu`}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────────
   TextReveal
   ─────────────────────────────────────────────────────────────
   Word-by-word or line-by-line cinematic text reveal. Perfect
   for hero headings and pull quotes that deserve attention.
   ──────────────────────────────────────────────────────────── */
interface TextRevealProps {
  children: string;
  className?: string;
  /** Delay before animation starts */
  delay?: number;
  /** Reveal by "word" or "character" */
  by?: "word" | "character";
}

export function TextReveal({
  children,
  className,
  delay = 0,
  by = "word",
}: TextRevealProps) {
  const reduce = useShouldReduceParallax();
  const units = by === "word" ? children.split(" ") : children.split("");

  if (reduce) {
    return <span className={className}>{children}</span>;
  }

  return (
    <motion.span
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className={className}
      aria-label={children}
    >
      {units.map((unit, i) => (
        <motion.span
          key={`${unit}-${i}`}
          variants={{
            hidden: { opacity: 0, y: 12 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
                delay: delay + i * 0.04,
                ease: [0.22, 1, 0.36, 1],
              },
            },
          }}
          className="inline-block"
          style={{ marginRight: by === "word" ? "0.3em" : undefined }}
        >
          {unit}
        </motion.span>
      ))}
    </motion.span>
  );
}

/* ─────────────────────────────────────────────────────────────
   GradientShift
   ─────────────────────────────────────────────────────────────
   A background wrapper with a subtle scroll-driven gradient
   shift for cinematic lighting effects on dark sections.
   ──────────────────────────────────────────────────────────── */
interface GradientShiftProps {
  children: ReactNode;
  className?: string;
}

export function GradientShift({ children, className }: GradientShiftProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useShouldReduceParallax();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const smooth = useSpring(scrollYProgress, luxurySpring);
  const bgPosition = useTransform(smooth, [0, 1], ["0% 0%", "100% 100%"]);

  if (reduce) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      style={{ backgroundPosition: bgPosition }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
