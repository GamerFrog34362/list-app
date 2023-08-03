import { ReactSVG } from "react-svg"
import googleIcon from "../assets/google.svg"
import axios from "axios"
import { useNavigate } from "react-router"

export function Login() {
  const navagate = useNavigate()
  return (
    <div className="w-screen h-screen bg-pink-primary flex items-center justify-center flex-col">
      <h1 className="text-white text-3xl">Login</h1>
      <div className="w-2/5 h-3/5 bg-light-grey rounded-md flex flex-col items-center justify-center">
        <button
          className="bg-pink-primary p-3 text-white text-xl flex items-center rounded-md m-3"
          onClick={handleLogin}
        >
          <ReactSVG src={googleIcon} className="mr-5" />
          Login with Google
        </button>
        <button
          className="bg-pink-primary p-3 text-white text-xl flex items-center rounded-md"
          onClick={handleLogout}
        >
          Log out
        </button>
      </div>
    </div>
  )

  function handleLogin() {
    window.open("/api/auth/google", "_self")
  }

  async function handleLogout() {
    const response = await axios.get("/api/auth/logout", { withCredentials: true })
    navagate("/")
  }
}
