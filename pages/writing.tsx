import {getPosts} from '../helpers/getPosts';
import { InferGetStaticPropsType } from 'next'
import PostCard from '../components/PostCard';
import {PostType} from '../types/post';

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
      </main>
    </div>
  );
}
