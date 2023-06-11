import React from 'react'
import styles from './page.module.css'
import Link from "next/link"

export default function Home() {
  return (
    <React.Fragment>
      <div className={styles.contentWrapper}>
        <h2 className={styles.title}>Nathalie Diaz</h2>
        <h1 className={styles.title}>Assistante Administrative et Commerciale Indépendante</h1>
        <div className={styles.top}>
          <p className={styles.text}>Pas les moyens d’avoir une assistante salariée ? Vous avez des besoins ponctuels ? Vous êtes submergés de papiers et vous n’arrivez plus à gérer ?</p>
          <p className={styles.text}>Libérez-vous de vos contraintes administratives et faites appel à une assistante externalisée avec plus de 30 années d’expériences !</p>
          <Button title="Découvrez mes services" href="/services"/>
        </div>
        <div className={styles.bottom}>
          <p className={styles.text}>Vous hésitez encore à sauter le pas ? Vous ne voyez pas l’intérêt ? Découvrez tous les avantages à faire appel à une assistante indépendante !</p>
          <Button title="Découvrez vos avantages" href="/avantages"/>
        </div>
      </div>
      
    </React.Fragment>
  )
}

function Button(props) {
    return (
        <React.Fragment>
            <button className={styles.btn}><Link href={props.href}>{props.title}</Link></button>
        </React.Fragment>
    )
}
