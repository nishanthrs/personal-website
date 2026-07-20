import Link from 'next/link';
import type { ReactNode } from 'react'
import styles from '../styles/Home.module.css'
import { blueTextLinkHoverStyle, cyanHoverGradientTextStyle } from '../styles/colors';
import ThemeToggle from './ThemeToggle';

type LayoutProps = {
    children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
    return (
      <div>
        <div className={styles.nav_header}>
          <Link className="no-underline hover:underline" href="/">Nishanth Salinamakki</Link>
        </div>
        <div className={`${styles.nav} flex items-center`}>
          <Link href="/notes" className="no-underline hover:underline mr-4">Notes</Link>
          <Link href="/microblog" className="no-underline hover:underline mr-4">Microblog</Link>
          <ThemeToggle />
        </div>
        <hr className="mx-8 my-14 h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <div>
          <main>{children}</main>
        </div>
      </div>
    );
}
