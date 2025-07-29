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
        className="absolute top-[23%] left-1/2 w-[220px] h-[280px] -translate-x-1/2 -translate-y-1/2 
                   [transform-style:preserve-3d] [transform:perspective(1200px)] animate-autoRun z-20"
        style={{ ['--quantity' as string]: 14 }}
      >
        {[...Array(14)].map((_, i) => (
          <div
            key={i}
            className="absolute inset-0 p-4"
            style={{
              transform: `rotateY(${(i * 360) / 14}deg) translateZ(600px)`,
              ['--position' as string]: i + 1,
            }}
          >
            <div className="relative w-full h-full bg-white/10 rounded-2xl shadow-2xl overflow-hidden hover:scale-105 transition-transform duration-500">
              <Image
                src={`/images/fests/sliderImages/Image (${i + 1}).png`}
                alt={`Event ${i + 1}`}
                className="w-full h-full object-contain"
                width={220} // Set appropriate width
                height={280} // Set appropriate height
                priority={i < 3} // Only prioritize first few images
              />
            </div>
          </div>
        ))}
      </div>

      {/* Foreground Content */}
      <div className="absolute bottom-0 left-0 w-full max-w-[1400px] pb-16 px-8 flex flex-wrap items-end z-10 text-left">
        <h1 className="font-['ICA_Rubrik'] text-[10rem] sm:text-[8rem] leading-[0.9em] text-white relative drop-shadow-xl z-10"> EVENTS </h1>
        <div className="absolute right-[-120px] max-w-[320px] ml-8 mb-4 font-['Poppins'] text-white z-10 drop-shadow-lg">
          <h2 className="text-[2.5rem] sm:text-[2rem] font-semibold">Events at IITJ</h2>
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