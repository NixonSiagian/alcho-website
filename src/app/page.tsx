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
   • Gold accents on dark warm #0d0906 background
   • Mobile: no parallax, simple fades (max 20px translate)
   • Generous section padding for breathing room
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
      <section className="py-32 md:py-40 lg:py-44 bg-brand-dark">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          {/* Features grid */}
          <SectionHeader
            eyebrow="Why Alcho"
            title="An uncompromising standard, in every jar."
            subtitle="We safeguard a culinary legacy — bottle by bottle, recipe by recipe."
          />

          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {features.map((f) => (
              <motion.div key={f.title} variants={staggerItem}>
                <div className="h-full bg-brand-deeper rounded-2xl p-7 border border-brown-800/25 transition-all duration-500 ease-luxury hover:border-gold-500/20 hover:-translate-y-1 hover:shadow-luxury-subtle">
                  <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-gold-500/8 text-gold-500 mb-5">
                    <f.icon className="w-5 h-5" strokeWidth={1.5} />
                  </span>
                  <h3 className="font-serif text-lg font-semibold text-cream-100 mb-2.5 tracking-tight">
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
          <div className="mt-28 lg:mt-36 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <ScrollReveal direction="up" distance={20}>
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=900&q=80"
                  alt="Alcho spices close up"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/30 to-transparent" />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" distance={20} delay={0.12}>
              <span className="text-gold-500 text-[11px] font-semibold tracking-[0.25em] uppercase">
                Our Heritage
              </span>
              <h3 className="font-serif text-3xl md:text-4xl font-semibold text-cream-50 mt-5 leading-[1.15]">
                From the spice islands to{" "}
                <span className="text-gold-gradient">your kitchen.</span>
              </h3>
              <p className="mt-6 text-brown-300 leading-[1.8] text-[15px]">
                For generations, Indonesian families have passed down spice recipes that turn
                simple ingredients into extraordinary meals. Alcho exists to keep those
                traditions alive — and bring them to kitchens everywhere.
              </p>
              <p className="mt-4 text-brown-300 leading-[1.8] text-[15px]">
                Every jar is crafted from sustainably sourced ingredients, blended by hand
                with recipes perfected over decades. No preservatives. No compromises.
              </p>
              <Link href="/about" className="mt-9 inline-flex btn-gold group">
                Our Story
                <ArrowRight className="w-4 h-4 transition-transform duration-400 ease-luxury group-hover:translate-x-1" />
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
      <section className="py-32 md:py-40 lg:py-44 bg-brand-deeper">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 mb-16">
            <ScrollReveal direction="up" distance={16} className="max-w-xl">
              <span className="text-gold-500 text-[11px] font-semibold tracking-[0.25em] uppercase">
                Signature Collection
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-[42px] font-semibold leading-[1.12] text-cream-50 mt-5">
                Handcrafted seasonings, born of{" "}
                <em className="italic text-gold-400 not-italic font-serif">Nusantara.</em>
              </h2>
            </ScrollReveal>

            <FadeIn delay={0.2}>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-brown-700/40 text-cream-100 text-sm font-medium hover:border-gold-500/30 hover:text-gold-400 transition-all duration-400 ease-luxury"
              >
                View All
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </FadeIn>
          </div>

          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6" stagger={0.08}>
            {featuredProducts.slice(0, 4).map((product) => (
              <motion.div key={product.id} variants={staggerItem}>
                <ProductCard product={product} />
              </motion.div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ════════════════════════════════════════
          4. HIGHLIGHT — Cinematic Parallax Statement
      ════════════════════════════════════════ */}
      <section className="relative h-[75vh] min-h-[550px] max-h-[750px] flex items-center overflow-hidden">
        <ParallaxImage strength={70} className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1547592180-85f173990554?w=1800&q=80"
            alt="Indonesian cooking heritage"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </ParallaxImage>

        {/* Overlays — deep cinematic layering */}
        <div className="absolute inset-0 bg-brand-dark/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/60 via-brand-dark/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/50 via-transparent to-brand-dark/30" />
        {/* Subtle warm vignette */}
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 30% 50%, rgba(201, 149, 42, 0.04) 0%, transparent 60%)' }} />

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto w-full px-5 sm:px-8 lg:px-12">
          <ScrollReveal direction="up" distance={20} className="max-w-2xl">
            <span className="text-gold-400/80 font-serif italic text-lg md:text-xl block mb-6">
              &ldquo;Where flame meets tradition.&rdquo;
            </span>
            <h2 className="font-serif text-3xl md:text-5xl lg:text-[56px] font-semibold text-cream-50 leading-[1.06]">
              Rooted in fire.
              <br />
              <span className="text-gold-gradient">Refined by time.</span>
            </h2>
            <p className="mt-8 text-brown-200/85 text-base md:text-lg leading-[1.85] max-w-lg">
              Spices roasted over open flames. Recipes whispered across generations.
              Flavors that turn the ordinary into something unforgettable.
            </p>
            <Link href="/products" className="mt-10 inline-flex btn-gold group">
              Explore the Collection
              <ArrowRight className="w-4 h-4 transition-transform duration-400 ease-luxury group-hover:translate-x-1" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ════════════════════════════════════════
          5. SOCIAL PROOF — Trust & Emotion
      ════════════════════════════════════════ */}
      <section className="relative py-28 md:py-36 lg:py-40 overflow-hidden">
        {/* Layered depth background */}
        <div className="absolute inset-0 bg-brand-deeper" />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 40%, rgba(201, 149, 42, 0.03) 0%, transparent 55%)' }} />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 80% 80%, rgba(22, 14, 7, 0.8) 0%, transparent 50%)' }} />

        <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <ScrollReveal direction="up" distance={16}>
            <div className="flex items-center justify-center gap-1.5 mb-8">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-gold-400 fill-gold-400" />
              ))}
            </div>
            <blockquote className="font-serif text-2xl md:text-3xl lg:text-[34px] font-medium text-cream-100 leading-[1.35] text-balance italic">
              &ldquo;The moment I opened the jar, I was transported to my grandmother&apos;s kitchen.
              This is not seasoning — this is memory, bottled.&rdquo;
            </blockquote>
            <div className="mt-8 flex flex-col items-center gap-1.5">
              <span className="text-cream-200 text-sm font-medium tracking-wide">Chef Anindya Pratama</span>
              <span className="text-brown-500 text-xs tracking-wider uppercase">Jakarta, Indonesia</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Gold divider */}
      <div className="divider-gold" />

      {/* ════════════════════════════════════════
          6. CTA — Emotionally Engaging & Premium
      ════════════════════════════════════════ */}
      <section className="relative py-36 md:py-44 lg:py-52 overflow-hidden">
        {/* Multi-layer depth background */}
        <div className="absolute inset-0 bg-brand-dark" />
        {/* Central gold ambient glow */}
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(201, 149, 42, 0.05) 0%, transparent 50%)' }} />
        {/* Darker edge vignette */}
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 50%, transparent 30%, rgba(0, 0, 0, 0.3) 100%)' }} />
        {/* Subtle top/bottom gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-deeper/40 via-transparent to-brand-deeper/30" />

        {/* Decorative elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent via-gold-500/20 to-transparent" />

        <div className="relative z-10 max-w-3xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <ScrollReveal direction="up" distance={20}>
            {/* Eyebrow with refined decorative lines */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className="h-px w-10 bg-gradient-to-r from-transparent to-gold-500/40" />
              <span className="text-gold-500 text-[11px] font-semibold tracking-[0.3em] uppercase">
                Your Kitchen Awaits
              </span>
              <span className="h-px w-10 bg-gradient-to-l from-transparent to-gold-500/40" />
            </div>

            <h2 className="font-serif text-3xl md:text-5xl lg:text-[56px] font-semibold text-cream-50 leading-[1.06] text-balance">
              The flavor you&apos;ve been
              <br className="hidden md:block" />
              {" "}<span className="text-gold-gradient">searching for.</span>
            </h2>

            <p className="mt-8 text-brown-300 text-[15px] md:text-lg max-w-xl mx-auto leading-[1.85]">
              One jar. Generations of mastery. Discover why chefs and home cooks
              across Indonesia trust Alcho to elevate every dish.
            </p>

            {/* CTA Buttons — premium spacing & styling */}
            <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-6">
              <Link href="/products" className="btn-gold-elevated group">
                Shop the Collection
                <ArrowRight className="w-4 h-4 transition-transform duration-400 ease-luxury group-hover:translate-x-1.5" />
              </Link>
              <Link href="/contact" className="btn-ghost-elevated group">
                Speak with Us
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60 transition-all duration-400 ease-luxury group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

            {/* Subtle trust indicator */}
            <p className="mt-12 text-brown-600 text-xs tracking-wider uppercase">
              Free shipping on orders over Rp 250.000
            </p>
          </ScrollReveal>
        </div>

        {/* Bottom decorative line */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-t from-transparent via-gold-500/15 to-transparent" />
      </section>
    </>
  );
}
