/**
 * Weather theme mapping utility
 * Maps weather codes to appropriate theme classes
 */

/**
 * Weather code to theme mapping
 * Based on WMO weather interpretation codes
 */
export const weatherCodeToTheme = {
  // Clear sky
  0: 'theme-sunny',     // Clear sky
  1: 'theme-sunny',     // Mainly clear
  2: 'theme-cloudy',    // Partly cloudy
  3: 'theme-cloudy',    // Overcast
  
  // Fog
  45: 'theme-foggy',    // Fog
  48: 'theme-foggy',    // Depositing rime fog
  
  // Drizzle
  51: 'theme-rainy',    // Light drizzle
  53: 'theme-rainy',    // Moderate drizzle
  55: 'theme-rainy',    // Dense drizzle
  56: 'theme-rainy',    // Light freezing drizzle
  57: 'theme-rainy',    // Dense freezing drizzle
  
  // Rain
  61: 'theme-rainy',    // Slight rain
  63: 'theme-rainy',    // Moderate rain
  65: 'theme-rainy',    // Heavy rain
  66: 'theme-rainy',    // Light freezing rain
  67: 'theme-rainy',    // Heavy freezing rain
  
  // Snow
  71: 'theme-snowy',    // Slight snow fall
  73: 'theme-snowy',    // Moderate snow fall
  75: 'theme-snowy',    // Heavy snow fall
  77: 'theme-snowy',    // Snow grains
  
  // Snow showers
  80: 'theme-rainy',    // Slight rain showers
  81: 'theme-rainy',    // Moderate rain showers
  82: 'theme-rainy',    // Violent rain showers
  85: 'theme-snowy',    // Slight snow showers
  86: 'theme-snowy',    // Heavy snow showers
  
  // Thunderstorm
  95: 'theme-stormy',   // Thunderstorm
  96: 'theme-stormy',   // Thunderstorm with slight hail
  99: 'theme-stormy',   // Thunderstorm with heavy hail
};

/**
 * Get weather theme class based on weather code and time of day
 * @param {number} weatherCode - WMO weather code
 * @param {boolean} isDay - Whether it's currently day time
 * @returns {string} Theme class name
 */
export const getWeatherTheme = (weatherCode, isDay = true) => {
  // Get base theme from weather code
  let baseTheme = weatherCodeToTheme[weatherCode] || 'theme-sunny';
  
  // For clear weather, consider time of day
  if (weatherCode === 0 || weatherCode === 1) {
    return isDay ? 'theme-sunny' : 'theme-night';
  }
  
  return baseTheme;
};

/**
 * Get theme description for UI display
 * @param {number} weatherCode - WMO weather code
 * @returns {string} Human readable theme description
 */
export const getThemeDescription = (weatherCode) => {
  const themeDescriptions = {
    'theme-sunny': 'Clear & Bright',
    'theme-cloudy': 'Cloudy & Calm',
    'theme-rainy': 'Rainy & Fresh',
    'theme-snowy': 'Snowy & Peaceful',
    'theme-stormy': 'Stormy & Dramatic',
    'theme-foggy': 'Foggy & Mysterious',
    'theme-night': 'Calm Night'
  };
  
  const theme = weatherCodeToTheme[weatherCode] || 'theme-sunny';
  return themeDescriptions[theme] || 'Dynamic Weather';
};

/**
 * Apply weather theme to document body
 * @param {string} themeClass - Theme class to apply
 */
export const applyWeatherTheme = (themeClass) => {
  // Remove all weather theme classes
  const weatherThemes = Object.values(weatherCodeToTheme);
  weatherThemes.forEach(theme => {
    document.body.classList.remove(theme);
  });
  
  // Also remove day/night themes
  document.body.classList.remove('theme-day', 'theme-night');
  
  // Apply the new theme
  document.body.classList.add(themeClass);
  
  // Update meta theme-color for mobile browsers
  const themeColors = {
    'theme-sunny': '#87CEEB',
    'theme-cloudy': '#8B9DC3',
    'theme-rainy': '#4A5568',
    'theme-snowy': '#E2E8F0',
    'theme-stormy': '#2D3748',
    'theme-foggy': '#CBD5E0',
    'theme-night': '#03012d'
  };
  
  const metaThemeColor = document.querySelector('meta[name="theme-color"]');
  if (metaThemeColor && themeColors[themeClass]) {
    metaThemeColor.setAttribute('content', themeColors[themeClass]);
  }
};
