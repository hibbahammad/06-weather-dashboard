import ForecastCard from './ForecastCard'

export default function Forecast({ forecast }) {
  if (!forecast?.list?.length) {
    return null
  }

  const dailySummaries = forecast.list.reduce((accumulator, item) => {
    const dateKey = item.dt_txt.split(' ')[0]
    const existing = accumulator[dateKey]

    if (!existing) {
      accumulator[dateKey] = {
        dt: item.dt,
        weather: item.weather,
        temp: {
          max: item.main.temp_max,
          min: item.main.temp_min,
        },
      }
      return accumulator
    }

    existing.temp.max = Math.max(existing.temp.max, item.main.temp_max)
    existing.temp.min = Math.min(existing.temp.min, item.main.temp_min)
    return accumulator
  }, {})

  const days = Object.values(dailySummaries).slice(0, 5)

  return (
    <section className="panel forecast-panel">
      <div className="section-header">
        <p className="eyebrow">Forecast</p>
        <h3>Next 5 days</h3>
      </div>

      <div className="forecast-grid">
        {days.map((day) => (
          <ForecastCard key={day.dt} item={day} />
        ))}
      </div>
    </section>
  )
}
