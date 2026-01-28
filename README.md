# ClimateNow 🌤️

A modern, feature-rich weather application with dynamic themes that adapt to current weather conditions. Built with React, Tailwind CSS, and powered by real-time weather data.


## ✨ Features

### 🎨 Dynamic Weather Themes
- **Adaptive Backgrounds**: The app interface automatically changes based on current weather conditions
- **7 Weather Themes**: Sunny, Cloudy, Rainy, Snowy, Stormy, Foggy, and Night themes
- **Smooth Transitions**: Beautiful animated gradients that respond to weather changes
- **Time-Aware**: Different themes for day and night conditions

### 🌡️ Core Weather Features
- **Real-time Weather Data**: Current conditions with temperature, humidity, wind speed, and more
- **7-Day Forecast**: Detailed weekly weather predictions
- **Hourly Breakdown**: 24-hour weather timeline with temperature trends
- **Smart Search**: Location search with voice input support
- **Geolocation**: Automatic weather detection for your current location

### 🧠 Intelligent Insights
- **Weather Alerts**: Real-time notifications for extreme weather conditions
- **Activity Recommendations**: Smart suggestions for outdoor activities based on weather
- **Best Time Outside**: Optimal outdoor time windows with weather scoring algorithm
- **Clothing Advice**: Context-aware recommendations for what to wear

### 🔄 Advanced Functionality
- **Location Comparison**: Compare weather across up to 3 locations simultaneously
- **Favorites System**: Save and quickly access frequently checked locations
- **Unit Conversion**: Switch between Metric and Imperial units
- **Progressive Web App**: Installable with offline capabilities

### 🎯 User Experience
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Accessibility First**: Full keyboard navigation and screen reader support
- **Dark/Light Mode**: Automatic theme switching based on time and weather
- **Sound Feedback**: Audio cues for user interactions

## 🛠️ Tech Stack

### Frontend Framework
- **React 19** - Modern JavaScript library with hooks and concurrent features
- **Vite** - Fast build tool and development server
- **React Router DOM** - Client-side routing

### Styling & Design
- **Tailwind CSS 4.0** - Utility-first CSS framework with custom themes
- **Framer Motion** - Smooth animations and transitions
- **@tabler/icons-react** - Comprehensive icon library

### State Management
- **Zustand** - Lightweight state management with persistence
- **LocalStorage** - Client-side data persistence

### Data & APIs
- **Open-Meteo API** - Free, high-quality weather data
- **Geolocation API** - Browser-based location detection
- **Web Speech API** - Voice search functionality

### UX Enhancements
- **Sonner** - Beautiful toast notifications
- **use-sound** - Audio feedback library
- **@tippyjs/react** - Advanced tooltips
- **React Error Boundary** - Error handling

### PWA Features
- **Service Workers** - Offline functionality
- **Web App Manifest** - Installable on mobile devices
- **Cache API** - Performance optimization

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/climatenow.git
   cd climatenow
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
# Build the application
npm run build

# Preview the production build
npm run preview
```

### Linting

```bash
# Run ESLint
npm run lint
```

## 📱 Usage

### Basic Usage
1. **Allow Location Access**: Grant permission for automatic weather detection
2. **Search Locations**: Use the search bar to find weather for any city
3. **Voice Search**: Click the microphone icon for hands-free search
4. **Navigate**: Use the menu to access forecasts, insights, and comparisons

### Advanced Features
- **Save Favorites**: Click the heart icon to save locations
- **Compare Locations**: Use the compare feature to analyze multiple cities
- **View Insights**: Check the "Best Time Outside" for activity planning
- **Customize Units**: Switch between Celsius/Fahrenheit and other measurements

## 🏗️ Project Structure

```
climatenow/
├── public/                 # Static assets
│   ├── assets/            # Images and icons
│   └── sounds/            # Audio files
├── src/
│   ├── components/        # Reusable UI components
│   ├── context/          # React context providers
│   ├── hooks/            # Custom React hooks
│   ├── layout/           # Layout components
│   ├── pages/            # Page components
│   ├── store/            # Zustand state management
│   ├── utils/            # Utility functions
│   │   └── weatherTheme.js # Weather theme logic
│   ├── constants/        # Application constants
│   ├── assets/           # Fonts and images
│   ├── App.jsx           # Main App component
│   └── main.jsx          # Application entry point
├── index.html            # HTML template
├── package.json          # Dependencies and scripts
├── vite.config.js        # Vite configuration
└── README.md            # This file
```

## 🎨 Weather Theme System

The application features a sophisticated theme system that automatically adapts to current weather conditions:

### Theme Mapping
- **Sunny** (Code 0-1): Bright blue to gold gradients
- **Cloudy** (Code 2-3): Soft gray and blue tones
- **Rainy** (Code 51-67, 80-82): Dark blue with precipitation effects
- **Snowy** (Code 71-77, 85-86): Light whites and cool blues
- **Stormy** (Code 95-99): Dramatic dark purples and grays
- **Foggy** (Code 45-48): Muted grays with limited visibility
- **Night**: Deep blues with sunset accents

### Implementation
- Weather codes are mapped to CSS theme classes
- Smooth transitions between themes (1s ease-in-out)
- Dynamic meta theme-color for mobile browsers
- Responsive animations with different speeds per theme

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file in the root directory:

```env
# API Configuration (if using custom weather API)
VITE_WEATHER_API_KEY=your_api_key_here
VITE_WEATHER_API_URL=https://api.open-meteo.com/v1/forecast
```

### Customization
- **Themes**: Modify CSS variables in `src/index.css`
- **Weather Codes**: Update mappings in `src/utils/weatherTheme.js`
- **Animations**: Adjust timing functions in theme keyframes

## 🌐 Browser Support

- **Chrome/Edge**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Mobile Safari**: 14+
- **Chrome Mobile**: 90+

### Required Features
- ES6+ JavaScript support
- CSS Grid and Flexbox
- Local Storage
- Geolocation API
- Web Speech API (optional)

## 📊 Performance

### Optimization Features
- **Code Splitting**: Lazy loading with React Suspense
- **Image Optimization**: WebP format with fallbacks
- **Caching Strategy**: Service worker for offline access
- **Bundle Analysis**: Optimized dependencies
- **Animation Performance**: GPU-accelerated transforms

### Core Web Vitals
- **LCP**: < 2.5s (Largest Contentful Paint)
- **FID**: < 100ms (First Input Delay)
- **CLS**: < 0.1 (Cumulative Layout Shift)

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Development Guidelines
- Follow existing code style and conventions
- Add comments for complex logic
- Test on multiple devices and browsers
- Update documentation as needed

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Open-Meteo** - For providing free, high-quality weather API
- **Josh Comeau** - Inspiration for audio feedback integration
- **Frontend Mentor** - Professional challenge that sparked this project
- **Tailwind CSS Team** - Amazing utility-first CSS framework

## 📞 Support

If you encounter any issues or have questions:

1. **Check the Issues** section on GitHub
2. **Create a new Issue** with detailed information
3. **Join our Discussions** for community support

---

<div align="center">
  <p>Made with ❤️ and React</p>
  <p>© 2024 ClimateNow. All rights reserved.</p>
</div>
