import Link from 'next/link'
export default function Home(){
    return (
    <>
        <Link href="/"><a>Home</a></Link>{' '}
        <Link href="/main/main"><a>Main</a></Link>
    <h1>Hello, world!</h1>
      </>
        )
}
