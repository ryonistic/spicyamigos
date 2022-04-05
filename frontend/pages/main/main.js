import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'

export default function Main() {
  return( 
      <Layout>
         <Head>
            <title>Main</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
      <h1>First custom page</h1>
       <h2><Link href="/"><a>Home</a></Link></h2> 
          </Layout>
  )
}

