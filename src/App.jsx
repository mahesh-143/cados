import Header from "./components/Header"
import Home from "./pages/Home"
import Advocate from "./pages/Advocate"
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/advocate/:username" element={<Advocate />} />
      </Routes>
      
    </div>
  )
}

export default App
