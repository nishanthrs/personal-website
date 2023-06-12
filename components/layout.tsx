import Link from 'next/link';
import type { ReactNode } from 'react'
import styles from '../styles/Home.module.css'

type LayoutProps = {
    children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
    return (
      <div>
          <div className={styles.nav_header}>
            <Link href="/">Nishanth Salinamakki</Link>
          </div>
          <div className={styles.nav}>
            <Link href="/notes" className={styles.nav_items}>Notes</Link>
            <Link href="/projects" className={styles.nav_items}>Projects</Link>
          </div>
          <hr className="mx-8 my-14 h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
          <div>
            <main>{children}</main>
          </div>
      </div>
    );
}
