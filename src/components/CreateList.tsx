import { useEffect, useState } from "react"
import publicIcon from "../assets/icons/public.svg"
import privateIcon from "../assets/icons/private.svg"
import { ReactSVG } from "react-svg"

export default function CreateList() {
  const [listName, setListName] = useState("")
  const [listDescription, setListDescription] = useState("")
  const [privacySetting, setPrivacySetting] = useState("public")

  useEffect(() => {}, [])
  return (
    <form
      className="w-1/3 h-4/5 bg-blue-primary rounded-md flex flex-col p-5 dark:bg-dark-blue-primary"
      onSubmit={handleSubmit}
    >
      <h1 className="text-5xl font-bold text-light-grey text-center pb-10">Create new List!</h1>

      <label htmlFor="name_input" className="text-light-grey text-3xl">
        List Name:
      </label>
      <input
        type="text"
        id="name_input"
        onChange={(e) => setListName(e.target.value)}
        value={listName}
        required
        autoComplete="off"
        className=" h-10 text-xl w-full outline-none mb-10 text-blue-secondary rounded-md"
      />
      <label htmlFor="name_input" className="text-light-grey text-3xl">
        List Description:
      </label>
      <textarea
        id="description_input"
        onChange={(e) => setListDescription(e.target.value)}
        value={listDescription}
        required
        autoComplete="off"
        maxLength={250}
        className=" h-20 text-xl w-full outline-none mb-10 text-blue-secondary rounded-md break-words"
      />
      <div className="flex flex-row m-10">
        <img
          src={publicIcon}
          className={`w-20 h-20 ml-auto mr-5 cursor-pointer ${
            privacySetting === "public" ? "border-4 border-blue-secondary rounded-md" : ""
          }`}
          onClick={(e) => setPrivacySetting("public")}
          tabIndex={0}
        />
        <img
          src={privateIcon}
          className={`w-20 h-20 mr-auto ml-5 cursor-pointer ${
            privacySetting !== "public" ? "border-4 border-blue-secondary rounded-md" : ""
          }`}
          onClick={(e) => setPrivacySetting("private")}
          tabIndex={0}
        />
      </div>
      <h1 className="text-light-grey mx-auto text-2xl">{`${privacySetting[0].toUpperCase()}${privacySetting.slice(
        1
      )}`}</h1>
      <button
        type="submit"
        className="mb-4 mt-auto bg-blue-secondary text-light-grey h-14 text-4xl rounded-md"
      >
        Create List
      </button>
    </form>
  )

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
  }
}
