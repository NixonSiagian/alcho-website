import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse Alcho's full range of premium Indonesian seasonings — authentic pastes, spice blends, sauces, and marinades made with natural ingredients.",
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
