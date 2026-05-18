"use client";

import { ScrollReveal } from "@/components/ScrollAnimations";

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
  return (
    <ScrollReveal direction="up" distance={24} className={`mb-14 lg:mb-16 ${centered ? "text-center" : ""}`}>
      {eyebrow && (
        <div className={`flex items-center gap-3 mb-5 ${centered ? "justify-center" : ""}`}>
          <span className="h-px w-8 bg-gold-500/40" />
          <span className="text-gold-500 text-[11px] font-semibold tracking-[0.3em] uppercase">
            {eyebrow}
          </span>
          <span className="h-px w-8 bg-gold-500/40" />
        </div>
      )}

      <h2 className={`font-serif text-3xl md:text-4xl lg:text-[42px] font-semibold leading-[1.15] text-balance ${
        light ? "text-cream-50" : "text-cream-50"
      }`}>
        {title}
      </h2>

      {subtitle && (
        <p className={`mt-5 text-base md:text-lg max-w-2xl leading-relaxed ${centered ? "mx-auto" : ""} ${
          light ? "text-brown-300" : "text-brown-300"
        }`}>
          {subtitle}
        </p>
      )}
    </ScrollReveal>
  );
}
