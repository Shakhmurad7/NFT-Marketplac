import { Route, Routes } from "react-router"
import Home from "./pages/Home/home"
import About from "./pages/About/about"
import Connect from "./pages/Connect/connect"

function App() {


  return (
   <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/connect" element={<Connect/>} />
    </Routes>
   </>
  )
}

export default App
