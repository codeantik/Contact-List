import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../comps/Navbar'
import Footer from '../comps/Footer'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Contact List | Home</title>
        <meta name="keywords" content="contacts" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>This is the homepage of the contact-list web-site</p>
        <p className={styles.text}>The component is index.js</p>
        <Link href="/persons">
          <a className={styles.btn}>See Contacts </a>
        </Link>
      </div>
    </>
  )
}
