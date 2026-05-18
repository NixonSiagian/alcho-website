import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#0d0906",
          deeper: "#160e07",
          rich: "#2a1a0c",
        },
        brown: {
          50: "#faf5ec",
          100: "#f2e6cf",
          200: "#e4cca0",
          300: "#cfa86a",
          400: "#b58540",
          500: "#956828",
          600: "#7a5120",
          700: "#5e3e1a",
          800: "#432c14",
          900: "#2a1a0c",
          950: "#160e07",
        },
        cream: {
          50: "#fefbf5",
          100: "#fcf5e6",
          200: "#f7e9cc",
          300: "#f0d89f",
          400: "#e6c46f",
          500: "#d6ab42",
          DEFAULT: "#fcf5e6",
        },
        gold: {
          50: "#fef9eb",
          100: "#fbefc4",
          200: "#f4db7e",
          300: "#e8c04a",
          400: "#d9a52e",
          500: "#c9952a",
          600: "#9e6f18",
          700: "#7a5514",
          800: "#5e4113",
          900: "#473112",
        },
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        "luxury": "0.04em",
        "luxury-wide": "0.08em",
        "luxury-ultra": "0.18em",
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        26: "6.5rem",
        30: "7.5rem",
        34: "8.5rem",
        38: "9.5rem",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "fade-in-up": "fadeInUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "scroll-hint": "scrollHint 2.4s cubic-bezier(0.4, 0, 0.2, 1) infinite",
        shimmer: "shimmer 3s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scrollHint: {
          "0%, 100%": { opacity: "0.3", transform: "translateY(0)" },
          "50%": { opacity: "0.7", transform: "translateY(6px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      backgroundImage: {
        "hero-deep": "linear-gradient(145deg, #0d0906 0%, #160e07 40%, #2a1a0c 100%)",
        "gold-gradient": "linear-gradient(135deg, #f4db7e 0%, #c9952a 55%, #9e6f18 100%)",
        "gold-soft": "linear-gradient(135deg, #fbefc4 0%, #e8c04a 100%)",
        "section-fade": "linear-gradient(180deg, #0d0906 0%, #160e07 100%)",
      },
      boxShadow: {
        luxury: "0 24px 64px -16px rgba(13, 9, 6, 0.5)",
        "luxury-lg": "0 40px 80px -20px rgba(13, 9, 6, 0.6)",
        "luxury-subtle": "0 8px 32px -8px rgba(13, 9, 6, 0.3)",
        "gold-glow": "0 12px 40px -8px rgba(201, 149, 42, 0.3)",
        "gold-glow-lg": "0 20px 60px -12px rgba(201, 149, 42, 0.4)",
        "card-hover": "0 20px 48px -12px rgba(13, 9, 6, 0.5), 0 0 0 1px rgba(201, 149, 42, 0.08)",
      },
      transitionTimingFunction: {
        luxury: "cubic-bezier(0.22, 1, 0.36, 1)",
        "luxury-out": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      transitionDuration: {
        "400": "400ms",
        "500": "500ms",
        "600": "600ms",
        "800": "800ms",
      },
    },
  },
  plugins: [],
};

export default config;
