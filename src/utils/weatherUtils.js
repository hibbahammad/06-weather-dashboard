import { createElement } from 'react'
import {
  Cloud,
  CloudDrizzle,
  CloudFog,
  CloudLightning,
  CloudRain,
  CloudSnow,
  CloudSun,
  MoonStar,
  Sun,
  Wind,
} from 'lucide-react'

export const formatTemperature = (value) => `${Math.round(value)}°C`

export const formatTemperatureRange = (max, min) =>
  `${Math.round(max)}° / ${Math.round(min)}°`

export const formatTime = (timestamp, locale = 'en-US') =>
  new Date(timestamp * 1000).toLocaleTimeString(locale, {
    hour: 'numeric',
    minute: '2-digit',
  })

export const formatDay = (timestamp, locale = 'en-US') =>
  new Date(timestamp * 1000).toLocaleDateString(locale, {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  })

export const formatVisibility = (value) => `${(value / 1000).toFixed(1)} km`

export const formatWindSpeed = (speed) => `${Math.round(speed)} km/h`

export const formatPressure = (value) => `${value} hPa`

export const getWeatherIcon = (condition, size = 40, isNight = false) => {
  const normalized = String(condition).toLowerCase()

  if (normalized.includes('clear')) {
    return createElement(isNight ? MoonStar : Sun, { size })
  }

  if (normalized.includes('cloud')) {
    return createElement(Cloud, { size })
  }

  if (normalized.includes('rain')) {
    return createElement(CloudRain, { size })
  }

  if (normalized.includes('drizzle')) {
    return createElement(CloudDrizzle, { size })
  }

  if (normalized.includes('snow')) {
    return createElement(CloudSnow, { size })
  }

  if (normalized.includes('storm') || normalized.includes('thunder')) {
    return createElement(CloudLightning, { size })
  }

  if (normalized.includes('mist') || normalized.includes('fog') || normalized.includes('haze')) {
    return createElement(CloudFog, { size })
  }

  if (normalized.includes('wind')) {
    return createElement(Wind, { size })
  }

  return createElement(isNight ? MoonStar : CloudSun, { size })
}
