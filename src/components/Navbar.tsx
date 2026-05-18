"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

/* ═══════════════════════════════════════════════════════════════
   NAVBAR — Minimal, Elegant, Premium
   - Smooth background transition on scroll (no sudden snap)
   - Subtle gold underline on active link
   - Refined mobile drawer with gentle easing
   ═══════════════════════════════════════════════════════════════ */

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
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-700 ease-luxury ${
          scrolled
            ? "bg-brand-dark/85 backdrop-blur-md border-b border-gold-500/8 shadow-luxury-subtle"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-16 lg:h-[72px]">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group" aria-label="Alcho home">
              <span className="font-serif text-[22px] font-semibold text-cream-50 tracking-wide transition-colors duration-300 group-hover:text-gold-400">
                Alcho
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-gold-500 transition-transform duration-300 group-hover:scale-125" />
            </Link>

            {/* Desktop Nav */}
            <ul className="hidden md:flex items-center gap-0.5">
              {navLinks.map((link) => {
                const active = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`relative px-4 py-2 text-[13px] font-medium tracking-wide transition-colors duration-400 ease-luxury ${
                        active
                          ? "text-gold-400"
                          : "text-cream-200/60 hover:text-cream-50"
                      }`}
                    >
                      {link.label}
                      {active && (
                        <motion.span
                          layoutId="nav-underline"
                          className="absolute left-3 right-3 -bottom-0.5 h-px bg-gradient-to-r from-transparent via-gold-500/70 to-transparent"
                          transition={{ type: "spring", stiffness: 350, damping: 28 }}
                        />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Right side */}
            <div className="flex items-center gap-3">
              <Link
                href="/products"
                className="hidden md:inline-flex btn-gold !text-xs !px-5 !py-2.5"
              >
                Shop Now
              </Link>

              <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? "Close menu" : "Open menu"}
                className="md:hidden w-10 h-10 rounded-full flex items-center justify-center text-cream-100 hover:bg-cream-50/5 transition-all duration-300"
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
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setIsOpen(false)}
              className="md:hidden fixed inset-0 z-40 bg-brand-dark/70 backdrop-blur-sm"
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden fixed top-0 right-0 bottom-0 z-50 w-[80%] max-w-sm bg-brand-dark border-l border-gold-500/8"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between px-6 h-16 border-b border-brown-800/40">
                  <span className="font-serif text-xl font-semibold text-cream-50 tracking-wide">
                    Menu
                  </span>
                  <button
                    onClick={() => setIsOpen(false)}
                    aria-label="Close menu"
                    className="w-10 h-10 rounded-full flex items-center justify-center text-cream-200 hover:text-cream-50 transition-colors"
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
                            className={`flex items-center justify-between py-4 px-2 border-b border-brown-800/30 transition-colors duration-300 ${
                              active ? "text-gold-400" : "text-cream-100 hover:text-gold-400"
                            }`}
                          >
                            <span className="font-serif text-2xl font-medium">
                              {link.label}
                            </span>
                            <span className="text-sm font-medium text-brown-600">
                              0{i + 1}
                            </span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </nav>

                <div className="px-6 pb-8 pt-4 border-t border-brown-800/30">
                  <Link
                    href="/products"
                    onClick={() => setIsOpen(false)}
                    className="block w-full text-center btn-gold py-4"
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
