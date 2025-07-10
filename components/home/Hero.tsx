"use client"

import { useEffect, useState } from "react"
import { Typewriter } from 'react-simple-typewriter'

const images = [
  "/iitj1.jpg",
  "/iitj2.webp",
  "/iitj4.jpg", // Add your image paths inside public/
]

export default function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Images Layer */}
      <div className="absolute inset-0 z-0">
        {images.map((img, i) => (
          <div
            key={i}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(/images/${img})` }}
          />
        ))}
        {/* Optional dark overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Text Content */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="p-8 rounded-md">
          <h1 className="text-3xl md:text-4xl font-semibold text-white text-center">
            <Typewriter
                words={['Welcome to IITJ Senate Portal']}
                loop={0}
                typeSpeed={60}
                deleteSpeed={60}
                delaySpeed={5000} // delay before re-typing
                cursor
                cursorStyle=""
              />
          </h1>
        </div>
      </div>
    </section>
  )
}
