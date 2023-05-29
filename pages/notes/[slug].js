// TODO: Convert this to tsx file like here: https://github.com/vercel/next.js/blob/canary/examples/blog-starter/pages/posts/%5Bslug%5D.tsx

import {getPosts} from "../../helpers/getPosts";
import getPost from "../../helpers/getPost";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';

import {PostType} from '../../types/post';
import PostImage from "../../components/PostImage";

export const getStaticPaths = async () => {
  const posts = await getPosts(PostType.Notes);
  const paths = posts.map((post) => ({ params: { slug: post.slug } }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const post = await getPost(PostType.Notes, params.slug);
  const mdxSource = await serialize(post.content);
  return {
    props: {
      data: post.data,
      content: mdxSource,
    },
  };
};

const components = {PostImage};

function Post({ data, content }) {
  return (
    <div className="ml-12">
      <h1 className="font-bold text-7xl mt-24">{data.title}</h1>
      <time className="text-gray-500 italic mb-12">{data.date}</time>
      {/* For some reason, article tag is needed to render markdown content correctly */}
      <article className="prose dark:prose-invert prose-a:text-blue-400">
        <MDXRemote {...content} components={components} />
      </article>
    </div>
  );
}

export default Post;
