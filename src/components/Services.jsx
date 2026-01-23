import { useState } from 'react'
import './Services.css'

const Services = () => {
  const [activeTab, setActiveTab] = useState('interieur')

  const services = {
    interieur: {
      title: 'Interieur',
      price: '€110',
      description: 'Diepe reiniging en verjonging van uw auto interieur met onze deskundige aanraking.',
      image: 'interior',
      features: [
        'Matten en intrieur stofzuigen + zetels',
        'Stuur, dashbord, ventilatie roosters',
        'Scherm, middenconsole',
        'Binnedeuren, binnelijsten',
        'Reiniging met APC cleaner'
      ],
      details: 'Complete interieur reiniging inclusief stofzuigen van matten en zetels, grondige reiniging van alle oppervlakken met APC cleaner, en aandacht voor elk detail.'
    },
    exterieur: {
      title: 'Exterieur',
      price: '€90',
      description: 'Herstel de glans en bescherming van uw auto exterieur naar de oorspronkelijke staat.',
      image: 'exterior',
      features: [
        'Wielen met iron remover inspuiten',
        'Wielen inspuiten met foam en poetsen (VELGEN ALTIJD EERST)',
        'Prewash',
        'Snowfoam',
        'Contact wash',
        'Wax',
        'Vlekvrij drogen'
      ],
      details: 'Professionele exterieur reiniging met speciale aandacht voor wielen, gevolgd door prewash, snowfoam behandeling, contact wash, wax applicatie en vlekvrij drogen.'
    },
    combined: {
      title: 'Interieur + Exterieur',
      price: '€180',
      description: 'Complete auto detailing service voor zowel interieur als exterieur.',
      image: 'combined',
      features: [
        'Alle interieur services',
        'Alle exterieur services',
        'Complete auto reiniging',
        'Professionele afwerking',
        'Tijdsbesparing'
      ],
      details: 'Onze meest complete service die zowel interieur als exterieur detailing combineert voor een volledig gereinigde en beschermde auto.'
    }
  }

  const currentService = services[activeTab]

  return (
    <section className="services" id="services">
      <h2 className="section-title">Onze Diensten</h2>
      <p className="section-subtitle">
        Ervaar het verschil met onze professionele auto detailing diensten.
      </p>

      <div className="services-tabs">
        <button
          className={`tab-button ${activeTab === 'interieur' ? 'active' : ''}`}
          onClick={() => setActiveTab('interieur')}
        >
          Interieur
        </button>
        <button
          className={`tab-button ${activeTab === 'exterieur' ? 'active' : ''}`}
          onClick={() => setActiveTab('exterieur')}
        >
          Exterieur
        </button>
        <button
          className={`tab-button ${activeTab === 'combined' ? 'active' : ''}`}
          onClick={() => setActiveTab('combined')}
        >
          Interieur + Exterieur
        </button>
      </div>

      <div className="service-content">
        <div className="service-image">
          <div className="service-image-placeholder">
            <span className="service-icon">🚗</span>
          </div>
        </div>
        <div className="service-details">
          <div className="service-header">
            <h3 className="service-title">{currentService.title}</h3>
            <span className="service-price">{currentService.price}</span>
          </div>
          <p className="service-description">{currentService.description}</p>
          <p className="service-details-text">{currentService.details}</p>
          <ul className="service-features">
            {currentService.features.map((feature, index) => (
              <li key={index} className="service-feature">
                <span className="feature-icon">✓</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Services
