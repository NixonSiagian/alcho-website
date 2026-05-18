"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, User, Calendar, Tag } from "lucide-react";
import BlogCard from "@/components/BlogCard";
import { FadeIn, ParallaxImage } from "@/components/Parallax";
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

/* Lightweight markdown-ish renderer */
function renderContent(content: string) {
  const lines = content.trim().split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i].trim();

    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={i} className="font-serif text-2xl md:text-3xl font-semibold text-brown-900 dark:text-cream-50 mt-12 mb-5 leading-tight">
          {line.slice(3)}
        </h2>
      );
    } else if (line.startsWith("### ")) {
      elements.push(
        <h3 key={i} className="font-serif text-xl md:text-2xl font-semibold text-brown-800 dark:text-cream-100 mt-8 mb-4 leading-snug">
          {line.slice(4)}
        </h3>
      );
    } else if (line.startsWith("**") && line.endsWith("**")) {
      elements.push(
        <p key={i} className="font-semibold text-brown-900 dark:text-cream-50 mt-5 mb-1 text-[15px]">
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
        <ul key={i} className="space-y-2 mb-6 mt-2">
          {listItems.map((item, k) => (
            <li key={k} className="flex items-start gap-3 text-[15px] leading-relaxed text-brown-700 dark:text-brown-200">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold-500 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
      i = j;
      continue;
    } else if (line.length > 0) {
      const parts = line.split(/(\*\*[^*]+\*\*|_[^_]+_)/g);
      const formatted = parts.map((part, k) => {
        if (part.startsWith("**") && part.endsWith("**"))
          return <strong key={k} className="font-semibold text-brown-900 dark:text-cream-50">{part.slice(2, -2)}</strong>;
        if (part.startsWith("_") && part.endsWith("_") && part.length > 2)
          return <em key={k} className="italic text-brown-800 dark:text-cream-100">{part.slice(1, -1)}</em>;
        return part;
      });
      elements.push(
        <p key={i} className="text-brown-700 dark:text-brown-200 leading-[1.8] mb-5 text-[16px]">
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
      <section className="relative pt-20 overflow-hidden">
        <div className="relative h-[60vh] min-h-[440px] lg:h-[72vh]">
          <ParallaxImage strength={120} className="absolute inset-0">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </ParallaxImage>
          <div className="absolute inset-0 bg-gradient-to-t from-brown-950 via-brown-950/60 to-brown-950/40" />
          <div className="absolute inset-0 bg-vignette" />
        </div>

        <div className="absolute inset-x-0 bottom-0 pb-12 lg:pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex flex-wrap gap-2 mb-5">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cream-50/10 text-cream-50 text-[10px] font-semibold tracking-[0.22em] uppercase border border-cream-50/20"
                  >
                    <Tag className="w-3 h-3" />
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-semibold text-cream-50 leading-[1.08] text-balance">
                {post.title}
              </h1>
              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-cream-100/70 text-xs tracking-wider uppercase">
                <span className="inline-flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-gold-400" />
                  {post.author}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-gold-400" />
                  {formatDate(post.date)}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-gold-400" />
                  {post.readTime}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Body ── */}
      <section className="py-16 lg:py-24 bg-cream-50 dark:bg-brown-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_300px] gap-12 lg:gap-16">
            <FadeIn>
              <article>
                {/* Excerpt callout */}
                <div className="mb-10 pl-5 lg:pl-7 border-l-2 border-gold-500">
                  <p className="font-serif italic text-lg lg:text-xl leading-relaxed text-brown-800 dark:text-cream-100">
                    {post.excerpt}
                  </p>
                </div>

                <div className="prose-custom">{renderContent(post.content)}</div>

                <div className="mt-14 pt-10 border-t border-brown-100/70 dark:border-brown-800">
                  <p className="text-[11px] font-semibold tracking-[0.32em] uppercase text-gold-700 dark:text-gold-300 mb-4">
                    Filed under
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 rounded-full border border-brown-200 dark:border-brown-700 text-brown-700 dark:text-brown-200 text-xs font-medium hover:border-gold-400/60 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8">
                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-brown-700 dark:text-brown-300 hover:text-gold-700 dark:hover:text-gold-300 text-sm font-medium transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back to all recipes
                  </Link>
                </div>
              </article>
            </FadeIn>

            {/* Sidebar */}
            <aside className="space-y-6">
              <FadeIn delay={0.15}>
                <div className="bg-cream-100/60 dark:bg-brown-900/60 rounded-2xl p-6 border border-brown-100/70 dark:border-brown-800">
                  <div className="w-14 h-14 rounded-full bg-gold-soft flex items-center justify-center mb-4 ring-1 ring-gold-300/40 text-2xl">
                    👨‍🍳
                  </div>
                  <p className="text-[10px] font-semibold tracking-[0.22em] uppercase text-gold-700 dark:text-gold-300 mb-2">
                    The Author
                  </p>
                  <h3 className="font-serif text-lg font-semibold text-brown-900 dark:text-cream-50 mb-2">
                    {post.author}
                  </h3>
                  <p className="text-brown-600 dark:text-brown-300 text-sm leading-relaxed">
                    Alcho kitchen chef and recipe developer, passionate about bringing authentic
                    Indonesian flavors to every table.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.25}>
                <div className="relative bg-hero-deep rounded-2xl p-6 overflow-hidden">
                  <div className="absolute inset-0 bg-spice-texture" />
                  <div className="relative">
                    <p className="text-gold-300 text-[10px] font-semibold tracking-[0.22em] uppercase mb-3">
                      Used in this recipe
                    </p>
                    <h3 className="font-serif text-xl font-semibold text-cream-50 mb-3 leading-snug">
                      Browse Alcho Products
                    </h3>
                    <p className="text-brown-200 text-sm mb-5 leading-relaxed">
                      Find the exact seasonings used here and more, in our full collection.
                    </p>
                    <Link
                      href="/products"
                      className="block w-full text-center px-5 py-3 rounded-full text-brown-950 font-semibold text-sm transition-all duration-400 ease-luxury hover:-translate-y-0.5"
                      style={{
                        backgroundImage: "linear-gradient(135deg, #f5d97a 0%, #e1a82b 50%, #a86c15 100%)",
                        boxShadow: "0 12px 30px -10px rgba(225, 168, 43, 0.5)",
                      }}
                    >
                      Shop Products
                    </Link>
                  </div>
                </div>
              </FadeIn>
            </aside>
          </div>
        </div>
      </section>

      {/* ── Related ── */}
      {related.length > 0 && (
        <section className="py-20 lg:py-24 bg-cream-100 dark:bg-brown-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="flex items-center gap-3 mb-3">
                <span className="h-px w-8 bg-gold-500/60" />
                <span className="text-[11px] font-semibold tracking-[0.32em] uppercase text-gold-700 dark:text-gold-300">
                  Keep Cooking
                </span>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-brown-900 dark:text-cream-50 mb-10 leading-tight">
                More recipes you'll love.
              </h2>
            </FadeIn>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
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
