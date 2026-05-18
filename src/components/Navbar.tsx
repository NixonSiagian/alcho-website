"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 dark:bg-brown-950/95 backdrop-blur-md shadow-lg shadow-brown-900/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-gold-500 to-brown-600 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
              <ChefHat className="w-5 h-5 text-white" />
            </div>
            <span className="font-serif text-2xl font-bold text-brown-800 dark:text-cream-100 tracking-wide">
              Alcho
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm font-medium transition-colors duration-200 after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-gold-500 after:transition-all after:duration-300 hover:after:w-full ${
                  pathname === link.href
                    ? "text-brown-700 dark:text-gold-400 after:w-full"
                    : "text-brown-600 dark:text-cream-200 hover:text-brown-800 dark:hover:text-gold-300"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Theme toggle */}
            {mounted && (
              <button
                onClick={toggleTheme}
                aria-label="Toggle dark mode"
                className="w-9 h-9 rounded-full flex items-center justify-center text-brown-600 dark:text-cream-200 hover:bg-brown-100 dark:hover:bg-brown-800 transition-colors"
              >
                {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            )}

            {/* CTA */}
            <Link
              href="/products"
              className="hidden md:inline-flex items-center px-5 py-2 rounded-full bg-brown-700 hover:bg-brown-600 text-white text-sm font-medium transition-all duration-200 hover:shadow-lg hover:shadow-brown-900/20 hover:-translate-y-0.5"
            >
              Shop Now
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="md:hidden w-9 h-9 rounded-full flex items-center justify-center text-brown-700 dark:text-cream-100 hover:bg-brown-100 dark:hover:bg-brown-800 transition-colors"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/98 dark:bg-brown-950/98 backdrop-blur-md border-t border-brown-100 dark:border-brown-800 px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                pathname === link.href
                  ? "bg-brown-50 dark:bg-brown-900 text-brown-800 dark:text-gold-400"
                  : "text-brown-600 dark:text-cream-200 hover:bg-brown-50 dark:hover:bg-brown-900"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/products"
            onClick={() => setIsOpen(false)}
            className="block mt-2 px-4 py-3 rounded-xl bg-brown-700 text-white text-sm font-medium text-center hover:bg-brown-600 transition-colors"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </nav>
  );
}
