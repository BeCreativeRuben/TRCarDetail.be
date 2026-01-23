import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import logo from '../assets/images/logo/logo.jpeg'
import './Footer.css'

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <img src={logo} alt="T&R CarDetail Logo" className="footer-logo" />
          <p className="footer-description">
            Premium auto detailing service gewijd aan het herstellen en beschermen van de schoonheid van uw voertuig.
          </p>
          <div className="social-links">
            <a href="#" aria-label="Facebook" className="social-link">
              <FaFacebook />
            </a>
            <a href="#" aria-label="Instagram" className="social-link">
              <FaInstagram />
            </a>
            <a href="#" aria-label="Twitter" className="social-link">
              <FaTwitter />
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Snelle Links</h3>
          <ul className="footer-links">
            <li>
              <a href="#services" onClick={() => scrollToSection('services')}>
                Diensten
              </a>
            </li>
            <li>
              <a href="#pricing" onClick={() => scrollToSection('pricing')}>
                Prijzen
              </a>
            </li>
            <li>
              <a href="#gallery" onClick={() => scrollToSection('gallery')}>
                Galerij
              </a>
            </li>
            <li>
              <a href="#booking" onClick={() => scrollToSection('booking')}>
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Contact</h3>
          <ul className="footer-contact">
            <li>123 Hoofdstraat, Stad, 12345</li>
            <li>
              <a href="tel:+32123456789">(123) 456-7890</a>
            </li>
            <li>
              <a href="mailto:info@trcardetail.be">info@trcardetail.be</a>
            </li>
            <li>Maandag - Vrijdag: 9:00 - 18:00</li>
            <li>Zaterdag: 10:00 - 16:00</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 T&R CarDetail. Alle rechten voorbehouden.</p>
      </div>
    </footer>
  )
}

export default Footer
