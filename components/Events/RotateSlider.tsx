'use client'

import React from 'react'
import Image from 'next/image'

const RotateSlider: React.FC = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden text-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Full Page Background Image with Overlay */}
      <div
        className="absolute inset-0 w-full h-full bg-no-repeat bg-cover bg-center z-0 filter brightness-50"
        style={{ backgroundImage: "url('/images/fests/bg/background6.jpg')" }}
      />

      {/* 3D Carousel */}
      <div
        className="absolute top-1/4 left-1/2 w-[180px] h-[240px] sm:w-[220px] sm:h-[280px] -translate-x-1/2 -translate-y-1/2 
                   [transform-style:preserve-3d] [transform:perspective(1200px)] animate-autoRun z-20"
        style={{ ['--quantity' as string]: 14 }}
      >
        {[...Array(14)].map((_, i) => (
          <div
            key={i}
            className="absolute inset-0 p-4"
            style={{
              transform: `rotateY(${(i * 360) / 14}deg) translateZ(540px)`,
              ['--position' as string]: i + 1,
            }}
          >
            <div className="relative w-full h-full bg-white/10 rounded-2xl shadow-2xl overflow-hidden hover:scale-105 transition-transform duration-500">
              <Image
                src={`/images/fests/sliderImages/Image (${i + 1}).png`}
                alt={`Event ${i + 1}`}
                className="w-full h-full object-contain"
                width={220} 
                height={280}
                priority={i < 3} 
              />
            </div>
          </div>
        ))}
      </div>

      {/* Foreground Content */}
      <div className="absolute bottom-0 left-0 w-full p-4 sm:p-8 flex flex-col sm:flex-row items-center sm:items-end justify-between z-10 text-center sm:text-left">
        <h1 className="font-['ICA_Rubrik'] text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] leading-none text-white relative drop-shadow-xl">EVENTS</h1>
        <div className="max-w-xs md:max-w-sm mt-4 sm:mt-0 sm:ml-8 text-white z-10 drop-shadow-lg">
          <h2 className="text-xl sm:text-2xl font-semibold">Events at IITJ</h2>
          <p className="font-bold text-[1.2rem] mt-1">Culture and Tech</p>
          <p className="text-[1rem] mt-2 leading-relaxed">
            IIT Jodhpur hosts a vibrant array of events and fests spanning diverse fields, celebrating talent,
            innovation, and creativity across disciplines.
          </p>
        </div>
      </div>
    </div>
  )
}

export default RotateSlider