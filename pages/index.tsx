import Head from 'next/head';
import Image from 'next/image';

import AboutDesc from './about_desc.mdx';
import styles from '../styles/Home.module.css';


export default function Home() {
  const homeHeader = (
    <header>
      <h2>👋 Hi, I&apos;m Nishanth!</h2>
    </header>
  );

  return (
    <div className={styles.container}>
      <Head>
        <title>Nishanth Salinamakki&apos;s Website</title>
        <meta name="description" content="Personal blog and repo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-wrap justify-center">
        <div className={styles.pic_layout}>
          <Image width={150} height={150} className="rounded-full" src="/ns_profile_pic.jpg" alt="" />
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
        <article className="prose prose-lg dark:prose-invert text-center">
          {homeHeader}
        </article>
      </div>
      <div className="flex flex-wrap justify-center">
        <article className="prose prose-lg dark:prose-invert">
          <AboutDesc />
        </article>
      </div>
    </div>
  )
}
