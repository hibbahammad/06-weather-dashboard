import { Sunset, Sunrise } from 'lucide-react'
import { formatTime } from '../utils/weatherUtils'

export default function SunriseSunset({ weather }) {
  if (!weather?.sys) {
    return null
  }

  return (
    <section className="panel sunrise-panel">
      <div className="section-header">
        <p className="eyebrow">Sun cycle</p>
        <h3>Sunrise & Sunset</h3>
      </div>

      <div className="sunrise-grid">
        <div className="sun-time-card">
          <div className="sun-icon sunrise-icon">
            <Sunrise size={18} />
          </div>
          <div>
            <span className="meta-label">Sunrise</span>
            <strong>{formatTime(weather.sys.sunrise)}</strong>
          </div>
        </div>

        <div className="sun-time-card">
          <div className="sun-icon sunset-icon">
            <Sunset size={18} />
          </div>
          <div>
            <span className="meta-label">Sunset</span>
            <strong>{formatTime(weather.sys.sunset)}</strong>
          </div>
        </div>
      </div>
    </section>
  )
}
