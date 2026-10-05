import { useState } from 'react'
import { fetchWeatherByCity, fetchWeatherByCoords } from '../services/weatherApi'

export default function useWeather() {
  const [weather, setWeather] = useState(null)
  const [forecast, setForecast] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const setFailure = (message) => {
    setWeather(null)
    setForecast(null)
    setError(message)
  }

  const searchWeather = async (city) => {
    const trimmedCity = city?.trim()

    if (!trimmedCity) {
      setFailure('Please enter a city name to search.')
      return
    }

    setLoading(true)
    setError(null)

    try {
      const response = await fetchWeatherByCity(trimmedCity)
      setWeather(response.weather)
      setForecast(response.forecast)
    } catch (err) {
      setFailure(err.message || 'Unable to fetch weather information.')
    } finally {
      setLoading(false)
    }
  }

  const getLocationWeather = async () => {
    if (!navigator.geolocation) {
      setFailure('Geolocation is not supported in this browser.')
      return
    }

    setLoading(true)
    setError(null)

    try {
      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 0,
        })
      })

      const response = await fetchWeatherByCoords(
        position.coords.latitude,
        position.coords.longitude,
      )

      setWeather(response.weather)
      setForecast(response.forecast)
    } catch (err) {
      setFailure(err.message || 'Unable to get weather for your location.')
    } finally {
      setLoading(false)
    }
  }

  const clearError = () => setError(null)

  return {
    weather,
    forecast,
    loading,
    error,
    searchWeather,
    getLocationWeather,
    clearError,
  }
}
