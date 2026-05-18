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
import { FadeIn } from "@/components/Parallax";
import type { Product } from "@/types";

interface Props {
  product: Product;
  related: Product[];
}

export default function ProductDetailClient({ product, related }: Props) {
  return (
    <>
      {/* Breadcrumb */}
      <div className="pt-24 lg:pt-28 pb-6 bg-brand-dark border-b border-brown-800/40">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <nav className="flex items-center gap-2 text-xs tracking-wider uppercase text-brown-500">
            <Link href="/" className="hover:text-gold-400 transition-colors">Home</Link>
            <span className="text-brown-700">/</span>
            <Link href="/products" className="hover:text-gold-400 transition-colors">Products</Link>
            <span className="text-brown-700">/</span>
            <span className="text-cream-100 font-medium truncate max-w-[180px] sm:max-w-xs normal-case tracking-normal">
              {product.name}
            </span>
          </nav>
        </div>
      </div>

      {/* Main Product Section */}
      <section className="py-12 lg:py-20 bg-brand-dark">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="relative aspect-square rounded-[28px] overflow-hidden bg-brown-900 shadow-luxury">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {product.badge && (
                  <div className="absolute top-5 left-5">
                    <span className="inline-flex items-center px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-[0.18em] uppercase btn-gold !shadow-gold-glow">
                      {product.badge}
                    </span>
                  </div>
                )}
              </div>

              {/* Floating category */}
              <div className="absolute -bottom-5 left-6 bg-brand-deeper rounded-2xl px-5 py-3 shadow-luxury border border-brown-800/50 flex items-center gap-2.5">
                <Tag className="w-4 h-4 text-gold-500" />
                <span className="text-cream-100 text-xs tracking-wider uppercase font-semibold">
                  {product.category}
                </span>
              </div>
            </motion.div>

            {/* Details */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="lg:pt-2"
            >
              <span className="text-gold-500 text-[11px] font-semibold tracking-[0.3em] uppercase">
                Alcho Signature
              </span>
              <h1 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-cream-50 leading-[1.1] text-balance">
                {product.name}
              </h1>

              <p className="mt-5 text-brown-300 text-base lg:text-lg leading-relaxed">
                {product.description}
              </p>

              {/* Detail chips */}
              <div className="mt-7 flex flex-wrap gap-3">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-brand-deeper border border-brown-800/50">
                  <Scale className="w-3.5 h-3.5 text-brown-400" />
                  <span className="text-xs tracking-wider uppercase text-cream-100 font-semibold">
                    {product.weight}
                  </span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-950/30 border border-emerald-900/40">
                  <Leaf className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-xs tracking-wider uppercase text-emerald-300 font-semibold">
                    No Preservatives
                  </span>
                </div>
              </div>

              {/* How to Use */}
              <div className="mt-8 bg-brand-deeper border border-brown-800/40 rounded-2xl p-5 lg:p-6">
                <div className="flex items-center gap-2 mb-3">
                  <ChefHat className="w-5 h-5 text-gold-500" />
                  <h3 className="font-serif text-base font-semibold text-cream-100">
                    How to Use
                  </h3>
                </div>
                <p className="text-brown-300 text-[15px] leading-relaxed">
                  {product.usage}
                </p>
              </div>

              {/* Ingredients */}
              <div className="mt-8">
                <h3 className="font-serif text-base font-semibold text-cream-100 mb-3 flex items-center gap-2">
                  <Leaf className="w-4 h-4 text-emerald-400" />
                  Key Ingredients
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.ingredients.map((ing) => (
                    <span
                      key={ing}
                      className="px-3 py-1.5 rounded-full bg-brand-deeper border border-brown-800/50 text-brown-300 text-xs font-medium hover:border-gold-500/30 transition-colors"
                    >
                      {ing}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href={`https://wa.me/6281234567890?text=${encodeURIComponent(
                    `Hi Alcho! I'm interested in: ${product.name}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[200px] inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366] text-white font-semibold text-sm transition-all duration-400 ease-luxury hover:-translate-y-0.5"
                  style={{ boxShadow: "0 12px 30px -8px rgba(37, 211, 102, 0.45)" }}
                >
                  <MessageCircle className="w-4 h-4" />
                  Order via WhatsApp
                </a>
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-brown-700/50 text-cream-100 font-medium text-sm hover:border-gold-500/30 transition-all duration-400"
                >
                  <ArrowLeft className="w-4 h-4" />
                  All Products
                </Link>
              </div>

              {/* Trust badges */}
              <div className="mt-10 pt-8 border-t border-brown-800/40 grid grid-cols-3 gap-4">
                {[
                  { icon: Leaf, label: "100% Natural", sub: "No additives" },
                  { icon: CheckCircle2, label: "Lab Tested", sub: "Quality certified" },
                  { icon: ShoppingBag, label: "Fast Delivery", sub: "Across Indonesia" },
                ].map(({ icon: Icon, label, sub }) => (
                  <div key={label} className="text-center">
                    <div className="w-11 h-11 rounded-full bg-gold-500/10 flex items-center justify-center mx-auto mb-2.5">
                      <Icon className="w-5 h-5 text-gold-500" />
                    </div>
                    <p className="text-cream-100 text-xs font-semibold tracking-wider uppercase">
                      {label}
                    </p>
                    <p className="text-brown-500 text-[11px] mt-0.5">{sub}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {related.length > 0 && (
        <section className="py-20 lg:py-24 bg-brand-deeper">
          <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
            <FadeIn>
              <div className="flex items-center gap-3 mb-3">
                <span className="h-px w-8 bg-gold-500/50" />
                <span className="text-gold-500 text-[11px] font-semibold tracking-[0.3em] uppercase">
                  You&apos;ll Also Love
                </span>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-cream-50 mb-10 leading-tight">
                More from this collection.
              </h2>
            </FadeIn>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
