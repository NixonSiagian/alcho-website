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
      <section className="relative pt-36 pb-24 lg:pt-40 lg:pb-28 bg-brand-dark overflow-hidden">
        <div className="absolute -top-20 right-1/4 w-72 h-72 rounded-full bg-gold-500/5" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-brown-700/10" />

        <div className="relative max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <FadeIn>
            <div className="flex items-center gap-3 mb-6 justify-center">
              <span className="h-px w-8 bg-gold-500/50" />
              <span className="text-gold-500 text-[11px] font-semibold tracking-[0.3em] uppercase">
                Our Collection
              </span>
              <span className="h-px w-8 bg-gold-500/50" />
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-semibold text-cream-50 leading-[1.05] text-balance">
              Premium <span className="text-gold-gradient italic">seasonings,</span><br />
              composed by craft.
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-7 max-w-2xl mx-auto text-base md:text-lg leading-relaxed text-brown-300">
              Each product is a careful expression of Indonesian culinary heritage —
              made with natural ingredients and zero compromise.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── Filter bar ── */}
      <section className="sticky top-16 lg:top-20 z-30 bg-brand-dark/85 backdrop-blur-sm border-b border-brown-800/40">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 py-4">
          <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between">
            {/* Category pills */}
            <div className="flex gap-2 overflow-x-auto pb-1 -mx-1 px-1 lg:flex-wrap lg:overflow-visible lg:mx-0 lg:px-0 scrollbar-hide">
              {categories.map((cat) => {
                const active = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`shrink-0 px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-400 ease-luxury border ${
                      active
                        ? "bg-gold-500 text-brand-dark border-gold-500 shadow-sm"
                        : "bg-brand-deeper text-brown-300 border-brown-800/50 hover:border-gold-500/30 hover:text-gold-400"
                    }`}
                  >
                    {PRETTY_CATEGORY[cat] ?? cat}
                  </button>
                );
              })}
            </div>

            {/* Search */}
            <div className="relative shrink-0 lg:w-72">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brown-500" />
              <input
                type="text"
                placeholder="Search by name or ingredient..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-10 py-2.5 rounded-full bg-brand-deeper border border-brown-800/50 text-sm text-cream-100 placeholder-brown-500 focus:outline-none focus:ring-2 focus:ring-gold-500/30 focus:border-gold-500/30 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full flex items-center justify-center text-brown-500 hover:text-cream-100 hover:bg-brown-800 transition-colors"
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
      <section className="py-16 lg:py-20 bg-brand-dark min-h-[60vh]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="mb-10 flex items-center justify-between">
            <p className="text-brown-400 text-sm">
              <span className="font-semibold text-cream-100">{filtered.length}</span>{" "}
              {filtered.length === 1 ? "product" : "products"}
              {activeCategory !== "All" && (
                <> in <span className="font-semibold text-cream-100">{PRETTY_CATEGORY[activeCategory] ?? activeCategory}</span></>
              )}
            </p>
            {(activeCategory !== "All" || searchQuery) && (
              <button
                onClick={() => { setActiveCategory("All"); setSearchQuery(""); }}
                className="text-xs font-semibold tracking-wider uppercase text-gold-500 hover:underline"
              >
                Clear all
              </button>
            )}
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
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-20"
              >
                <div className="w-16 h-16 rounded-full bg-brand-deeper mx-auto mb-5 flex items-center justify-center">
                  <Search className="w-6 h-6 text-brown-500" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-cream-50 mb-2">
                  Nothing found
                </h3>
                <p className="text-brown-400 mb-7">
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
