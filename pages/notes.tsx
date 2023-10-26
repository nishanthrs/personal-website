import {getPosts} from '../helpers/getPosts';
import { InferGetStaticPropsType } from 'next'
import PostCard from '../components/PostCard';
import {PostType} from '../types/post';
import Head from 'next/head';
import { indigoTextHeaderStyle } from '../styles/colors';


export const getStaticProps = () => {
  const notes = getPosts(PostType.Notes);

  return {
    props: {
      notes
    },
  };
};

export default function Notes({notes}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <Head>
        <title>Nishanth Salinamakki&apos;s Website</title>
        <meta name="description" content="Personal blog and repo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex justify-center">
        <article className="prose prose-md dark:prose-invert text-center">
          <header>
            <h1 className={indigoTextHeaderStyle}>All Notes</h1>
          </header>
        </article>
      </div>

      <div className="mx-12 md:mx-32 lg:mx-64">
        {notes.map((post) =>
          <PostCard
            key={post.slug}
            title={post.data.title}
            date={post.data.date}
            description={post.data.description}
            time_to_read={post.data.time_to_read}
            slug={post.slug}
            postType={PostType.Notes}
          />
        )}
      </div>

    </div>
  );
}
