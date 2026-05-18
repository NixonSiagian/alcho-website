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
  Flame,
  CheckCircle2,
  Sparkles,
  Clock,
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import ProductCard from "@/components/ProductCard";
import BlogCard from "@/components/BlogCard";
import { getFeaturedProducts } from "@/data/products";
import { blogPosts } from "@/data/blog";
import { testimonials } from "@/data/testimonials";

/* ── animation variants ── */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: "easeOut" },
  }),
};

const features = [
  {
    icon: Leaf,
    title: "100% Natural Ingredients",
    description:
      "Every product starts with hand-selected, all-natural spices and herbs — no fillers, no shortcuts.",
    color: "text-green-600 dark:text-green-400",
    bg: "bg-green-50 dark:bg-green-950/30",
  },
  {
    icon: FlaskConical,
    title: "Zero Preservatives",
    description:
      "We rely on traditional preservation methods so you get pure flavor without artificial additives.",
    color: "text-blue-600 dark:text-blue-400",
    bg: "bg-blue-50 dark:bg-blue-950/30",
  },
  {
    icon: Star,
    title: "Authentic Heritage Recipes",
    description:
      "Rooted in centuries of Indonesian culinary tradition, each recipe is developed with master chefs.",
    color: "text-gold-600 dark:text-gold-400",
    bg: "bg-amber-50 dark:bg-amber-950/30",
  },
  {
    icon: ChefHat,
    title: "Chef-Grade Quality",
    description:
      "Used by professional chefs across Indonesia, our seasonings deliver restaurant results at home.",
    color: "text-brown-600 dark:text-brown-400",
    bg: "bg-brown-50 dark:bg-brown-900/40",
  },
];

const cookingSteps = [
  {
    step: "01",
    title: "Choose Your Alcho",
    description:
      "Browse our range of pastes, sauces, and spice blends. Each product is designed for specific cooking styles.",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=500&q=80",
  },
  {
    step: "02",
    title: "Prep Your Ingredients",
    description:
      "Gather your protein, vegetables, and pantry basics. Alcho products pair beautifully with fresh, quality ingredients.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&q=80",
  },
  {
    step: "03",
    title: "Cook With Confidence",
    description:
      "Follow the simple instructions on every pack — or explore our recipe guides for inspired dishes ready in minutes.",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&q=80",
  },
  {
    step: "04",
    title: "Serve & Impress",
    description:
      "Present a dish rich with authentic flavor. Your guests will ask for the secret — and it will be your own.",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=500&q=80",
  },
];

export default function HomePage() {
  const featuredProducts = getFeaturedProducts();
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <>
      {/* ════════════════════════════════════════
          HERO
      ════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-hero-pattern">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1542010589005-d1eacc3918f2?w=1600&q=80"
            alt="Rich Indonesian spices"
            fill
            priority
            className="object-cover opacity-25"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brown-950/90 via-brown-900/80 to-brown-800/60" />
        </div>

        {/* Floating spice orbs */}
        <div className="absolute top-32 right-[15%] w-64 h-64 rounded-full bg-gold-500/10 blur-3xl animate-pulse" />
        <div className="absolute bottom-32 right-[30%] w-48 h-48 rounded-full bg-brown-500/20 blur-2xl animate-pulse delay-1000" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — Copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/20 border border-gold-500/30 text-gold-300 text-sm font-medium mb-6"
            >
              <Sparkles className="w-4 h-4" />
              Premium Indonesian Seasonings
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
            >
              Crafting{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-500">
                Flavor,
              </span>
              <br />
              Creating{" "}
              <span className="italic text-cream-200">Stories.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-brown-200 text-lg sm:text-xl leading-relaxed mb-8 max-w-lg"
            >
              Alcho brings centuries of Indonesian culinary heritage to your kitchen —
              through premium, all-natural sauces, spice blends, and marinades crafted
              without compromise.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gold-500 hover:bg-gold-400 text-brown-950 font-semibold text-sm transition-all duration-200 hover:shadow-lg hover:shadow-gold-500/30 hover:-translate-y-0.5"
              >
                Explore Products
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/30 text-white hover:bg-white/10 font-medium text-sm transition-all duration-200 backdrop-blur-sm"
              >
                View Recipes
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-12 flex items-center gap-8"
            >
              {[
                { value: "8+", label: "Products" },
                { value: "50K+", label: "Happy Cooks" },
                { value: "100%", label: "Natural" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-serif text-2xl font-bold text-gold-400">{stat.value}</div>
                  <div className="text-brown-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Feature Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="hidden lg:block relative"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Main circular image */}
              <div className="absolute inset-8 rounded-full overflow-hidden border-4 border-gold-500/30 shadow-2xl shadow-brown-950/50">
                <Image
                  src="https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&q=80"
                  alt="Alcho spices"
                  fill
                  className="object-cover"
                  sizes="500px"
                />
              </div>
              {/* Rotating ring */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-gold-500/20 animate-spin" style={{ animationDuration: "20s" }} />
              
              {/* Floating card — Product */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-6 top-1/4 bg-white dark:bg-brown-900 rounded-2xl p-4 shadow-xl border border-brown-100 dark:border-brown-700 max-w-[160px]"
              >
                <div className="w-8 h-8 rounded-full bg-amber-100 dark:bg-amber-950 flex items-center justify-center mb-2">
                  <Flame className="w-4 h-4 text-amber-600" />
                </div>
                <p className="font-semibold text-brown-800 dark:text-cream-100 text-sm">Smoky Sambal</p>
                <p className="text-brown-400 text-xs mt-0.5">Fan Favorite</p>
              </motion.div>

              {/* Floating card — Certified */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -right-4 bottom-1/4 bg-white dark:bg-brown-900 rounded-2xl p-4 shadow-xl border border-brown-100 dark:border-brown-700 max-w-[160px]"
              >
                <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-950 flex items-center justify-center mb-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                </div>
                <p className="font-semibold text-brown-800 dark:text-cream-100 text-sm">No Preservatives</p>
                <p className="text-brown-400 text-xs mt-0.5">100% Clean</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/50 to-transparent animate-pulse" />
        </motion.div>
      </section>

      {/* ════════════════════════════════════════
          FEATURES
      ════════════════════════════════════════ */}
      <section className="py-24 bg-cream-50 dark:bg-brown-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Why Alcho"
            title="The Alcho Difference"
            subtitle="We don't just sell seasonings. We safeguard a culinary legacy — one jar at a time."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                custom={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
                className="group relative bg-white dark:bg-brown-900 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-brown-100 dark:border-brown-800 hover:border-gold-200 dark:hover:border-gold-800 hover:-translate-y-1"
              >
                <div className={`w-12 h-12 rounded-xl ${f.bg} flex items-center justify-center mb-4`}>
                  <f.icon className={`w-6 h-6 ${f.color}`} />
                </div>
                <h3 className="font-serif text-lg font-semibold text-brown-800 dark:text-cream-100 mb-2">
                  {f.title}
                </h3>
                <p className="text-brown-500 dark:text-brown-300 text-sm leading-relaxed">
                  {f.description}
                </p>
                {/* Bottom gold accent */}
                <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-gold-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          PRODUCT PREVIEW
      ════════════════════════════════════════ */}
      <section className="py-24 bg-white dark:bg-brown-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
            <SectionHeader
              eyebrow="Our Products"
              title="Signature Collection"
              subtitle="Handcrafted seasonings inspired by the flavors of the Indonesian archipelago."
              centered={false}
            />
            <Link
              href="/products"
              className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-brown-200 dark:border-brown-700 text-brown-700 dark:text-cream-200 text-sm font-medium hover:bg-brown-50 dark:hover:bg-brown-800 transition-colors"
            >
              View All
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.slice(0, 4).map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          BANNER / BRAND STORY TEASER
      ════════════════════════════════════════ */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1547592180-85f173990554?w=1600&q=80"
            alt="Indonesian cooking"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-brown-950/75" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-gold-400 font-serif italic text-xl mb-4">
              "From our kitchen to yours"
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Rooted in Tradition.{" "}
              <span className="text-gold-400">Crafted for Today.</span>
            </h2>
            <p className="text-brown-200 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              For generations, Indonesian families have passed down spice recipes that transform
              simple ingredients into extraordinary meals. Alcho was born to keep those traditions
              alive — and bring them to kitchens everywhere.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-brown-900 font-semibold text-sm hover:bg-cream-100 transition-colors hover:shadow-lg"
            >
              Our Story
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          HOW TO COOK
      ════════════════════════════════════════ */}
      <section className="py-24 bg-cream-50 dark:bg-brown-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="How It Works"
            title="Cook Like a Pro in 4 Steps"
            subtitle="Alcho makes it effortless to cook extraordinary meals with real, authentic flavor."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Connecting line (desktop) */}
            <div className="hidden lg:block absolute top-20 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-transparent via-gold-300 to-transparent" />

            {cookingSteps.map((step, i) => (
              <motion.div
                key={step.step}
                custom={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
                className="relative bg-white dark:bg-brown-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-brown-100 dark:border-brown-800 hover:-translate-y-1"
              >
                {/* Step image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="300px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brown-900/60 to-transparent" />
                  {/* Step number */}
                  <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-gold-500 text-brown-950 font-bold text-lg flex items-center justify-center font-serif shadow-md">
                    {i + 1}
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-serif text-lg font-semibold text-brown-800 dark:text-cream-100 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-brown-500 dark:text-brown-300 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-brown-800 hover:bg-brown-700 dark:bg-brown-700 dark:hover:bg-brown-600 text-white font-medium text-sm transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
            >
              <Clock className="w-4 h-4" />
              Browse All Recipes
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          TESTIMONIALS
      ════════════════════════════════════════ */}
      <section className="py-24 bg-brown-800 dark:bg-brown-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Testimonials"
            title="Loved by Cooks Everywhere"
            subtitle="From home kitchens to professional restaurants, Alcho earns its place in every pantry."
            light
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.id}
                custom={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-brown-700/50 dark:bg-brown-900/60 border border-brown-600 dark:border-brown-700 rounded-2xl p-6 hover:bg-brown-700 dark:hover:bg-brown-900 transition-colors duration-300"
              >
                <Quote className="w-8 h-8 text-gold-400/60 mb-4" />
                <p className="text-brown-100 text-sm leading-relaxed mb-6 italic">
                  &ldquo;{t.content}&rdquo;
                </p>

                <div className="flex items-center gap-3 mt-auto">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-gold-500/30 shrink-0">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      fill
                      className="object-cover"
                      sizes="40px"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm">{t.name}</p>
                    <p className="text-brown-300 text-xs">{t.role}</p>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex gap-0.5 mt-4">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <Star key={idx} className="w-3.5 h-3.5 text-gold-400 fill-gold-400" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          RECIPES PREVIEW
      ════════════════════════════════════════ */}
      <section className="py-24 bg-white dark:bg-brown-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
            <SectionHeader
              eyebrow="Recipes"
              title="From Our Kitchen"
              subtitle="Step-by-step recipes to inspire your next meal with Alcho seasonings."
              centered={false}
            />
            <Link
              href="/blog"
              className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-brown-200 dark:border-brown-700 text-brown-700 dark:text-cream-200 text-sm font-medium hover:bg-brown-50 dark:hover:bg-brown-800 transition-colors"
            >
              All Recipes
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPosts.map((post, i) => (
              <BlogCard key={post.id} post={post} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          CTA BANNER
      ════════════════════════════════════════ */}
      <section className="py-20 bg-gradient-to-r from-brown-800 via-brown-700 to-brown-600 dark:from-brown-900 dark:via-brown-800 dark:to-brown-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Elevate Your Cooking?
            </h2>
            <p className="text-brown-200 text-lg mb-8 max-w-xl mx-auto">
              Browse our full collection and discover the Alcho product that belongs in your kitchen.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gold-500 hover:bg-gold-400 text-brown-950 font-semibold transition-all duration-200 hover:shadow-xl hover:shadow-gold-500/30 hover:-translate-y-0.5"
              >
                Shop All Products
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 rounded-full border-2 border-white/30 text-white font-medium hover:bg-white/10 transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
