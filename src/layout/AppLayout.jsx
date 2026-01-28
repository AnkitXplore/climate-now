import { Header } from "../components/header";
import { Outlet } from "react-router-dom";
import UpdatePrompt from "../components/pwa/UpdatePrompt";
import { useEffect } from "react";
import useWeatherStore from "../store/weatherStore";

const AppLayout = () => {
  const { weatherData, setWeatherTheme } = useWeatherStore();
  
  useEffect(() => {
    // Apply initial theme on component mount
    if (weatherData?.current) {
      const weatherCode = weatherData.current.weather_code;
      const isDay = weatherData.current.is_day === 1;
      setWeatherTheme(weatherCode, isDay);
    }
  }, [weatherData, setWeatherTheme]);

  return (
    <div className="layout">
      <Header />

      <UpdatePrompt />
      
      <main className="main w-full">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
