import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/layouts/layout'
import Navbar from '../components/navbar.js'

const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`
}

function Blog({ posts }) {
   return (

      <div className="bg-gray-100 m-0 p-0">
    <Head>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>SpicyAmigos - Blog</title>
    </Head>
  <Navbar />
      <Layout />
<div className="py-16 bg-white">  
  <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
      <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
        <div className="md:5/12 lg:w-5/12">
            <Image className="rounded relative rounded-7xl" src="/images/restaurant.jpg" alt="Picture of the restaurant" width={700}
      height={500} loading="lazy" />
        </div>
        <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 line-h-2 text-h-2 p-2 font-bold md:text-4xl">SpicyAmigos is reaching its fifth anniversary!</h2>
            <p className="mt-2 ml-2 text-gray-800"> On the 23rd of this month, every item will be 25% off!</p>
          <p className="mt-6 text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!</p>
          <p className="mt-4 text-gray-600"> Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at? Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.</p>
        </div>
      </div>
  </div>
</div>
 
      <div className="container-fluid bg-gray-100 p-2 m-0 grid w-full h-full">
      {posts.map((post) => (
          <div className="h-full m-2 p-2" key={post.id}>
    <div className="rounded bg-white p-6 shadow-lg m-4">
      <div className="px-2 py-2">
 
          <div className="font-bold text-4xl mb-2 justify-center"><h1 className="text-center">{post.title} </h1></div>
       <div className="px-6 pt-4 pb-2">
        <span className="  inline-block bg-gray-100 rounded px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">by {post.author} on {post.date_posted}</span>
      </div>

          <div className="grid grid-cols-3 gap-4">
              
          <div className="col-span-2 p-1 m-1">
        <p className="flex flex-wrap text-gray-700 text-base h-full">{post.content}
        </p>
            </div>
              <div className="col-span-1">
        <Image 
            loader={myLoader}
            src={post.image}
            className="rounded"
            alt="Picture of the item"
            width={500}
            height={400}
            />
</div>
</div>
      </div>
   </div>
      </div>
      ))}

          </div>

      </div>
  )
}

// This gets called on every request
 export async function getStaticProps() {
  // Fetch data from external API
  const res = await fetch('http://127.0.0.1:8000/api_system/blog/')
  const posts = await res.json()

// Pass data to the page via props
  return { props: { posts, }, }
}

export default Blog
