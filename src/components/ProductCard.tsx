"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Tag } from "lucide-react";
import { Product } from "@/types";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/products/${product.slug}`} className="group block h-full">
        <div className="relative bg-white dark:bg-brown-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-400 h-full border border-brown-100 dark:border-brown-800 hover:border-gold-300 dark:hover:border-gold-700 hover:-translate-y-1">
          {/* Image */}
          <div className="relative overflow-hidden aspect-[4/3]">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-brown-900/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Badge */}
            {product.badge && (
              <div className="absolute top-3 left-3">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gold-500 text-brown-950 text-xs font-semibold shadow-sm">
                  <Tag className="w-3 h-3" />
                  {product.badge}
                </span>
              </div>
            )}

            {/* Category chip */}
            <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
              <span className="inline-block px-3 py-1 rounded-full bg-white/90 dark:bg-brown-950/90 text-brown-700 dark:text-cream-200 text-xs font-medium backdrop-blur-sm">
                {product.category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-5">
            <h3 className="font-serif text-lg font-semibold text-brown-800 dark:text-cream-100 mb-2 group-hover:text-brown-600 dark:group-hover:text-gold-400 transition-colors">
              {product.name}
            </h3>
            <p className="text-brown-500 dark:text-brown-300 text-sm leading-relaxed mb-4 line-clamp-2">
              {product.shortDescription}
            </p>

            <div className="flex items-center justify-between">
              <span className="text-xs text-brown-400 dark:text-brown-400">{product.weight}</span>
              <span className="inline-flex items-center gap-1 text-brown-700 dark:text-gold-400 text-sm font-medium group-hover:gap-2 transition-all">
                View Details
                <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
