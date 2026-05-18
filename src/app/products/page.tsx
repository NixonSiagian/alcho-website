"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, SlidersHorizontal } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const categories = ["All", "Paste & Marinade", "Marinade", "Sauce", "Spice Blend"];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = products.filter((p) => {
    const matchesCategory = activeCategory === "All" || p.category === activeCategory;
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative pt-32 pb-16 bg-gradient-to-b from-brown-900 to-brown-800 dark:from-brown-950 dark:to-brown-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-gold-400 blur-3xl" />
          <div className="absolute bottom-10 right-10 w-56 h-56 rounded-full bg-brown-400 blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block text-xs font-semibold tracking-[0.2em] uppercase mb-4 px-4 py-1.5 rounded-full bg-gold-500/20 border border-gold-500/30 text-gold-300"
          >
            Our Collection
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4"
          >
            Premium Seasonings
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-brown-200 text-lg max-w-xl mx-auto"
          >
            Each product is a carefully crafted expression of Indonesian culinary heritage —
            made with natural ingredients and zero compromise.
          </motion.p>
        </div>
      </section>

      {/* ── Filters ── */}
      <section className="sticky top-16 lg:top-20 z-30 bg-white/95 dark:bg-brown-900/95 backdrop-blur-md border-b border-brown-100 dark:border-brown-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            {/* Category pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeCategory === cat
                      ? "bg-brown-800 dark:bg-brown-600 text-white shadow-sm"
                      : "bg-brown-100 dark:bg-brown-800 text-brown-600 dark:text-brown-200 hover:bg-brown-200 dark:hover:bg-brown-700"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brown-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 pr-4 py-2 rounded-full bg-brown-50 dark:bg-brown-800 border border-brown-200 dark:border-brown-700 text-sm text-brown-800 dark:text-cream-100 placeholder-brown-400 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent w-full sm:w-56 transition-all"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Grid ── */}
      <section className="py-16 bg-cream-50 dark:bg-brown-950 min-h-[50vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Results count */}
          <div className="flex items-center gap-2 mb-8 text-brown-500 dark:text-brown-300 text-sm">
            <SlidersHorizontal className="w-4 h-4" />
            <span>
              Showing <strong className="text-brown-800 dark:text-cream-100">{filtered.length}</strong>{" "}
              {filtered.length === 1 ? "product" : "products"}
              {activeCategory !== "All" && (
                <> in <strong className="text-brown-800 dark:text-cream-100">{activeCategory}</strong></>
              )}
            </span>
          </div>

          <AnimatePresence mode="wait">
            {filtered.length > 0 ? (
              <motion.div
                key={activeCategory + searchQuery}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
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
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="font-serif text-xl font-semibold text-brown-800 dark:text-cream-100 mb-2">
                  No products found
                </h3>
                <p className="text-brown-500 dark:text-brown-300 mb-6">
                  Try adjusting your search or filter.
                </p>
                <button
                  onClick={() => { setActiveCategory("All"); setSearchQuery(""); }}
                  className="px-6 py-2.5 rounded-full bg-brown-800 text-white text-sm font-medium hover:bg-brown-700 transition-colors"
                >
                  Clear Filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}
