import heroBg from '../assets/images/gallery/auto1.jpg'
import './Hero.css'

const Hero = () => {
  const scrollToBooking = () => {
    const element = document.getElementById('booking')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="hero" id="home">
      <div className="hero-background" style={{ backgroundImage: `url(${heroBg})` }}></div>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">Premium Auto Detailing</h1>
        <p className="hero-subtitle">
          Professionele auto detailing service binnen handbereik. We maken elke auto glanzen als nieuw.
        </p>
        <button className="btn hero-cta" onClick={scrollToBooking}>
          Boek Uw Afspraak
        </button>
      </div>
      <div className="scroll-indicator">
        <span></span>
      </div>
    </section>
  )
}

export default Hero
