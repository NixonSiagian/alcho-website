"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, ArrowUpRight, Clock } from "lucide-react";
import BlogCard from "@/components/BlogCard";
import { FadeIn } from "@/components/Parallax";
import { blogPosts } from "@/data/blog";

export default function BlogPage() {
  const [activeTag, setActiveTag] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const allTags = useMemo(
    () => ["All", ...Array.from(new Set(blogPosts.flatMap((p) => p.tags)))],
    []
  );

  const filtered = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return blogPosts.filter((p) => {
      const matchesTag = activeTag === "All" || p.tags.includes(activeTag);
      const matchesSearch =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q);
      return matchesTag && matchesSearch;
    });
  }, [activeTag, searchQuery]);

  const featured = blogPosts[0];

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative pt-36 pb-24 lg:pt-40 lg:pb-28 bg-hero-deep overflow-hidden">
        <div className="absolute inset-0 bg-spice-texture pointer-events-none" />
        <div className="absolute -top-20 right-10 w-72 h-72 rounded-full bg-gold-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-10 w-80 h-80 rounded-full bg-brown-700/30 blur-3xl" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn immediate>
            <div className="flex items-center gap-3 mb-6 justify-center">
              <span className="h-px w-8 bg-gold-400/60" />
              <span className="text-[11px] font-semibold tracking-[0.32em] uppercase text-gold-300">
                Recipes & Stories
              </span>
              <span className="h-px w-8 bg-gold-400/60" />
            </div>
          </FadeIn>
          <FadeIn immediate delay={0.1}>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-semibold text-cream-50 leading-[1.05] text-balance">
              From the <span className="text-gold-gradient italic">Alcho</span> kitchen.
            </h1>
          </FadeIn>
          <FadeIn immediate delay={0.2}>
            <p className="mt-7 max-w-2xl mx-auto text-base md:text-lg leading-relaxed text-brown-200">
              Step-by-step recipes, cooking tips, and culinary stories — each crafted around our
              seasonings so you can cook with confidence and creativity.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── Featured Post ── */}
      {featured && (
        <section className="py-16 lg:py-20 bg-cream-50 dark:bg-brown-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <Link
                href={`/blog/${featured.slug}`}
                className="group grid lg:grid-cols-2 items-stretch bg-cream-100/60 dark:bg-brown-900/60 rounded-[28px] overflow-hidden border border-brown-100/70 dark:border-brown-800 hover:border-gold-300/70 dark:hover:border-gold-700/60 transition-all duration-500 ease-luxury hover:shadow-luxury"
              >
                <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[420px] overflow-hidden">
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    className="object-cover transition-transform duration-[900ms] ease-luxury group-hover:scale-[1.05]"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brown-950/55 via-transparent to-transparent" />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <span className="inline-flex items-center self-start gap-2 px-3 py-1 rounded-full bg-gold-soft text-brown-900 text-[10px] font-semibold tracking-[0.22em] uppercase ring-1 ring-gold-300/40">
                    Featured Recipe
                  </span>
                  <h2 className="mt-5 font-serif text-3xl lg:text-4xl font-semibold text-brown-900 dark:text-cream-50 leading-[1.15] text-balance group-hover:text-gold-700 dark:group-hover:text-gold-300 transition-colors duration-400">
                    {featured.title}
                  </h2>
                  <p className="mt-4 text-brown-600 dark:text-brown-300 leading-relaxed line-clamp-3">
                    {featured.excerpt}
                  </p>
                  <div className="mt-7 flex items-center justify-between">
                    <div className="flex items-center gap-4 text-xs tracking-wider uppercase text-brown-400">
                      <span>{featured.author}</span>
                      <span className="w-1 h-1 rounded-full bg-brown-300" />
                      <span className="inline-flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {featured.readTime}
                      </span>
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-gold-700 dark:text-gold-300 group-hover:gap-2.5 transition-all">
                      Read
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            </FadeIn>
          </div>
        </section>
      )}

      {/* ── Filter bar ── */}
      <section className="sticky top-16 lg:top-20 z-30 bg-cream-50/85 dark:bg-brown-950/85 backdrop-blur-sm border-b border-brown-100/70 dark:border-brown-800/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between">
            <div className="flex gap-2 overflow-x-auto pb-1 -mx-1 px-1 lg:flex-wrap lg:overflow-visible lg:mx-0 lg:px-0 scrollbar-hide">
              {allTags.map((tag) => {
                const active = activeTag === tag;
                return (
                  <button
                    key={tag}
                    onClick={() => setActiveTag(tag)}
                    className={`shrink-0 px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-400 ease-luxury border ${
                      active
                        ? "bg-brown-900 dark:bg-gold-500 text-cream-50 dark:text-brown-950 border-brown-900 dark:border-gold-500 shadow-sm"
                        : "bg-cream-100/60 dark:bg-brown-900/60 text-brown-700 dark:text-brown-200 border-brown-100 dark:border-brown-800 hover:border-gold-400/60 hover:text-gold-700 dark:hover:text-gold-300"
                    }`}
                  >
                    {tag}
                  </button>
                );
              })}
            </div>

            <div className="relative shrink-0 lg:w-72">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brown-400" />
              <input
                type="text"
                placeholder="Search recipes…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-10 py-2.5 rounded-full bg-cream-100/70 dark:bg-brown-900/70 border border-brown-100 dark:border-brown-800 text-sm text-brown-800 dark:text-cream-100 placeholder-brown-400 focus:outline-none focus:ring-2 focus:ring-gold-400/40 focus:border-gold-400/50 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full flex items-center justify-center text-brown-400 hover:text-brown-700 hover:bg-brown-100 dark:hover:bg-brown-800 transition-colors"
                  aria-label="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Grid ── */}
      <section className="py-16 lg:py-20 bg-cream-50 dark:bg-brown-950 min-h-[50vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex items-center justify-between">
            <p className="text-brown-500 dark:text-brown-300 text-sm">
              <span className="font-semibold text-brown-900 dark:text-cream-50">{filtered.length}</span>{" "}
              {filtered.length === 1 ? "recipe" : "recipes"} found
            </p>
          </div>

          <AnimatePresence mode="wait">
            {filtered.length > 0 ? (
              <motion.div
                key={activeTag + searchQuery}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
              >
                {filtered.map((post, i) => (
                  <BlogCard key={post.id} post={post} index={i} />
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-20"
              >
                <div className="w-16 h-16 rounded-full bg-cream-100 dark:bg-brown-900 mx-auto mb-5 flex items-center justify-center">
                  <Search className="w-6 h-6 text-brown-400" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-brown-900 dark:text-cream-50 mb-2">
                  No recipes match
                </h3>
                <p className="text-brown-500 dark:text-brown-300 mb-7">
                  Try adjusting your filters or search.
                </p>
                <button
                  onClick={() => { setActiveTag("All"); setSearchQuery(""); }}
                  className="btn-gold"
                >
                  Clear filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}
