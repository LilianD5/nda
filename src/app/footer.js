import React from "react"
import styles from "../../public/css/footer.module.css"
import Image from "next/image"
import Link from "next/link"

export default function FooterLayout() {
    return (
        <React.Fragment>
            <footer className={styles.footer}>
                <div className={styles.rowLimitSize}>
                    <div className={styles.top}>
                        <div className={styles.leftPart}>
                            <div className={styles.contactWrapper}>
                                <img src="/assets/phone-icon.svg" alt="Logo téléphone" className={styles.logo} />
                                <p className={styles.contact}>06 21 63 59 29</p>
                            </div>
                            <div className={styles.contactWrapper}>
                                <img src="/assets/email-icon.svg" alt="Logo e-mail" className={styles.logo} />
                                <p className={styles.contact}>contact@nathaliediaz-assistante.fr</p>
                            </div>
                        </div>
                        <div className={styles.rightPart}>
                            <p>assistante administrative et commerciale indépendante</p>
                            <img className={styles.files} src="/assets/files-icon.svg" alt="Logo de fichiers" />
                        </div>
                    </div>
                    <div className={styles.bottom}>
                        <Link href="/mentions-legales">mentions légales</Link>
                        <Link href="/confidentialite">politique de confidentialité</Link>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    )
}