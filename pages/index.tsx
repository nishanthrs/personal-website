import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nishanth Salinamakki's Website</title>
        <meta name="description" content="Personal blog and repo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1> */}

        <div className={styles.pic_layout}>
          <img className={styles.profile_pic} src="/ns_profile_pic.jpg" alt="Avatar"/>
        </div>

        <p className={styles.description}>
          {/* Just trying to make sense of this crazy world.
          Know the ledge. */}
          Yup, yet another personal website.
          <br></br>
        </p>

        <a>
          It's cool to learn and do stuff outside of work. And to write about it.
          <br></br>
          <br></br>
        </a>

        <a>
          Maybe you'll even find some of my projects or writing interesting. Check it out.
        </a>
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
