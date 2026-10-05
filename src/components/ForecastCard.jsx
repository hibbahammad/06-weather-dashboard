import { formatDay, formatTemperature, formatTemperatureRange, getWeatherIcon } from '../utils/weatherUtils'

export default function ForecastCard({ item }) {
  if (!item) {
    return null
  }

  const dayLabel = formatDay(item.dt)
  const weather = item.weather?.[0]
  const isNight = item.dt > item.sunset

  return (
    <article className="forecast-card">
      <p className="forecast-day">{dayLabel}</p>
      <div className="forecast-icon">{getWeatherIcon(weather?.description, 28, isNight)}</div>
      <p className="forecast-condition">{weather?.main}</p>
      <div className="forecast-temp-row">
        <strong>{formatTemperature(item.temp.max)}</strong>
        <span>{formatTemperature(item.temp.min)}</span>
      </div>
      <small>{formatTemperatureRange(item.temp.max, item.temp.min)}</small>
    </article>
  )
}
