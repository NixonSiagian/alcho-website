import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore the full Alcho collection — premium Indonesian sauces, spice blends, marinades, bouillons, and snack seasonings crafted with natural ingredients.",
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
