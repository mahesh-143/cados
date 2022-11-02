import { useEffect, useState } from "react"
import { Combobox } from "@headlessui/react"
import { getAdvocates } from "../services/axios"

const Searchbox = () => {
  const [advocates, setAdvocates] = useState([])
 
  const [query, setQuery] = useState("")

  const filteredAdvocates = query
    ? advocates.filter((advocate) => {
        return advocate.name.toLowerCase().includes(query.toLocaleLowerCase())
      })
    : []

    const fetchAdvocates = async () => {
      const { data } = await getAdvocates()
      console.log(data.advocates)
      setAdvocates(data.advocates)
    }

  useEffect(() => {
    fetchAdvocates()
  }, [])

  return (
    <Combobox
      as="div"
      onChange={(advocate) => {
        console.log(advocate)
      }}
      className="relative max-w-lg min-w-0 border bg-white dark:bg-card-dark border-black/5 dark:border-white/5 rounded-[10px] mx-4 divide-y "
    >
      <div className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 stroke-black/50 dark:stroke-white ml-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>

        <Combobox.Input
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search Advocates"
          className="w-full min-w-0 h-10 bg-white dark:bg-card-dark rounded-[10px] p-3 dark:placeholder:text-white/50 focus-visible:outline-0"
        />
      </div>
      {filteredAdvocates.length > 0 && (
        <Combobox.Options className="absolute border border-t-0 border-black/5 dark:border-white/5 rounded-b-[10px] bg-white dark:bg-card-dark py-2 max-h-56 w-full overflow-auto">
          {filteredAdvocates.map((advocate) => (
            <Combobox.Option key={advocate.username} value={advocate}>
              {({ active }) => (
                <div
                  className={`flex gap-1 p-2 ${
                    active
                      ? "bg-accent text-black"
                      : "bg-white dark:bg-card-dark"
                  }`}
                >
                  <span className=" font-medium ">{advocate.name}</span>
                  <span
                    className={` text-black/50 dark:text-white/50 ${
                      active && "dark:text-black/50"
                    }`}
                  >
                    @{advocate.username}
                  </span>
                </div>
              )}
            </Combobox.Option>
          ))}
        </Combobox.Options>
      )}
      {query && filteredAdvocates.length === 0 && (
        <p className="w-full p-2 text-black/50 dark:text-white/50 absolute bg-white dark:bg-card-dark border border-t-0 border-black/5 dark:border-white/5 rounded-b-[10px]">
          No Results Found
        </p>
      )}
    </Combobox>
  )
}

export default Searchbox
