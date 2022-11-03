import { useParams } from "react-router-dom"
const Advocate = () => {
    let { username } = useParams()
  return (
    <div className="text-5xl">{username}</div>
  )
}

export default Advocate