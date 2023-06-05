'use client';

import React from "react"
import Link from "next/link"
import Image from "next/image"
import styles from '../../public/css/header.module.css'

export default function HeaderLayout() {

    const [menuVisibility, setMenuVisibility] = React.useState('hidden')

    const openMenu = function (state) {
        const ul = document.getElementById('menuList')
        const closeBtn = document.getElementById('closeBtn')
        const openBtn = document.getElementById('openBtn')
        // console.log(ul)
    
        if (state === 'hidden') {
            setMenuVisibility('show')
            ul.classList.remove('header_none__40BOr')
            closeBtn.classList.remove('header_none__40BOr')
            openBtn.classList.add('header_none__40BOr')
            console.log(ul)
            console.log(menuVisibility)
        } else {
            ul.classList.add('header_none__40BOr')
            closeBtn.classList.add('header_none__40BOr')
            openBtn.classList.remove('header_none__40BOr')
            setMenuVisibility('hidden')
            console.log(ul)
            console.log(menuVisibility)
        }
    }

    return (
        <React.Fragment>
            <header className={styles.headerWrapper}>
                <menu className={`${styles.menu} ${styles.rowLimitSize}`}>
                    <Link href="/"><Image src="/assets/NDA.png" alt="Logo" width="64" height="64" className={styles.logo} /></Link>
                    <Image onClick={() => openMenu(menuVisibility)} src="/assets/open-btn.svg" alt="Ouvrir le menu" width="40" height="40" id="openBtn" className={`${styles.burgerIcon} ${styles.openIcon}`} />
                    <Image onClick={() => openMenu(menuVisibility)} src="/assets/close-btn.svg" alt="Fermer le menu" width="40" height="40" id="closeBtn" className={`${styles.burgerIcon} ${styles.none}`} />
                    <ul id="menuList" className={`${styles.list} ${styles.none}`}>
                        <li className={styles.li}><Link onClick={() => openMenu(menuVisibility)} href="/">accueil</Link></li>
                        <li className={styles.li}><Link onClick={() => openMenu(menuVisibility)} href="/services">mes services</Link></li>
                        <li className={styles.li}><Link onClick={() => openMenu(menuVisibility)} href="/avantages">vos avantages</Link></li>
                        <li className={styles.li}><Link onClick={() => openMenu(menuVisibility)} href="/contact">contact</Link></li>
                    </ul>
                </menu>
            </header>
        </React.Fragment>
    )
}