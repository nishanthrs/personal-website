import type { ReactElement } from 'react'
import styles from '../styles/Home.module.css'

export default function Layout({ children }) {
    return (
        <>
            <div className={styles.nav_header}>
                <a>Nishanth Salinamakki</a>
            </div>
            <div className={styles.nav}>
                <a href="#" className={styles.nav_items}>About</a>
                <a href="#" className={styles.nav_items}>Writing</a>
                <a href="#" className={styles.nav_items}>Projects</a>
            </div>
            <main>{children}</main>
        </>
    );
}
