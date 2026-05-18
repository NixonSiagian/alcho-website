import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: {
    default: "Alcho — Crafting Flavor, Creating Stories",
    template: "%s | Alcho",
  },
  description:
    "Alcho crafts premium Indonesian cooking seasonings — authentic sauces, spice blends, and marinades made with the finest natural ingredients. No preservatives. Pure flavor.",
  keywords: [
    "Alcho",
    "Indonesian seasoning",
    "cooking sauce",
    "spice blend",
    "marinade",
    "rendang paste",
    "sambal",
    "authentic Indonesian food",
  ],
  authors: [{ name: "Alcho" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://alcho.id",
    siteName: "Alcho",
    title: "Alcho — Crafting Flavor, Creating Stories",
    description:
      "Premium Indonesian cooking seasonings crafted with authentic recipes and natural ingredients.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Alcho Premium Seasonings",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alcho — Crafting Flavor, Creating Stories",
    description:
      "Premium Indonesian cooking seasonings crafted with authentic recipes and natural ingredients.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
        </Providers>
      </body>
    </html>
  );
}
