import Navbar from '../components/navbar'

const Register = () => {
return (
    <>
    <Navbar/>
    <div className="grid p-2 m-2 col-span-2 place-items-center">
        <h1 className="text-center font-bold text-3xl">REGISTER HERE</h1>
        <form action="" method="POST" className="grid p-1 m-1">
            <input type="text" name="username" className="border-red-600 border border-2 m-2 rounded p-2" placeholder="Enter Username" required />
            <input type="password" name="password" className="border-red-600 border border-2 m-2 rounded p-2" placeholder="Enter Password" required />
            <button type="submit" className="bg-red-600 font-bold text-white p-2 rounded m-2">Register</button>
        </form>
    </div>
    </>
)
}

export default Register
