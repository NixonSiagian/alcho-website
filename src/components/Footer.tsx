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
    <footer className="bg-brown-950 text-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-5">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-gold-500 to-brown-600 flex items-center justify-center">
                <ChefHat className="w-5 h-5 text-white" />
              </div>
              <span className="font-serif text-2xl font-bold text-white">Alcho</span>
            </Link>
            <p className="text-brown-300 text-sm leading-relaxed mb-6">
              Crafting authentic Indonesian seasonings with premium ingredients and centuries-old recipes. 
              No preservatives. Pure flavor.
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: Instagram, label: "Instagram" },
                { icon: Facebook, label: "Facebook" },
                { icon: Twitter, label: "Twitter" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-brown-800 hover:bg-gold-600 flex items-center justify-center transition-colors duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-serif text-white font-semibold mb-5 text-lg">Products</h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-brown-300 hover:text-gold-400 text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-serif text-white font-semibold mb-5 text-lg">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-brown-300 hover:text-gold-400 text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-white font-semibold mb-5 text-lg">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold-500 mt-0.5 shrink-0" />
                <span className="text-brown-300 text-sm">
                  Jl. Rempah Nusantara No. 12, Jakarta Selatan, Indonesia 12140
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold-500 shrink-0" />
                <a href="tel:+6281234567890" className="text-brown-300 hover:text-gold-400 text-sm transition-colors">
                  +62 812-3456-7890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold-500 shrink-0" />
                <a href="mailto:hello@alcho.id" className="text-brown-300 hover:text-gold-400 text-sm transition-colors">
                  hello@alcho.id
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-brown-800 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-brown-400 text-sm">
            © {new Date().getFullYear()} Alcho. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-brown-400 hover:text-gold-400 text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-brown-400 hover:text-gold-400 text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
