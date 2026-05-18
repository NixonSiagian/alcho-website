"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { FadeIn } from "@/components/Parallax";
import { products } from "@/data/products";

const PRETTY_CATEGORY: Record<string, string> = {
  "All": "All",
  "Paste & Marinade": "Paste & Marinade",
  "Marinade": "Marinade",
  "Sauce": "Sauce",
  "Spice Blend": "Spice Blend",
  "sauces": "Sauces",
  "seasoning": "Seasoning",
  "snack-seasoning": "Snack Seasoning",
};

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Build categories dynamically from data
  const categories = useMemo(() => {
    const set = new Set(products.map((p) => p.category));
    return ["All", ...Array.from(set)];
  }, []);

  const filtered = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return products.filter((p) => {
      const inCat = activeCategory === "All" || p.category === activeCategory;
      const matchesSearch =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.shortDescription.toLowerCase().includes(q) ||
        p.ingredients.some((i) => i.toLowerCase().includes(q));
      return inCat && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative pt-36 pb-24 lg:pt-40 lg:pb-28 bg-hero-deep overflow-hidden">
        <div className="absolute inset-0 bg-spice-texture pointer-events-none" />
        <div className="absolute -top-20 right-1/4 w-72 h-72 rounded-full bg-gold-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-brown-700/30 blur-3xl" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn immediate>
            <div className="flex items-center gap-3 mb-6 justify-center">
              <span className="h-px w-8 bg-gold-400/60" />
              <span className="text-[11px] font-semibold tracking-[0.32em] uppercase text-gold-300">
                Our Collection
              </span>
              <span className="h-px w-8 bg-gold-400/60" />
            </div>
          </FadeIn>
          <FadeIn immediate delay={0.1}>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-semibold text-cream-50 leading-[1.05] text-balance">
              Premium <span className="text-gold-gradient italic">seasonings,</span><br />
              composed by craft.
            </h1>
          </FadeIn>
          <FadeIn immediate delay={0.2}>
            <p className="mt-7 max-w-2xl mx-auto text-base md:text-lg leading-relaxed text-brown-200">
              Each product is a careful expression of Indonesian culinary heritage —
              made with natural ingredients and zero compromise.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── Filter bar ── */}
      <section className="sticky top-16 lg:top-20 z-30 bg-cream-50/85 dark:bg-brown-950/85 backdrop-blur-sm border-b border-brown-100/70 dark:border-brown-800/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between">
            {/* Category pills — horizontally scrollable on mobile */}
            <div className="flex gap-2 overflow-x-auto pb-1 -mx-1 px-1 lg:flex-wrap lg:overflow-visible lg:mx-0 lg:px-0 scrollbar-hide">
              {categories.map((cat) => {
                const active = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`shrink-0 px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-400 ease-luxury border ${
                      active
                        ? "bg-brown-900 dark:bg-gold-500 text-cream-50 dark:text-brown-950 border-brown-900 dark:border-gold-500 shadow-sm"
                        : "bg-cream-100/60 dark:bg-brown-900/60 text-brown-700 dark:text-brown-200 border-brown-100 dark:border-brown-800 hover:border-gold-400/60 hover:text-gold-700 dark:hover:text-gold-300"
                    }`}
                  >
                    {PRETTY_CATEGORY[cat] ?? cat}
                  </button>
                );
              })}
            </div>

            {/* Search */}
            <div className="relative shrink-0 lg:w-72">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brown-400" />
              <input
                type="text"
                placeholder="Search by name or ingredient…"
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
      <section className="py-16 lg:py-20 bg-cream-50 dark:bg-brown-950 min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex items-center justify-between">
            <p className="text-brown-500 dark:text-brown-300 text-sm">
              <span className="font-semibold text-brown-900 dark:text-cream-50">{filtered.length}</span>{" "}
              {filtered.length === 1 ? "product" : "products"}
              {activeCategory !== "All" && (
                <> in <span className="font-semibold text-brown-900 dark:text-cream-50">{PRETTY_CATEGORY[activeCategory] ?? activeCategory}</span></>
              )}
            </p>
            {activeCategory !== "All" || searchQuery ? (
              <button
                onClick={() => { setActiveCategory("All"); setSearchQuery(""); }}
                className="text-xs font-semibold tracking-wider uppercase text-gold-700 dark:text-gold-300 hover:underline"
              >
                Clear all
              </button>
            ) : null}
          </div>

          <AnimatePresence mode="wait">
            {filtered.length > 0 ? (
              <motion.div
                key={activeCategory + searchQuery}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8"
              >
                {filtered.map((product, i) => (
                  <ProductCard key={product.id} product={product} index={i} />
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
                  Nothing found
                </h3>
                <p className="text-brown-500 dark:text-brown-300 mb-7">
                  Try a different search term or filter.
                </p>
                <button
                  onClick={() => { setActiveCategory("All"); setSearchQuery(""); }}
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
