import fs from 'fs';
import path from 'path';
import readingTime from 'reading-time';
import { BlogPost, Author } from '@/types/blog';
import { extractFrontmatter, parseMarkdown, extractExcerpt } from './markdown';

const postsDirectory = path.join(process.cwd(), 'content/blog');
const authorsDirectory = path.join(process.cwd(), 'content/authors');

/**
 * Get all blog posts
 */
export function getAllPosts(): BlogPost[] {
  try {
    // Check if posts directory exists
    if (!fs.existsSync(postsDirectory)) {
      return [];
    }

    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames
      .filter((fileName) => fileName.endsWith('.md'))
      .map((fileName) => {
        const slug = fileName.replace(/\.md$/, '');
        return getPostBySlug(slug);
      })
      .filter((post): post is BlogPost => post !== null)
      .sort((a, b) => {
        return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
      });

    return allPostsData;
  } catch (error) {
    console.error('Error reading posts:', error);
    return [];
  }
}

/**
 * Get a single blog post by slug
 */
export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    
    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = extractFrontmatter(fileContents);

    // Get author information
    const author = getAuthorBySlug(data.author || 'default');

    // Calculate reading time
    const readingTimeResult = readingTime(content);

    // Extract excerpt if not provided
    const excerpt = data.excerpt || extractExcerpt(content);

    const post: BlogPost = {
      slug,
      title: data.title || 'Untitled',
      excerpt,
      content,
      date: data.date || new Date().toISOString().split('T')[0],
      publishedAt: new Date(data.date || Date.now()),
      updatedAt: data.updatedAt ? new Date(data.updatedAt) : undefined,
      author,
      categories: data.categories || [],
      tags: data.tags || [],
      featuredImage: data.featuredImage || '/images/blog/default.jpg',
      readingTime: readingTimeResult.minutes,
      views: data.views || 0,
      seo: {
        metaTitle: data.seo?.metaTitle || data.title,
        metaDescription: data.seo?.metaDescription || excerpt,
        keywords: data.seo?.keywords || data.tags || [],
        ogImage: data.seo?.ogImage || data.featuredImage,
      },
      status: data.status || 'published',
    };

    return post;
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error);
    return null;
  }
}

/**
 * Get author information by slug
 */
export function getAuthorBySlug(slug: string): Author {
  try {
    const fullPath = path.join(authorsDirectory, `${slug}.md`);
    
    if (!fs.existsSync(fullPath)) {
      // Return default author if file doesn't exist
      return {
        name: 'Tommy Zion Team',
        bio: 'E-commerce experts sharing insights and tips.',
        avatar: '/images/authors/default.jpg',
      };
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = extractFrontmatter(fileContents);

    return {
      name: data.name || 'Unknown Author',
      bio: data.bio,
      avatar: data.avatar || '/images/authors/default.jpg',
      social: data.social || {},
    };
  } catch (error) {
    console.error(`Error reading author ${slug}:`, error);
    return {
      name: 'Tommy Zion Team',
      bio: 'E-commerce experts sharing insights and tips.',
      avatar: '/images/authors/default.jpg',
    };
  }
}

/**
 * Get posts by category
 */
export function getPostsByCategory(category: string): BlogPost[] {
  const allPosts = getAllPosts();
  return allPosts.filter((post) =>
    post.categories.some((cat) => cat.toLowerCase() === category.toLowerCase())
  );
}

/**
 * Get posts by tag
 */
export function getPostsByTag(tag: string): BlogPost[] {
  const allPosts = getAllPosts();
  return allPosts.filter((post) =>
    post.tags.some((postTag) => postTag.toLowerCase() === tag.toLowerCase())
  );
}

/**
 * Get featured posts (you can customize this logic)
 */
export function getFeaturedPosts(limit: number = 3): BlogPost[] {
  const allPosts = getAllPosts();
  // For now, return the most recent posts
  // You could add a "featured" field to frontmatter later
  return allPosts.slice(0, limit);
}

/**
 * Get all unique categories
 */
export function getCategories(): string[] {
  const allPosts = getAllPosts();
  const categories = new Set<string>();
  
  allPosts.forEach((post) => {
    post.categories.forEach((category) => {
      categories.add(category);
    });
  });

  return Array.from(categories).sort();
}

/**
 * Get all unique tags
 */
export function getTags(): string[] {
  const allPosts = getAllPosts();
  const tags = new Set<string>();
  
  allPosts.forEach((post) => {
    post.tags.forEach((tag) => {
      tags.add(tag);
    });
  });

  return Array.from(tags).sort();
}

/**
 * Get related posts based on categories and tags
 */
export function getRelatedPosts(currentPost: BlogPost, limit: number = 3): BlogPost[] {
  const allPosts = getAllPosts().filter((post) => post.slug !== currentPost.slug);
  
  // Score posts based on shared categories and tags
  const scoredPosts = allPosts.map((post) => {
    let score = 0;
    
    // Add points for shared categories
    post.categories.forEach((category) => {
      if (currentPost.categories.includes(category)) {
        score += 2;
      }
    });
    
    // Add points for shared tags
    post.tags.forEach((tag) => {
      if (currentPost.tags.includes(tag)) {
        score += 1;
      }
    });
    
    return { post, score };
  });
  
  // Sort by score and return top posts
  return scoredPosts
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((item) => item.post);
}

/**
 * Search posts by title and content
 */
export function searchPosts(query: string): BlogPost[] {
  const allPosts = getAllPosts();
  const lowercaseQuery = query.toLowerCase();
  
  return allPosts.filter((post) => {
    return (
      post.title.toLowerCase().includes(lowercaseQuery) ||
      post.excerpt.toLowerCase().includes(lowercaseQuery) ||
      post.content.toLowerCase().includes(lowercaseQuery) ||
      post.categories.some((cat) => cat.toLowerCase().includes(lowercaseQuery)) ||
      post.tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery))
    );
  });
}