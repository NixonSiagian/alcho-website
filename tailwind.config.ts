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
          dark: "#0f0a05",
          deeper: "#1a0f06",
          rich: "#2e1d0e",
        },
        brown: {
          50: "#fbf6ee",
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
        cream: {
          50: "#fdfaf3",
          100: "#faf3e3",
          200: "#f4e6c5",
          300: "#ecd49a",
          400: "#e2bf6c",
          500: "#d3a23e",
          DEFAULT: "#faf3e3",
        },
        gold: {
          50: "#fdf8e7",
          100: "#faedbe",
          200: "#f5d97a",
          300: "#eec24a",
          400: "#e1a82b",
          500: "#d4af37",
          600: "#a86c15",
          700: "#855414",
          800: "#684115",
          900: "#503114",
        },
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        26: "6.5rem",
        30: "7.5rem",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "fade-in-up": "fadeInUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards",
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
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      backgroundImage: {
        "hero-deep": "linear-gradient(135deg, #0f0a05 0%, #1a0f06 50%, #2e1d0e 100%)",
        "gold-gradient": "linear-gradient(135deg, #f5d97a 0%, #d4af37 50%, #a86c15 100%)",
        "gold-soft": "linear-gradient(135deg, #faedbe 0%, #eec24a 100%)",
      },
      boxShadow: {
        luxury: "0 20px 60px -20px rgba(15, 10, 5, 0.4)",
        "luxury-lg": "0 40px 80px -30px rgba(15, 10, 5, 0.5)",
        "gold-glow": "0 10px 40px -10px rgba(212, 175, 55, 0.35)",
        "gold-glow-lg": "0 20px 60px -15px rgba(212, 175, 55, 0.5)",
      },
      transitionTimingFunction: {
        luxury: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      transitionDuration: {
        "400": "400ms",
        "600": "600ms",
      },
    },
  },
  plugins: [],
};

export default config;
