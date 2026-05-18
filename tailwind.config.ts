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
        // Deep, rich brown — the foundation of the brand
        brown: {
          50:  "#fbf6ee",
          100: "#f4e8d2",
          200: "#e8cfa3",
          300: "#d6ad6f",
          400: "#bf8a45",
          500: "#a36c2c",
          600: "#855420",
          700: "#67411c",
          800: "#4a2f17",
          900: "#2e1d0e",
          950: "#1a0f06",
        },
        // Warm cream — soft, premium light tones
        cream: {
          50:  "#fdfaf3",
          100: "#faf3e3",
          200: "#f4e6c5",
          300: "#ecd49a",
          400: "#e2bf6c",
          500: "#d3a23e",
          DEFAULT: "#faf3e3",
        },
        // Refined gold — the luxury accent
        gold: {
          50:  "#fdf8e7",
          100: "#faedbe",
          200: "#f5d97a",
          300: "#eec24a",
          400: "#e1a82b",
          500: "#c98a1c",
          600: "#a86c15",
          700: "#855414",
          800: "#684115",
          900: "#503114",
        },
      },
      fontFamily: {
        serif: ["Playfair Display", "Cormorant Garamond", "Georgia", "serif"],
        sans:  ["Inter", "system-ui", "sans-serif"],
        display: ["Playfair Display", "Georgia", "serif"],
      },
      letterSpacing: {
        luxury: "0.32em",
      },
      spacing: {
        // Extra breathing room for premium layouts
        "18": "4.5rem",
        "22": "5.5rem",
        "26": "6.5rem",
        "30": "7.5rem",
        "34": "8.5rem",
        "38": "9.5rem",
      },
      animation: {
        "fade-in":       "fadeIn 0.8s ease-out",
        "fade-in-up":    "fadeInUp 0.8s cubic-bezier(0.22, 1, 0.36, 1)",
        "slide-up":      "slideUp 0.8s cubic-bezier(0.22, 1, 0.36, 1)",
        "shimmer":       "shimmer 3s linear infinite",
        "float":         "float 6s ease-in-out infinite",
        "float-slow":    "float 8s ease-in-out infinite",
        "spin-slow":     "spin 30s linear infinite",
        "pulse-soft":    "pulseSoft 4s ease-in-out infinite",
        "glow":          "glow 3s ease-in-out infinite alternate",
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
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.7" },
        },
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(225, 168, 43, 0.15)" },
          "100%": { boxShadow: "0 0 40px rgba(225, 168, 43, 0.3)" },
        },
      },
      backgroundImage: {
        // Cinematic gradients — backbone of the premium feel
        "gradient-radial":   "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-deep":         "linear-gradient(135deg, #1a0f06 0%, #2e1d0e 35%, #4a2f17 70%, #67411c 100%)",
        "hero-warm":         "linear-gradient(160deg, #2e1d0e 0%, #4a2f17 50%, #855420 100%)",
        "hero-cinematic":    "linear-gradient(145deg, #0f0904 0%, #1a0f06 30%, #2e1d0e 60%, #3d2712 100%)",
        "gold-gradient":     "linear-gradient(135deg, #f5d97a 0%, #e1a82b 50%, #a86c15 100%)",
        "gold-soft":         "linear-gradient(135deg, #faedbe 0%, #eec24a 100%)",
        "gold-shimmer":      "linear-gradient(90deg, transparent 0%, rgba(225, 168, 43, 0.35) 50%, transparent 100%)",
        "cream-gradient":    "linear-gradient(180deg, #fdfaf3 0%, #faf3e3 100%)",
        "brown-fade":        "linear-gradient(180deg, transparent 0%, rgba(26, 15, 6, 0.5) 60%, rgba(26, 15, 6, 0.95) 100%)",
        "vignette":          "radial-gradient(ellipse at center, transparent 0%, transparent 50%, rgba(26, 15, 6, 0.55) 100%)",
        "vignette-strong":   "radial-gradient(ellipse at center, transparent 0%, transparent 35%, rgba(26, 15, 6, 0.75) 100%)",
        "spice-texture":     "radial-gradient(circle at 20% 30%, rgba(225, 168, 43, 0.06), transparent 40%), radial-gradient(circle at 80% 70%, rgba(133, 84, 32, 0.06), transparent 40%)",
        "cinematic-light":   "radial-gradient(ellipse at 30% 20%, rgba(225, 168, 43, 0.08) 0%, transparent 50%)",
      },
      boxShadow: {
        // Soft luxury shadows — warm, never harsh
        "luxury":        "0 20px 60px -20px rgba(46, 29, 14, 0.35)",
        "luxury-lg":     "0 40px 80px -30px rgba(46, 29, 14, 0.45)",
        "luxury-xl":     "0 60px 100px -40px rgba(46, 29, 14, 0.5)",
        "gold-glow":     "0 10px 40px -10px rgba(225, 168, 43, 0.4)",
        "gold-glow-lg":  "0 20px 60px -15px rgba(225, 168, 43, 0.55)",
        "inset-warm":    "inset 0 1px 0 0 rgba(255, 255, 255, 0.08)",
        "card-hover":    "0 25px 50px -15px rgba(46, 29, 14, 0.25)",
        "cinematic":     "0 30px 70px -20px rgba(26, 15, 6, 0.6)",
      },
      transitionTimingFunction: {
        luxury: "cubic-bezier(0.22, 1, 0.36, 1)",
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
        cinematic: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      transitionDuration: {
        "400": "400ms",
        "600": "600ms",
        "800": "800ms",
        "1000": "1000ms",
        "1200": "1200ms",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};

export default config;
