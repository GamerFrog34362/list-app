import { useState } from "react"
import { CreateListModal } from "../features/CreateListModal"

export default function Home() {
  const [showModal, setShowModal] = useState(true)
  return (
    <div className="bg-gradient-radial from-pink-secondary to-pink-primary h-screen">
      <h1>Home</h1>
      <button onClick={() => setShowModal(true)}>show</button>
      <CreateListModal isVisable={showModal} onClose={() => setShowModal(false)} />
    </div>
  )
}
