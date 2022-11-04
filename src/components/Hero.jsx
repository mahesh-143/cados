import React from "react"

const Hero = (props) => {

  return (
    <div className=" max-w-screen-lg m-auto flex flex-col items-center gap-6 mt-20 px-4">
    <h1 className=" font-medium text-4xl md:text-5xl max-w-[46.25rem] leading-[3rem] md:leading-[4.5rem] text-center dark:text-white">Meet & Collab With <span className="bg-accent text-black">Advocate</span> from Different Companies</h1>
    <p className=" text-lg max-w-md text-center text-black/50 dark:text-white/50">{props.totalResults} developer advocates found by @dennisivy's webscraper and the TwitterAPI.</p>
    </div>
  )
}

export default Hero
