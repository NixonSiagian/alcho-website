"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, BookOpen } from "lucide-react";
import BlogCard from "@/components/BlogCard";
import { blogPosts } from "@/data/blog";

const allTags = ["All", ...Array.from(new Set(blogPosts.flatMap((p) => p.tags)))];

export default function BlogPage() {
  const [activeTag, setActiveTag] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = blogPosts.filter((p) => {
    const matchesTag = activeTag === "All" || p.tags.includes(activeTag);
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTag && matchesSearch;
  });

  return (
    <>
      {/* ── Hero ── */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-brown-900 to-brown-800 dark:from-brown-950 dark:to-brown-900 overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-20 w-48 h-48 rounded-full bg-gold-400 blur-3xl" />
          <div className="absolute bottom-0 left-20 w-40 h-40 rounded-full bg-brown-400 blur-2xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block text-xs font-semibold tracking-[0.2em] uppercase mb-4 px-4 py-1.5 rounded-full bg-gold-500/20 border border-gold-500/30 text-gold-300"
          >
            Recipes & Stories
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4"
          >
            From the Alcho Kitchen
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-brown-200 text-lg max-w-xl mx-auto"
          >
            Step-by-step recipes, cooking tips, and culinary stories — all featuring Alcho
            seasonings so you can cook with confidence and creativity.
          </motion.p>
        </div>
      </section>

      {/* ── Featured Post ── */}
      {blogPosts[0] && (
        <section className="py-12 bg-white dark:bg-brown-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link
                href={`/blog/${blogPosts[0].slug}`}
                className="group grid lg:grid-cols-2 gap-8 items-center bg-cream-50 dark:bg-brown-800 rounded-3xl overflow-hidden border border-brown-100 dark:border-brown-700 hover:border-gold-300 dark:hover:border-gold-700 hover:shadow-xl transition-all duration-400 p-6 lg:p-0"
              >
                <div className="relative aspect-video lg:aspect-auto lg:h-80 rounded-2xl lg:rounded-none overflow-hidden">
                  <Image
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="lg:py-10 lg:pr-10 lg:pl-6">
                  <span className="inline-block px-3 py-1 rounded-full bg-gold-100 dark:bg-gold-900/30 text-gold-700 dark:text-gold-300 text-xs font-semibold mb-4">
                    ✨ Featured Recipe
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brown-900 dark:text-cream-50 mb-3 leading-tight group-hover:text-brown-700 dark:group-hover:text-gold-300 transition-colors">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-brown-500 dark:text-brown-300 leading-relaxed mb-6 line-clamp-3">
                    {blogPosts[0].excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-brown-400">
                    <span>{blogPosts[0].author}</span>
                    <span>·</span>
                    <span>{blogPosts[0].readTime}</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* ── Filters ── */}
      <section className="sticky top-16 lg:top-20 z-30 bg-white/95 dark:bg-brown-900/95 backdrop-blur-md border-b border-brown-100 dark:border-brown-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setActiveTag(tag)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeTag === tag
                      ? "bg-brown-800 dark:bg-brown-600 text-white shadow-sm"
                      : "bg-brown-100 dark:bg-brown-800 text-brown-600 dark:text-brown-200 hover:bg-brown-200 dark:hover:bg-brown-700"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brown-400" />
              <input
                type="text"
                placeholder="Search recipes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 pr-4 py-2 rounded-full bg-brown-50 dark:bg-brown-800 border border-brown-200 dark:border-brown-700 text-sm text-brown-800 dark:text-cream-100 placeholder-brown-400 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent w-full sm:w-56 transition-all"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Grid ── */}
      <section className="py-16 bg-cream-50 dark:bg-brown-950 min-h-[40vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-8 text-brown-500 dark:text-brown-300 text-sm">
            <BookOpen className="w-4 h-4" />
            <span>
              <strong className="text-brown-800 dark:text-cream-100">{filtered.length}</strong>{" "}
              {filtered.length === 1 ? "recipe" : "recipes"} found
            </span>
          </div>

          {filtered.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((post, i) => (
                <BlogCard key={post.id} post={post} index={i} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🍽️</div>
              <h3 className="font-serif text-xl font-semibold text-brown-800 dark:text-cream-100 mb-2">
                No recipes found
              </h3>
              <p className="text-brown-500 dark:text-brown-300 mb-6">
                Try adjusting your search or filter.
              </p>
              <button
                onClick={() => { setActiveTag("All"); setSearchQuery(""); }}
                className="px-6 py-2.5 rounded-full bg-brown-800 text-white text-sm font-medium hover:bg-brown-700 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
