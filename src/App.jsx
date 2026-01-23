import { useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Services from './components/Services'
import Pricing from './components/Pricing'
import Gallery from './components/Gallery'
import Stats from './components/Stats'
import Booking from './components/Booking'
import { initScrollAnimations } from './utils/scrollAnimation'

function App() {
  useEffect(() => {
    // Ensure body and html can scroll
    const body = document.body
    const html = document.documentElement
    
    // Remove any inline styles that might block scrolling
    body.style.overflow = ''
    body.style.height = ''
    html.style.overflow = ''
    html.style.height = ''
    
    // Initialize scroll animations
    setTimeout(() => {
      initScrollAnimations()
    }, 100)
  }, [])

  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Services />
        <Pricing />
        <Gallery />
        <Stats />
        <Booking />
      </main>
      <Footer />
    </div>
  )
}

export default App
