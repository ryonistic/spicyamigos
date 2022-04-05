import Link from 'next/link'
export default function Home() {
  return (
    <div>
        <h1 className="title">
  Read{' '}
  <Link href="/main/main">
    <a>this page!</a>
  </Link>
</h1>

        <ul>
            <li><Link href="/"><a>Home</a></Link></li>
            <li><Link href="/menu"><a>Menu</a></Link></li>
            <li><Link href="/"><a>Orders</a></Link></li>
            <li><Link href="/"><a>About Us</a></Link></li>
        </ul>
      </div>
  )}
