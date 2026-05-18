"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Leaf,
  FlaskConical,
  Star,
  ChefHat,
  ArrowRight,
  Quote,
  ArrowUpRight,
} from "lucide-react";
import CinematicHero from "@/components/CinematicHero";
import SectionHeader from "@/components/SectionHeader";
import ProductCard from "@/components/ProductCard";
import BlogCard from "@/components/BlogCard";
import { ParallaxLayer, ParallaxImage, FadeIn } from "@/components/Parallax";
import {
  ScrollReveal,
  ParallaxSection,
  StaggerChildren,
  staggerItem,
  CinematicDivider,
  ScrollScale,
  FloatingElement,
  GradientShift,
} from "@/components/ScrollAnimations";
import { getFeaturedProducts } from "@/data/products";
import { blogPosts } from "@/data/blog";
import { testimonials } from "@/data/testimonials";

const features = [
  {
    icon: Leaf,
    title: "100% Natural Ingredients",
    description:
      "Every product begins with hand-selected, all-natural spices and herbs — no fillers, no shortcuts.",
  },
  {
    icon: FlaskConical,
    title: "Zero Preservatives",
    description:
      "Traditional preservation methods deliver pure flavor without artificial additives.",
  },
  {
    icon: Star,
    title: "Heritage Recipes",
    description:
      "Rooted in centuries of Indonesian culinary tradition, refined with master chefs.",
  },
  {
    icon: ChefHat,
    title: "Chef-Grade Quality",
    description:
      "Trusted by professional kitchens across Indonesia for restaurant results at home.",
  },
];

const cookingSteps = [
  {
    title: "Choose Your Alcho",
    description:
      "Select from our pastes, sauces and spice blends, each crafted for a specific cooking style.",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=900&q=80",
  },
  {
    title: "Prep Your Ingredients",
    description:
      "Gather fresh proteins and produce. Alcho pairs beautifully with quality, simple ingredients.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=900&q=80",
  },
  {
    title: "Cook With Confidence",
    description:
      "Follow the simple guide on every pack — or our recipe library — to compose effortless dishes.",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&q=80",
  },
  {
    title: "Serve & Impress",
    description:
      "Plate a dish layered with authentic flavor. The secret will quietly be your own.",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=900&q=80",
  },
];

export default function HomePage() {
  const featuredProducts = getFeaturedProducts();
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <>
      {/* ════════════════════════════════════════
          CINEMATIC HERO
      ════════════════════════════════════════ */}
      <CinematicHero />

      {/* ════════════════════════════════════════
          FEATURES — elegant gold-accented grid
      ════════════════════════════════════════ */}
      <section className="relative py-28 md:py-36 bg-cream-50 dark:bg-brown-950 overflow-hidden">
        <div className="absolute inset-0 bg-spice-texture pointer-events-none" />

        {/* Floating decorative orb */}
        <FloatingElement
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-gold-400/[0.04] blur-[80px] pointer-events-none"
          amplitude={20}
          duration={8}
        >
          <div />
        </FloatingElement>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Why Alcho"
            title="An uncompromising standard, in every jar."
            subtitle="We don't just sell seasonings. We safeguard a culinary legacy — bottle by bottle, recipe by recipe."
          />

          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {features.map((f, i) => (
              <motion.div key={f.title} variants={staggerItem}>
                <div className="group h-full relative bg-cream-50 dark:bg-brown-900/60 rounded-[20px] p-7 lg:p-8 border border-brown-100/70 dark:border-brown-800 transition-all duration-500 ease-luxury hover:border-gold-300/70 dark:hover:border-gold-700/60 hover:-translate-y-2 hover:shadow-luxury">
                  {/* Index */}
                  <span className="absolute top-7 right-7 text-[11px] tracking-[0.28em] uppercase text-brown-300 dark:text-brown-600 font-medium">
                    0{i + 1}
                  </span>

                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gold-soft text-brown-900 mb-6 ring-1 ring-gold-300/40 group-hover:scale-110 transition-transform duration-500 ease-luxury">
                    <f.icon className="w-5 h-5" />
                  </span>

                  <h3 className="font-serif text-xl font-semibold text-brown-900 dark:text-cream-100 mb-3 leading-snug">
                    {f.title}
                  </h3>
                  <p className="text-brown-600 dark:text-brown-300 text-[15px] leading-relaxed">
                    {f.description}
                  </p>

                  <div className="mt-6 h-px bg-gradient-to-r from-transparent via-gold-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Cinematic divider */}
      <CinematicDivider className="my-0" />

      {/* ════════════════════════════════════════
          PRODUCT PREVIEW
      ════════════════════════════════════════ */}
      <section className="relative py-28 md:py-36 bg-cream-100 dark:bg-brown-900 overflow-hidden">
        {/* Decorative parallax accent */}
        <ParallaxLayer
          offset={-80}
          className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-gold-soft opacity-15 blur-3xl pointer-events-none"
        >
          <div />
        </ParallaxLayer>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 mb-14 lg:mb-16">
            <ScrollReveal direction="up" distance={30} className="max-w-2xl">
              <div className="flex items-center gap-3 mb-5">
                <span className="h-px w-8 bg-gold-500/60" />
                <span className="text-[11px] font-semibold tracking-[0.32em] uppercase text-gold-700 dark:text-gold-300">
                  Signature Collection
                </span>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.15] text-brown-900 dark:text-cream-50 text-balance">
                Handcrafted seasonings, born of{" "}
                <em className="italic text-gold-700 dark:text-gold-300 not-italic font-serif">
                  Nusantara.
                </em>
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2} className="shrink-0">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-brown-200 dark:border-brown-700 text-brown-800 dark:text-cream-100 text-sm font-medium hover:bg-brown-100/60 dark:hover:bg-brown-800/60 hover:border-gold-400/60 transition-all duration-400"
              >
                View All
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </ScrollReveal>
          </div>

          <StaggerChildren
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
            stagger={0.1}
          >
            {featuredProducts.slice(0, 4).map((product, i) => (
              <motion.div key={product.id} variants={staggerItem}>
                <ProductCard product={product} index={i} />
              </motion.div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ════════════════════════════════════════
          BRAND STORY — full bleed cinematic parallax
      ════════════════════════════════════════ */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center overflow-hidden">
        <ParallaxImage strength={160} className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1547592180-85f173990554?w=1800&q=80"
            alt="Indonesian cooking heritage"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </ParallaxImage>

        {/* Cinematic gradient layers */}
        <div className="absolute inset-0 bg-gradient-to-r from-brown-950/90 via-brown-950/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-brown-950/75 via-transparent to-brown-950/20" />
        <div className="absolute inset-0 bg-vignette" />

        <div className="relative max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" distance={50} blur className="max-w-2xl">
            <span className="text-gold-300 font-serif italic text-lg md:text-xl block mb-5">
              &ldquo;From our kitchen to yours.&rdquo;
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-cream-50 leading-[1.1] text-balance">
              Rooted in tradition.
              <br />
              <span className="text-gold-gradient">Crafted for today.</span>
            </h2>
            <p className="mt-7 text-brown-200 text-base md:text-lg leading-relaxed max-w-xl">
              For generations, Indonesian families have passed down spice recipes that turn simple
              ingredients into extraordinary meals. Alcho exists to keep those traditions alive,
              and bring them to kitchens everywhere.
            </p>
            <Link href="/about" className="mt-9 inline-flex btn-gold group">
              Our Story
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ════════════════════════════════════════
          HOW IT WORKS — cinematic step cards
      ════════════════════════════════════════ */}
      <section className="relative py-28 md:py-36 bg-cream-50 dark:bg-brown-950 overflow-hidden">
        {/* Subtle background gradient shift */}
        <div className="absolute inset-0 bg-spice-texture pointer-events-none opacity-50" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="The Ritual"
            title="Cook like a chef, in four moments."
            subtitle="Alcho makes it effortless to compose extraordinary meals with real, authentic flavor."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-[112px] left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-gold-400/40 to-transparent" />

            {cookingSteps.map((step, i) => (
              <ScrollReveal
                key={step.title}
                direction="up"
                distance={40}
                delay={i * 0.12}
                scale={0.95}
              >
                <div className="group relative h-full">
                  <div className="relative aspect-[4/5] rounded-[20px] overflow-hidden border border-brown-100/70 dark:border-brown-800 transition-all duration-500 ease-luxury group-hover:shadow-luxury group-hover:-translate-y-2">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover transition-transform duration-[900ms] ease-luxury group-hover:scale-[1.07]"
                      sizes="(max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brown-950/85 via-brown-950/15 to-transparent" />

                    {/* Step number */}
                    <span
                      className="absolute top-5 left-5 font-serif text-2xl font-semibold text-gold-gradient"
                      style={{ textShadow: "0 2px 12px rgba(46, 29, 14, 0.4)" }}
                    >
                      0{i + 1}
                    </span>

                    {/* Content overlay */}
                    <div className="absolute inset-x-5 bottom-5">
                      <h3 className="font-serif text-lg md:text-xl font-semibold text-cream-50 leading-snug mb-2">
                        {step.title}
                      </h3>
                      <p className="text-cream-200/85 text-sm leading-relaxed line-clamp-3">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal direction="up" delay={0.4} className="mt-14 text-center">
            <Link href="/blog" className="btn-gold group">
              Browse Recipes
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ════════════════════════════════════════
          TESTIMONIALS — elegant dark cinematic band
      ════════════════════════════════════════ */}
      <GradientShift className="relative py-28 md:py-36 overflow-hidden grain bg-[length:200%_200%] bg-hero-warm">
        <div className="absolute inset-0 bg-spice-texture pointer-events-none" />

        {/* Ambient floating orbs */}
        <FloatingElement
          className="absolute top-[10%] left-[5%] w-64 h-64 rounded-full bg-gold-500/[0.05] blur-[60px] pointer-events-none"
          amplitude={15}
          duration={7}
        >
          <div />
        </FloatingElement>
        <FloatingElement
          className="absolute bottom-[10%] right-[10%] w-80 h-80 rounded-full bg-gold-400/[0.04] blur-[80px] pointer-events-none"
          amplitude={18}
          duration={9}
          delay={2}
        >
          <div />
        </FloatingElement>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="In Their Words"
            title="Loved by cooks across the archipelago."
            subtitle="From home kitchens to professional restaurants, Alcho earns its place in every pantry."
            light
          />

          <StaggerChildren
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            stagger={0.1}
          >
            {testimonials.map((t, i) => (
              <motion.div key={t.id} variants={staggerItem}>
                <div className="group h-full bg-brown-900/40 hover:bg-brown-900/60 border border-brown-700/60 hover:border-gold-400/40 rounded-[20px] p-7 transition-all duration-500 ease-luxury hover:-translate-y-2">
                  <Quote className="w-7 h-7 text-gold-400/70 mb-5" />
                  <p className="text-cream-100/90 text-[15px] leading-relaxed mb-7 italic font-serif">
                    &ldquo;{t.content}&rdquo;
                  </p>

                  <div className="flex items-center gap-3">
                    <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-gold-400/30 shrink-0">
                      <Image
                        src={t.avatar}
                        alt={t.name}
                        fill
                        className="object-cover"
                        sizes="44px"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-cream-50 text-sm">{t.name}</p>
                      <p className="text-brown-300 text-[11px] tracking-wider mt-0.5">
                        {t.role}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-0.5 mt-5">
                    {Array.from({ length: t.rating }).map((_, idx) => (
                      <Star
                        key={idx}
                        className="w-3.5 h-3.5 text-gold-400 fill-gold-400"
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </StaggerChildren>
        </div>
      </GradientShift>

      {/* ════════════════════════════════════════
          RECIPES PREVIEW
      ════════════════════════════════════════ */}
      <section className="py-28 md:py-36 bg-cream-50 dark:bg-brown-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 mb-14 lg:mb-16">
            <ScrollReveal direction="up" distance={30} className="max-w-2xl">
              <div className="flex items-center gap-3 mb-5">
                <span className="h-px w-8 bg-gold-500/60" />
                <span className="text-[11px] font-semibold tracking-[0.32em] uppercase text-gold-700 dark:text-gold-300">
                  Recipes
                </span>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.15] text-brown-900 dark:text-cream-50 text-balance">
                Inspired dishes,{" "}
                <em className="italic text-gold-700 dark:text-gold-300 not-italic font-serif">
                  composed weekly.
                </em>
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.15} className="shrink-0">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-brown-200 dark:border-brown-700 text-brown-800 dark:text-cream-100 text-sm font-medium hover:bg-brown-100/60 dark:hover:bg-brown-800/60 hover:border-gold-400/60 transition-all duration-400"
              >
                All Recipes
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </ScrollReveal>
          </div>

          <StaggerChildren
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            stagger={0.12}
          >
            {recentPosts.map((post, i) => (
              <motion.div key={post.id} variants={staggerItem}>
                <BlogCard post={post} index={i} />
              </motion.div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ════════════════════════════════════════
          CTA BANNER — closing cinematic dark moment
      ════════════════════════════════════════ */}
      <section className="relative py-28 md:py-32 bg-hero-deep overflow-hidden">
        <div className="absolute inset-0 bg-spice-texture pointer-events-none" />

        {/* Parallax glow orb */}
        <ParallaxLayer
          offset={-50}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gold-500/[0.06] blur-[120px] pointer-events-none"
        >
          <div />
        </ParallaxLayer>

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollScale from={0.9} to={1} fade>
            <span className="text-[11px] font-semibold tracking-[0.32em] uppercase text-gold-300 mb-5 block">
              Begin Your Ritual
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-cream-50 leading-[1.1] text-balance">
              Ready to elevate <br className="hidden md:block" />
              <span className="text-gold-gradient">your cooking?</span>
            </h2>
            <p className="mt-6 text-brown-200 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
              Browse our full collection and discover the Alcho seasoning that belongs in your
              kitchen.
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
          </ScrollScale>
        </div>
      </section>
    </>
  );
}
