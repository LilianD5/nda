import React from "react"
import Link from "next/link"
import Image from "next/image"

export default function HeaderLayout() {
    return (
        <React.Fragment>
            <header>
                <menu>
                    <Image src="/NDA.png" alt="Nda" width="64" height="64" />
                    <ul>
                        <Link href="/">accueil</Link>
                        <Link href="/services">mes services</Link>
                        <Link href="/avantages">vos avantages</Link>
                        <Link href="/contact">contact</Link>
                    </ul>
                </menu>
            </header>
        </React.Fragment>
    )
}