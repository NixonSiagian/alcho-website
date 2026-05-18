"use client";

import { useRef, ReactNode } from "react";
import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion";
import { useShouldReduceParallax } from "@/hooks/useResponsive";

/* ─────────────────────────────────────────────────────────────
   ParallaxLayer
   --------------------------------------------------------------
   Generic scroll-driven translateY. Uses the *page* scroll
   progress relative to the layer's own offset so the effect is
   subtle and consistent across viewports. On mobile or when
   reduced-motion is requested, parallax is disabled and content
   renders statically with no transform cost.
   ──────────────────────────────────────────────────────────── */
interface ParallaxLayerProps {
  children: ReactNode;
  /** Pixel offset applied across the visible scroll range. Negative = upward. */
  offset?: number;
  /** Optional opacity fade range (default: no fade). */
  fade?: boolean;
  /** Optional scale-up effect alongside the translate. */
  scale?: boolean;
  className?: string;
  /** Override mobile guard if you want a (very) light effect even on mobile. */
  enableOnMobile?: boolean;
}

export function ParallaxLayer({
  children,
  offset = -80,
  fade = false,
  scale = false,
  className,
  enableOnMobile = false,
}: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useShouldReduceParallax();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Smooth out scroll input with a spring — feels much more luxurious than raw scroll
  const smooth: MotionValue<number> = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 24,
    mass: 0.4,
  });

  // Scale offset down on mobile if explicitly enabled
  const effectiveOffset = enableOnMobile && reduce ? offset * 0.35 : offset;

  const y = useTransform(smooth, [0, 1], [effectiveOffset, -effectiveOffset]);
  const opacity = useTransform(smooth, [0, 0.2, 0.8, 1], [0.4, 1, 1, 0.4]);
  const scaleVal = useTransform(smooth, [0, 0.5, 1], [0.96, 1, 1.04]);

  // If reducing parallax and not explicitly opted in, render static
  if (reduce && !enableOnMobile) {
    return <div ref={ref} className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      style={{
        y,
        ...(fade && { opacity }),
        ...(scale && { scale: scaleVal }),
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────────
   ParallaxImage
   --------------------------------------------------------------
   A wrapper meant for full-bleed background images. The image
   moves slower than the foreground (classic depth effect) and
   gently scales to avoid edge bleed at any scroll position.
   ──────────────────────────────────────────────────────────── */
interface ParallaxImageProps {
  children: ReactNode;
  className?: string;
  /** How strong the upward movement is (px). */
  strength?: number;
}

export function ParallaxImage({
  children,
  className,
  strength = 120,
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useShouldReduceParallax();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const smooth = useSpring(scrollYProgress, { stiffness: 70, damping: 22, mass: 0.5 });

  const y = useTransform(smooth, [0, 1], [-strength, strength]);
  const scale = useTransform(smooth, [0, 0.5, 1], [1.12, 1.18, 1.12]);

  return (
    <div ref={ref} className={className}>
      {reduce ? (
        // Static, with a subtle scale to keep visual interest without scroll
        <div className="absolute inset-0 scale-[1.02]">{children}</div>
      ) : (
        <motion.div style={{ y, scale }} className="absolute inset-0 gpu">
          {children}
        </motion.div>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   FadeIn
   --------------------------------------------------------------
   Subtle on-enter fade + translate. Used in place of heavier
   slide-ins on mobile, so animations feel polished but never
   janky. Honours reduced-motion automatically.
   ──────────────────────────────────────────────────────────── */
interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Px translate distance — kept small for elegance. */
  y?: number;
  /** When true, runs once on mount instead of on viewport entry. */
  immediate?: boolean;
}

export function FadeIn({
  children,
  className,
  delay = 0,
  y = 24,
  immediate = false,
}: FadeInProps) {
  const reduce = useShouldReduceParallax();
  const distance = reduce ? Math.min(y, 12) : y;

  const initial = { opacity: 0, y: distance };
  const animate = { opacity: 1, y: 0 };

  const transition = {
    duration: reduce ? 0.4 : 0.7,
    delay,
    ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
  };

  if (immediate) {
    return (
      <motion.div initial={initial} animate={animate} transition={transition} className={className}>
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, margin: "-80px" }}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────────
   HoverLift
   --------------------------------------------------------------
   Lightweight wrapper that adds a subtle lift on hover for cards.
   Disabled on mobile (no hover state). Pure CSS transform — no
   re-renders.
   ──────────────────────────────────────────────────────────── */
interface HoverLiftProps {
  children: ReactNode;
  className?: string;
}

export function HoverLift({ children, className }: HoverLiftProps) {
  return (
    <div
      className={`transition-all duration-500 ease-luxury hover:-translate-y-1.5 ${className ?? ""}`}
    >
      {children}
    </div>
  );
}
