import type { ReactElement } from 'react'
import styles from '../styles/Home.module.css'

export default function Layout({ children }) {
    return (
        <>
            <div className={styles.nav_header}>
                <a>Nishanth Salinamakki</a>
            </div>
            <div className={styles.nav}>
                <a href="/about" className={styles.nav_items}>About</a>
                <a href="/writing" className={styles.nav_items}>Writing</a>
                <a href="/projects" className={styles.nav_items}>Projects</a>
            </div>
            <hr className="mx-8 my-14 h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
            <main>{children}</main>
        </>
    );
}
