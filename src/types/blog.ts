export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  publishedAt: Date;
  updatedAt?: Date;
  author: Author;
  categories: string[];
  tags: string[];
  featuredImage: string;
  readingTime: number;
  views: number;
  seo: SEOMetadata;
  status: 'draft' | 'published';
}

export interface Author {
  name: string;
  bio?: string;
  avatar?: string;
  social?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

export interface SEOMetadata {
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string[];
  ogImage?: string;
}

export interface TOCItem {
  id: string;
  title: string;
  level: number;
}

// Legacy type for backward compatibility during migration
export interface LegacyBlogItem {
  date: string;
  views: number;
  title: string;
  img: string;
}