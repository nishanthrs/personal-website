import Head from "next/head";

export default function Projects() {
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
                    <h1>All Projects</h1>
                </header>
                </article>
            </div>
        </div>
    )
}
