"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useShouldReduceParallax } from "@/hooks/useResponsive";

/* ═══════════════════════════════════════════════════════════════
   CINEMATIC HERO — Primary Parallax Section
   - Background moves slower than scroll (max 100px)
   - Content fades out on scroll for cinematic depth
   - Mobile: static bg, simple fade-in content (no parallax)
   - Spring-smoothed for silky feel
   ═══════════════════════════════════════════════════════════════ */

const springConfig = { stiffness: 70, damping: 22, mass: 0.5 };

export default function CinematicHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduce = useShouldReduceParallax();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const smooth = useSpring(scrollYProgress, springConfig);

  // Background: gentle upward drift (max ~100px)
  const bgY = useTransform(smooth, [0, 1], ["0%", "14%"]);
  // Content: subtle fade and drift on scroll
  const contentOpacity = useTransform(smooth, [0, 0.5], [1, 0]);
  const contentY = useTransform(smooth, [0, 0.5], ["0px", "-40px"]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100svh] flex items-center overflow-hidden bg-brand-dark"
    >
      {/* Background Image with Parallax */}
      {reduce ? (
        // Mobile: static background, just opacity
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1542010589005-d1eacc3918f2?w=1800&q=80"
            alt=""
            fill
            priority
            className="object-cover opacity-25"
            sizes="100vw"
          />
        </div>
      ) : (
        // Desktop: parallax background
        <motion.div style={{ y: bgY }} className="absolute inset-[-8%] gpu">
          <Image
            src="https://images.unsplash.com/photo-1542010589005-d1eacc3918f2?w=1800&q=80"
            alt=""
            fill
            priority
            className="object-cover opacity-25"
            sizes="100vw"
          />
        </motion.div>
      )}

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/70 to-brand-dark/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-brand-dark/40" />

      {/* Content */}
      <motion.div
        style={reduce ? undefined : { opacity: contentOpacity, y: contentY }}
        className="relative z-10 max-w-6xl mx-auto w-full px-5 sm:px-8 lg:px-12 pt-32 pb-24 lg:pt-40 lg:pb-32"
      >
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-gold-500 text-[11px] font-semibold tracking-[0.3em] uppercase mb-6"
          >
            Premium Indonesian Seasonings
          </motion.p>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-[clamp(2.5rem,7vw,5.5rem)] font-semibold text-cream-50 leading-[1.05] tracking-tight"
          >
            Crafting{" "}
            <span className="text-gold-gradient">Flavor.</span>
            <br />
            Creating Stories.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 text-brown-300 text-base sm:text-lg leading-relaxed max-w-xl"
          >
            Alcho carries centuries of Indonesian culinary heritage into your kitchen —
            through premium, all-natural sauces, spice blends, and marinades crafted without compromise.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <Link href="/products" className="btn-gold group">
              Explore Collection
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
            <Link href="/about" className="btn-ghost-light">
              Our Story
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 flex items-center gap-8 sm:gap-12"
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
                <div className="text-brown-500 text-[11px] tracking-[0.2em] uppercase mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-cream-100/40">
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-gold-500/50 to-transparent" />
      </motion.div>
    </section>
  );
}
