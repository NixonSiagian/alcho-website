"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useShouldReduceParallax } from "@/hooks/useResponsive";

/* ═══════════════════════════════════════════════════════════════
   CINEMATIC HERO — Primary Parallax Section
   - Reduced overlay for more image presence
   - Layered gradient lighting (darker top, lighter center)
   - Smooth staggered text entrance (fade + translateY)
   - Refined scroll indicator with gentle animation
   - Mobile: static bg, simple fade-in content
   ═══════════════════════════════════════════════════════════════ */

const springConfig = { stiffness: 60, damping: 24, mass: 0.6 };

export default function CinematicHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduce = useShouldReduceParallax();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const smooth = useSpring(scrollYProgress, springConfig);

  // Background: gentle upward drift (max ~80px)
  const bgY = useTransform(smooth, [0, 1], ["0%", "10%"]);
  // Content: subtle fade and drift on scroll
  const contentOpacity = useTransform(smooth, [0, 0.45], [1, 0]);
  const contentY = useTransform(smooth, [0, 0.45], ["0px", "-30px"]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100svh] flex items-center overflow-hidden bg-brand-dark"
    >
      {/* Background Image with Parallax */}
      {reduce ? (
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1542010589005-d1eacc3918f2?w=1800&q=80"
            alt=""
            fill
            priority
            className="object-cover opacity-30"
            sizes="100vw"
          />
        </div>
      ) : (
        <motion.div style={{ y: bgY }} className="absolute inset-[-6%] gpu">
          <Image
            src="https://images.unsplash.com/photo-1542010589005-d1eacc3918f2?w=1800&q=80"
            alt=""
            fill
            priority
            className="object-cover opacity-35"
            sizes="100vw"
          />
        </motion.div>
      )}

      {/* Layered gradient overlays — refined for depth without over-darkening */}
      {/* Side gradient: darker left for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 via-brand-dark/50 to-brand-dark/30" />
      {/* Vertical gradient: darker top + bottom, lighter center for cinematic framing */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/60 via-transparent to-brand-dark/80" />
      {/* Subtle warm vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,transparent_0%,rgba(13,9,6,0.4)_100%)]" />

      {/* Content */}
      <motion.div
        style={reduce ? undefined : { opacity: contentOpacity, y: contentY }}
        className="relative z-10 max-w-6xl mx-auto w-full px-5 sm:px-8 lg:px-12 pt-36 pb-28 lg:pt-44 lg:pb-36"
      >
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-gold-500 text-[11px] font-semibold tracking-[0.25em] uppercase mb-7"
          >
            Premium Indonesian Seasonings
          </motion.p>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-[clamp(2.75rem,6.5vw,5.25rem)] font-semibold text-cream-50 leading-[1.05] tracking-tight"
          >
            Crafting{" "}
            <span className="text-gold-gradient">Flavor.</span>
            <br />
            Creating Stories.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 text-brown-300 text-base sm:text-lg leading-[1.8] max-w-xl"
          >
            Alcho carries centuries of Indonesian culinary heritage into your kitchen —
            through premium, all-natural sauces, spice blends, and marinades crafted without compromise.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
            className="mt-11 flex flex-wrap gap-4"
          >
            <Link href="/products" className="btn-gold group">
              Explore Collection
              <ArrowRight className="w-4 h-4 transition-transform duration-400 ease-luxury group-hover:translate-x-1" />
            </Link>
            <Link href="/about" className="btn-ghost-light">
              Our Story
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="mt-18 flex items-center gap-10 sm:gap-14"
          >
            {[
              { value: "30+", label: "Products" },
              { value: "50K+", label: "Happy Cooks" },
              { value: "100%", label: "Natural" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-serif text-2xl sm:text-3xl font-semibold text-gold-gradient">
                  {stat.value}
                </div>
                <div className="text-brown-500 text-[11px] tracking-[0.2em] uppercase mt-1.5 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator — gentle pulsing animation */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2.5 z-10">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="text-[10px] tracking-[0.3em] uppercase text-cream-100/30 font-medium"
        >
          Scroll
        </motion.span>
        <motion.div
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ opacity: 1, scaleY: 1 }}
          transition={{ delay: 1.6, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="w-px h-9 origin-top bg-gradient-to-b from-gold-500/40 to-transparent animate-scroll-hint"
        />
      </div>
    </section>
  );
}
