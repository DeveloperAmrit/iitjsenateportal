"use client";

import React, { useEffect, useState } from "react";

const JODHPUR_LAT = 26.2389;
const JODHPUR_LON = 73.0243;

const links = [
  { label: "IITJ Official", href: "https://iitj.ac.in" },
  { label: "Academics", href: "#" },
  { label: "Clubs", href: "#" },
  { label: "Events", href: "#" },
  { label: "Hostels", href: "#" },
  { label: "Contact", href: "#" },
  { label: "Alumni", href: "#" },
];

const Footer: React.FC = () => {
  const [temperature, setTemperature] = useState<string | null>(null);

  useEffect(() => {
    // Using Open-Meteo free API (no key required)
    fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${JODHPUR_LAT}&longitude=${JODHPUR_LON}&current_weather=true`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data?.current_weather?.temperature) {
          setTemperature(`${data.current_weather.temperature}°C`);
        }
      })
      .catch(() => setTemperature(null));
  }, []);

  return (
    <footer className="w-full bg-gray-900 text-gray-100 mt-40 pt-6 pb-2">
      <div className="flex flex-col md:flex-row items-center justify-between px-6 pb-2 gap-4">
        <div className="flex items-center gap-2 text-lg font-bold">
          {/* Example icon: IITJ logo or generic academic cap */}
          <span className="w-7 h-7 bg-white rounded-full flex items-center justify-center mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5 text-gray-900"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3L2 9l10 6 10-6-10-6zm0 13v5m-6-5v2a2 2 0 002 2h8a2 2 0 002-2v-2"
              />
            </svg>
          </span>
          IITJ Senate Portal
        </div>
        <nav className="flex flex-wrap gap-4 justify-center">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-yellow-300 transition"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="text-sm flex items-center gap-2">
          <span>Jodhpur Temperature:</span>
          {temperature ? (
            <span className="font-semibold">{temperature}</span>
          ) : (
            <span className="italic text-gray-400">Loading...</span>
          )}
        </div>
      </div>
      <div className="border-t border-gray-700 mt-2 pt-2 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Student Senate, IIT Jodhpur. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;