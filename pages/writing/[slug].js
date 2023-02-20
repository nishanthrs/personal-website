import {getPosts} from "../../helpers/getPosts";
import getPost from "../../helpers/getPost";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

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
    },
  };
};

function Post({ data, content }) {
  return (
    <div>
      <h1 className="font-bold text-7xl mt-24 mb-12 ml-12">{data.title}</h1>
      <time className="text-gray-500 italic ml-12">{data.date}</time>
      <p className="mt-12 ml-12">
        <MDXRemote {...content} />
      </p>
    </div>
  );
}

export default Post;
