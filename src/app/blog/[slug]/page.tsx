import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getBlogPostBySlug, blogPosts } from "@/data/blog";
import BlogDetailClient from "./BlogDetailClient";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug);
  if (!post) return { title: "Recipe Not Found" };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | Alcho Recipes`,
      description: post.excerpt,
      images: [{ url: post.image, width: 800, height: 450, alt: post.title }],
    },
  };
}

export default function BlogDetailPage({ params }: Props) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) notFound();

  const related = blogPosts
    .filter((p) => p.id !== post.id && p.tags.some((t) => post.tags.includes(t)))
    .slice(0, 3);

  return <BlogDetailClient post={post} related={related} />;
}
