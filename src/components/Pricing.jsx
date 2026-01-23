import './Pricing.css'

const Pricing = () => {
  const scrollToBooking = () => {
    const element = document.getElementById('booking')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const packages = [
    {
      name: 'Interieur',
      price: '€110',
      duration: '2 uur',
      popular: false,
      features: [
        'Matten en intrieur stofzuigen + zetels',
        'Stuur, dashbord, ventilatie roosters',
        'Scherm, middenconsole',
        'Binnedeuren, binnelijsten',
        'Reiniging met APC cleaner'
      ]
    },
    {
      name: 'Interieur + Exterieur',
      price: '€180',
      duration: '4 uur',
      popular: true,
      features: [
        'Alle interieur services',
        'Wielen met iron remover',
        'Wielen foam en poetsen',
        'Prewash, Snowfoam, Contact wash',
        'Wax applicatie',
        'Vlekvrij drogen',
        'Complete auto reiniging'
      ]
    },
    {
      name: 'Exterieur',
      price: '€90',
      duration: '2 uur',
      popular: false,
      features: [
        'Wielen met iron remover inspuiten',
        'Wielen inspuiten met foam en poetsen',
        'Prewash',
        'Snowfoam',
        'Contact wash',
        'Wax',
        'Vlekvrij drogen'
      ]
    }
  ]

  return (
    <section className="pricing" id="pricing">
      <h2 className="section-title">Prijspakketten</h2>
      <p className="section-subtitle">
        Kies het perfecte pakket dat past bij de behoeften van uw auto.
      </p>

      <div className="pricing-grid">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className={`pricing-card ${pkg.popular ? 'popular' : ''}`}
          >
            {pkg.popular && (
              <div className="popular-badge">Meest Populair</div>
            )}
            <div className="pricing-header">
              <h3 className="pricing-name">{pkg.name}</h3>
              <div className="pricing-price">{pkg.price}</div>
              <div className="pricing-duration">{pkg.duration}</div>
            </div>
            <ul className="pricing-features">
              {pkg.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="pricing-feature">
                  <span className="checkmark">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
            <button
              className={`btn pricing-button ${pkg.popular ? 'popular-button' : ''}`}
              onClick={scrollToBooking}
            >
              Boek Nu
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Pricing
