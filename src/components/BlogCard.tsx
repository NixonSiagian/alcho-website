"use client";

import Link from "next/link";
import Image from "next/image";
import { Clock, ArrowUpRight } from "lucide-react";
import { BlogPost } from "@/types";

/* ═══════════════════════════════════════════════════════════════
   BLOG CARD — Premium Editorial Feel
   - Gentle hover lift (-4px) with refined shadow
   - Smooth image zoom (1.04) on hover
   - Soft border glow transition
   ═══════════════════════════════════════════════════════════════ */

interface BlogCardProps {
  post: BlogPost;
  index?: number;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block h-full">
      <article className="relative h-full bg-brand-deeper rounded-2xl overflow-hidden border border-brown-800/30 transition-all duration-500 ease-luxury hover:-translate-y-1 hover:shadow-card-hover hover:border-gold-500/15">

        {/* Image */}
        <div className="relative overflow-hidden aspect-[16/10]">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-700 ease-luxury group-hover:scale-[1.04]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/45 via-transparent to-transparent pointer-events-none" />

          {/* Tags */}
          <div className="absolute top-4 left-4 flex flex-wrap gap-1.5 z-[2]">
            {post.tags.slice(0, 1).map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-gold-500/10 backdrop-blur-sm text-gold-400 text-[10px] font-semibold tracking-[0.15em] uppercase border border-gold-500/10"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Read time */}
          <span className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-brand-dark/60 backdrop-blur-sm text-cream-100/80 text-[10px] tracking-wider uppercase z-[2]">
            <Clock className="w-3 h-3" />
            {post.readTime}
          </span>
        </div>

        {/* Content */}
        <div className="p-5 md:p-6">
          <h3 className="font-serif text-lg md:text-xl font-semibold text-cream-100 leading-snug group-hover:text-gold-400 transition-colors duration-400 ease-luxury line-clamp-2">
            {post.title}
          </h3>
          <p className="mt-3 text-brown-400 text-sm leading-relaxed line-clamp-2">
            {post.excerpt}
          </p>

          <div className="mt-5 pt-4 border-t border-brown-800/30 flex items-center justify-between">
            <span className="text-[11px] tracking-[0.15em] uppercase text-brown-500 font-medium">
              {post.author}
            </span>
            <span className="text-xs font-semibold tracking-wider uppercase text-gold-500 inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all duration-400 ease-luxury">
              Read
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
