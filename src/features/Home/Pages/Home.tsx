import { useContext, useState } from "react"
import CreateListModal from "../../CreateListModal"
import { Context } from "../../../Contexts/UserContext"

export function Home() {
  const [userLists, setUserLists] = useState([])
  const [isShowing, setIsShowing] = useState(false)

  const user = useContext(Context)
  return (
    <div className="bg-gradient-radial from-pink-secondary to-pink-primary h-screen flex justify-center">
      <div className=" w-[90%] h-[50%] mt-10">
        <h1 className="text-light-grey  text-xl inline-block ">Your Lists: </h1>
        <button
          className="text-light-grey text-xl float-right hover:bg-pink-secondary rounded-md "
          onClick={() => setIsShowing(true)}
        >
          Create New List
        </button>
        <div className="border-light-grey border-4 rounded-md h-full w-full">
          {userLists.map((info) => {
            return <h1>{info}</h1>
          })}
        </div>
      </div>
      <CreateListModal isVisable={isShowing} onClose={() => setIsShowing(false)} />
    </div>
  )
}
