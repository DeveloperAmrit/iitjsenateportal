"use client"

import { useEffect, useState } from "react"
import { Typewriter } from 'react-simple-typewriter'

const images = [
  "/iitj1.jpg",
  "/iitj2.webp",
  "/iitj3.jpg",
  "/iitj4.jpg",
  "/iitj5.jpg",
  "/iitj6.jpg",
  "/iitj7.jpg",
  "/iitj8.jpg",
  "/iitj9.jpg", // Add your image paths inside public/
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
            style={{ backgroundImage: `url(/images/IITJ/hero/${img})` }}
          />
        ))}
        {/* Optional dark overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Text Content */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="p-8 rounded-md">
            <h1 className="text-4xl md:text-5xl font-semibold text-white text-center mb-8"> {/* Added mb-8 */}
                <Typewriter
                    words={['Welcome to IITJ Student Senate']}
                    loop={0}
                    typeSpeed={60}
                    deleteSpeed={60}
                    delaySpeed={5000}
                    cursor
                    cursorStyle="."
                />
            </h1>
            <div className="flex items-center justify-center pt-8 pb-4"> {/* Increased pt, added pb */}
                <div className="w-24 border-b border-white" />
                <p className="text-2xl md:text-3xl text-white text-center mx-6">About</p> {/* Increased mx */}
                <div className="w-24 border-b border-white" />
            </div>
            <p className="text-xl md:text-2xl text-white text-center mx-auto max-w-7xl mt-8"> {/* Changed text size, added mx-auto max-w, mt */}
                The student body at IIT Jodhpur is structured around three main pillars: the Student Senate, 
            the Student Activity Council (SAC), and the Academic and Co-curricular Activity Council (ACAC). 
            These bodies collectively work to represent student interests and manage various aspects of student life.
            Together, these three pillars ensure a holistic approach to student development, covering academic, 
            co-curricular, and extracurricular spheres, and fostering a well-rounded and participatory student community at IIT Jodhpur.
            </p>
        </div>
      </div>
    </section>
  )
}
