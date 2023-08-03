import { Routes, BrowserRouter as Router, Route } from "react-router-dom"

import Home from "./features/Home"
import List from "./features/List"
import Error from "./features/Error"
import NavagationBar from "./features/NavagationBar"
import Login from "./features/Login"

export default function App() {
  return (
    <div id="App" className="font-default">
      <Router>
        <NavagationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list/:id" element={<List />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  )
}
