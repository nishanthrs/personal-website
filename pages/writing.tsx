import {getPosts} from '../helpers/getPosts';
import { InferGetStaticPropsType } from 'next'
import PostCard from '../components/PostCard';
import {PostType} from '../types/post';
import Head from 'next/head';
import Link from "next/link";
import styles from '../styles/Home.module.css'


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
    <div className={styles.container}>
      <Head>
        <title>Nishanth Salinamakki's Website</title>
        <meta name="description" content="Personal blog and repo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-16">
      {/* <main className={styles.main}> */}
        {writingPosts.map((post) =>
          <PostCard
            key={post.slug}
            title={post.data.title}
            date={post.data.date}
            description={post.data.description}
            slug={post.slug}
            postType={PostType.Writing}
          />
        )}
        {/* <Link href="https://google.com">Read MORE</Link> */}
      </main>

      {/* <Link href="https://google.com">Read MORE</Link> */}
    </div>
  );
}
