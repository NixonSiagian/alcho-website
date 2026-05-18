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

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <>
      <nav
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-400 ease-luxury ${
          scrolled
            ? "bg-cream-50/90 dark:bg-brown-950/90 backdrop-blur-sm border-b border-brown-100/50 dark:border-brown-800/50 shadow-sm"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5" aria-label="Alcho home">
              <span className="w-9 h-9 rounded-full bg-gradient-to-br from-gold-300 via-gold-500 to-brown-700 flex items-center justify-center shadow-gold-glow">
                <ChefHat className="w-[18px] h-[18px] text-cream-50" />
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
                            : "text-brown-600 dark:text-cream-200 hover:text-brown-900 dark:hover:text-gold-300"
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
            <div className="flex items-center gap-2">
              {mounted && (
                <button
                  onClick={toggleTheme}
                  aria-label="Toggle theme"
                  className="w-10 h-10 rounded-full flex items-center justify-center text-brown-600 dark:text-cream-200 hover:bg-brown-100/50 dark:hover:bg-brown-900/50 transition-colors duration-300"
                >
                  {theme === "dark" ? <Sun className="w-[18px] h-[18px]" /> : <Moon className="w-[18px] h-[18px]" />}
                </button>
              )}

              <Link
                href="/products"
                className="hidden md:inline-flex items-center px-5 py-2 rounded-full text-sm font-semibold text-brown-950 transition-all duration-400 ease-luxury hover:-translate-y-0.5"
                style={{
                  backgroundImage: "linear-gradient(135deg, #f5d97a 0%, #e1a82b 50%, #a86c15 100%)",
                  boxShadow: "0 6px 20px -6px rgba(225, 168, 43, 0.45)",
                }}
              >
                Shop Now
              </Link>

              <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? "Close menu" : "Open menu"}
                className="md:hidden w-10 h-10 rounded-full flex items-center justify-center text-brown-800 dark:text-cream-100 hover:bg-brown-100/50 dark:hover:bg-brown-900/50 transition-colors"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsOpen(false)}
              className="md:hidden fixed inset-0 z-40 bg-brown-950/40"
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden fixed top-0 right-0 bottom-0 z-50 w-[80%] max-w-sm bg-cream-50 dark:bg-brown-950 border-l border-brown-100 dark:border-brown-800"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between px-6 h-16 border-b border-brown-100 dark:border-brown-900">
                  <span className="font-serif text-xl font-semibold text-brown-900 dark:text-cream-50">
                    Menu
                  </span>
                  <button
                    onClick={() => setIsOpen(false)}
                    aria-label="Close menu"
                    className="w-10 h-10 rounded-full flex items-center justify-center text-brown-700 dark:text-cream-200"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <nav className="flex-1 px-6 py-8">
                  <ul className="space-y-1">
                    {navLinks.map((link, i) => {
                      const active = pathname === link.href;
                      return (
                        <li key={link.href}>
                          <Link
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className={`flex items-center justify-between py-4 px-2 border-b border-brown-100/70 dark:border-brown-900 ${
                              active
                                ? "text-gold-600 dark:text-gold-300"
                                : "text-brown-800 dark:text-cream-100"
                            }`}
                          >
                            <span className="font-serif text-2xl font-medium">
                              {link.label}
                            </span>
                            <span className="text-sm font-medium text-brown-300">
                              0{i + 1}
                            </span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </nav>

                <div className="px-6 pb-8 pt-4 border-t border-brown-100 dark:border-brown-900">
                  <Link
                    href="/products"
                    onClick={() => setIsOpen(false)}
                    className="block w-full text-center px-6 py-4 rounded-full text-brown-950 font-semibold text-sm"
                    style={{
                      backgroundImage: "linear-gradient(135deg, #f5d97a 0%, #e1a82b 50%, #a86c15 100%)",
                    }}
                  >
                    Shop the Collection
                  </Link>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
