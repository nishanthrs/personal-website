import type { ReactElement, ReactNode } from 'react'
import styles from '../styles/Home.module.css'

type LayoutProps = {
    children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
    return (
      <div>
          <div className={styles.nav_header}>
            <a href="/">Nishanth Salinamakki</a>
          </div>
          <div className={styles.nav}>
            <a href="/about" className={styles.nav_items}>About</a>
            <a href="/writing" className={styles.nav_items}>Writing</a>
            <a href="/projects" className={styles.nav_items}>Projects</a>
          </div>
          <hr className="mx-8 my-14 h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
          <div>
            <main>{children}</main>
          </div>
      </div>
    );
}
