import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/layouts/layout'
import Navbar from '../components/navbar.js'
import ItemsList from '../components/items_list'
import Banner from '../components/banner'


const Orders = () => {
return (
      <>
    <Head>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>SpicyAmigos - Orders</title>
    </Head>
          <Navbar />

          <div className="place-items-center justify-center p-2 m-2">
                <h1 className="font-bold text-4xl text-center">Orders</h1>
          </div>
      </>
)
}
export default Orders
