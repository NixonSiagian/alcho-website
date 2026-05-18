import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recipes & Stories",
  description:
    "Step-by-step recipes using Alcho seasonings. Explore Indonesian cooking techniques, tips, and culinary stories from our kitchen.",
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
