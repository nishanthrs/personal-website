// TODO: Convert this to tsx file like here: https://github.com/vercel/next.js/blob/canary/examples/blog-starter/pages/posts/%5Bslug%5D.tsx

import {getPosts} from "../../helpers/getPosts";
import getPost from "../../helpers/getPost";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';

import {PostType} from '../../types/post';

export const getStaticPaths = async () => {
  const posts = await getPosts(PostType.Writing);
  const paths = posts.map((post) => ({ params: { slug: post.slug } }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const post = await getPost(params.slug);
  const mdxSource = await serialize(post.content);
  return {
    props: {
      data: post.data,
      content: mdxSource,
      rawContent: post.content,
    },
  };
};

function Post({ data, content, rawContent }) {
  return (
    <div className="ml-12">
      <h1 className="font-bold text-7xl mt-24">{data.title}</h1>
      <time className="text-gray-500 italic mb-12">{data.date}</time>
      {/* Useless fucking lib; doesn't even work: <MDXRemote {...content} /> */}

      <article className="prose dark:prose-invert prose-a:text-blue-400">
        <ReactMarkdown remarkPlugins={[gfm]}>{rawContent}</ReactMarkdown>
      </article>
    </div>
  );
}

export default Post;
