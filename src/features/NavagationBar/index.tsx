import { Link } from "react-router-dom"
import { ReactSVG } from "react-svg"
import list_icon from "./assets/list_icon.svg"

export default function NavagationBar() {
  return (
    <div className="bg-yellow-primary h-[5rem] flex items-center p-3">
      <Link to="/" className="m-2 flex items-center">
        <>
          <ReactSVG src={list_icon} className="w-[4.5rem] fill-pink-primary " />
          <h1 className="text-3xl font text-pink-primary">Collabrolist</h1>
        </>
      </Link>
    </div>
  )
}
