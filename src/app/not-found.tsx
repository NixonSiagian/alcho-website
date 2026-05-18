import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cream-50 dark:bg-brown-950 pt-20">
      <div className="text-center px-4">
        <div className="text-8xl font-serif font-bold text-brown-200 dark:text-brown-800 mb-4">
          404
        </div>
        <h1 className="font-serif text-3xl font-bold text-brown-800 dark:text-cream-100 mb-3">
          Page Not Found
        </h1>
        <p className="text-brown-500 dark:text-brown-300 mb-8 max-w-sm mx-auto">
          Looks like this page wandered off the recipe. Let&apos;s get you back to the kitchen.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="px-6 py-3 rounded-full bg-brown-800 hover:bg-brown-700 text-white font-medium text-sm transition-colors"
          >
            Back to Home
          </Link>
          <Link
            href="/products"
            className="px-6 py-3 rounded-full border border-brown-200 dark:border-brown-700 text-brown-700 dark:text-cream-200 font-medium text-sm hover:bg-brown-50 dark:hover:bg-brown-800 transition-colors"
          >
            Browse Products
          </Link>
        </div>
      </div>
    </div>
  );
}
