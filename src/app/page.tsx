"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Leaf, FlaskConical, Star, ChefHat, ArrowRight, ArrowUpRight } from "lucide-react";
import CinematicHero from "@/components/CinematicHero";
import SectionHeader from "@/components/SectionHeader";
import ProductCard from "@/components/ProductCard";
import { ParallaxImage } from "@/components/Parallax";
import { ScrollReveal, StaggerChildren, staggerItem, FadeIn } from "@/components/ScrollAnimations";
import { getFeaturedProducts } from "@/data/products";

/* ═══════════════════════════════════════════════════════════════
   HOMEPAGE — Premium Brand Presentation
   Structure: Hero → Brand Story → Signature Products → Highlight → CTA

   Design principles:
   • Cinematic & elegant with generous whitespace
   • Parallax ONLY in Hero + Highlight section
   • Subtle scroll reveals (opacity + translateY only)
   • Gold accents on dark warm #0f0a05 background
   • Mobile: no parallax, simple fades (max 20px translate)
   ═══════════════════════════════════════════════════════════════ */

const features = [
  {
    icon: Leaf,
    title: "100% Natural",
    description: "Hand-selected, all-natural spices — no fillers, no shortcuts.",
  },
  {
    icon: FlaskConical,
    title: "Zero Preservatives",
    description: "Traditional methods deliver pure flavor without artificial additives.",
  },
  {
    icon: Star,
    title: "Heritage Recipes",
    description: "Rooted in centuries of Indonesian culinary tradition.",
  },
  {
    icon: ChefHat,
    title: "Chef-Grade Quality",
    description: "Trusted by professional kitchens across Indonesia.",
  },
];

export default function HomePage() {
  const featuredProducts = getFeaturedProducts();

  return (
    <>
      {/* ════════════════════════════════════════
          1. HERO — Cinematic Parallax
      ════════════════════════════════════════ */}
      <CinematicHero />

      {/* ════════════════════════════════════════
          2. BRAND STORY — Clean, Minimal
      ════════════════════════════════════════ */}
      <section className="py-28 md:py-36 bg-brand-dark">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          {/* Features grid */}
          <SectionHeader
            eyebrow="Why Alcho"
            title="An uncompromising standard, in every jar."
            subtitle="We safeguard a culinary legacy — bottle by bottle, recipe by recipe."
          />

          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <motion.div key={f.title} variants={staggerItem}>
                <div className="h-full bg-brand-deeper rounded-2xl p-7 border border-brown-800/40 transition-all duration-400 ease-luxury hover:border-gold-500/30 hover:-translate-y-1">
                  <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-gold-500/10 text-gold-500 mb-5">
                    <f.icon className="w-5 h-5" />
                  </span>
                  <h3 className="font-serif text-lg font-semibold text-cream-100 mb-2">
                    {f.title}
                  </h3>
                  <p className="text-brown-400 text-sm leading-relaxed">
                    {f.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </StaggerChildren>

          {/* Brand narrative */}
          <div className="mt-24 lg:mt-32 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal direction="up" distance={24}>
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=900&q=80"
                  alt="Alcho spices close up"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 to-transparent" />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" distance={24} delay={0.15}>
              <span className="text-gold-500 text-[11px] font-semibold tracking-[0.3em] uppercase">
                Our Heritage
              </span>
              <h3 className="font-serif text-3xl md:text-4xl font-semibold text-cream-50 mt-4 leading-[1.2]">
                From the spice islands to{" "}
                <span className="text-gold-gradient">your kitchen.</span>
              </h3>
              <p className="mt-5 text-brown-300 leading-relaxed">
                For generations, Indonesian families have passed down spice recipes that turn
                simple ingredients into extraordinary meals. Alcho exists to keep those
                traditions alive — and bring them to kitchens everywhere.
              </p>
              <p className="mt-4 text-brown-300 leading-relaxed">
                Every jar is crafted from sustainably sourced ingredients, blended by hand
                with recipes perfected over decades. No preservatives. No compromises.
              </p>
              <Link href="/about" className="mt-8 inline-flex btn-gold group">
                Our Story
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Gold divider */}
      <div className="divider-gold" />

      {/* ════════════════════════════════════════
          3. SIGNATURE PRODUCTS — Grid + Subtle Reveal
      ════════════════════════════════════════ */}
      <section className="py-28 md:py-36 bg-brand-deeper">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 mb-14">
            <ScrollReveal direction="up" distance={20} className="max-w-xl">
              <span className="text-gold-500 text-[11px] font-semibold tracking-[0.3em] uppercase">
                Signature Collection
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-[42px] font-semibold leading-[1.15] text-cream-50 mt-4">
                Handcrafted seasonings, born of{" "}
                <em className="italic text-gold-400 not-italic font-serif">Nusantara.</em>
              </h2>
            </ScrollReveal>

            <FadeIn delay={0.2}>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-brown-700/60 text-cream-100 text-sm font-medium hover:border-gold-500/40 transition-all duration-300"
              >
                View All
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </FadeIn>
          </div>

          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" stagger={0.1}>
            {featuredProducts.slice(0, 4).map((product) => (
              <motion.div key={product.id} variants={staggerItem}>
                <ProductCard product={product} />
              </motion.div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ════════════════════════════════════════
          4. HIGHLIGHT — Light Parallax (secondary)
      ════════════════════════════════════════ */}
      <section className="relative h-[70vh] min-h-[500px] max-h-[700px] flex items-center overflow-hidden">
        <ParallaxImage strength={90} className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1547592180-85f173990554?w=1800&q=80"
            alt="Indonesian cooking heritage"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </ParallaxImage>

        {/* Overlays */}
        <div className="absolute inset-0 bg-brand-dark/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/50 to-transparent" />

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto w-full px-5 sm:px-8 lg:px-12">
          <ScrollReveal direction="up" distance={24} className="max-w-2xl">
            <span className="text-gold-400 font-serif italic text-lg block mb-4">
              &ldquo;From our kitchen to yours.&rdquo;
            </span>
            <h2 className="font-serif text-3xl md:text-5xl lg:text-[56px] font-semibold text-cream-50 leading-[1.1]">
              Rooted in tradition.
              <br />
              <span className="text-gold-gradient">Crafted for today.</span>
            </h2>
            <p className="mt-6 text-brown-200 text-base md:text-lg leading-relaxed max-w-lg">
              Every Alcho product carries the depth of Indonesian heritage — spices roasted over
              open flames, recipes refined across generations, and flavors that transform the everyday.
            </p>
            <Link href="/products" className="mt-8 inline-flex btn-gold group">
              Shop Now
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ════════════════════════════════════════
          5. CTA — Simple & Elegant
      ════════════════════════════════════════ */}
      <section className="py-28 md:py-36 bg-brand-dark">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <ScrollReveal direction="up" distance={20}>
            <span className="text-gold-500 text-[11px] font-semibold tracking-[0.3em] uppercase mb-5 block">
              Begin Your Ritual
            </span>
            <h2 className="font-serif text-3xl md:text-5xl lg:text-[56px] font-semibold text-cream-50 leading-[1.1] text-balance">
              Ready to elevate{" "}
              <span className="text-gold-gradient">your cooking?</span>
            </h2>
            <p className="mt-6 text-brown-300 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
              Browse our full collection and discover the Alcho seasoning that belongs in your kitchen.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link href="/products" className="btn-gold group">
                Shop All Products
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
              <Link href="/contact" className="btn-ghost-light">
                Get in Touch
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
