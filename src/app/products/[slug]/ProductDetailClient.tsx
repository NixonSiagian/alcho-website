"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Tag,
  Scale,
  ChefHat,
  Leaf,
  ShoppingBag,
  MessageCircle,
  CheckCircle2,
} from "lucide-react";
import ProductCard from "@/components/ProductCard";
import type { Product } from "@/types";

interface Props {
  product: Product;
  related: Product[];
}

export default function ProductDetailClient({ product, related }: Props) {
  return (
    <>
      {/* Breadcrumb */}
      <div className="pt-24 pb-6 bg-white dark:bg-brown-900 border-b border-brown-100 dark:border-brown-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-brown-400">
            <Link href="/" className="hover:text-brown-600 dark:hover:text-cream-200 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-brown-600 dark:hover:text-cream-200 transition-colors">Products</Link>
            <span>/</span>
            <span className="text-brown-700 dark:text-cream-100 font-medium truncate max-w-[200px]">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Main Product Section */}
      <section className="py-12 bg-white dark:bg-brown-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative aspect-square rounded-3xl overflow-hidden bg-brown-50 dark:bg-brown-800 shadow-xl">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {product.badge && (
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gold-500 text-brown-950 text-sm font-semibold shadow-md">
                      <Tag className="w-3.5 h-3.5" />
                      {product.badge}
                    </span>
                  </div>
                )}
              </div>

              {/* Category floating chip */}
              <div className="absolute -bottom-4 left-6 bg-white dark:bg-brown-800 rounded-2xl px-5 py-3 shadow-lg border border-brown-100 dark:border-brown-700 flex items-center gap-2">
                <Tag className="w-4 h-4 text-gold-500" />
                <span className="text-brown-700 dark:text-cream-100 text-sm font-medium">{product.category}</span>
              </div>
            </motion.div>

            {/* Details */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="pt-4"
            >
              <h1 className="font-serif text-3xl sm:text-4xl font-bold text-brown-900 dark:text-cream-50 leading-tight mb-3">
                {product.name}
              </h1>

              <p className="text-brown-500 dark:text-brown-300 text-lg leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Details row */}
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-brown-50 dark:bg-brown-800 border border-brown-100 dark:border-brown-700">
                  <Scale className="w-4 h-4 text-brown-500" />
                  <span className="text-sm text-brown-700 dark:text-cream-100 font-medium">{product.weight}</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 dark:bg-green-950/30 border border-green-100 dark:border-green-900">
                  <Leaf className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-green-700 dark:text-green-300 font-medium">No Preservatives</span>
                </div>
              </div>

              {/* Usage */}
              <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-100 dark:border-amber-900/30 rounded-2xl p-5 mb-8">
                <div className="flex items-center gap-2 mb-3">
                  <ChefHat className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                  <h3 className="font-semibold text-brown-800 dark:text-cream-100">How to Use</h3>
                </div>
                <p className="text-brown-600 dark:text-brown-300 text-sm leading-relaxed">{product.usage}</p>
              </div>

              {/* Ingredients */}
              <div className="mb-8">
                <h3 className="font-semibold text-brown-800 dark:text-cream-100 mb-3 flex items-center gap-2">
                  <Leaf className="w-4 h-4 text-green-500" />
                  Key Ingredients
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.ingredients.map((ing) => (
                    <span
                      key={ing}
                      className="px-3 py-1.5 rounded-full bg-white dark:bg-brown-800 border border-brown-200 dark:border-brown-600 text-brown-600 dark:text-brown-200 text-xs font-medium hover:border-gold-300 dark:hover:border-gold-700 transition-colors"
                    >
                      {ing}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3">
                <a
                  href={`https://wa.me/6281234567890?text=${encodeURIComponent(
                    `Hi Alcho! I'm interested in purchasing: ${product.name}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[180px] inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-green-500 hover:bg-green-600 text-white font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-green-500/30 hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-5 h-5" />
                  Order via WhatsApp
                </a>
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border-2 border-brown-200 dark:border-brown-700 text-brown-700 dark:text-cream-200 font-medium hover:bg-brown-50 dark:hover:bg-brown-800 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  All Products
                </Link>
              </div>

              {/* Trust badges */}
              <div className="mt-8 pt-8 border-t border-brown-100 dark:border-brown-800 grid grid-cols-3 gap-4">
                {[
                  { icon: Leaf, label: "100% Natural", sub: "No artificial additives" },
                  { icon: CheckCircle2, label: "Lab Tested", sub: "Quality certified" },
                  { icon: ShoppingBag, label: "Fast Delivery", sub: "Across Indonesia" },
                ].map(({ icon: Icon, label, sub }) => (
                  <div key={label} className="text-center">
                    <div className="w-10 h-10 rounded-full bg-brown-50 dark:bg-brown-800 flex items-center justify-center mx-auto mb-2">
                      <Icon className="w-5 h-5 text-brown-600 dark:text-brown-300" />
                    </div>
                    <p className="text-brown-800 dark:text-cream-100 text-xs font-semibold">{label}</p>
                    <p className="text-brown-400 text-xs mt-0.5">{sub}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {related.length > 0 && (
        <section className="py-16 bg-cream-50 dark:bg-brown-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-bold text-brown-900 dark:text-cream-50 mb-8">
              You Might Also Like
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
