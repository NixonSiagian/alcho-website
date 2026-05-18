import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-brand-dark px-5">
      <div className="text-center max-w-lg">
        <div className="font-serif text-8xl font-semibold text-gold-gradient mb-6">
          404
        </div>
        <h1 className="font-serif text-3xl md:text-4xl font-semibold text-cream-50 mb-4">
          Page not found
        </h1>
        <p className="text-brown-300 leading-relaxed mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link href="/" className="btn-gold group">
          Back to Home
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
        </Link>
      </div>
    </section>
  );
}
