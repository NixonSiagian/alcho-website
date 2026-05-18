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
        brown: {
          50:  "#fdf8f0",
          100: "#f9edd8",
          200: "#f2d9b0",
          300: "#e8bf7e",
          400: "#dca04a",
          500: "#c8852b",
          600: "#a96a20",
          700: "#8a511c",
          800: "#6e3f1c",
          900: "#3b2f2f",
          950: "#3a1f0d",
        },
        cream: {
          50:  "#fffdf7",
          100: "#fef9ec",
          200: "#fdf0cc",
          300: "#fbe4a0",
          400: "#f7d06b",
          500: "#f2bc3e",
          DEFAULT: "#fef9ec",
        },
        gold: {
          100: "#fef3c7",
          200: "#f5d27a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
          700: "#b8962e",
          800: "#92620a",
          900: "#78350f",
        },
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans:  ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in":     "fadeIn 0.6s ease-out",
        "slide-up":    "slideUp 0.6s ease-out",
        "slide-right": "slideRight 0.6s ease-out",
        float:         "float 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn:     { "0%": { opacity: "0" },                          "100%": { opacity: "1" } },
        slideUp:    { "0%": { opacity: "0", transform: "translateY(30px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        slideRight: { "0%": { opacity: "0", transform: "translateX(-30px)" }, "100%": { opacity: "1", transform: "translateX(0)" } },
        float:      { "0%, 100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-10px)" } },
      },
      backgroundImage: {
        "gradient-radial":  "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":   "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-pattern":     "linear-gradient(135deg, #3a1f0d 0%, #6e3f1c 40%, #a96a20 100%)",
        "gold-shimmer":     "linear-gradient(90deg, transparent 0%, #f59e0b33 50%, transparent 100%)",
      },
      transitionDuration: {
        "400": "400ms",
      },
    },
  },
  plugins: [],
};

export default config;
