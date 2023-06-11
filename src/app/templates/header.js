'use client';

import React from "react"
import Link from "next/link"
import Image from "next/image"
import styles from '../../../public/css/header.module.css'

export default function HeaderLayout() {

    const [menuVisibility, setMenuVisibility] = React.useState('hidden')

    const toggleMenu = function (state) {
        const ul = document.getElementById('menuList')
        const closeBtn = document.getElementById('closeBtn')
        const openBtn = document.getElementById('openBtn')
        // console.log(ul)
    
        if (state === 'hidden') {
            setMenuVisibility('show')
            ul.classList.remove('header_listNone__TVmZC')
            closeBtn.classList.remove('header_closeIcon__dngel')
            openBtn.classList.add('header_none__40BOr')
            // console.log(ul)
            // console.log(menuVisibility)
        } else {
            ul.classList.add('header_listNone__TVmZC')
            closeBtn.classList.add('header_closeIcon__dngel')
            openBtn.classList.remove('header_none__40BOr')
            setMenuVisibility('hidden')
            // console.log(ul)
            // console.log(menuVisibility)
        }
    }

    const closeMenu = function (state) {
        const ul = document.getElementById('menuList')
        const closeBtn = document.getElementById('closeBtn')
        const openBtn = document.getElementById('openBtn')
        // console.log(ul)
    
        if (state === 'show') {
            ul.classList.add('header_listNone__TVmZC')
            closeBtn.classList.add('header_closeIcon__dngel')
            openBtn.classList.remove('header_none__40BOr')
            setMenuVisibility('hidden')
            // console.log(ul)
            // console.log(menuVisibility)
        }
    }

    React.useEffect(() => {
        const closeBtn = document.getElementById('closeBtn')
        function hideBtnOnResize() {
            if (window.innerWidth >= 650) {
                closeBtn.classList.add('header_closeIcon__dngel')
            }
        }
        window.addEventListener('resize', hideBtnOnResize)
    })

    return (
        <React.Fragment>
            <header className={styles.headerWrapper}>
                <menu className={`${styles.menu} ${styles.rowLimitSize}`}>
                    <Link href="/"><Image src="/assets/logo-white.png" alt="Logo" width="64" height="64" className={styles.logo} /></Link>
                    <Image onClick={() => toggleMenu(menuVisibility)} src="/assets/open-btn.svg" alt="Ouvrir le menu" width="40" height="40" id="openBtn" className={`${styles.burgerIcon} ${styles.openIcon}`} />
                    <Image onClick={() => toggleMenu(menuVisibility)} src="/assets/close-btn.svg" alt="Fermer le menu" width="40" height="40" id="closeBtn" className={`${styles.burgerIcon} ${styles.closeIcon}`} />
                    <ul id="menuList" className={`${styles.list} ${styles.listNone}`}>
                        <li className={styles.li}><Link onClick={() => closeMenu(menuVisibility)} href="/">accueil</Link></li>
                        <li className={styles.li}><Link onClick={() => closeMenu(menuVisibility)} href="/services">mes services</Link></li>
                        <li className={styles.li}><Link onClick={() => closeMenu(menuVisibility)} href="/avantages">vos avantages</Link></li>
                        <li className={styles.li}><Link onClick={() => closeMenu(menuVisibility)} href="/contact">contact</Link></li>
                    </ul>
                </menu>
            </header>
        </React.Fragment>
    )
}