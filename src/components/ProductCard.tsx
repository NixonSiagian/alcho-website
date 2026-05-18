"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Product } from "@/types";

/* ═══════════════════════════════════════════════════════════════
   PRODUCT CARD — Premium, Refined Interactions
   - Gentle hover lift (-4px) with soft shadow transition
   - Smooth background transition on hover
   - Gold accent reveal on hover state
   - Image zoom capped at 1.04 for subtlety
   ═══════════════════════════════════════════════════════════════ */

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.slug}`} className="group block h-full">
      <article className="relative h-full bg-brand-deeper/90 rounded-2xl overflow-hidden border border-brown-800/30 transition-all duration-500 ease-luxury hover:-translate-y-1 hover:shadow-card-hover hover:border-gold-500/15 hover:bg-brand-deeper">

        {/* Image */}
        <div className="relative overflow-hidden aspect-[4/5] bg-brown-900/50">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-700 ease-luxury group-hover:scale-[1.04]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />

          {/* Bottom gradient — refined */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/50 via-brand-dark/5 to-transparent pointer-events-none" />

          {/* Badge */}
          {product.badge && (
            <span className="absolute top-4 left-4 inline-flex items-center px-3 py-1.5 rounded-full text-[10px] font-semibold tracking-[0.12em] uppercase bg-gold-gradient text-brand-dark shadow-gold-glow/20">
              {product.badge}
            </span>
          )}

          {/* Category + Arrow */}
          <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
            <span className="text-cream-100/60 text-[10px] tracking-[0.2em] uppercase font-medium">
              {product.category}
            </span>
            <span className="w-8 h-8 rounded-full bg-cream-50/90 text-brand-dark flex items-center justify-center opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-luxury">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6">
          <h3 className="font-serif text-[17px] font-semibold text-cream-100 leading-snug group-hover:text-gold-400 transition-colors duration-400 ease-luxury">
            {product.name}
          </h3>
          <p className="mt-2.5 text-brown-400 text-sm leading-relaxed line-clamp-2">
            {product.shortDescription}
          </p>

          <div className="mt-4 pt-3.5 border-t border-brown-800/30 flex items-center justify-between">
            <span className="text-[11px] tracking-[0.15em] uppercase text-brown-500 font-medium">
              {product.weight}
            </span>
            <span className="text-xs font-semibold tracking-wider uppercase text-gold-500 inline-flex items-center gap-1 group-hover:gap-2 transition-all duration-400 ease-luxury">
              View
              <ArrowUpRight className="w-3 h-3" />
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
