import { useState, useEffect } from 'react'
import logo from '../assets/images/logo/logo.jpeg'
import './Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      closeMenu()
    }
  }

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo-container">
          <img src={logo} alt="T&R CarDetail Logo" className="logo" />
        </div>
        
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <a href="#services" onClick={() => scrollToSection('services')} className="nav-link">
            Diensten
          </a>
          <a href="#pricing" onClick={() => scrollToSection('pricing')} className="nav-link">
            Prijzen
          </a>
          <a href="#gallery" onClick={() => scrollToSection('gallery')} className="nav-link">
            Galerij
          </a>
          <a href="#booking" onClick={() => scrollToSection('booking')} className="nav-link">
            Contact
          </a>
          <a href="tel:+32123456789" className="nav-link phone-link">
            (123) 456-7890
          </a>
        </nav>

        <button 
          className={`hamburger ${isMenuOpen ? 'hamburger-open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}

export default Header
