import styles from '../../public/css/page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
      <div><Link href="/avantages">avantages</Link></div>
      <div><Link href="/services">services</Link></div>
      <div><Link href="/contact">contact</Link></div>
    </main>
  )
}
