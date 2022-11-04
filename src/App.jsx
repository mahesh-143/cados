import Header from "./components/Header"
import Home from "./pages/Home"
import Advocate from "./pages/Advocate"
import Footer from "./components/Footer"
import {Routes, Route} from "react-router-dom"
import NotFound from "./pages/NotFound"

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/advocate/:username" element={<Advocate />} />
        <Route path="*" element={<NotFound />}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
