import React from "react"
import Logo from "./Logo"

const Footer = () => {
  return (
    <div className="w-full h-24 bg-white/50 dark:bg-black/50 dark:text-white backdrop-blur-[10px] mt-10 ">
      <footer className="flex justify-between items-center gap-4 h-full max-w-7xl m-auto px-4">
        <Logo />
        <p className="text-black/50 dark:text-white/50">© 2022 Cados.dev, all rights reserved.</p>
        <a href="https://cados.up.railway.app/advocates" className="dark:text-white">Get User Data</a>
      </footer>
    </div>
  )
}

export default Footer
