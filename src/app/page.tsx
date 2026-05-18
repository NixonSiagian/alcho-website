"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
  Leaf,
  FlaskConical,
  Star,
  ChefHat,
  ArrowRight,
  Quote,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import ProductCard from "@/components/ProductCard";
import BlogCard from "@/components/BlogCard";
import { FadeIn, ParallaxLayer, ParallaxImage } from "@/components/Parallax";
import { useShouldReduceParallax } from "@/hooks/useResponsive";
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

/* ─────────── HERO with hero-level parallax ─────────── */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useShouldReduceParallax();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const smooth = useSpring(scrollYProgress, { stiffness: 80, damping: 24, mass: 0.4 });

  // Background moves up slowly — depth illusion
  const bgY = useTransform(smooth, [0, 1], ["0%", "30%"]);
  const bgScale = useTransform(smooth, [0, 1], [1.05, 1.18]);

  // Foreground text drifts slightly upward & fades on scroll out
  const textY = useTransform(smooth, [0, 1], ["0%", "-12%"]);
  const textOpacity = useTransform(smooth, [0, 0.7, 1], [1, 0.6, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] flex items-center overflow-hidden bg-hero-deep"
    >
      {/* Background image with parallax */}
      <div className="absolute inset-0">
        {reduce ? (
          <Image
            src="https://images.unsplash.com/photo-1542010589005-d1eacc3918f2?w=1800&q=80"
            alt=""
            fill
            priority
            className="object-cover opacity-30 scale-105"
            sizes="100vw"
          />
        ) : (
          <motion.div
            style={{ y: bgY, scale: bgScale }}
            className="absolute inset-0 gpu"
          >
            <Image
              src="https://images.unsplash.com/photo-1542010589005-d1eacc3918f2?w=1800&q=80"
              alt=""
              fill
              priority
              className="object-cover opacity-30"
              sizes="100vw"
            />
          </motion.div>
        )}

        {/* Cinematic gradient overlays — no heavy blur */}
        <div className="absolute inset-0 bg-gradient-to-r from-brown-950/95 via-brown-950/75 to-brown-900/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-brown-950 via-transparent to-brown-950/40" />
        <div className="absolute inset-0 bg-vignette" />
      </div>

      {/* Content */}
      <motion.div
        style={reduce ? undefined : { y: textY, opacity: textOpacity }}
        className="relative max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-28 pb-20 lg:pt-32 lg:pb-28 grid lg:grid-cols-12 gap-10 items-center"
      >
        {/* Left column */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cream-50/5 border border-gold-400/30 text-gold-300 text-[11px] font-semibold tracking-[0.32em] uppercase mb-7"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Premium Indonesian Seasonings
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-[44px] sm:text-6xl lg:text-7xl xl:text-8xl font-semibold text-cream-50 leading-[1.02] text-balance"
          >
            Crafting{" "}
            <span className="text-gold-gradient">Flavor.</span>
            <br />
            Creating <em className="not-italic font-serif italic text-cream-200">Stories.</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 max-w-xl text-base sm:text-lg leading-relaxed text-brown-200"
          >
            Alcho carries centuries of Indonesian culinary heritage into your kitchen — through
            premium, all-natural sauces, spice blends and marinades, crafted without compromise.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <Link href="/products" className="btn-gold">
              Explore Collection
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/blog" className="btn-ghost-light">
              View Recipes
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mt-14 grid grid-cols-3 max-w-md divide-x divide-brown-700/60"
          >
            {[
              { value: "30+", label: "Products" },
              { value: "50K+", label: "Happy Cooks" },
              { value: "100%", label: "Natural" },
            ].map((stat, i) => (
              <div key={stat.label} className={i === 0 ? "pr-5" : "px-5"}>
                <div className="font-serif text-3xl font-semibold text-gold-gradient">
                  {stat.value}
                </div>
                <div className="text-brown-300 text-[11px] tracking-[0.22em] uppercase mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right column — circular product showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="hidden lg:flex lg:col-span-5 justify-center relative"
        >
          <div className="relative w-full max-w-md aspect-square">
            {/* Outer rotating ring */}
            <div
              className="absolute inset-0 rounded-full border border-dashed border-gold-400/25 animate-spin-slow"
              style={{ animationDuration: "60s" }}
            />
            {/* Inner ring */}
            <div className="absolute inset-6 rounded-full border border-gold-400/15" />

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

            {/* Floating cards */}
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

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
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

export default function HomePage() {
  const featuredProducts = getFeaturedProducts();
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <>
      <Hero />

      {/* ════════════════════════════════════════
          FEATURES — minimal, gold-accented grid
      ════════════════════════════════════════ */}
      <section className="relative py-24 md:py-32 bg-cream-50 dark:bg-brown-950">
        <div className="absolute inset-0 bg-spice-texture pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Why Alcho"
            title="An uncompromising standard, in every jar."
            subtitle="We don't just sell seasonings. We safeguard a culinary legacy — bottle by bottle, recipe by recipe."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {features.map((f, i) => (
              <FadeIn key={f.title} delay={i * 0.08}>
                <div className="group h-full relative bg-cream-50 dark:bg-brown-900/60 rounded-[20px] p-7 lg:p-8 border border-brown-100/70 dark:border-brown-800 transition-all duration-500 ease-luxury hover:border-gold-300/70 dark:hover:border-gold-700/60 hover:-translate-y-1.5 hover:shadow-luxury">
                  {/* Index */}
                  <span className="absolute top-7 right-7 text-[11px] tracking-[0.28em] uppercase text-brown-300 dark:text-brown-600 font-medium">
                    0{i + 1}
                  </span>

                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gold-soft text-brown-900 mb-6 ring-1 ring-gold-300/40 group-hover:scale-105 transition-transform duration-500">
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
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          PRODUCT PREVIEW
      ════════════════════════════════════════ */}
      <section className="relative py-24 md:py-32 bg-cream-100 dark:bg-brown-900 overflow-hidden">
        {/* Decorative parallax accent */}
        <ParallaxLayer offset={-60} className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-gold-soft opacity-20 blur-3xl pointer-events-none" >
          <div />
        </ParallaxLayer>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 mb-14 lg:mb-16">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-5">
                <span className="h-px w-8 bg-gold-500/60" />
                <span className="text-[11px] font-semibold tracking-[0.32em] uppercase text-gold-700 dark:text-gold-300">
                  Signature Collection
                </span>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.15] text-brown-900 dark:text-cream-50 text-balance">
                Handcrafted seasonings, born of <em className="italic text-gold-700 dark:text-gold-300 not-italic font-serif">Nusantara.</em>
              </h2>
            </div>
            <Link
              href="/products"
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full border border-brown-200 dark:border-brown-700 text-brown-800 dark:text-cream-100 text-sm font-medium hover:bg-brown-100/60 dark:hover:bg-brown-800/60 hover:border-gold-400/60 transition-all duration-400"
            >
              View All
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {featuredProducts.slice(0, 4).map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          BRAND STORY — full bleed parallax image
      ════════════════════════════════════════ */}
      <section className="relative h-[80vh] min-h-[560px] flex items-center overflow-hidden">
        <ParallaxImage strength={140} className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1547592180-85f173990554?w=1800&q=80"
            alt="Indonesian cooking heritage"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </ParallaxImage>

        {/* Cinematic gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-brown-950/85 via-brown-950/55 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-brown-950/70 via-transparent to-transparent" />

        <div className="relative max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="max-w-2xl">
            <span className="text-gold-300 font-serif italic text-lg md:text-xl block mb-5">
              "From our kitchen to yours."
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-cream-50 leading-[1.1] text-balance">
              Rooted in tradition.<br />
              <span className="text-gold-gradient">Crafted for today.</span>
            </h2>
            <p className="mt-7 text-brown-200 text-base md:text-lg leading-relaxed max-w-xl">
              For generations, Indonesian families have passed down spice recipes that turn simple
              ingredients into extraordinary meals. Alcho exists to keep those traditions alive,
              and bring them to kitchens everywhere.
            </p>
            <Link
              href="/about"
              className="mt-9 inline-flex btn-gold"
            >
              Our Story
              <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ════════════════════════════════════════
          HOW IT WORKS — depth via parallax cards
      ════════════════════════════════════════ */}
      <section className="relative py-24 md:py-32 bg-cream-50 dark:bg-brown-950 overflow-hidden">
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
              <FadeIn key={step.title} delay={i * 0.1}>
                <div className="group relative h-full">
                  {/* Image — slight parallax depth on desktop */}
                  <div className="relative aspect-[4/5] rounded-[20px] overflow-hidden border border-brown-100/70 dark:border-brown-800 transition-all duration-500 ease-luxury group-hover:shadow-luxury group-hover:-translate-y-1.5">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover transition-transform duration-[900ms] ease-luxury group-hover:scale-[1.07]"
                      sizes="(max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brown-950/85 via-brown-950/15 to-transparent" />

                    {/* Step number — large, serif, gold */}
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
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.3} className="mt-12 text-center">
            <Link href="/blog" className="btn-gold">
              Browse Recipes
              <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ════════════════════════════════════════
          TESTIMONIALS — elegant dark band
      ════════════════════════════════════════ */}
      <section className="relative py-24 md:py-32 bg-hero-warm overflow-hidden grain">
        <div className="absolute inset-0 bg-spice-texture pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="In Their Words"
            title="Loved by cooks across the archipelago."
            subtitle="From home kitchens to professional restaurants, Alcho earns its place in every pantry."
            light
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t, i) => (
              <FadeIn key={t.id} delay={i * 0.08}>
                <div className="group h-full bg-brown-900/40 hover:bg-brown-900/60 border border-brown-700/60 hover:border-gold-400/40 rounded-[20px] p-7 transition-all duration-500 ease-luxury hover:-translate-y-1.5">
                  <Quote className="w-7 h-7 text-gold-400/70 mb-5" />
                  <p className="text-cream-100/90 text-[15px] leading-relaxed mb-7 italic font-serif">
                    "{t.content}"
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
                      <p className="text-brown-300 text-[11px] tracking-wider mt-0.5">{t.role}</p>
                    </div>
                  </div>

                  <div className="flex gap-0.5 mt-5">
                    {Array.from({ length: t.rating }).map((_, idx) => (
                      <Star key={idx} className="w-3.5 h-3.5 text-gold-400 fill-gold-400" />
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          RECIPES PREVIEW
      ════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-cream-50 dark:bg-brown-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 mb-14 lg:mb-16">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-5">
                <span className="h-px w-8 bg-gold-500/60" />
                <span className="text-[11px] font-semibold tracking-[0.32em] uppercase text-gold-700 dark:text-gold-300">
                  Recipes
                </span>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.15] text-brown-900 dark:text-cream-50 text-balance">
                Inspired dishes, <em className="italic text-gold-700 dark:text-gold-300 not-italic font-serif">composed weekly.</em>
              </h2>
            </div>
            <Link
              href="/blog"
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full border border-brown-200 dark:border-brown-700 text-brown-800 dark:text-cream-100 text-sm font-medium hover:bg-brown-100/60 dark:hover:bg-brown-800/60 hover:border-gold-400/60 transition-all duration-400"
            >
              All Recipes
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {recentPosts.map((post, i) => (
              <BlogCard key={post.id} post={post} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          CTA BANNER — closing dark moment
      ════════════════════════════════════════ */}
      <section className="relative py-24 md:py-28 bg-hero-deep overflow-hidden">
        <div className="absolute inset-0 bg-spice-texture pointer-events-none" />
        <ParallaxLayer offset={-50} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gold-500/8 blur-3xl pointer-events-none">
          <div />
        </ParallaxLayer>

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <span className="text-[11px] font-semibold tracking-[0.32em] uppercase text-gold-300 mb-5 block">
              Begin Your Ritual
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-cream-50 leading-[1.1] text-balance">
              Ready to elevate <br className="hidden md:block" />
              <span className="text-gold-gradient">your cooking?</span>
            </h2>
            <p className="mt-6 text-brown-200 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
              Browse our full collection and discover the Alcho seasoning that belongs in your kitchen.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link href="/products" className="btn-gold">
                Shop All Products
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/contact" className="btn-ghost-light">
                Get in Touch
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
