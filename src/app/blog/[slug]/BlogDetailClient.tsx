"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, User, Calendar, Tag } from "lucide-react";
import BlogCard from "@/components/BlogCard";
import type { BlogPost } from "@/types";

interface Props {
  post: BlogPost;
  related: BlogPost[];
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/* Very simple markdown-to-JSX renderer for the blog content */
function renderContent(content: string) {
  const lines = content.trim().split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i].trim();

    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={i} className="font-serif text-2xl font-bold text-brown-800 dark:text-cream-100 mt-8 mb-4">
          {line.slice(3)}
        </h2>
      );
    } else if (line.startsWith("### ")) {
      elements.push(
        <h3 key={i} className="font-serif text-xl font-semibold text-brown-700 dark:text-cream-200 mt-6 mb-3">
          {line.slice(4)}
        </h3>
      );
    } else if (line.startsWith("**") && line.endsWith("**")) {
      elements.push(
        <p key={i} className="font-semibold text-brown-800 dark:text-cream-100 mt-4 mb-1">
          {line.slice(2, -2)}
        </p>
      );
    } else if (line.startsWith("- ")) {
      const listItems: string[] = [];
      let j = i;
      while (j < lines.length && lines[j].trim().startsWith("- ")) {
        listItems.push(lines[j].trim().slice(2));
        j++;
      }
      elements.push(
        <ul key={i} className="list-disc list-inside space-y-1.5 mb-4 text-brown-600 dark:text-brown-300">
          {listItems.map((item, k) => (
            <li key={k} className="text-sm leading-relaxed">{item}</li>
          ))}
        </ul>
      );
      i = j;
      continue;
    } else if (line.length > 0) {
      // Handle inline bold and italic in paragraphs
      const parts = line.split(/(\*\*[^*]+\*\*|_[^_]+_)/g);
      const formatted = parts.map((part, k) => {
        if (part.startsWith("**") && part.endsWith("**"))
          return <strong key={k} className="font-semibold text-brown-800 dark:text-cream-100">{part.slice(2, -2)}</strong>;
        if (part.startsWith("_") && part.endsWith("_") && part.length > 2)
          return <em key={k} className="italic text-brown-700 dark:text-cream-200">{part.slice(1, -1)}</em>;
        return part;
      });
      elements.push(
        <p key={i} className="text-brown-600 dark:text-brown-300 leading-relaxed mb-4 text-[15px]">
          {formatted}
        </p>
      );
    }
    i++;
  }
  return elements;
}

export default function BlogDetailClient({ post, related }: Props) {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative pt-24 overflow-hidden">
        <div className="relative h-72 sm:h-96 lg:h-[480px]">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brown-950/90 via-brown-950/40 to-transparent" />
        </div>

        {/* Overlaid title */}
        <div className="absolute bottom-0 left-0 right-0 pb-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-medium border border-white/20"
                  >
                    <Tag className="w-3 h-3" />
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-white/70 text-sm">
                <span className="flex items-center gap-1.5">
                  <User className="w-4 h-4" />
                  {post.author}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  {formatDate(post.date)}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Article Body ── */}
      <section className="py-16 bg-white dark:bg-brown-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_280px] gap-12">
            {/* Content */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Excerpt callout */}
              <div className="mb-8 p-5 rounded-2xl bg-amber-50 dark:bg-amber-950/20 border-l-4 border-gold-400">
                <p className="text-brown-700 dark:text-brown-200 font-medium text-base leading-relaxed italic">
                  {post.excerpt}
                </p>
              </div>

              {/* Content */}
              <div className="prose-custom">
                {renderContent(post.content)}
              </div>

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-brown-100 dark:border-brown-800">
                <p className="text-sm font-semibold text-brown-500 dark:text-brown-400 mb-3 uppercase tracking-wide">
                  Filed under
                </p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 rounded-full border border-brown-200 dark:border-brown-700 text-brown-600 dark:text-brown-300 text-sm hover:border-gold-300 dark:hover:border-gold-700 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-brown-600 dark:text-brown-300 hover:text-brown-800 dark:hover:text-cream-100 text-sm font-medium transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to all recipes
                </Link>
              </div>
            </motion.article>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Author card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-cream-50 dark:bg-brown-800 rounded-2xl p-5 border border-brown-100 dark:border-brown-700"
              >
                <div className="w-14 h-14 rounded-full bg-brown-200 dark:bg-brown-700 flex items-center justify-center mb-3 text-2xl">
                  👨‍🍳
                </div>
                <h3 className="font-semibold text-brown-800 dark:text-cream-100 mb-1">{post.author}</h3>
                <p className="text-brown-500 dark:text-brown-300 text-sm leading-relaxed">
                  Alcho kitchen chef and recipe developer, passionate about bringing authentic Indonesian flavors to every table.
                </p>
              </motion.div>

              {/* Try this product CTA */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-brown-800 dark:bg-brown-900 rounded-2xl p-5 border border-brown-700"
              >
                <p className="text-gold-300 text-xs font-semibold uppercase tracking-wide mb-2">
                  Used in this recipe
                </p>
                <h3 className="font-serif text-lg font-semibold text-white mb-3 leading-snug">
                  Browse Alcho Products
                </h3>
                <p className="text-brown-300 text-sm mb-4 leading-relaxed">
                  Find the exact seasonings used in this recipe and more in our full collection.
                </p>
                <Link
                  href="/products"
                  className="block w-full text-center px-4 py-2.5 rounded-xl bg-gold-500 hover:bg-gold-400 text-brown-950 font-semibold text-sm transition-colors"
                >
                  Shop Products →
                </Link>
              </motion.div>
            </aside>
          </div>
        </div>
      </section>

      {/* ── Related Posts ── */}
      {related.length > 0 && (
        <section className="py-16 bg-cream-50 dark:bg-brown-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-bold text-brown-900 dark:text-cream-50 mb-8">
              More Recipes You&apos;ll Love
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((p, i) => (
                <BlogCard key={p.id} post={p} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
