import Link from 'next/link'

export default function Navbar(){
return (
        <div className="bg-red-600 text-white justify-around align-center">
            <ul className="nav navbar flex flex-wrap justify-center p-2">
                <li className="items-center text-white p-2 m-2">
                    <Link href="../">
                <a>Home</a>
                    </Link></li>
                <li className="items-center text-white p-2 m-2">
                    <Link href="../services">
                <a>Services</a>
                    </Link></li>
                <li className="items-center text-white p-2 m-2">Contact</li>
                <li className="items-center text-white p-2 m-2">About</li>
            </ul>
        </div>
)
}
