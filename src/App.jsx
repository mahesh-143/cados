import Header from "./components/Header"
import Home from "./pages/Home"
import Advocate from "./pages/Advocate"
import Footer from "./components/Footer"
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/advocate/:username" element={<Advocate />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
