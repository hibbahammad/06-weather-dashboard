import { Cloud, Droplets, Eye, Gauge, Wind } from 'lucide-react'
import { formatPressure, formatVisibility, formatWindSpeed } from '../utils/weatherUtils'

export default function WeatherStats({ weather }) {
  if (!weather) {
    return null
  }

  const stats = [
    {
      label: 'Humidity',
      value: `${weather.main.humidity}%`,
      icon: Droplets,
    },
    {
      label: 'Wind',
      value: formatWindSpeed(weather.wind.speed),
      icon: Wind,
    },
    {
      label: 'Pressure',
      value: formatPressure(weather.main.pressure),
      icon: Gauge,
    },
    {
      label: 'Visibility',
      value: formatVisibility(weather.visibility),
      icon: Eye,
    },
    {
      label: 'Cloudiness',
      value: `${weather.clouds.all}%`,
      icon: Cloud,
    },
  ]

  return (
    <section className="panel stats-panel">
      <div className="section-header">
        <p className="eyebrow">Weather statistics</p>
        <h3>Conditions</h3>
      </div>

      <div className="stats-grid">
        {stats.map(({ label, value, icon: Icon }) => (
          <div className="stat-card" key={label}>
            <div className="stat-icon">
              <Icon size={18} />
            </div>
            <div className="stat-text">
              <span className="stat-label">{label}</span>
              <strong>{value}</strong>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
