# Alcho — Premium Indonesian Seasoning Brand Website

A modern, premium company profile website for **Alcho**, an F&B brand specializing in authentic Indonesian cooking seasonings (sauces, spice blends, and marinades).

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS** (custom earth-tone palette)
- **Framer Motion** (smooth animations)
- **next-themes** (dark mode with persistence)
- **lucide-react** (icons)

## Features

- ✅ Fully responsive (mobile-first)
- ✅ Dark mode toggle with persistent state
- ✅ Sticky navbar with hamburger menu on mobile
- ✅ Smooth Framer Motion animations throughout
- ✅ Floating WhatsApp button
- ✅ SEO metadata on all pages
- ✅ Optimized images via `next/image`
- ✅ Dynamic product & blog detail pages (App Router)
- ✅ Product search + category filter
- ✅ Blog/Recipe filter by tag + search
- ✅ Contact form with success state
- ✅ Embedded Google Map

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage — Hero, Features, Products preview, Brand story, How to Cook, Testimonials, Blog preview, CTA |
| `/about` | Brand story, Vision & Mission, Core Values, Timeline, Team |
| `/products` | Product grid with search & category filter |
| `/products/[slug]` | Dynamic product detail page |
| `/blog` | Recipe listing with tag filter + featured post |
| `/blog/[slug]` | Dynamic recipe article page |
| `/contact` | Contact form, business info, embedded Google Map |

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

```bash
# 1. Navigate to the project directory
cd alcho-website

# 2. Install dependencies
npm install
# or
yarn install
# or
pnpm install

# 3. Run the development server
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

## Folder Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout (Navbar, Footer, WhatsApp)
│   ├── page.tsx            # Homepage
│   ├── providers.tsx       # ThemeProvider wrapper
│   ├── globals.css         # Global styles + Google Fonts
│   ├── not-found.tsx       # 404 page
│   ├── about/
│   │   ├── layout.tsx      # SEO metadata
│   │   └── page.tsx
│   ├── products/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── [slug]/
│   │       ├── page.tsx           # Static params + metadata
│   │       └── ProductDetailClient.tsx
│   ├── blog/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── [slug]/
│   │       ├── page.tsx
│   │       └── BlogDetailClient.tsx
│   └── contact/
│       ├── layout.tsx
│       └── page.tsx
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── ProductCard.tsx
│   ├── BlogCard.tsx
│   ├── SectionHeader.tsx
│   └── WhatsAppButton.tsx
├── data/
│   ├── products.ts         # 8 dummy products
│   ├── blog.ts             # 6 recipe articles
│   └── testimonials.ts     # 4 testimonials
└── types/
    └── index.ts
```

## Design System

| Token | Value |
|-------|-------|
| Primary font | Playfair Display (serif) |
| Body font | Inter (sans-serif) |
| Primary color | Brown (`#6e3f1c`) |
| Accent | Gold (`#f59e0b`) |
| Background | Cream (`#fef9ec`) |
| Dark background | `#1a0e06` |

## Customization

- **Products**: Edit `src/data/products.ts` to add/update real products
- **Blog posts**: Edit `src/data/blog.ts`
- **Testimonials**: Edit `src/data/testimonials.ts`
- **Brand colors**: Edit `tailwind.config.ts`
- **WhatsApp number**: Edit `src/components/WhatsAppButton.tsx` and `src/app/products/[slug]/ProductDetailClient.tsx`
- **Contact info**: Edit `src/app/contact/page.tsx` and `src/components/Footer.tsx`
