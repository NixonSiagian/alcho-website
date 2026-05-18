import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recipes & Blog",
  description:
    "Discover authentic Indonesian recipes, cooking tips, and culinary stories from the Alcho kitchen. Cook with confidence using our premium seasonings.",
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
