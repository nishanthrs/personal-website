import type { ReactNode } from 'react';

type Frontmatter = {
  title?: string;
  date?: string;
  time_to_read?: string;
};

type PostLayoutProps = {
  frontmatter: Frontmatter;
  children: ReactNode;
};

// Wraps a note's compiled MDX content with the post header and prose styling.
// Each notes/*.mdx file sets this as its default export so that @next/mdx
// renders it as a standalone page (replacing the old next-mdx-remote route).
export default function PostLayout({ frontmatter, children }: PostLayoutProps) {
  return (
    <div>
      <div className="mx-8 flex flex-col justify-center items-center">
        <h3 className="font-bold text-5xl mb-2">{frontmatter.title}</h3>
        <time className="text-gray-500 italic mb-2">{frontmatter.date}</time>
        <p className="text-gray-500 italic mb-4">Time to read: {frontmatter.time_to_read}</p>
      </div>
      {/* For some reason, article tag is needed to render markdown content correctly */}
      <div className="mx-8 flex flex-wrap justify-center">
        <article className="prose dark:prose-invert prose-a:text-blue-400">
          {children}
        </article>
      </div>
    </div>
  );
}
