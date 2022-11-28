import styles from '../styles/Home.module.css'

import Head from 'next/head'
import AboutDesc from './about_desc.mdx';

export default function About() {
    const aboutHeader = (
        <header>
            <h1>About Me</h1>
            <h3>Software | Business | Stories</h3>
        </header>
    );

    return (
        <div className={styles.container}>
            <Head>
                <title>Nishanth Salinamakki's Website</title>
                <meta name="description" content="Personal blog and repo" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <div className={styles.pic_layout}>
                    <img className={styles.profile_pic} src="/ns_profile_pic.jpg" alt="Avatar"/>
                </div>
                <article class="prose prose-lg dark:prose-invert text-center">
                    {aboutHeader}
                </article>
                <article class="prose prose-lg dark:prose-invert">
                    <AboutDesc />
                </article>
            </main>
        </div>
    );
}
