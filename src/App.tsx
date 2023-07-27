import { useEffect } from "react"

import { Routes, BrowserRouter as Router, Route } from "react-router-dom"
import NavagationBar from "./features/NavagationBar"
import Home from "./pages/Home"

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
    <div id="App">
      <Router>
        <NavagationBar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  )
}
