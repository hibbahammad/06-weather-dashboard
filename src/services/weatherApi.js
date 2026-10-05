const BASE_URL = 'https://api.openweathermap.org/data/2.5'

const getApiKey = () => {
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY
  return apiKey && apiKey.trim() && apiKey !== 'YOUR_API_KEY_HERE' ? apiKey : ''
}

const parseResponse = async (response, fallbackMessage) => {
  if (!response.ok) {
    const message = response.status === 401
      ? 'OpenWeatherMap API key is invalid or missing.'
      : response.status === 404
        ? fallbackMessage
        : 'Weather service failed. Please try again.'

    throw new Error(message)
  }

  return response.json()
}

export const fetchWeatherByCity = async (city) => {
  const apiKey = getApiKey()

  if (!apiKey) {
    throw new Error('Add VITE_WEATHER_API_KEY to your .env file before fetching weather.')
  }

  const searchParams = new URLSearchParams({
    q: city,
    appid: apiKey,
    units: 'metric',
  })

  const currentWeatherUrl = `${BASE_URL}/weather?${searchParams.toString()}`
  const forecastUrl = `${BASE_URL}/forecast?${searchParams.toString()}&cnt=40`

  const [weather, forecast] = await Promise.all([
    fetch(currentWeatherUrl).then((response) =>
      parseResponse(response, 'Unable to find weather for this city.'),
    ),
    fetch(forecastUrl).then((response) =>
      parseResponse(response, 'Unable to find a forecast for this city.'),
    ),
  ])

  return { weather, forecast }
}

export const fetchWeatherByCoords = async (latitude, longitude) => {
  const apiKey = getApiKey()

  if (!apiKey) {
    throw new Error('Add VITE_WEATHER_API_KEY to your .env file before fetching weather.')
  }

  const searchParams = new URLSearchParams({
    lat: String(latitude),
    lon: String(longitude),
    appid: apiKey,
    units: 'metric',
  })

  const currentWeatherUrl = `${BASE_URL}/weather?${searchParams.toString()}`
  const forecastUrl = `${BASE_URL}/forecast?${searchParams.toString()}&cnt=40`

  const [weather, forecast] = await Promise.all([
    fetch(currentWeatherUrl).then((response) =>
      parseResponse(response, 'Unable to get your current weather.'),
    ),
    fetch(forecastUrl).then((response) =>
      parseResponse(response, 'Unable to get your forecast.'),
    ),
  ])

  return { weather, forecast }
}
