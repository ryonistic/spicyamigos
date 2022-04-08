import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/layouts/layout'
import Navbar from '../components/navbar.js'

export default function Services() {
  return (
      <>
    <Head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>SpicyAmigos - Services</title>
    </Head>
 
          <Navbar />
      <Layout />
        <div><h1 className="font-bold text-2xl">Services Page</h1></div>
      </>
  )
}
