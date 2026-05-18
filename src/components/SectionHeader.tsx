"use client";

import { motion } from "framer-motion";
import { useShouldReduceParallax } from "@/hooks/useResponsive";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeaderProps) {
  const reduce = useShouldReduceParallax();

  return (
    <motion.div
      initial={{ opacity: 0, y: reduce ? 12 : 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: reduce ? 0.4 : 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`mb-14 lg:mb-16 ${centered ? "text-center" : ""}`}
    >
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={`flex items-center gap-3 mb-5 ${centered ? "justify-center" : ""}`}
        >
          <motion.span
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className={`h-px w-8 origin-right ${light ? "bg-gold-400/60" : "bg-gold-500/60"}`}
          />
          <span
            className={`text-[11px] font-semibold tracking-[0.32em] uppercase ${
              light ? "text-gold-300" : "text-gold-700 dark:text-gold-300"
            }`}
          >
            {eyebrow}
          </span>
          <motion.span
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className={`h-px w-8 origin-left ${light ? "bg-gold-400/60" : "bg-gold-500/60"}`}
          />
        </motion.div>
      )}

      <h2
        className={`font-serif text-3xl md:text-4xl lg:text-[44px] font-semibold leading-[1.15] text-balance ${
          light ? "text-cream-50" : "text-brown-900 dark:text-cream-50"
        }`}
      >
        {title}
      </h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className={`mt-5 text-base md:text-lg max-w-2xl leading-relaxed ${centered ? "mx-auto" : ""} ${
            light ? "text-brown-200" : "text-brown-600 dark:text-brown-300"
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
