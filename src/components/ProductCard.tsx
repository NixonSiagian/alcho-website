"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Product } from "@/types";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
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
      <Link href={`/products/${product.slug}`} className="group block h-full">
        <article className="relative h-full bg-cream-50 dark:bg-brown-900/60 rounded-[20px] overflow-hidden border border-brown-100/70 dark:border-brown-800 transition-all duration-500 ease-luxury hover:-translate-y-1.5 hover:shadow-luxury hover:border-gold-300/70 dark:hover:border-gold-700/60">

          {/* Image */}
          <div className="relative overflow-hidden aspect-[4/5] bg-brown-100/40 dark:bg-brown-900">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-[900ms] ease-luxury group-hover:scale-[1.07]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
            {/* Subtle gradient — improves badge legibility without heavy blur */}
            <div className="absolute inset-0 bg-gradient-to-t from-brown-950/55 via-brown-950/10 to-transparent" />

            {/* Badge */}
            {product.badge && (
              <div className="absolute top-4 left-4">
                <span
                  className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-semibold tracking-[0.18em] uppercase text-brown-950"
                  style={{
                    backgroundImage: "linear-gradient(135deg, #f5d97a 0%, #e1a82b 70%, #a86c15 100%)",
                    boxShadow: "0 6px 16px -6px rgba(225, 168, 43, 0.55)",
                  }}
                >
                  {product.badge}
                </span>
              </div>
            )}

            {/* Category */}
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
              <span className="text-cream-100/90 text-[10px] tracking-[0.28em] uppercase font-medium">
                {product.category}
              </span>
              <span className="w-9 h-9 rounded-full bg-cream-50/95 text-brown-900 flex items-center justify-center transition-all duration-500 ease-luxury opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 shadow-lg">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-5 md:p-6">
            <h3 className="font-serif text-lg md:text-xl font-semibold text-brown-900 dark:text-cream-100 leading-snug group-hover:text-gold-700 dark:group-hover:text-gold-300 transition-colors duration-400">
              {product.name}
            </h3>
            <p className="mt-2 text-brown-600 dark:text-brown-300 text-sm leading-relaxed line-clamp-2">
              {product.shortDescription}
            </p>

            <div className="mt-5 pt-4 border-t border-brown-100/80 dark:border-brown-800 flex items-center justify-between">
              <span className="text-[11px] tracking-widest uppercase text-brown-400 dark:text-brown-400 font-medium">
                {product.weight}
              </span>
              <span className="text-xs font-semibold tracking-wider uppercase text-gold-700 dark:text-gold-300 inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all duration-400">
                View
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  );
}
