'use client'

import React from 'react'

const RotateSlider: React.FC = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden text-center">
      
      {/* Full Page Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-no-repeat bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/images/fests/bg/background3.jpg')" }}
      />

      {/* 3D Carousel */}
      <div
        className="absolute w-[200px] h-[250px] top-[10%] left-1/2 -translate-x-1/2 
                   [transform-style:preserve-3d] [transform:perspective(1000px)] animate-autoRun z-20"
        style={{ ['--quantity' as any]: 14 }}
      >
        {[...Array(14)].map((_, i) => (
          <div
            key={i}
            className="absolute inset-0"
            style={{
              transform: `rotateY(${(i * 360) / 14}deg) translateZ(550px)`,
              ['--position' as any]: i + 1,
            }}
          >
            <img
              src={`/images/fests/sliderImages/Image (${i + 1}).png`}
              alt={`Event ${i + 1}`}
              className="w-full h-full object-contain p-2"  // try putting "object-contain" later
              />
          </div>
        ))}
      </div>

      {/* Foreground Content */}
      <div className="absolute bottom-0 left-0 w-full max-w-[1400px] pb-16 px-8 flex flex-wrap items-end z-10 text-left">
        <h1
          className="font-['ICA_Rubrik'] text-[12em] sm:text-[10em] leading-[1em] text-[#F0F0F0] relative drop-shadow-md z-10"
        >
          EVENTS
        </h1>

        <div className="absolute right-[-120] max-w-[300px] ml-8 mb-4 font-['Poppins'] text-[#F0F0F0] z-10 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
          <h2 className="text-[2em] sm:text-[1.5em] font-semibold">Events at IITJ</h2>
          <p className="font-bold text-[1.1em]">Culture and Tech</p>
          <p className="text-[0.95em] mt-1">
            IIT Jodhpur hosts a vibrant array of events and fests spanning diverse fields, 
            celebrating talent, innovation, and creativity across disciplines.
          </p>
        </div>
      </div>
    </div>
  )
}

export default RotateSlider
