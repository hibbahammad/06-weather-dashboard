import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import CurrentWeather from './components/CurrentWeather'
import WeatherStats from './components/WeatherStats'
import Forecast from './components/Forecast'
import SunriseSunset from './components/SunriseSunset'
import Loading from './components/Loading'
import ErrorMessage from './components/ErrorMessage'
import EmptyState from './components/EmptyState'
import useWeather from './hooks/useWeather'

function App() {
  const [searchValue, setSearchValue] = useState('')
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') {
      return 'light'
    }

    return localStorage.getItem('weather-theme') || 'light'
  })

  const { weather, forecast, loading, error, searchWeather, getLocationWeather, clearError } = useWeather()
  const apiKeyConfigured = Boolean(
    import.meta.env.VITE_WEATHER_API_KEY &&
      import.meta.env.VITE_WEATHER_API_KEY !== 'YOUR_API_KEY_HERE',
  )

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('weather-theme', theme)
  }, [theme])

  const handleSearch = () => {
    searchWeather(searchValue)
  }

  const handleRetry = () => {
    if (searchValue.trim()) {
      searchWeather(searchValue)
      return
    }

    getLocationWeather()
  }

  return (
    <div className="app-shell">
      {!apiKeyConfigured && (
        <div className="key-banner">
          Add your OpenWeatherMap API key to the <span>.env</span> file to enable live weather data.
        </div>
      )}

      <Navbar
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        onSearch={handleSearch}
        onLocationClick={getLocationWeather}
        theme={theme}
        onThemeToggle={() => setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'))}
        isLoading={loading}
      />

      <main className="dashboard">
        {error && (
          <ErrorMessage
            message={error}
            onRetry={handleRetry}
            onDismiss={clearError}
          />
        )}

        {loading && <Loading />}

        {!loading && !weather && !error && <EmptyState />}

        {weather && !loading && (
          <>
            <div className="dashboard-grid">
              <CurrentWeather weather={weather} />
              <WeatherStats weather={weather} />
            </div>

            <Forecast forecast={forecast} />
            <SunriseSunset weather={weather} />
          </>
        )}
      </main>

      <footer className="footer">Built with React + Vite • OpenWeatherMap</footer>
    </div>
  )
}

export default App
