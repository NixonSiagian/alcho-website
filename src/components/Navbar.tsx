"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, ChefHat } from "lucide-react";
import { useTheme } from "next-themes";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/blog", label: "Recipes" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 32);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <>
      <nav
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-luxury ${
          scrolled
            ? "bg-cream-50/85 dark:bg-brown-950/85 backdrop-blur-sm border-b border-brown-100/60 dark:border-brown-800/60 shadow-[0_1px_30px_-10px_rgba(46,29,14,0.12)]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group" aria-label="Alcho home">
              <span className="relative w-9 h-9 rounded-full bg-gradient-to-br from-gold-300 via-gold-500 to-brown-700 flex items-center justify-center shadow-gold-glow group-hover:shadow-gold-glow-lg transition-shadow duration-500">
                <ChefHat className="w-[18px] h-[18px] text-cream-50" />
                <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-cream-50/20" />
              </span>
              <span className="font-serif text-2xl font-semibold text-brown-900 dark:text-cream-50 tracking-wide">
                Alcho
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center">
              <ul className="flex items-center gap-1">
                {navLinks.map((link) => {
                  const active = pathname === link.href;
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                          active
                            ? "text-brown-900 dark:text-gold-300"
                            : "text-brown-700 dark:text-cream-200 hover:text-brown-900 dark:hover:text-gold-300"
                        }`}
                      >
                        {link.label}
                        {active && (
                          <motion.span
                            layoutId="nav-underline"
                            className="absolute left-3 right-3 -bottom-0.5 h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent"
                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                          />
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Right side */}
            <div className="flex items-center gap-2 md:gap-3">
              {mounted && (
                <button
                  onClick={toggleTheme}
                  aria-label="Toggle theme"
                  className="w-10 h-10 rounded-full flex items-center justify-center text-brown-700 dark:text-cream-200 hover:bg-brown-100/60 dark:hover:bg-brown-900/60 transition-colors duration-300"
                >
                  {theme === "dark" ? <Sun className="w-[18px] h-[18px]" /> : <Moon className="w-[18px] h-[18px]" />}
                </button>
              )}

              <Link
                href="/products"
                className="hidden md:inline-flex items-center px-5 py-2 rounded-full text-sm font-semibold text-brown-950 transition-all duration-400 ease-luxury hover:-translate-y-0.5"
                style={{
                  backgroundImage: "linear-gradient(135deg, #f5d97a 0%, #e1a82b 50%, #a86c15 100%)",
                  boxShadow: "0 8px 24px -8px rgba(225, 168, 43, 0.5)",
                }}
              >
                Shop Now
              </Link>

              <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
                className="md:hidden w-10 h-10 rounded-full flex items-center justify-center text-brown-800 dark:text-cream-100 hover:bg-brown-100/60 dark:hover:bg-brown-900/60 transition-colors"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu — full-height slide drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
              className="md:hidden fixed inset-0 z-40 bg-brown-950/40"
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden fixed top-0 right-0 bottom-0 z-50 w-[82%] max-w-sm bg-cream-50 dark:bg-brown-950 shadow-luxury-lg border-l border-brown-100 dark:border-brown-800"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between px-6 h-16 lg:h-20 border-b border-brown-100 dark:border-brown-900">
                  <span className="font-serif text-xl font-semibold text-brown-900 dark:text-cream-50">
                    Menu
                  </span>
                  <button
                    onClick={() => setIsOpen(false)}
                    aria-label="Close menu"
                    className="w-10 h-10 rounded-full flex items-center justify-center text-brown-700 dark:text-cream-200 hover:bg-brown-100/60 dark:hover:bg-brown-900/60 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Links */}
                <nav className="flex-1 overflow-y-auto px-6 py-8">
                  <ul className="space-y-1">
                    {navLinks.map((link, i) => {
                      const active = pathname === link.href;
                      return (
                        <motion.li
                          key={link.href}
                          initial={{ opacity: 0, x: 16 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.08 + i * 0.05, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        >
                          <Link
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className={`flex items-center justify-between py-4 px-2 border-b border-brown-100/70 dark:border-brown-900 group ${
                              active
                                ? "text-gold-600 dark:text-gold-300"
                                : "text-brown-800 dark:text-cream-100"
                            }`}
                          >
                            <span className="font-serif text-2xl font-medium tracking-wide">
                              {link.label}
                            </span>
                            <span
                              className={`text-sm font-medium ${
                                active ? "text-gold-500" : "text-brown-300 group-hover:text-gold-500"
                              } transition-colors`}
                            >
                              0{i + 1}
                            </span>
                          </Link>
                        </motion.li>
                      );
                    })}
                  </ul>
                </nav>

                {/* Footer CTA */}
                <div className="px-6 pb-8 pt-4 border-t border-brown-100 dark:border-brown-900">
                  <Link
                    href="/products"
                    onClick={() => setIsOpen(false)}
                    className="block w-full text-center px-6 py-4 rounded-full text-brown-950 font-semibold text-sm"
                    style={{
                      backgroundImage: "linear-gradient(135deg, #f5d97a 0%, #e1a82b 50%, #a86c15 100%)",
                      boxShadow: "0 12px 30px -10px rgba(225, 168, 43, 0.55)",
                    }}
                  >
                    Shop the Collection
                  </Link>
                  <p className="mt-4 text-xs text-brown-400 dark:text-brown-500 text-center tracking-[0.18em] uppercase">
                    Crafting Flavor · Creating Stories
                  </p>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
