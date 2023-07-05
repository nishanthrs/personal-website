// TODO: Convert this to tsx file like here: https://github.com/vercel/next.js/blob/canary/examples/blog-starter/pages/posts/%5Bslug%5D.tsx

import Image from "next/image";
import {getPosts} from "../../helpers/getPosts";
import getPost from "../../helpers/getPost";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

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

const components = {Image, PostImage};

function Post({ data, content }) {
  return (
    <div>
      <div className="mx-8 flex flex-col justify-center items-center">
        <h3 className="font-bold text-5xl mb-2">{data.title}</h3>
        <time className="text-gray-500 italic mb-2">{data.date}</time>
        <p className="text-gray-500 italic mb-4">Time to read: {data.time_to_read}</p>
      </div>
      {/* For some reason, article tag is needed to render markdown content correctly */}
      <div className="mx-8 flex flex-wrap justify-center">
        <article className="prose dark:prose-invert prose-a:text-blue-400">
          <MDXRemote {...content} components={components} />
        </article>
      </div>
    </div>
  );
}

export default Post;
