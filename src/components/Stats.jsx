import './Stats.css'

const Stats = () => {
  const stats = [
    {
      number: '15+',
      label: 'Tevreden Klanten'
    },
    {
      number: '3 Jaar',
      label: 'Ervaring'
    },
    {
      number: '4.8',
      label: 'Beoordeling'
    }
  ]

  return (
    <section className="stats">
      <div className="stats-container">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item">
            <div className="stat-number">{stat.number}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Stats
