import { useState } from "react"
import { Combobox } from "@headlessui/react"

const advocates = [
  {
    profile_pic:
      "https://dennisivy-personal.s3.amazonaws.com/shanselman-cado.jpg",
    profile_pic_stored:
      "https://dennisivy-personal.s3.amazonaws.com/default.png",
    username: "shanselman",
    name: "Scott Hanselman",
    bio: "Code, OSS, STEM, Beyoncé, 🏴󠁧󠁢󠁳󠁣󠁴󠁿🇿🇼#T1D,@Hanselminutes inclusive tech podcast! MSFT Developer Division Community #DevRel🐹🌮YouTube+TikTok My opinions",
    twitter: "https://twitter.com/shanselman",
    companies: [],
    follower_count: 308953,
  },
  {
    profile_pic:
      "https://dennisivy-personal.s3.amazonaws.com/prathkum-cado.jpg",
    profile_pic_stored:
      "https://dennisivy-personal.s3.amazonaws.com/default.png",
    username: "prathkum",
    name: "Pratham",
    bio: "Intending to significantly influence the web development industry • ex DevRel @Rapid_API • Building @MentorWebDev • https://t.co/YZzwEtTxyJ",
    twitter: "https://twitter.com/prathkum",
    companies: [],
    follower_count: 300545,
  },
  {
    profile_pic:
      "https://dennisivy-personal.s3.amazonaws.com/francescociull4-cado.jpg",
    profile_pic_stored:
      "https://dennisivy-personal.s3.amazonaws.com/default.png",
    username: "francescociull4",
    name: "Francesco - francescociulla.lens",
    bio: "I will help you to learn Web3 & DevOps → Building a 1M Community 17% → Docker Captain → @dailydotdev🥑 → Public Speaker → 4C Community builder @4ccommunityhq",
    twitter: "https://twitter.com/francescociull4",
    companies: [2],
    follower_count: 135825,
  },
  {
    profile_pic:
      "https://dennisivy-personal.s3.amazonaws.com/kunalstwt-cado.jpg",
    profile_pic_stored:
      "https://dennisivy-personal.s3.amazonaws.com/default.png",
    username: "kunalstwt",
    name: "Kunal Kushwaha",
    bio: "🥑 @CivoCloud 🎬 YouTube (300k) ✨ Founder @kubeworld @commclassroom ⭐️ GitHub Star ☁️ CNCF Ambassador 🎙 TEDx Speaker",
    twitter: "https://twitter.com/kunalstwt",
    companies: [],
    follower_count: 133264,
  },
]

const Searchbox = () => {
  const [selectedAdvocate, setSelectedAdvocate] = useState(advocates[0])
  const [query, setQuery] = useState("")

  const handleChange = (e) => {
    setSelectedAdvocate(e.target.value)
  }

  const filteredAdvocates = query
    ? advocates.filter((advocate) => {
        return advocate.name.toLowerCase().includes(query.toLocaleLowerCase())
      })
    : []

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
        <Combobox.Options className="absolute border border-t-0 border-black/5 dark:border-white/5 rounded-b-[10px] bg-white dark:bg-card-dark py-2 max-h-50 w-full overflow-auto">
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
