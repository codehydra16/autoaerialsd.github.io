import { useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Portfolio from './components/Portfolio'
import Shows from './components/Shows'
import Pricing from './components/Pricing'
import Footer from './components/Footer'
import BookingModal from './components/BookingForm'

export default function App() {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalPackage, setModalPackage] = useState('')

  function openModal(pkg = '') {
    setModalPackage(pkg)
    setModalOpen(true)
  }

  return (
    <div className="bg-black text-cream font-barlow font-light overflow-x-hidden" style={{ cursor: 'crosshair' }}>
      <Nav onBook={() => openModal()} />
      <Hero />
      <HowItWorks />
      <Portfolio />
      <Shows onBook={() => openModal()} />
      <Pricing onBook={(pkg) => openModal(pkg)} />
      <Footer onBook={() => openModal()} />
      <BookingModal
        isOpen={modalOpen}
        defaultPackage={modalPackage}
        onClose={() => setModalOpen(false)}
      />
    </div>
  )
}
