import { useParams } from "react-router"

export function List() {
  const { id } = useParams()
  return (
    <div>
      <h1>{id}</h1>
    </div>
  )
}
