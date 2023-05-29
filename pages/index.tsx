import Head from 'next/head';
import Image from 'next/image';

import AboutDesc from './about_desc.mdx';
import styles from '../styles/Home.module.css';


export default function Home() {
  const homeHeader = (
    <header>
        <h2>👋 Hi, I'm Nishanth!</h2>
        I like to work on and write about software,
    </header>
  );
  const aboutHeader = (
    <header>
        <h2>👋 Hi, I'm Nishanth!</h2>
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
        <article className="prose prose-lg dark:prose-invert text-center">
          {aboutHeader}
        </article>
        <article className="prose prose-lg dark:prose-invert">
          <AboutDesc />
        </article>
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  )
}
