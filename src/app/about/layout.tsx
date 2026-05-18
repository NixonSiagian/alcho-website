import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn the story behind Alcho — from a home kitchen in Jakarta to Indonesia's most trusted seasoning brand. Heritage recipes, natural ingredients, zero compromise.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
