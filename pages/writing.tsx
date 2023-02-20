import styles from '../styles/Home.module.css'
import {getPosts, PostType, PostData} from '../helpers/getPosts';
import WritingPage from './writing_page.mdx'
import { InferGetStaticPropsType } from 'next'
import PostCard from '../components/PostCard';

export const getStaticProps = () => {
  const writingPosts = getPosts(PostType.Writing);

  return {
    props: {
      writingPosts
    },
  };
};

export default function Writing({writingPosts}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <main className="container mx-16">
        {/* <article className="prose prose-lg dark:prose-invert text-left">
          {writingPosts.map((post) => {
              return <a href="/about">{post.data.title}</a>;
          })}
        </article>
        <a href="https://www.w3.org/">FUCK YOU</a> */}
        {writingPosts.map((post) =>
          <PostCard
            key={post.slug}
            title={post.data.title}
            date={post.data.date}
            description={post.data.description}
            slug={post.slug}
          />
        )}
      </main>
    </div>
    // <a href="/about">About</a>
    // <div>
    //   <a href="https://www.google.com">FUCK YOU</a>
    // </div>
  );
}
