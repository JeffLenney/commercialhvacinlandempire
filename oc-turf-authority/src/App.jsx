import { BrowserRouter, Routes, Route, ScrollRestoration } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import HeatTech from './pages/HeatTech'
import PetSystem from './pages/PetSystem'
import ROI from './pages/ROI'
import Gallery from './pages/Gallery'
import Assessment from './pages/Assessment'

function ScrollToTop() {
  // BrowserRouter doesn't have ScrollRestoration; handle manually
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-white font-sans">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/heat-tech" element={<HeatTech />} />
            <Route path="/pet-system" element={<PetSystem />} />
            <Route path="/roi-rebates" element={<ROI />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/assessment" element={<Assessment />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
