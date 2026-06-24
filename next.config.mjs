import createMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false, path: false }
    return config
  },
}

// Ref: https://nextjs.org/docs/app/guides/mdx
const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
  options: {
    // The remark/rehype ecosystem is ESM only, which is why this config is .mjs.
    // remark-frontmatter strips the YAML frontmatter; remark-mdx-frontmatter
    // re-exports it as a `frontmatter` const so each post can render its header.
    remarkPlugins: [remarkGfm, remarkFrontmatter, remarkMdxFrontmatter],
    rehypePlugins: [],
    // Lets MDX files resolve components from the <MDXProvider> in _app.tsx
    providerImportSource: '@mdx-js/react',
  },
})

// Merge MDX config with Next.js config
export default withMDX(nextConfig)
