import { Link } from "react-router-dom"
import { useContext, useEffect } from "react"
import { Context } from "../../../Contexts/UserContext"
export default function Account() {
  const { user } = useContext(Context) as any

  return (
    <Link className="ml-auto mr-5" to="/login">
      {user ? (
        <img
          src={user.picture}
          alt="profile picture"
          className="w-[4rem] h-[4rem] rounded-full hover:outline outline-2 outline-blue-secondary"
        />
      ) : (
        <h1 className="text-blue-secondary text-xl border-blue-secondary border-2 p-2 rounded-md">
          Sign In
        </h1>
      )}
    </Link>
  )
}
