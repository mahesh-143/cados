import { useEffect, useState } from "react"
import Card from "../components/Card"
import Hero from "../components/Hero"
import Loading from "../components/Loading"
import { getAdvocates } from "../services/axios"
import ReactPaginate from "react-paginate"
import { Navigate, useNavigate } from "react-router-dom"

const Home = () => {
  const [advocates, setAdvocates] = useState([])
  const [totalResults, setTotalResults] = useState()
  const [currentPage, setCurrentPage] = useState(1)

  const navigate = useNavigate()

  const fetchAdvocates = async () => {
    const { data } = await getAdvocates(currentPage)
    setTotalResults(data.total)
    setCurrentPage(data.pagination.current_page)
    setAdvocates(data.advocates)
  }

  const pageCount = Math.ceil(totalResults / 20)

  const handlePageClick = (e) => {
    setCurrentPage(e.selected)
  }

  useEffect(() => {
    fetchAdvocates(currentPage)
    window.scrollTo(0, 0)
  }, [currentPage])

  const mappedCards =
    advocates &&
    advocates.map((advocate) => {
      return <Card key={advocate.username} {...advocate} />
    })

  return (
    <main>
      <Hero totalResults={totalResults} />
      {mappedCards.length == 0 ? (
        <Loading />
      ) : (
        <>
          <div className="grid justify-center sm:grid-cols-2 md:grid-cols-3 max-w-7xl m-auto mt-20">
            {mappedCards}
          </div>
          <ReactPaginate
            breakLabel="-"
            // marginPagesDisplayed=""
            nextLabel="next"
            previousLabel="previous"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            // renderOnZeroPageCount={null}
            className="flex items-center justify-center gap-4 dark:text-white max-w-7xl m-auto flex-wrap my-5"
            pageLinkClassName="w-[40px] h-[40px] hover:bg-accent hover:text-black dark:hover:bg-accent bg-white/50 dark:bg-black/50 backdrop-blur-[10px] rounded-[10px] flex items-center justify-center "
            activeLinkClassName="bg-accent dark:bg-accent text-black"
          />
        </>
      )}
    </main>
  )
}

export default Home
