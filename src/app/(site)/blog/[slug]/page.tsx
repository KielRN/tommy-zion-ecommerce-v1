import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { getPostBySlug, getAllPosts, getRelatedPosts } from "@/lib/blog";
import { parseMarkdown } from "@/lib/markdown";
import BlogPostDetail from "@/components/BlogPostDetail";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata for each blog post
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found | Tommy Zion",
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: post.seo.metaTitle || `${post.title} | Tommy Zion Blog`,
    description: post.seo.metaDescription || post.excerpt,
    keywords: post.seo.keywords,
    openGraph: {
      title: post.seo.metaTitle || post.title,
      description: post.seo.metaDescription || post.excerpt,
      images: [
        {
          url: post.seo.ogImage || post.featuredImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      type: "article",
      publishedTime: post.publishedAt.toISOString(),
      modifiedTime: post.updatedAt?.toISOString(),
      authors: [post.author.name],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.seo.metaTitle || post.title,
      description: post.seo.metaDescription || post.excerpt,
      images: [post.seo.ogImage || post.featuredImage],
    },
  };
}

const BlogPostPage = async ({ params }: BlogPostPageProps) => {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Parse markdown content to HTML
  const htmlContent = await parseMarkdown(post.content);
  
  // Get related posts
  const relatedPosts = getRelatedPosts(post, 3);

  return (
    <>
      <Breadcrumb 
        title={post.title} 
        pages={["blog", post.title]} 
      />
      <BlogPostDetail 
        post={post} 
        htmlContent={htmlContent}
        relatedPosts={relatedPosts}
      />
    </>
  );
};

export default BlogPostPage;