"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";
import { useShouldReduceParallax } from "@/hooks/useResponsive";

/* ═══════════════════════════════════════════════════════════════
   CINEMATIC HERO
   ─────────────────────────────────────────────────────────────
   A multi-layered parallax hero section inspired by modern
   luxury landing pages. Uses separate scroll-driven transforms
   for background, midground, and foreground layers to create
   a deep, immersive cinematic feel.

   Performance:
   • Only transforms + opacity (GPU composited)
   • Spring-smoothed scroll for silky easing
   • Mobile: reduced/disabled parallax, simple fade-in only
   ═══════════════════════════════════════════════════════════════ */

const springConfig = { stiffness: 60, damping: 20, mass: 0.5 };

export default function CinematicHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduce = useShouldReduceParallax();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const smooth = useSpring(scrollYProgress, springConfig);

  /* ─── Layer transforms ─── */
  // Background: slow upward drift + gentle zoom (depth)
  const bgY = useTransform(smooth, [0, 1], ["0%", "25%"]);
  const bgScale = useTransform(smooth, [0, 1], [1.0, 1.15]);

  // Midground particles/accents: medium speed
  const midY = useTransform(smooth, [0, 1], ["0%", "15%"]);
  const midOpacity = useTransform(smooth, [0, 0.6, 1], [0.6, 0.3, 0]);

  // Foreground content: subtle upward drift + fade
  const fgY = useTransform(smooth, [0, 1], ["0%", "-8%"]);
  const fgOpacity = useTransform(smooth, [0, 0.65, 1], [1, 0.7, 0]);

  // Overlay intensity increases on scroll (cinematic darkening)
  const overlayOpacity = useTransform(smooth, [0, 1], [0, 0.3]);

  // Scroll indicator fades out quickly
  const scrollIndicatorOpacity = useTransform(smooth, [0, 0.15], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100svh] flex items-center overflow-hidden bg-brown-950"
    >
      {/* ═══ LAYER 1: Background Image ═══ */}
      {reduce ? (
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1542010589005-d1eacc3918f2?w=1800&q=80"
            alt=""
            fill
            priority
            className="object-cover opacity-25 scale-105"
            sizes="100vw"
          />
        </div>
      ) : (
        <motion.div
          style={{ y: bgY, scale: bgScale }}
          className="absolute inset-[-10%] gpu"
        >
          <Image
            src="https://images.unsplash.com/photo-1542010589005-d1eacc3918f2?w=1800&q=80"
            alt=""
            fill
            priority
            className="object-cover opacity-28"
            sizes="100vw"
          />
        </motion.div>
      )}

      {/* ═══ LAYER 2: Cinematic Gradients ═══ */}
      <div className="absolute inset-0 bg-gradient-to-r from-brown-950/95 via-brown-950/70 to-brown-900/25 z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-t from-brown-950 via-transparent to-brown-950/50 z-[1]" />
      <div className="absolute inset-0 bg-vignette z-[1]" />

      {/* ═══ LAYER 3: Floating Ambient Particles (midground) ═══ */}
      {!reduce && (
        <motion.div
          style={{ y: midY, opacity: midOpacity }}
          className="absolute inset-0 z-[2] pointer-events-none gpu"
        >
          {/* Warm ambient orbs */}
          <div className="absolute top-[15%] left-[10%] w-72 h-72 rounded-full bg-gold-500/[0.04] blur-[80px]" />
          <div className="absolute top-[40%] right-[15%] w-96 h-96 rounded-full bg-gold-400/[0.03] blur-[100px]" />
          <div className="absolute bottom-[20%] left-[30%] w-64 h-64 rounded-full bg-amber-600/[0.04] blur-[60px]" />
        </motion.div>
      )}

      {/* ═══ LAYER 4: Scroll-driven darkening overlay ═══ */}
      {!reduce && (
        <motion.div
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 bg-brown-950 z-[3] pointer-events-none"
        />
      )}

      {/* ═══ LAYER 5: Foreground Content ═══ */}
      <motion.div
        style={reduce ? undefined : { y: fgY, opacity: fgOpacity }}
        className="relative z-[5] max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-28 pb-20 lg:pt-32 lg:pb-28 grid lg:grid-cols-12 gap-10 items-center"
      >
        {/* ─── Left Column: Text Content ─── */}
        <div className="lg:col-span-7">
          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cream-50/5 border border-gold-400/30 text-gold-300 text-[11px] font-semibold tracking-[0.32em] uppercase mb-7"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Premium Indonesian Seasonings
          </motion.div>

          {/* Main heading with staggered reveal */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-[44px] sm:text-6xl lg:text-7xl xl:text-[88px] font-semibold text-cream-50 leading-[1.02] text-balance"
          >
            Crafting{" "}
            <span className="text-gold-gradient">Flavor.</span>
            <br />
            Creating{" "}
            <motion.em
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="not-italic font-serif italic text-cream-200"
            >
              Stories.
            </motion.em>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 max-w-xl text-base sm:text-lg leading-relaxed text-brown-200"
          >
            Alcho carries centuries of Indonesian culinary heritage into your kitchen — through
            premium, all-natural sauces, spice blends and marinades, crafted without compromise.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <Link href="/products" className="btn-gold group">
              Explore Collection
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
            <Link href="/blog" className="btn-ghost-light">
              View Recipes
            </Link>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="mt-14 grid grid-cols-3 max-w-md divide-x divide-brown-700/60"
          >
            {[
              { value: "30+", label: "Products" },
              { value: "50K+", label: "Happy Cooks" },
              { value: "100%", label: "Natural" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.8 + i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={i === 0 ? "pr-5" : "px-5"}
              >
                <div className="font-serif text-3xl font-semibold text-gold-gradient">
                  {stat.value}
                </div>
                <div className="text-brown-300 text-[11px] tracking-[0.22em] uppercase mt-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ─── Right Column: Circular Product Showcase ─── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="hidden lg:flex lg:col-span-5 justify-center relative"
        >
          <div className="relative w-full max-w-md aspect-square">
            {/* Outer rotating ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-dashed border-gold-400/20"
            />
            {/* Inner ring */}
            <div className="absolute inset-6 rounded-full border border-gold-400/10" />

            {/* Ambient glow behind the circle */}
            <div className="absolute inset-8 rounded-full bg-gold-500/[0.06] blur-2xl" />

            {/* Hero image */}
            <div className="absolute inset-12 rounded-full overflow-hidden border-[3px] border-gold-400/25 shadow-luxury-lg">
              <Image
                src="https://images.unsplash.com/photo-1601050690597-df0568f70950?w=900&q=80"
                alt="Alcho spices"
                fill
                className="object-cover"
                sizes="500px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brown-950/30 via-transparent to-transparent" />
            </div>

            {/* Floating card — Best Seller */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-3 top-[18%] bg-cream-50 dark:bg-brown-900 rounded-2xl p-4 shadow-luxury border border-cream-200/60 dark:border-brown-700 max-w-[170px]"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-gold-700 dark:text-gold-300">
                  Best Seller
                </p>
              </div>
              <p className="font-serif text-base font-semibold text-brown-900 dark:text-cream-100 leading-snug">
                Signature Rendang
              </p>
              <p className="text-[11px] text-brown-500 dark:text-brown-300 mt-0.5">
                12 heirloom spices
              </p>
            </motion.div>

            {/* Floating card — Certified */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
              className="absolute -right-2 bottom-[16%] bg-cream-50 dark:bg-brown-900 rounded-2xl p-4 shadow-luxury border border-cream-200/60 dark:border-brown-700 max-w-[170px]"
            >
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-brown-700 dark:text-cream-200">
                  Certified
                </p>
              </div>
              <p className="font-serif text-base font-semibold text-brown-900 dark:text-cream-100 leading-snug">
                No Preservatives
              </p>
              <p className="text-[11px] text-brown-500 dark:text-brown-300 mt-0.5">
                Lab-tested · Pure
              </p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* ═══ Scroll Indicator ═══ */}
      <motion.div
        style={reduce ? undefined : { opacity: scrollIndicatorOpacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-[5]"
      >
        <span className="text-[10px] tracking-[0.4em] uppercase text-cream-100/60">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-gold-400/70 to-transparent"
        />
      </motion.div>
    </section>
  );
}
