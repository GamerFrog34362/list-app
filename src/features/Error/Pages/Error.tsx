import { Link } from "react-router-dom"

export function Error() {
  return (
    <div className="bg-pink-primary h-screen flex justify-center">
      <div className="flex flex-col">
        <h1 className="text-5xl  text-light-grey mt-20">Sorry, page not found!</h1>

        <Link
          to="/"
          className="text-2xl bg-blue-primary hover:bg-blue-secondary rounded-md p-2 text-light-grey w-fit mx-auto mt-5 "
        >
          Return to home
        </Link>
      </div>
    </div>
  )
}
