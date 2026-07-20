// Augments the default `*.mdx` module typing (from @types/mdx) so that the
// `frontmatter` const re-exported by remark-mdx-frontmatter is visible to
// TypeScript when imported as a named export.
declare module "*.mdx" {
  import type { ComponentType } from "react";

  const MDXComponent: ComponentType<any>;
  export const frontmatter: { [key: string]: any };
  export default MDXComponent;
}
