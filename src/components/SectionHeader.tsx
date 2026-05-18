"use client";

import { ScrollReveal } from "@/components/ScrollAnimations";

/* ═══════════════════════════════════════════════════════════════
   SECTION HEADER — Consistent Typographic Hierarchy
   - Refined letter spacing and line heights
   - Balanced vertical rhythm
   - Cleaner gold accent lines
   ═══════════════════════════════════════════════════════════════ */

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
}: SectionHeaderProps) {
  return (
    <ScrollReveal direction="up" distance={20} className={`mb-16 lg:mb-20 ${centered ? "text-center" : ""}`}>
      {eyebrow && (
        <div className={`flex items-center gap-3 mb-5 ${centered ? "justify-center" : ""}`}>
          <span className="h-px w-8 bg-gold-500/30" />
          <span className="text-gold-500 text-[11px] font-semibold tracking-[0.25em] uppercase">
            {eyebrow}
          </span>
          <span className="h-px w-8 bg-gold-500/30" />
        </div>
      )}

      <h2 className="font-serif text-3xl md:text-4xl lg:text-[42px] font-semibold leading-[1.12] text-cream-50 text-balance">
        {title}
      </h2>

      {subtitle && (
        <p className={`mt-5 text-[15px] md:text-base max-w-2xl leading-[1.8] text-brown-300 ${centered ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
    </ScrollReveal>
  );
}
