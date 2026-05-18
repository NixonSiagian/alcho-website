"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Clock, User, ArrowRight } from "lucide-react";
import { BlogPost } from "@/types";

interface BlogCardProps {
  post: BlogPost;
  index?: number;
}

export default function BlogCard({ post, index = 0 }: BlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/blog/${post.slug}`} className="group block h-full">
        <article className="bg-white dark:bg-brown-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-400 h-full border border-brown-100 dark:border-brown-800 hover:border-gold-300 dark:hover:border-gold-700 hover:-translate-y-1">
          {/* Image */}
          <div className="relative overflow-hidden aspect-[16/9]">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brown-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            {/* Tags */}
            <div className="absolute top-3 left-3 flex gap-2">
              {post.tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 rounded-full bg-white/90 dark:bg-brown-900/90 text-brown-700 dark:text-cream-200 text-xs font-medium backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="p-5">
            <h3 className="font-serif text-lg font-semibold text-brown-800 dark:text-cream-100 mb-2 leading-snug group-hover:text-brown-600 dark:group-hover:text-gold-400 transition-colors line-clamp-2">
              {post.title}
            </h3>
            <p className="text-brown-500 dark:text-brown-300 text-sm leading-relaxed mb-4 line-clamp-2">
              {post.excerpt}
            </p>

            <div className="flex items-center justify-between text-xs text-brown-400">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <User className="w-3.5 h-3.5" />
                  {post.author}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {post.readTime}
                </span>
              </div>
              <span className="inline-flex items-center gap-1 text-brown-600 dark:text-gold-400 font-medium group-hover:gap-2 transition-all text-sm">
                Read <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  );
}
