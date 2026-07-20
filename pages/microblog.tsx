import { getPosts } from "../helpers/getPosts";
import { getLinkPreview } from "../helpers/getLinkPreview";
import { InferGetStaticPropsType } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";

import MicroblogCard from "../components/MicroblogCard";
import { PostType } from "../types/post";

export const getStaticProps = async () => {
  // Microblog MDX files live in the top-level `microblog/` folder (outside
  // `pages/` so they don't become standalone routes). Same discovery as notes,
  // just pointed at a different root dir.
  const posts = getPosts(PostType.Microblog, ".");

  // For any entry with link(s) in its frontmatter, resolve each favicon + page
  // title now (at build time) so the card can render link previews. Accepts
  // either `links:` (a list) or a single `link:` string.
  const microblogPosts = await Promise.all(
    posts.map(async (post) => {
      const urls: string[] = post.data.links ?? (post.data.link ? [post.data.link] : []);
      const links = await Promise.all(urls.map((url) => getLinkPreview(url)));
      return { ...post, links };
    })
  );

  return {
    props: {
      microblogPosts,
    },
  };
};

export default function Microblog({
  microblogPosts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className="flex flex-col">
      <Head>
        <title>Nishanth Salinamakki&apos;s Website</title>
        <meta name="description" content="Microblog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="mx-12 md:mx-32 lg:mx-64">
        {microblogPosts.map((post) => {
          // Load the compiled MDX component for this entry by slug so the card
          // can render its content inline. The template-literal import lets
          // webpack bundle every microblog/*.mdx without a manual registry.
          const Content = dynamic(() => import(`../microblog/${post.slug}.mdx`));
          return (
            <MicroblogCard
              key={post.slug}
              title={post.data.title}
              date={post.data.date}
              Content={Content}
              links={post.links}
            />
          );
        })}
      </div>
    </div>
  );
}
