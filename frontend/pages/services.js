import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/layouts/layout'
import Navbar from '../components/navbar.js'

export default function Services() {
  return (
      <>
          <Navbar />
      <Layout />
        <div><h1 className="font-bold text-2xl">Services Page</h1></div>
      </>
  )
}
