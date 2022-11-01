import ThemeToggle from "./ThemeToggle"
import Searchbox from "./Searchbox"
const Header = () => {
  return (
    <header className="flex items-center justify-between bg-white/50 text-black dark:bg-black/50 dark:text-white backdrop-blur-[10px] h-16 w-full">
      <h1 className=" font-bold text-3xl font-montserrat ">Cados.</h1>
      <Searchbox />
      <ThemeToggle />
    </header>
  )
}

export default Header
