import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/layouts/layout'
import Navbar from '../components/navbar.js'

const Register = () =>{
return (
    <>
    <Head>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>SpicyAmigos - Register</title>
    </Head>
  <Navbar />
      <Layout />
 
<section className="bg-white">
         <div className="max-w-full sm:max-w-3xl mx-auto h-screen flex items-center p-2">
              <form action="#" className="w-full sm:w-[450px] p-4 mx-auto flex flex-col bg-gray-200 rounded-md">
             <h1 className="font-bold p-2 my-4 text-center justify-center text-3xl">Create your account</h1>
                 <input type="email" placeholder="Email Address" name="email" className="px-3 py-2.5 mb-3 border-2 border-gray-800 rounded-md" required />
                  <input type="text" placeholder="Username" name="username" className="px-3 py-2.5 mb-3 border-2 border-gray-800 rounded-md" required />
                 <input type="password" placeholder="Enter Password" name="password1" className="px-3 py-2.5 my-2 border-2 border-gray-800 rounded-md" required />
                 <input type="password" placeholder="Confirm Password" name="password2" className="px-3 py-2.5 my-2 border-2 border-gray-800 rounded-md" required />
                 <button className="px-2 py-1.5 rounded-md bg-red-600 hover:bg-red-700 text-white mt-3" type="submit">Register</button>
             <p className="m-2 text-gray-800">Already have an account? Login{' '}
             <Link href="/login"><a className="text-red-600">here.</a></Link>
             </p>
              </form>
         </div>
    </section>
    </>
)
}

export default Register
