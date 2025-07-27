"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  title: string;
  imageurl: string;
}

const InfoCard: React.FC<CardProps> = ({ title, imageurl}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Fallback to IITJ logo if no imageurl is provided
  const backgroundImageUrl = imageurl || '/images/IITJ/logo/iitjlogo.png';
  
  const parts = title.split(/(-|\(|\))/).map(part => part.trim()).filter(Boolean);


  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="group relative rounded-lg overflow-hidden shadow-lg h-full bg-gray-800 text-white flex flex-col"
    >
      <div
        className="absolute inset-0 bg-center transition-all duration-500 group-hover:scale-110"
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
          backgroundSize: backgroundImageUrl.includes('iitjlogo.png') ? 'contain' : 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition-colors duration-300 backdrop-blur-none" />
      <div className="relative flex flex-col h-full p-6 pt-15 justify-center items-center text-center">
        <div className="flex-grow">
          <h3 className="text-2xl font-bold mb-2">
            {parts.map((part, index) => {
              if (part === '-' || part === '(' || part === ')') return null;
              const isSubtext = parts[index - 1] === '-' || parts[index - 1] === '(';

              return (
                <span key={index} className={`block ${isSubtext ? 'text-lg font-medium text-gray-300' : ''}`}>
                  {part}
                </span>
              );
            })}
          </h3>
        </div>
      </div>
    </motion.div>
  );
};

export default InfoCard;