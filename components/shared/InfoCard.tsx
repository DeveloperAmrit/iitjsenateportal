"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface CardProps {
  title: string;
  imageurl: string;
}

const InfoCard: React.FC<CardProps> = ({ title, imageurl }) => {
  
  const parts = title.split(/(-|\(|\))/).map(part => part.trim()).filter(Boolean);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="group relative rounded-xl overflow-hidden shadow-lg h-65 w-90 bg-gradient-to-b from-black/70 via-black/50 to-black/90 text-white flex flex-col justify-center items-center p-6 text-center"
      //className="group relative rounded-lg overflow-hidden shadow-lg h-full bg-gray-100 text-white flex flex-col"
    >
      {/* Background Image with Zoom Effect */}
      <Image
        src={imageurl}
        alt={title}
        fill
        className="object-fit absolute inset-0 z-0 transition-transform duration-500 ease-in-out group-hover:scale-110"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.src = '/images/IITJ/logo/iitjlogo.png';
        }}
      />
      
      {/* Glass Effect Overlay */}
      <div className="absolute inset-0 z-10 bg-black/40 backdrop-blur-[2px] transition-all duration-300 group-hover:bg-black/60 group-hover:backdrop-blur-[4px]"></div>

      {/* Text Content */}
      <div className="relative z-20 flex flex-col justify-center items-center">
        <h3 className="text-3xl font-semibold text-white drop-shadow-lg">
          {parts.map((part, index) => {
            if (part === '-' || part === '(' || part === ')') return null;
            const isName = parts[index - 1] === '-';
            const isAcronym = parts[index - 1] === '(';

            return (
              <span key={index} className={`block ${isName || isAcronym ? 'mt-1 text-gray-200 font-large text-base' : ''}`}>
                {part}
              </span>
            );
          })}
        </h3>
      </div>
    </motion.div>
  );
};

export default InfoCard;