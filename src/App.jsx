import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Navbar from './component/shared/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Services" element={<Services />} />
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
