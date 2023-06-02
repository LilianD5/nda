import React from "react"
import Link from "next/link"
import Image from "next/image"
import styles from '../../public/css/header.module.css'

export default function HeaderLayout() {
    return (
        <React.Fragment>
            <header className={styles.headerWrapper}>
                <menu className={`${styles.menu} ${styles.rowLimitSize}`}>
                    <Image src="/assets/NDA.png" alt="Nda" width="64" height="64" className={styles.logo} />
                    <ul className={styles.list}>
                        <li className={styles.li}><Link href="/">accueil</Link></li>
                        <li className={styles.li}><Link href="/services">mes services</Link></li>
                        <li className={styles.li}><Link href="/avantages">vos avantages</Link></li>
                        <li className={styles.li}><Link href="/contact">contact</Link></li>
                    </ul>
                </menu>
            </header>
        </React.Fragment>
    )
}