"use client";

import { FadeIn } from "./Parallax";

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
    <FadeIn className={`mb-14 lg:mb-16 ${centered ? "text-center" : ""}`}>
      {eyebrow && (
        <div className={`flex items-center gap-3 mb-5 ${centered ? "justify-center" : ""}`}>
          <span className={`h-px w-8 ${light ? "bg-gold-400/60" : "bg-gold-500/60"}`} />
          <span
            className={`text-[11px] font-semibold tracking-[0.32em] uppercase ${
              light ? "text-gold-300" : "text-gold-700 dark:text-gold-300"
            }`}
          >
            {eyebrow}
          </span>
          <span className={`h-px w-8 ${light ? "bg-gold-400/60" : "bg-gold-500/60"}`} />
        </div>
      )}
      <h2
        className={`font-serif text-3xl md:text-4xl lg:text-[44px] font-semibold leading-[1.15] text-balance ${
          light ? "text-cream-50" : "text-brown-900 dark:text-cream-50"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-5 text-base md:text-lg max-w-2xl leading-relaxed ${centered ? "mx-auto" : ""} ${
            light ? "text-brown-200" : "text-brown-600 dark:text-brown-300"
          }`}
        >
          {subtitle}
        </p>
      )}
    </FadeIn>
  );
}
