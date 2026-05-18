import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn the story behind Alcho — from a grandmother's kitchen in Jakarta to Indonesia's most loved premium seasoning brand.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
