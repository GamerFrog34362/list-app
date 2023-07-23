import { useEffect } from "react"
import CreateList from "./components/CreateList"

export default function App() {
  useEffect(() => {
    const theme = localStorage.getItem("theme") ?? "light"
    localStorage.setItem("theme", theme)

    if (theme === "light") {
      document.documentElement.classList.add("light")
    }

    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    }
  }, [])

  return (
    <div
      id="App"
      className="bg-gradient-radial from-pink-secondary to-pink-primary h-screen flex items-center justify-center dark:from-dark-pink-secondary dark:to-dark-pink-primary"
    >
      <CreateList></CreateList>
    </div>
  )
}
