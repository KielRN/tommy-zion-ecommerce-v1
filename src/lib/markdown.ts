import { remark } from 'remark';
import html from 'remark-html';
import gfm from 'remark-gfm';
import matter from 'gray-matter';
import { rehype } from 'rehype';
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';
import { TOCItem } from '@/types/blog';

/**
 * Parse markdown content to HTML
 */
export async function parseMarkdown(content: string): Promise<string> {
  const processedContent = await remark()
    .use(gfm) // GitHub Flavored Markdown
    .use(html, { sanitize: false })
    .process(content);

  // Add syntax highlighting and slugs to headings
  const finalContent = await rehype()
    .use(rehypeHighlight)
    .use(rehypeSlug)
    .process(processedContent.toString());

  return finalContent.toString();
}

/**
 * Extract frontmatter and content from markdown file
 */
export function extractFrontmatter(fileContent: string): {
  data: any;
  content: string;
} {
  const { data, content } = matter(fileContent);
  return { data, content };
}

/**
 * Generate table of contents from markdown content
 */
export function generateTableOfContents(content: string): TOCItem[] {
  const headingRegex = /^(#{1,6})\s+(.+)$/gm;
  const toc: TOCItem[] = [];
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length;
    const title = match[2].trim();
    const id = title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();

    toc.push({
      id,
      title,
      level,
    });
  }

  return toc;
}

/**
 * Process images in markdown content to use Next.js optimized images
 */
export function processImages(content: string): string {
  // Replace markdown images with Next.js Image component syntax
  return content.replace(
    /!\[([^\]]*)\]\(([^)]+)\)/g,
    '<Image src="$2" alt="$1" width={800} height={400} className="rounded-lg my-4" />'
  );
}

/**
 * Extract excerpt from content (first paragraph or specified length)
 */
export function extractExcerpt(content: string, maxLength: number = 160): string {
  // Remove markdown syntax and get plain text
  const plainText = content
    .replace(/#{1,6}\s+/g, '') // Remove headings
    .replace(/\*\*(.*?)\*\*/g, '$1') // Remove bold
    .replace(/\*(.*?)\*/g, '$1') // Remove italic
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Remove links
    .replace(/!\[([^\]]*)\]\([^)]+\)/g, '') // Remove images
    .replace(/```[\s\S]*?```/g, '') // Remove code blocks
    .replace(/`([^`]+)`/g, '$1') // Remove inline code
    .trim();

  // Get first paragraph or truncate to maxLength
  const firstParagraph = plainText.split('\n\n')[0];
  
  if (firstParagraph.length <= maxLength) {
    return firstParagraph;
  }

  return firstParagraph.substring(0, maxLength).trim() + '...';
}