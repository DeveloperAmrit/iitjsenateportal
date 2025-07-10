"use client"

import { useEffect, useState } from "react"


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
        
      </div>

      {/* Text Content */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="p-8 rounded-md">
          <h1 className="text-3xl md:text-4xl font-semibold text-white text-center">
            Welcome to Student Senate.
          </h1>
          <div className="flex items-center justify-center pt-5">
            <div className="flex-grow border-b border-white"></div> 
            <p className="text-2xl md:text-2xl text-white text-center mx-4">About</p>
            <div className="flex-grow border-b border-white"></div> 
          </div>
          <div className="flex items-center justify-center">
            <p className="text-lg md:text-1xl text-white text-center mx-4">The IITJ Student Senate strengthens the institute and student development by shaping policies, representing student voices, and coordinating key initiatives. It fosters collaboration, drives continuous improvement, and ensures effective advocacy for the student community’s needs and aspirations.</p>
          </div>
        </div>
      </div>
    </section>
  )
}