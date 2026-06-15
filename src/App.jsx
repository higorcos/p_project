import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Videos from './pages/Videos'
import Cronicas from './pages/Cronicas'
import CronicaDetalhe from './pages/CronicaDetalhe'
import Galeria from './pages/Galeria'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-terra-700 text-terra-50 font-sans">
        <Navbar />
        <main>
          <Routes>
            <Route path="/"                   element={<Home />} />
            <Route path="/videos"             element={<Videos />} />
            <Route path="/cronicas"           element={<Cronicas />} />
            <Route path="/cronicas/:slug"     element={<CronicaDetalhe />} />
            <Route path="/galeria"            element={<Galeria />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
