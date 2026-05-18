"use client";

import Link from "next/link";
import { ChefHat, Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";

const productLinks = [
  { href: "/products/signature-rendang-paste", label: "Rendang Paste" },
  { href: "/products/golden-turmeric-marinade", label: "Turmeric Marinade" },
  { href: "/products/smoky-sambal-sauce", label: "Smoky Sambal" },
  { href: "/products/sweet-soy-glaze", label: "Sweet Soy Glaze" },
  { href: "/products", label: "All Products" },
];

const companyLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/blog", label: "Recipes" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="relative bg-brown-950 text-cream-100">
      {/* Top gold line */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Newsletter */}
        <div className="py-12 border-b border-brown-800/50 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-lg">
            <span className="text-gold-400 text-[11px] font-semibold tracking-[0.3em] uppercase">
              Stay in the kitchen
            </span>
            <h3 className="font-serif text-2xl md:text-3xl font-semibold text-cream-50 mt-3 leading-tight">
              Receive new recipes & seasonal stories.
            </h3>
          </div>
          <form className="flex items-center gap-2 w-full md:w-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              required
              placeholder="your@email.com"
              className="flex-1 md:w-64 px-5 py-3 rounded-full bg-brown-900/60 border border-brown-700 text-cream-100 text-sm placeholder-brown-400 focus:outline-none focus:ring-2 focus:ring-gold-400/40 transition"
            />
            <button
              type="submit"
              className="shrink-0 px-6 py-3 rounded-full text-brown-950 font-semibold text-sm"
              style={{
                backgroundImage: "linear-gradient(135deg, #f5d97a 0%, #e1a82b 50%, #a86c15 100%)",
              }}
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Links grid */}
        <div className="py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <span className="w-8 h-8 rounded-full bg-gradient-to-br from-gold-300 via-gold-500 to-brown-700 flex items-center justify-center">
                <ChefHat className="w-4 h-4 text-cream-50" />
              </span>
              <span className="font-serif text-xl font-semibold text-cream-50">Alcho</span>
            </Link>
            <p className="text-brown-300 text-sm leading-relaxed mb-6">
              Crafting authentic Indonesian seasonings with premium ingredients and centuries-old recipes.
            </p>
            <div className="flex items-center gap-3">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full border border-brown-700 hover:border-gold-400/50 flex items-center justify-center text-brown-300 hover:text-gold-300 transition-colors duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-serif text-cream-50 font-semibold mb-5">Products</h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-brown-300 hover:text-gold-300 text-sm transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-serif text-cream-50 font-semibold mb-5">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-brown-300 hover:text-gold-300 text-sm transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-cream-50 font-semibold mb-5">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold-400 mt-0.5 shrink-0" />
                <span className="text-brown-300 text-sm leading-relaxed">
                  Jl. Rempah Nusantara No. 12, Jakarta Selatan, Indonesia
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <a href="tel:+6281234567890" className="text-brown-300 hover:text-gold-300 text-sm transition-colors">
                  +62 812-3456-7890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                <a href="mailto:hello@alcho.id" className="text-brown-300 hover:text-gold-300 text-sm transition-colors">
                  hello@alcho.id
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-brown-800/50 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-brown-500 text-xs tracking-wide">
            © {new Date().getFullYear()} Alcho. Crafted with care in Indonesia.
          </p>
          <div className="flex items-center gap-6 text-xs">
            <a href="#" className="text-brown-500 hover:text-gold-300 transition-colors">Privacy Policy</a>
            <a href="#" className="text-brown-500 hover:text-gold-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
