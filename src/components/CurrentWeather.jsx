import { MapPin, ThermometerSun } from 'lucide-react'
import {
  formatTemperature,
  formatTemperatureRange,
  getWeatherIcon,
} from '../utils/weatherUtils'

export default function CurrentWeather({ weather }) {
  const condition = weather?.weather?.[0]
  const main = weather?.main
  const country = weather?.sys?.country
  const isNight = weather?.dt > weather?.sys?.sunset

  if (!weather || !condition || !main) {
    return null
  }

  return (
    <section className="panel current-weather-panel">
      <div className="section-header compact-header">
        <div>
          <p className="eyebrow">Current weather</p>
          <h2>
            {weather.name}, {country}
          </h2>
        </div>
        <div className="location-pill">
          <MapPin size={14} />
          {weather.name}
        </div>
      </div>

      <div className="current-main">
        <div className="current-icon-wrap">{getWeatherIcon(condition.description, 54, isNight)}</div>
        <div className="current-temp-block">
          <div className="temp-row">
            <span className="current-temp">{formatTemperature(main.temp)}</span>
            <ThermometerSun size={20} className="thermo-icon" />
          </div>
          <p className="current-condition">{condition.main}</p>
        </div>
      </div>

      <div className="weather-meta">
        <div>
          <span className="meta-label">Feels like</span>
          <span>{formatTemperature(main.feels_like)}</span>
        </div>
        <div>
          <span className="meta-label">High / Low</span>
          <span>{formatTemperatureRange(main.temp_max, main.temp_min)}</span>
        </div>
      </div>
    </section>
  )
}
