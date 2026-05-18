"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Product } from "@/types";

/* ═══════════════════════════════════════════════════════════════
   PRODUCT CARD — Clean, Premium, No Scroll Animations
   Pure CSS hover effects only. No framer-motion per-card.
   ═══════════════════════════════════════════════════════════════ */

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.slug}`} className="group block h-full">
      <article className="relative h-full bg-cream-50 dark:bg-brown-900/60 rounded-2xl overflow-hidden border border-brown-100/70 dark:border-brown-800 transition-all duration-400 ease-luxury hover:-translate-y-1.5 hover:shadow-luxury hover:border-gold-300/50 dark:hover:border-gold-700/50">

        {/* Image */}
        <div className="relative overflow-hidden aspect-[4/5] bg-brown-100/30 dark:bg-brown-900">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-600 ease-luxury group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />

          {/* Bottom gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-brown-950/50 via-transparent to-transparent pointer-events-none" />

          {/* Badge */}
          {product.badge && (
            <span
              className="absolute top-4 left-4 inline-flex items-center px-3 py-1 rounded-full text-[10px] font-semibold tracking-[0.15em] uppercase text-brown-950"
              style={{
                backgroundImage: "linear-gradient(135deg, #f5d97a 0%, #e1a82b 70%, #a86c15 100%)",
              }}
            >
              {product.badge}
            </span>
          )}

          {/* Category label */}
          <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
            <span className="text-cream-100/80 text-[10px] tracking-[0.25em] uppercase font-medium">
              {product.category}
            </span>
            <span className="w-8 h-8 rounded-full bg-cream-50/90 text-brown-900 flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400 ease-luxury">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="font-serif text-lg font-semibold text-brown-900 dark:text-cream-100 leading-snug group-hover:text-gold-700 dark:group-hover:text-gold-300 transition-colors duration-300">
            {product.name}
          </h3>
          <p className="mt-2 text-brown-600 dark:text-brown-300 text-sm leading-relaxed line-clamp-2">
            {product.shortDescription}
          </p>

          <div className="mt-4 pt-3 border-t border-brown-100/80 dark:border-brown-800 flex items-center justify-between">
            <span className="text-[11px] tracking-widest uppercase text-brown-400 font-medium">
              {product.weight}
            </span>
            <span className="text-xs font-semibold tracking-wider uppercase text-gold-700 dark:text-gold-300 inline-flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
              View
              <ArrowUpRight className="w-3 h-3" />
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
