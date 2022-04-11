import Navbar from '../components/navbar'
import axios from "axios";
import {useRouter} from 'next/router'

const login_handler = async ({username, password}) => {
    let router = useRouter()
    let token = await axios.post('http://127.0.0.1:8000/api/v1/dj-rest-auth/login/', {
      username : username,
      password: password
    }).then(r => r.data.token).catch(function (error) { console.log(error) })

      if (token) {
        router.push({
            pathname: '/',
            query: { token: token },
          })
        }
      }

const Login = () => {
return (
    <>
    <Navbar/>
    <div className="grid p-2 m-2 col-span-2 place-items-center">
        <h1 className="text-center font-bold text-3xl">LOGIN HERE</h1>
        <form action="" onSubmit={login_handler} method="POST" className="grid p-1 m-1">
            <input type="text" name="username" className="border-red-600 border m-2 rounded p-2" placeholder="Enter Username" required />
            <input type="password" name="password" className="border-red-600 border m-2 rounded p-2" placeholder="Enter Password" required />
            <button type="submit" className="bg-red-600 font-bold text-white p-2 rounded m-2">Login</button>
        </form>
    </div>
    </>
)
}

export default Login
