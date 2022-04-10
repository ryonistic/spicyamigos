import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/layouts/layout'
import Navbar from '../components/navbar.js'

export default function Blog() {
  return (
      <>
    <Head>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>SpicyAmigos - About Us</title>
    </Head>
          <Navbar />
      <Layout />
<div className="py-16 bg-white">  
  <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
      <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
        <div className="md:5/12 lg:w-5/12">
            <Image className="rounded relative rounded-7xl" src="/images/restaurant.jpg" alt="Picture of food" width={700}
      height={500} loading="lazy" />
        </div>
        <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 line-h-2 text-h-2 p-2 font-bold md:text-4xl">At SpicyAmigos, we are bent on making the finest Mexican food we can.</h2>
          <p className="mt-6 text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!</p>
          <p className="mt-4 text-gray-600"> Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at? Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.</p>
        </div>
      </div>
  </div>
</div>
      </>
  )
}
