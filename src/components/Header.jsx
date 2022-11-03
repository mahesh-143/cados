import Logo from "./Logo"
import Searchbox from "./Searchbox"
import ThemeToggle from "./ThemeToggle"

const Header = () => {
  return (
    <header className=" bg-white/50 text-black dark:bg-black/50 dark:text-white backdrop-blur-[10px] h-16 w-full  sticky top-0 z-50">
      <div className="flex items-center justify-between max-w-7xl m-auto px-4 h-full">
      <Logo />
      <Searchbox />
      <ThemeToggle />
      </div>
    </header>
  )
}

export default Header
