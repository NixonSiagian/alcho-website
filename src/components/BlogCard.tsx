"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Clock, ArrowUpRight } from "lucide-react";
import { BlogPost } from "@/types";

interface BlogCardProps {
  post: BlogPost;
  index?: number;
}

export default function BlogCard({ post, index = 0 }: BlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.7,
        delay: Math.min(index * 0.07, 0.35),
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Link href={`/blog/${post.slug}`} className="group block h-full">
        <article className="relative h-full bg-cream-50 dark:bg-brown-900/60 rounded-[20px] overflow-hidden border border-brown-100/70 dark:border-brown-800 transition-all duration-500 ease-luxury hover:-translate-y-1.5 hover:shadow-luxury hover:border-gold-300/70 dark:hover:border-gold-700/60">

          {/* Image */}
          <div className="relative overflow-hidden aspect-[16/10]">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-[900ms] ease-luxury group-hover:scale-[1.06]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brown-950/45 via-transparent to-transparent" />
            <div className="absolute top-4 left-4 flex flex-wrap gap-1.5">
              {post.tags.slice(0, 1).map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-cream-50/95 text-brown-900 text-[10px] font-semibold tracking-[0.18em] uppercase"
                >
                  {tag}
                </span>
              ))}
            </div>
            <span className="absolute bottom-4 right-4 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-brown-950/70 text-cream-100 text-[10px] tracking-wider uppercase">
              <Clock className="w-3 h-3" />
              {post.readTime}
            </span>
          </div>

          {/* Content */}
          <div className="p-5 md:p-6">
            <h3 className="font-serif text-lg md:text-xl font-semibold text-brown-900 dark:text-cream-100 leading-snug group-hover:text-gold-700 dark:group-hover:text-gold-300 transition-colors duration-400 line-clamp-2">
              {post.title}
            </h3>
            <p className="mt-2 text-brown-600 dark:text-brown-300 text-sm leading-relaxed line-clamp-2">
              {post.excerpt}
            </p>

            <div className="mt-5 pt-4 border-t border-brown-100/80 dark:border-brown-800 flex items-center justify-between">
              <span className="text-[11px] tracking-widest uppercase text-brown-400 dark:text-brown-400 font-medium">
                {post.author}
              </span>
              <span className="text-xs font-semibold tracking-wider uppercase text-gold-700 dark:text-gold-300 inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all duration-400">
                Read
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  );
}
