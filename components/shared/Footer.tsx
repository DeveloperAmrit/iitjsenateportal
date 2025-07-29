"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

// Define types for weather data
interface CurrentWeather {
  temperature_2m: number;
  weathercode: number;
  wind_speed_10m: number;
  relative_humidity_2m: number;
}

interface WeatherData {
  current: CurrentWeather;
}

interface AQIData {
  current?: {
    pm2_5?: number;
  };
}

// Map Open-Meteo weather codes to descriptive text and simple icons
const weatherCodes: { [key: number]: { text: string; icon: string } } = {
  0: { text: "Clear sky", icon: "☀️" },
  1: { text: "Mainly clear", icon: "🌤️" },
  2: { text: "Partly cloudy", icon: "⛅" },
  3: { text: "Overcast", icon: "☁️" },
  45: { text: "Fog", icon: "🌫️" },
  48: { text: "Depositing rime fog", icon: "🌫️" },
  51: { text: "Drizzle: Light", icon: "🌧️" },
  53: { text: "Drizzle: Moderate", icon: "🌧️" },
  55: { text: "Drizzle: Dense", icon: "🌧️" },
  56: { text: "Freezing Drizzle: Light", icon: "🌨️" },
  57: { text: "Freezing Drizzle: Dense", icon: "🌨️" },
  61: { text: "Rain: Slight", icon: "🌧️" },
  63: { text: "Rain: Moderate", icon: "🌧️" },
  65: { text: "Rain: Heavy", icon: "🌧️" },
  66: { text: "Freezing Rain: Light", icon: "🌨️" },
  67: { text: "Freezing Rain: Heavy", icon: "🌨️" },
  71: { text: "Snow fall: Slight", icon: "❄️" },
  73: { text: "Snow fall: Moderate", icon: "❄️" },
  75: { text: "Snow fall: Heavy", icon: "❄️" },
  77: { text: "Snow grains", icon: "🌨️" },
  80: { text: "Rain showers: Slight", icon: "☔" },
  81: { text: "Rain showers: Moderate", icon: "☔" },
  82: { text: "Rain showers: Violent", icon: "⛈️" },
  85: { text: "Snow showers: Slight", icon: "🌨️" },
  86: { text: "Snow showers: Heavy", icon: "🌨️" },
  95: { text: "Thunderstorm: Slight/Moderate", icon: "⚡" },
  96: { text: "Thunderstorm: Hail Slight", icon: "⛈️" },
  99: { text: "Thunderstorm: Hail Heavy", icon: "⛈️" },
};

// Social Icon type
interface SocialIconProps {
  children: React.ReactNode;
  href: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ children, href }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
    {children}
  </a>
);

// AQI Thresholds and corresponding Tailwind CSS colors
const getAqiStatusAndColor = (pm2_5: number | null) => {
  if (pm2_5 === null || isNaN(pm2_5)) {
    return { status: "N/A", color: "text-gray-500", aqiHeartColor: "#9CA3AF" };
  } else if (pm2_5 <= 12.0) {
    return { status: "Good", color: "text-green-400", aqiHeartColor: "#4ADE80" };
  } else if (pm2_5 <= 35.4) {
    return { status: "Moderate", color: "text-yellow-400", aqiHeartColor: "#FACC15" };
  } else if (pm2_5 <= 55.4) {
    return { status: "Unhealthy for Sensitive Groups", color: "text-orange-400", aqiHeartColor: "#FB923C" };
  } else if (pm2_5 <= 150.4) {
    return { status: "Unhealthy", color: "text-red-500", aqiHeartColor: "#EF4444" };
  } else {
    return { status: "Hazardous", color: "text-purple-500", aqiHeartColor: "#A855F7" };
  }
};

// Beating Heart SVG Component
interface BeatingHeartProps {
  color: string;
}
const BeatingHeart: React.FC<BeatingHeartProps> = ({ color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill={color}
    className="w-5 h-5 animate-pulse-fast inline-block ml-1"
    style={{ color: color }}
  >
    <path
      fillRule="evenodd"
      d="M12 6.009c1.018-1.4 2.636-2.007 4.095-1.493 1.096.402 1.942 1.574 2.518 2.684.574 1.109.914 2.222.914 3.328 0 1.222-.387 2.345-1.055 3.383-.681 1.066-1.63 2.053-2.613 2.972-1.287 1.205-2.583 2.34-3.864 3.444-1.281-1.104-2.577-2.239-3.864-3.444-1.004-.94-1.952-1.927-2.633-2.972-.668-1.038-1.055-2.161-1.055-3.383 0-1.106.34-2.219.914-3.328.576-1.11 1.422-2.282 2.518-2.684 1.459-.514 3.077.093 4.095 1.493z"
      clipRule="evenodd"
    />
  </svg>
);

const JODHPUR_LAT = 26.2389;
const JODHPUR_LON = 73.0243;

interface WeatherFooterData {
  temp: string;
  description: string;
  humidity: string;
  wind: string;
  pm2_5_value: number | null;
  aqi_status: string;
  aqi_color_class: string;
  aqi_heart_color: string;
  time: string;
  date: string;
  icon: string;
}

const Footer: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherFooterData | null>(null);

  useEffect(() => {
    const fetchWeatherAndAQI = async () => {
      try {
        const weatherRes = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${JODHPUR_LAT}&longitude=${JODHPUR_LON}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weathercode&timezone=auto`
        );
        const weatherJson: WeatherData = await weatherRes.json();

        const aqiRes = await fetch(
          `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${JODHPUR_LAT}&longitude=${JODHPUR_LON}&current=pm2_5&timezone=auto`
        );
        const aqiJson: AQIData = await aqiRes.json();

        if (weatherJson.current) {
          const { temperature_2m, weathercode, relative_humidity_2m, wind_speed_10m } = weatherJson.current;
          const pm2_5 = aqiJson?.current?.pm2_5 ?? null;

          const { status, color, aqiHeartColor } = getAqiStatusAndColor(pm2_5);

          const now = new Date();
          const optionsDate: Intl.DateTimeFormatOptions = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
          const optionsTime: Intl.DateTimeFormatOptions = { hour: 'numeric', minute: 'numeric', hour12: true };

          setWeatherData({
            temp: `${temperature_2m}°C`,
            description: weatherCodes[weathercode]?.text || "N/A",
            humidity: `${relative_humidity_2m}%`,
            wind: `${wind_speed_10m}km/h`,
            pm2_5_value: pm2_5,
            aqi_status: status,
            aqi_color_class: color,
            aqi_heart_color: aqiHeartColor,
            time: now.toLocaleTimeString('en-US', optionsTime),
            date: now.toLocaleDateString('en-US', optionsDate),
            icon: weatherCodes[weathercode]?.icon || "❓",
          });
        }
      } catch (error) {
        console.error("Failed to fetch weather or AQI data:", error);
        setWeatherData(null);
      }
    };

    fetchWeatherAndAQI();
    const intervalId = setInterval(fetchWeatherAndAQI, 10 * 60 * 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <footer className="w-full bg-gray-900 text-gray-100 pt-12 pb-6 px-4 md:px-8 lg:px-12 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-8">

        {/* Column 1: Logo and Contact Info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <Image
            src="/images/IITJ/logo/iitjlogo.png"
            alt="IIT Jodhpur Logo"
            width={100}
            height={100}
            className="mb-4 rounded-full"
          />
          <p className="text-lg font-semibold text-gray-50 mb-1">Student Senate, IITJ</p>
          <p className="text-sm text-gray-300 mb-4">
            छात्र सीनेट, आईआईटीजे
          </p>
          <div className="flex flex-col items-center md:items-start text-sm text-gray-300">
            <a href="mailto:info@iitj.ac.in" className="flex items-center hover:text-white transition mb-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-9 6h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              gensecy_ss@iitj.ac.in
            </a>
            <a href="mailto:info@iitj.ac.in" className="flex items-center hover:text-white transition mb-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-9 6h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              gensecy_acac@iitj.ac.in
            </a>
            <a href="mailto:info@iitj.ac.in" className="flex items-center hover:text-white transition mb-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-9 6h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              gensecy_sac@iitj.ac.in
            </a>
          </div>
          <div className="flex gap-4 mt-6">
            <SocialIcon href="https://twitter.com/IIT_Jodhpur"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.791-1.574 2.164-2.721-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.594 0-6.49 2.903-6.49 6.49 0 .508.058 1.006.173 1.486-5.392-.27-10.19-2.868-13.4-6.812-.558.955-.873 2.073-.873 3.307 0 2.256 1.144 4.243 2.887 5.418-.53-.016-1.03-.162-1.465-.403v.08c0 3.154 2.235 5.786 5.193 6.365-.548.148-1.12.23-1.706.23-.418 0-.823-.041-1.22-.116.823 2.572 3.2 4.45 6.01 4.492-2.203 1.72-4.99 2.756-8.026 2.756-1.55 0-3.047-.09-4.516-.266.863 2.827 3.323 4.744 6.29 4.744 7.247 0 11.205-6 11.205-11.206 0-.174-.004-.349-.012-.523.774-.556 1.44-1.25 1.96-2.045z"/></svg></SocialIcon>
            <SocialIcon href="https://www.linkedin.com/school/iit-jodhpur/"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></SocialIcon>
            <SocialIcon href="https://www.facebook.com/iitjofficial"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.27 0-5.192 1.501-5.192 4.458v2.542z"/></svg></SocialIcon>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-xl font-bold mb-4 border-b-2 border-red-500 pb-1">Quick Links</h3>
          <ul className="space-y-2 text-gray-300 text-base">
            <li><a href="https://www.iitj.ac.in/main/en/iitj" className="hover:text-white transition">Visit IITJ</a></li>
            <li><a href="#" className="hover:text-white transition">Student Senate</a></li>
            <li><a href="#" className="hover:text-white transition">Societies and Clubs</a></li>
            <li><a href="https://iitj.ac.in/PageImages/Gallery/07-2025/Academic-Calendar-AY-202526SemI2-with-CCCD-events-638871414539740843.pdf" className="hover:text-white transition">Student Actvity Calender</a></li>
            <li><a href="#" className="hover:text-white transition">Student Constitution</a></li>
            <li><a href="mailto:student_grievance@iitj.ac.in" className="hover:text-white transition">Student Grievances</a></li>
            <li>
                <button
                    onClick={() => alert("Dark/Light Mode Toggle functionality goes here!")}
                    className="flex items-center hover:text-white transition cursor-pointer"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h1M3 12H2m8.006 10.006A4.5 4.5 0 0112 17.5a4.5 4.5 0 014.506 4.506M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                    Switch to Dark Mode
                </button>
            </li>
          </ul>
        </div>

        {/* Column 3: Explore */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-xl font-bold mb-4 border-b-2 border-red-500 pb-1">Explore</h3>
          <ul className="space-y-2 text-gray-300 text-base">
            <li><a href="#" className="hover:text-white transition">Rules</a></li>
            <li><a href="#" className="hover:text-white transition">Campus Life</a></li>
            <li><a href="#" className="hover:text-white transition">Campus Gallery</a></li>
            <li><a href="#" className="hover:text-white transition">About Us</a></li>
            <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
          </ul>
        </div>

        {/* Column 4: Weather/Location */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-xl font-bold mb-4 border-b-2 border-red-500 pb-1">Jodhpur Weather</h3>
          {weatherData ? (
            <div className="space-y-2">
              <p className="text-sm text-gray-300">{weatherData.time}, {weatherData.date}</p>
              <div className="flex items-center text-lg font-semibold text-white">
                <span className="text-3xl mr-2">{weatherData.icon}</span>
                {weatherData.description}
              </div>
              <p className="text-2xl font-bold text-yellow-300">{weatherData.temp}</p>
              <div className="text-sm text-gray-300 grid grid-cols-2 gap-y-1 mt-2">
                <span>Humidity: {weatherData.humidity}</span>
                <span>Wind: {weatherData.wind}</span>
                <span className="col-span-2 mt-2 px-3 py-1 rounded-md bg-gray-700 text-white text-base flex items-center justify-between">
                  <span>Air Pollution (PM2.5): {weatherData.pm2_5_value !== null ? weatherData.pm2_5_value.toFixed(2) : 'N/A'}</span>
                  <span className={weatherData.aqi_color_class}>
                    {weatherData.aqi_heart_color && <BeatingHeart color={weatherData.aqi_heart_color} />}
                  </span>
                </span>
              </div>
              <p className="text-xs text-gray-400 mt-2">Source: Open-Meteo & Open-Meteo Air Quality</p>
            </div>
          ) : (
            <p className="text-gray-400 italic">Loading weather data...</p>
          )}
        </div>

      </div>

      {/* Footer Bottom Section */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-xs text-gray-400">
        <div className="flex flex-col sm:flex-row justify-between items-center max-w-7xl mx-auto px-4">
          <p className="mb-2 sm:mb-0">
            &copy; {new Date().getFullYear()} Student Senate, IIT Jodhpur. All rights reserved.
          </p>
          <div className="flex items-center">
            <p className="mr-4">Developed & Maintained by Student Senate | IIT Jodhpur</p>
            <button
              onClick={() => alert("Dark/Light Mode Toggle functionality goes here!")}
              className="flex items-center text-gray-400 hover:text-white transition cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h1M3 12H2m8.006 10.006A4.5 4.5 0 0112 17.5a4.5 4.5 0 014.506 4.506M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              Switch to Light Version
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;