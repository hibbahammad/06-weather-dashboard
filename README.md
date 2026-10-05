# Weather Dashboard

## Overview
A professional weather dashboard built with React and Vite for searching cities, viewing live conditions, exploring a 5-day forecast, using current location, and toggling between light and dark modes.

## Features
- City search with loading, error, and empty states
- Current weather details and weather statistics
- 5-day forecast cards
- Sunrise and sunset details
- Current location weather lookup
- Light and dark mode with localStorage persistence
- Responsive layout for desktop, tablet, and mobile

## Tech Stack
- React
- Vite
- JavaScript
- CSS
- Lucide React
- OpenWeatherMap API

## Project Structure
```text
src/
├── components/
│   ├── Navbar.jsx
│   ├── SearchBar.jsx
│   ├── CurrentWeather.jsx
│   ├── WeatherStats.jsx
│   ├── Forecast.jsx
│   ├── ForecastCard.jsx
│   ├── SunriseSunset.jsx
│   ├── LocationButton.jsx
│   ├── ThemeToggle.jsx
│   ├── Loading.jsx
│   ├── ErrorMessage.jsx
│   └── EmptyState.jsx
├── hooks/
│   └── useWeather.js
├── services/
│   └── weatherApi.js
├── utils/
│   └── weatherUtils.js
├── App.jsx
├── main.jsx
├── index.css
└── App.css
```

## Installation
```bash
npm install
```

## Environment Variables
Create a `.env` file in the project root and add your OpenWeatherMap API key:

```env
VITE_WEATHER_API_KEY=YOUR_API_KEY_HERE
```

## API Setup
1. Sign up at https://openweathermap.org
2. Generate an API key
3. Add it to your `.env` file
4. Restart the dev server if it is already running

## Running Locally
```bash
npm run dev
```

## Production Build
```bash
npm run build
```

## Screenshots
Add screenshots here after launching the app locally.

## Future Improvements
- Hourly forecast view
- Saved city shortcuts
- Temperature unit toggle
- Expanded weather map integration
