"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Heart,
  Sprout,
  Globe,
  Award,
  Users,
  Lightbulb,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: "easeOut" },
  }),
};

const timeline = [
  {
    year: "2015",
    title: "A Dream Simmers",
    description:
      "Founded in a home kitchen in Jakarta, Alcho began as Chef Rizal's passion project — recreating his grandmother's rendang paste for friends and family.",
  },
  {
    year: "2017",
    title: "First Product Launch",
    description:
      "The Signature Rendang Paste debuted at local farmers' markets, selling out within hours. Demand quickly outpaced supply.",
  },
  {
    year: "2019",
    title: "Going Commercial",
    description:
      "Alcho moved into its first production facility while maintaining the same artisanal process. Distribution expanded to specialty grocers across Java.",
  },
  {
    year: "2021",
    title: "Online Expansion",
    description:
      "Launched our e-commerce platform, enabling Indonesians abroad to taste home. International shipping began to Singapore, Australia, and the Netherlands.",
  },
  {
    year: "2023",
    title: "8 Products & Growing",
    description:
      "The Alcho family grew to 8 signature products, each rooted in a distinct Indonesian culinary tradition. Over 50,000 households trust Alcho monthly.",
  },
  {
    year: "Today",
    title: "Crafting the Future",
    description:
      "We continue to develop new recipes, partner with local farmers, and champion authentic Indonesian flavor on the world stage.",
  },
];

const values = [
  {
    icon: Heart,
    title: "Passion for Flavor",
    description:
      "Every product we make starts with genuine love for food. We obsess over depth, balance, and authenticity in every batch.",
    color: "text-rose-500",
    bg: "bg-rose-50 dark:bg-rose-950/30",
  },
  {
    icon: Sprout,
    title: "Respect for Nature",
    description:
      "We source from sustainable farms and use only natural ingredients — no artificial colors, preservatives, or flavor enhancers.",
    color: "text-green-600",
    bg: "bg-green-50 dark:bg-green-950/30",
  },
  {
    icon: Globe,
    title: "Heritage & Craft",
    description:
      "Indonesia's archipelago holds thousands of culinary traditions. We are their stewards, ensuring these flavors are never lost.",
    color: "text-blue-500",
    bg: "bg-blue-50 dark:bg-blue-950/30",
  },
  {
    icon: Award,
    title: "Uncompromising Quality",
    description:
      "From sourcing to packaging, we apply rigorous standards. If it doesn't meet the bar, it doesn't carry the Alcho name.",
    color: "text-gold-600",
    bg: "bg-amber-50 dark:bg-amber-950/30",
  },
  {
    icon: Users,
    title: "Community First",
    description:
      "We work directly with local spice farmers, ensuring fair wages and supporting the communities that make our products possible.",
    color: "text-purple-500",
    bg: "bg-purple-50 dark:bg-purple-950/30",
  },
  {
    icon: Lightbulb,
    title: "Constant Innovation",
    description:
      "While rooted in tradition, we embrace creativity. Our R&D team constantly explores new flavor profiles inspired by Indonesia's rich food culture.",
    color: "text-orange-500",
    bg: "bg-orange-50 dark:bg-orange-950/30",
  },
];

const team = [
  {
    name: "Chef Rizal Kusuma",
    role: "Founder & Head of Flavor",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80",
    bio: "20 years in professional kitchens across Jakarta and Bali, Rizal channels his grandmother's recipes into every Alcho product.",
  },
  {
    name: "Dewi Hartono",
    role: "Co-Founder & Operations",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
    bio: "With a background in food science, Dewi ensures every jar of Alcho meets the highest safety and quality standards.",
  },
  {
    name: "Bima Prasetyo",
    role: "Head of Sourcing",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    bio: "Bima travels the archipelago building relationships with local farmers who share Alcho's commitment to quality.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1532336414038-cf19250c5757?w=1600&q=80"
            alt="Indonesian spices"
            fill
            priority
            className="object-cover opacity-20 dark:opacity-10"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-cream-50 via-cream-50/90 to-cream-50 dark:from-brown-950 dark:via-brown-950/90 dark:to-brown-950" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block text-xs font-semibold tracking-[0.2em] uppercase mb-4 px-4 py-1.5 rounded-full bg-brown-100 dark:bg-brown-900 text-brown-600 dark:text-gold-400"
            >
              Our Story
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif text-5xl sm:text-6xl font-bold text-brown-900 dark:text-cream-50 leading-tight mb-6"
            >
              More Than Seasoning —<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brown-600 to-gold-600 dark:from-gold-400 dark:to-gold-300">
                A Living Heritage.
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-brown-600 dark:text-brown-300 text-xl leading-relaxed"
            >
              Alcho was born in a home kitchen and grew through a simple conviction: the world
              deserves to taste real Indonesian flavor — made with honesty, care, and the best
              ingredients nature provides.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── Brand Story ── */}
      <section className="py-20 bg-white dark:bg-brown-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-brown-900 dark:text-cream-50 mb-6 leading-tight">
                It Started with a{" "}
                <span className="italic text-gold-600 dark:text-gold-400">Grandmother&apos;s Recipe</span>
              </h2>
              <div className="space-y-4 text-brown-600 dark:text-brown-300 leading-relaxed">
                <p>
                  In the summer of 2015, Chef Rizal Kusuma stood in his Jakarta kitchen trying
                  to recreate the rendang his grandmother made every Lebaran. The markets offered
                  nothing close — store-bought pastes were pale imitations filled with additives
                  and artificial flavors.
                </p>
                <p>
                  So he started from scratch. Sourcing fresh galangal from West Java, hand-grinding
                  candlenuts, layering whole spices in the exact proportions his grandmother had
                  taught him. When he brought jars to friends, the response was immediate:
                  <em className="text-brown-800 dark:text-cream-200"> &ldquo;This is exactly what it&apos;s supposed to taste like.&rdquo;</em>
                </p>
                <p>
                  That validation became a business. Today, Alcho produces 8 signature products,
                  ships to multiple countries, and is trusted by over 50,000 home cooks and
                  professional chefs — but the philosophy remains unchanged: <strong className="text-brown-900 dark:text-cream-100">real ingredients,
                  real recipes, real flavor.</strong>
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { value: "2015", label: "Founded" },
                  { value: "8+", label: "Products" },
                  { value: "50K+", label: "Happy Customers" },
                  { value: "100%", label: "Natural Ingredients" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-brown-50 dark:bg-brown-800 rounded-xl p-4 border border-brown-100 dark:border-brown-700"
                  >
                    <div className="font-serif text-2xl font-bold text-gold-600 dark:text-gold-400">
                      {stat.value}
                    </div>
                    <div className="text-brown-500 dark:text-brown-300 text-sm mt-0.5">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1611270629569-8b357cb88da9?w=400&q=80"
                      alt="Spice grinding"
                      fill
                      className="object-cover"
                      sizes="200px"
                    />
                  </div>
                  <div className="relative aspect-square rounded-2xl overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&q=80"
                      alt="Rendang paste"
                      fill
                      className="object-cover"
                      sizes="200px"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="relative aspect-square rounded-2xl overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1472476443507-c7a5948772fc?w=400&q=80"
                      alt="Sambal"
                      fill
                      className="object-cover"
                      sizes="200px"
                    />
                  </div>
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&q=80"
                      alt="Cooking"
                      fill
                      className="object-cover"
                      sizes="200px"
                    />
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-white dark:bg-brown-800 rounded-2xl p-4 shadow-lg border border-brown-100 dark:border-brown-700">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-950 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-brown-800 dark:text-cream-100 text-sm">No Preservatives</div>
                    <div className="text-brown-400 text-xs">Certified Natural</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Vision & Mission ── */}
      <section className="py-20 bg-cream-50 dark:bg-brown-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Direction"
            title="Vision & Mission"
            subtitle="The north star that guides every jar we produce."
          />

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative bg-brown-800 dark:bg-brown-900 rounded-3xl p-8 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/10 rounded-full -translate-y-8 translate-x-8" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gold-500/5 rounded-full translate-y-6 -translate-x-6" />
              <div className="relative">
                <span className="text-gold-400 text-xs font-semibold tracking-widest uppercase mb-4 block">
                  Vision
                </span>
                <h3 className="font-serif text-2xl font-bold text-white mb-4 leading-tight">
                  To be Indonesia&apos;s most loved culinary heritage brand.
                </h3>
                <p className="text-brown-300 leading-relaxed text-sm">
                  We envision a world where Indonesian flavors are as universally celebrated as
                  French sauces or Japanese umami — where every kitchen, everywhere, has an Alcho
                  product that connects them to the rich tapestry of the archipelago.
                </p>
              </div>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="bg-white dark:bg-brown-800 rounded-3xl p-8 border border-brown-100 dark:border-brown-700"
            >
              <span className="text-brown-500 dark:text-gold-400 text-xs font-semibold tracking-widest uppercase mb-4 block">
                Mission
              </span>
              <h3 className="font-serif text-2xl font-bold text-brown-900 dark:text-cream-50 mb-4 leading-tight">
                Preserve tradition. Elevate the everyday.
              </h3>
              <ul className="space-y-3">
                {[
                  "Craft seasonings that honor authentic Indonesian recipes",
                  "Source ingredients responsibly from local farmers",
                  "Make restaurant-quality flavor accessible to every home cook",
                  "Educate the world about the depth of Indonesian cuisine",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-brown-600 dark:text-brown-300">
                    <CheckCircle2 className="w-4 h-4 text-gold-500 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Core Values ── */}
      <section className="py-20 bg-white dark:bg-brown-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="What We Stand For"
            title="Our Core Values"
            subtitle="Six principles that shape how we work, what we make, and how we show up in the world."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                custom={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
                className="group bg-cream-50 dark:bg-brown-800 rounded-2xl p-6 border border-brown-100 dark:border-brown-700 hover:border-gold-300 dark:hover:border-gold-700 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-12 h-12 rounded-xl ${v.bg} flex items-center justify-center mb-4`}>
                  <v.icon className={`w-6 h-6 ${v.color}`} />
                </div>
                <h3 className="font-serif text-lg font-semibold text-brown-800 dark:text-cream-100 mb-2">
                  {v.title}
                </h3>
                <p className="text-brown-500 dark:text-brown-300 text-sm leading-relaxed">
                  {v.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="py-20 bg-cream-50 dark:bg-brown-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Journey"
            title="From Kitchen to Country"
            subtitle="A decade of flavor, growth, and community."
          />

          <div className="relative max-w-3xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-[calc(50%-1px)] top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold-300 via-gold-400 to-transparent hidden md:block" />

            <div className="space-y-10">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  custom={i}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className={`relative flex flex-col md:flex-row gap-6 md:gap-0 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div
                    className={`md:w-[45%] bg-white dark:bg-brown-900 rounded-2xl p-6 border border-brown-100 dark:border-brown-700 shadow-sm hover:shadow-md transition-shadow ${
                      i % 2 === 0 ? "md:mr-auto md:pr-10" : "md:ml-auto md:pl-10"
                    }`}
                  >
                    <span className="font-serif text-gold-600 dark:text-gold-400 font-bold text-lg">
                      {item.year}
                    </span>
                    <h3 className="font-serif text-xl font-semibold text-brown-800 dark:text-cream-100 mt-1 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-brown-500 dark:text-brown-300 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Center dot */}
                  <div className="hidden md:flex absolute left-1/2 top-6 -translate-x-1/2 w-4 h-4 rounded-full bg-gold-400 border-4 border-cream-50 dark:border-brown-950 z-10" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="py-20 bg-white dark:bg-brown-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="The People"
            title="Meet Our Team"
            subtitle="Passionate individuals united by a love of food and authentic Indonesian flavor."
          />

          <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                custom={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
                className="text-center group"
              >
                <div className="relative w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-4 border-cream-100 dark:border-brown-800 shadow-md group-hover:border-gold-300 dark:group-hover:border-gold-600 transition-colors duration-300">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="128px"
                  />
                </div>
                <h3 className="font-serif text-lg font-semibold text-brown-800 dark:text-cream-100">
                  {member.name}
                </h3>
                <p className="text-gold-600 dark:text-gold-400 text-sm font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-brown-500 dark:text-brown-300 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 bg-brown-800 dark:bg-brown-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-3xl font-bold text-white mb-4">
              Taste the Story
            </h2>
            <p className="text-brown-300 mb-8">
              Every jar of Alcho carries the history, care, and craft you just read about.
            </p>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gold-500 hover:bg-gold-400 text-brown-950 font-semibold transition-all duration-200 hover:shadow-xl hover:shadow-gold-500/30 hover:-translate-y-0.5"
            >
              Explore Products
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
