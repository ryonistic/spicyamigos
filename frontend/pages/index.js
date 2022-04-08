import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/layouts/layout'
import Navbar from '../components/navbar.js'
import ItemsList from '../components/items_list'
import Banner from '../components/banner'

const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`
}

function Home({ items }) {
   return (
      <>
  <Navbar />
      <Layout />
          <Banner />
          <ItemsList />

      <div className="container-fluid p-2 m-2 flex flex-wrap">
      {items.map((item) => (
          <div key={item.id}>
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
        <Image 
      loader={myLoader}
      src={item.image}
      alt="Picture of the author"
      width={500}
      height={400}
    />
      <div className="px-6 py-4">
 
        <div className="font-bold text-xl mb-2"> {item.name} </div>
        <p className="text-gray-700 text-base">{item.description}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{item.tags}</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">${item.price}</span>
      </div>
    </div>
      </div>
      ))}

          </div>
      </>
  )
}

// This gets called on every request
 export async function getStaticProps() {
  // Fetch data from external API
  const res = await fetch('http://127.0.0.1:8000/api/v1/')
  const items = await res.json()

// Pass data to the page via props
  return { props: { items, }, }
}

export default Home
