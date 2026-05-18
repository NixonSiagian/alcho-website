"use client";

import Link from "next/link";
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";

/* ═══════════════════════════════════════════════════════════════
   FOOTER — Premium, Refined Dark Aesthetic
   - Improved spacing and breathing room
   - Subtle hover interactions on social icons
   - Consistent typography with rest of site
   ═══════════════════════════════════════════════════════════════ */

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
    <footer className="relative bg-brand-dark">
      {/* Top gold line */}
      <div className="divider-gold" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Newsletter */}
        <div className="py-14 border-b border-brown-800/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="max-w-lg">
            <span className="text-gold-500 text-[11px] font-semibold tracking-[0.25em] uppercase">
              Stay in the kitchen
            </span>
            <h3 className="font-serif text-2xl md:text-3xl font-semibold text-cream-50 mt-3 leading-tight">
              Receive new recipes & seasonal stories.
            </h3>
          </div>
          <form className="flex items-center gap-2.5 w-full md:w-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              required
              placeholder="your@email.com"
              className="flex-1 md:w-64 px-5 py-3.5 rounded-full bg-brown-900/40 border border-brown-700/40 text-cream-100 text-sm placeholder-brown-500 focus:outline-none focus:ring-2 focus:ring-gold-500/20 focus:border-gold-500/30 transition-all duration-400"
            />
            <button type="submit" className="shrink-0 btn-gold !px-6 !py-3.5">
              Subscribe
            </button>
          </form>
        </div>

        {/* Links grid */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2.5 mb-6 group">
              <span className="font-serif text-xl font-semibold text-cream-50 transition-colors duration-300 group-hover:text-gold-400">Alcho</span>
              <span className="w-1.5 h-1.5 rounded-full bg-gold-500 transition-transform duration-300 group-hover:scale-125" />
            </Link>
            <p className="text-brown-400 text-sm leading-[1.8] mb-7">
              Crafting authentic Indonesian seasonings with premium ingredients and centuries-old recipes.
            </p>
            <div className="flex items-center gap-3">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full border border-brown-700/40 hover:border-gold-500/30 flex items-center justify-center text-brown-400 hover:text-gold-400 transition-all duration-400 ease-luxury hover:-translate-y-0.5"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-serif text-cream-50 font-semibold mb-6 text-[15px]">Products</h4>
            <ul className="space-y-3.5">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-brown-400 hover:text-gold-400 text-sm transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-serif text-cream-50 font-semibold mb-6 text-[15px]">Company</h4>
            <ul className="space-y-3.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-brown-400 hover:text-gold-400 text-sm transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-cream-50 font-semibold mb-6 text-[15px]">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold-500 mt-0.5 shrink-0" strokeWidth={1.5} />
                <span className="text-brown-400 text-sm leading-relaxed">
                  Jl. Rempah Nusantara No. 12, Jakarta Selatan, Indonesia
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold-500 shrink-0" strokeWidth={1.5} />
                <a href="tel:+6281234567890" className="text-brown-400 hover:text-gold-400 text-sm transition-colors duration-300">
                  +62 812-3456-7890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold-500 shrink-0" strokeWidth={1.5} />
                <a href="mailto:hello@alcho.id" className="text-brown-400 hover:text-gold-400 text-sm transition-colors duration-300">
                  hello@alcho.id
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-brown-800/25 py-7 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-brown-600 text-xs tracking-wide">
            &copy; {new Date().getFullYear()} Alcho. Crafted with care in Indonesia.
          </p>
          <div className="flex items-center gap-6 text-xs">
            <a href="#" className="text-brown-600 hover:text-gold-400 transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-brown-600 hover:text-gold-400 transition-colors duration-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
