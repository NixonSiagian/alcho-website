"use client";

import Image from "next/image";
import Link from "next/link";
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
import { ParallaxImage, FadeIn } from "@/components/Parallax";
import { ScrollReveal } from "@/components/ScrollAnimations";

const timeline = [
  { year: "2015", title: "A Dream Simmers", description: "Founded in a home kitchen in Jakarta, Alcho began as Chef Rizal's passion project — recreating his grandmother's rendang paste for friends and family." },
  { year: "2017", title: "First Product Launch", description: "The Signature Rendang Paste debuted at local farmers' markets, selling out within hours. Demand quickly outpaced supply." },
  { year: "2019", title: "Going Commercial", description: "Alcho moved into its first production facility while maintaining the same artisanal process. Distribution expanded to specialty grocers across Java." },
  { year: "2021", title: "Online Expansion", description: "Launched our e-commerce platform, enabling Indonesians abroad to taste home. International shipping began to Singapore, Australia, and the Netherlands." },
  { year: "2023", title: "30+ Products & Growing", description: "The Alcho family grew across pastes, sauces, bouillons and snack seasonings, each rooted in a distinct Indonesian culinary tradition." },
  { year: "Today", title: "Crafting the Future", description: "We continue to develop new recipes, partner with local farmers, and champion authentic Indonesian flavor on the world stage." },
];

const values = [
  { icon: Heart, title: "Passion for Flavor", description: "Every product begins with a genuine love of food. We obsess over depth, balance, and authenticity in every batch." },
  { icon: Sprout, title: "Respect for Nature", description: "We source from sustainable farms and use only natural ingredients — no artificial colors, preservatives, or enhancers." },
  { icon: Globe, title: "Heritage & Craft", description: "Indonesia's archipelago holds thousands of culinary traditions. We are their stewards, ensuring those flavors are never lost." },
  { icon: Award, title: "Uncompromising Quality", description: "From sourcing to packaging, we apply rigorous standards. If it doesn't meet the bar, it doesn't carry the Alcho name." },
  { icon: Users, title: "Community First", description: "We work directly with local spice farmers — fair wages, long partnerships, and the communities behind every harvest." },
  { icon: Lightbulb, title: "Constant Innovation", description: "While rooted in tradition, we embrace creativity. Our R&D team explores new flavor profiles inspired by the archipelago." },
];

const team = [
  { name: "Chef Rizal Kusuma", role: "Founder & Head of Flavor", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80", bio: "20 years across professional kitchens in Jakarta and Bali, channeling his grandmother's recipes into every Alcho product." },
  { name: "Dewi Hartono", role: "Co-Founder & Operations", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80", bio: "With a background in food science, Dewi safeguards Alcho's quality and safety standards on every line." },
  { name: "Bima Prasetyo", role: "Head of Sourcing", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80", bio: "Bima travels the archipelago building relationships with farmers who share Alcho's commitment to craft." },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative pt-36 pb-24 lg:pt-44 lg:pb-32 overflow-hidden bg-brand-dark">
        <ParallaxImage strength={80} className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1532336414038-cf19250c5757?w=1800&q=80"
            alt=""
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </ParallaxImage>
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/60 via-transparent to-brand-dark" />

        <div className="relative max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <FadeIn>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-gold-500/50" />
              <span className="text-gold-500 text-[11px] font-semibold tracking-[0.3em] uppercase">
                Our Story
              </span>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-semibold text-cream-50 leading-[1.05] text-balance">
              More than seasoning —<br />
              <span className="text-gold-gradient italic">a living heritage.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-8 max-w-2xl text-base md:text-lg leading-relaxed text-brown-300">
              Alcho was born in a home kitchen and grew through a simple conviction: the world
              deserves to taste real Indonesian flavor — made with honesty, care, and the best
              ingredients nature provides.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── Brand Story ── */}
      <section className="py-28 md:py-36 bg-brand-dark">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <FadeIn>
              <div className="flex items-center gap-3 mb-5">
                <span className="h-px w-8 bg-gold-500/50" />
                <span className="text-gold-500 text-[11px] font-semibold tracking-[0.3em] uppercase">
                  The Beginning
                </span>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-cream-50 leading-[1.15] text-balance">
                It started with a{" "}
                <em className="not-italic font-serif italic text-gold-400">
                  grandmother&apos;s recipe.
                </em>
              </h2>
              <div className="mt-7 space-y-5 text-brown-300 leading-relaxed">
                <p>
                  In the summer of 2015, Chef Rizal Kusuma stood in his Jakarta kitchen trying
                  to recreate the rendang his grandmother made every Lebaran. The markets offered
                  nothing close — store-bought pastes were pale imitations filled with additives.
                </p>
                <p>
                  So he started from scratch. Sourcing fresh galangal from West Java, hand-grinding
                  candlenuts, layering whole spices in the exact proportions his grandmother had
                  taught him. When he brought jars to friends, the response was immediate:
                  <em className="text-cream-100">
                    {" "}&ldquo;this is exactly what it&apos;s supposed to taste like.&rdquo;
                  </em>
                </p>
                <p>
                  That validation became a business. Today, Alcho is trusted by tens of thousands
                  of home cooks and professional chefs — but the philosophy remains unchanged:{" "}
                  <strong className="text-cream-50">
                    real ingredients, real recipes, real flavor.
                  </strong>
                </p>
              </div>

              <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-px bg-brown-800/40 rounded-2xl overflow-hidden">
                {[
                  { value: "2015", label: "Founded" },
                  { value: "30+", label: "Products" },
                  { value: "50K+", label: "Happy Cooks" },
                  { value: "100%", label: "Natural" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-brand-deeper px-4 py-5 text-center">
                    <div className="font-serif text-2xl font-semibold text-gold-gradient">
                      {stat.value}
                    </div>
                    <div className="text-brown-500 text-[11px] tracking-[0.18em] uppercase mt-1.5">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                      <Image src="https://images.unsplash.com/photo-1611270629569-8b357cb88da9?w=600&q=80" alt="Spice grinding" fill className="object-cover" sizes="300px" />
                    </div>
                    <div className="relative aspect-square rounded-2xl overflow-hidden">
                      <Image src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&q=80" alt="Rendang paste" fill className="object-cover" sizes="300px" />
                    </div>
                  </div>
                  <div className="space-y-4 pt-10">
                    <div className="relative aspect-square rounded-2xl overflow-hidden">
                      <Image src="https://images.unsplash.com/photo-1472476443507-c7a5948772fc?w=600&q=80" alt="Sambal" fill className="object-cover" sizes="300px" />
                    </div>
                    <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                      <Image src="https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=600&q=80" alt="Cooking" fill className="object-cover" sizes="300px" />
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-5 -left-5 bg-brand-deeper rounded-2xl p-4 shadow-luxury border border-brown-800/50">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gold-500/10 flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-gold-500" />
                    </div>
                    <div>
                      <div className="font-semibold text-cream-100 text-sm">No Preservatives</div>
                      <div className="text-brown-500 text-[11px] tracking-wider uppercase">Certified Natural</div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Vision & Mission ── */}
      <section className="py-28 md:py-36 bg-brand-deeper">
        <div className="relative max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <SectionHeader
            eyebrow="Direction"
            title="Vision & Mission"
            subtitle="The north star that guides every jar we produce."
          />

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            <FadeIn>
              <div className="relative h-full bg-hero-deep rounded-[24px] p-8 lg:p-10 overflow-hidden border border-brown-800/30">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/5 rounded-full -translate-y-1/3 translate-x-1/3" />
                <div className="relative">
                  <span className="text-gold-400 text-[11px] font-semibold tracking-[0.3em] uppercase mb-5 block">
                    Vision
                  </span>
                  <h3 className="font-serif text-2xl md:text-3xl font-semibold text-cream-50 mb-5 leading-tight">
                    To be Indonesia&apos;s most loved culinary heritage brand.
                  </h3>
                  <p className="text-brown-300 leading-relaxed text-[15px]">
                    We envision a world where Indonesian flavors are as universally celebrated as
                    French sauces or Japanese umami — where every kitchen, everywhere, has an Alcho
                    product that connects them to the rich tapestry of the archipelago.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="h-full bg-brand-dark rounded-[24px] p-8 lg:p-10 border border-brown-800/40">
                <span className="text-gold-500 text-[11px] font-semibold tracking-[0.3em] uppercase mb-5 block">
                  Mission
                </span>
                <h3 className="font-serif text-2xl md:text-3xl font-semibold text-cream-50 mb-6 leading-tight">
                  Preserve tradition. Elevate the everyday.
                </h3>
                <ul className="space-y-3.5">
                  {[
                    "Craft seasonings that honor authentic Indonesian recipes",
                    "Source ingredients responsibly from local farmers",
                    "Make restaurant-quality flavor accessible to every home cook",
                    "Educate the world about the depth of Indonesian cuisine",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-[15px] text-brown-300 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-gold-500 mt-1 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="py-28 md:py-36 bg-brand-dark">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <SectionHeader
            eyebrow="What We Stand For"
            title="Six principles, one philosophy."
            subtitle="They shape how we work, what we make, and how we show up in the world."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {values.map((v, i) => (
              <FadeIn key={v.title} delay={i * 0.07}>
                <div className="group h-full bg-brand-deeper rounded-[20px] p-7 lg:p-8 border border-brown-800/40 transition-all duration-500 ease-luxury hover:border-gold-500/30 hover:-translate-y-1.5 hover:shadow-luxury">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gold-500/10 text-gold-500 mb-5 group-hover:scale-105 transition-transform duration-500">
                    <v.icon className="w-5 h-5" />
                  </span>
                  <h3 className="font-serif text-xl font-semibold text-cream-100 mb-3">
                    {v.title}
                  </h3>
                  <p className="text-brown-400 text-[15px] leading-relaxed">
                    {v.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="py-28 md:py-36 bg-brand-deeper">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <SectionHeader
            eyebrow="Our Journey"
            title="From kitchen to country."
            subtitle="A decade of flavor, growth, and community."
          />

          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold-500/50 via-gold-500/20 to-transparent md:-translate-x-1/2" />

            <div className="space-y-10 md:space-y-12">
              {timeline.map((item, i) => (
                <FadeIn key={item.year} delay={i * 0.05}>
                  <div className={`relative pl-12 md:pl-0 md:flex md:items-center md:gap-10 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}>
                    <span className="absolute left-4 md:left-1/2 top-2 w-3 h-3 rounded-full bg-gold-500 ring-[6px] ring-brand-deeper -translate-x-1/2 z-10" />

                    <div className={`md:w-1/2 ${i % 2 === 0 ? "md:pr-10 md:text-right" : "md:pl-10"}`}>
                      <span className="font-serif text-lg font-semibold text-gold-gradient">
                        {item.year}
                      </span>
                      <h3 className="font-serif text-xl font-semibold text-cream-50 mt-1 mb-2 leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-brown-400 text-[15px] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    <div className="hidden md:block md:w-1/2" />
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="py-28 md:py-36 bg-brand-dark">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <SectionHeader
            eyebrow="The People"
            title="Meet the team behind every jar."
            subtitle="Passionate individuals united by a love of food and authentic Indonesian flavor."
          />

          <div className="grid sm:grid-cols-3 gap-8 lg:gap-10 max-w-5xl mx-auto">
            {team.map((member, i) => (
              <FadeIn key={member.name} delay={i * 0.1}>
                <div className="group text-center">
                  <div className="relative w-40 h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden mx-auto mb-6 border-[3px] border-brown-800 shadow-luxury group-hover:border-gold-500/40 transition-all duration-500">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-700 ease-luxury group-hover:scale-105"
                      sizes="200px"
                    />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-cream-50">
                    {member.name}
                  </h3>
                  <p className="text-gold-500 text-xs font-medium tracking-[0.18em] uppercase mt-1.5 mb-4">
                    {member.role}
                  </p>
                  <p className="text-brown-400 text-sm leading-relaxed max-w-xs mx-auto">
                    {member.bio}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-28 md:py-32 bg-brand-deeper overflow-hidden">
        <div className="relative max-w-3xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <ScrollReveal direction="up" distance={20}>
            <span className="text-gold-500 text-[11px] font-semibold tracking-[0.3em] uppercase mb-5 block">
              Taste the Story
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-cream-50 leading-[1.1] mb-5">
              Every jar carries our heritage.
            </h2>
            <p className="text-brown-300 max-w-xl mx-auto leading-relaxed text-base md:text-lg">
              Discover the seasoning that belongs in your kitchen — crafted with the same care
              you&apos;ve just read about.
            </p>
            <Link href="/products" className="mt-9 inline-flex btn-gold group">
              Explore Products
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
