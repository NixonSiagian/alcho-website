import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cream-50 dark:bg-brown-950 pt-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-spice-texture pointer-events-none" />
      <div className="relative text-center max-w-lg">
        <div className="font-serif text-[120px] sm:text-[160px] font-semibold leading-none text-gold-gradient">
          404
        </div>
        <h1 className="mt-2 font-serif text-3xl sm:text-4xl font-semibold text-brown-900 dark:text-cream-50">
          Page not found
        </h1>
        <p className="mt-4 text-brown-600 dark:text-brown-300 leading-relaxed max-w-sm mx-auto">
          Looks like this page wandered off the recipe. Let's get you back to the kitchen.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link href="/" className="btn-gold">
            Back to Home
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/products"
            className="inline-flex items-center px-6 py-3.5 rounded-full border border-brown-200 dark:border-brown-700 text-brown-800 dark:text-cream-100 font-medium text-sm hover:border-gold-400/60 hover:bg-cream-100/60 dark:hover:bg-brown-900 transition-all duration-400"
          >
            Browse Products
          </Link>
        </div>
      </div>
    </div>
  );
}
