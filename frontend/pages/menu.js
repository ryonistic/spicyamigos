import Head from 'next/head'
import Link from 'next/link'

export default function Menu(){
    return (
    <>
        <Head>
            <title>Menu</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Link href="/"><a>Back to Home</a></Link>{' '}
        <Link href="/main/main"><a>Main</a></Link>
    <h1>Hello, world!</h1>
      </>
        )
}
