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
    <title>SpicyAmigos - Home</title>
    </Head>
  <Navbar />
      <Layout />
      <div className="container-fluid bg-gray-100 p-2 m-0 grid w-full h-full">
      {posts.map((post) => (
          <div className="h-full m-2 p-2" key={post.id}>
    <div className="rounded bg-white p-6 shadow-lg m-4">
      <div className="px-2 py-2">
 
          <div className="font-bold text-4xl mb-2 justify-center"><h1 className="text-center">{post.title} </h1></div>
       <div className="px-6 pt-4 pb-2">
        <span className="  inline-block bg-gray-100 rounded px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">by {post.author} on {post.date_posted}</span>
      </div>
          <div className="flex flex-wrap p-1 m-1">
        <p className="text-gray-700 text-base h-full">{post.content}
        </p>
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
