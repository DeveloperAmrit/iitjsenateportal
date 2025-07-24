"use client"

import { useEffect, useState } from "react"
import { Typewriter } from 'react-simple-typewriter'
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const images = [
  "/iitj1.jpg",
  "/iitj2.jpg",
  "/iitj3.jpg",
  "/iitj4.jpg",
  "/iitj5.jpg",
  "/iitj6.jpg",
  "/iitj7.jpg",
  "/iitj8.jpg",
  "/iitj9.jpg",
];

export default function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, 7000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        {images.map((img, i) => (
          <div
            key={i}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${i === index ? "opacity-100" : "opacity-0"}`}
            style={{ backgroundImage: `url(/images/IITJ/hero/${img})` }}
          />
        ))}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 flex h-full items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="p-8 rounded-md text-center"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            <Typewriter
              words={['Welcome to the IITJ Student Senate']}
              loop={0}
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={5500}
              cursor
              cursorStyle="."
            />
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mx-auto max-w-3xl mt-4 mb-8">
            Your official portal for all student activities, councils, and events at IIT Jodhpur. We are committed to fostering a vibrant and inclusive campus community.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link href="/events">
              <Button size="lg" className="bg-fulvous text-white hover:bg-fulvous/90">
                Explore Events
              </Button>
            </Link>
            <Link href="/senate">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                About the Senate
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}