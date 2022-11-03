import { useEffect, useState } from "react"
import Card from "../components/Card"
import Hero from "../components/Hero"
import { getAdvocates } from "../services/axios"

const Home = () => {
  const [advocates, setAdvocates] = useState([])
  const [totalResults, setTotalResults] = useState()

  const fetchAdvocates = async () => {
    const { data } = await getAdvocates()
    setTotalResults(data.total)
    setAdvocates(data.advocates)
  }

  useEffect(() => {
    fetchAdvocates()
  }, [])

  const mappedCards = advocates && advocates.map((advocate)=> {
    return (
        <Card key={advocate.username} {...advocate} />
    )
  })

  return (
    <main>
      <Hero totalResults={totalResults}/>
      <div className="flex flex-wrap max-w-7xl m-auto mt-20">
      {mappedCards}
      </div>
    </main>
  )
}

export default Home