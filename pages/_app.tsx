import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next";
import { MDXProvider } from '@mdx-js/react';
import Image from 'next/image';
import Link from 'next/link';

import Layout from '../components/layout';

// Components made available to every MDX file (formerly passed to <MDXRemote>).
const mdxComponents = { Image, Link };

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MDXProvider components={mdxComponents}>
      <Layout>
        <Component {...pageProps} />
        <Analytics />
        <SpeedInsights />
      </Layout>
    </MDXProvider>
  );
}
