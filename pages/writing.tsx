import styles from '../styles/Home.module.css'
import {getPosts, PostType, PostData} from '../helpers/getPosts';
import WritingPage from './writing_page.mdx'
import { InferGetStaticPropsType } from 'next'

export const getStaticProps = () => {
    const writingPosts = getPosts(PostType.Writing);
    console.log(`Writing posts: ${writingPosts}`);

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
                <article className="prose prose-lg dark:prose-invert text-left">
                    {writingPosts.map((post) => {
                        return post.data.title;
                    })}
                </article>
            </main>
        </div>
    );
}
