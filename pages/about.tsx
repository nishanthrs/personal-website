import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function About() {
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

                {/* TODO: Put 3-4 more pics here! */}

                <p className={styles.description}>
                {/* Get started by editing{' '}
                <code className={styles.code}>pages/index.tsx</code> */}
                {/* Just trying to make sense of this crazy world.
                Know the ledge. */}
                Nishanth Salinamakki
                <br></br>
                </p>

                {/* TODO: Increase margin size and use MDX to render markdown cleanly here */}
                <a>
                    Hey, I'm Nishanth!
                    <br></br>
                    <br></br>
                    Yes, I work in tech. Yes, I work in FAANG. No, I don't wear Allbirds.
                    <br></br>
                    <br></br>
                    Why do I have a website? Well, I realized that I need to have and remember a life outside of work.
                    And I need a place to:
                    <br></br>
                    <br></br>
                    \* Write down my experiences
                    <br></br>
                    \* Articulate out all the swirling thoughts I have
                    <br></br>
                    \* Show the projects (if any) that I work on
                    <br></br>
                    <br></br>
                    I'm a huge proponent of the concept that <strong>you don't really remember or know something
                    unless you can write about it concisely and clearly.</strong>
                    <br></br><br></br>
                    Of course, I'm also hoping that someone out there will not only read what I write (wouldn't that be amazing??),
                    but learn something new from it that'll help them in their own life.
                </a>
            </main>
        </div>
    );
}
