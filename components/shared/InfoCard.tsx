"use client"

import React from 'react';
import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const popUpVariant: Variants = {
  hidden: { opacity: 0.2, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

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
      <div className="flex-shrink-0 h-48 bg-gray-100 overflow-hidden flex items-center justify-center relative">
        <Image
          src={imageurl}
          alt={title}
          fill
          className="object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = '/images/IITJ/logo/iitjlogo.png';
          }}
        />
      </div>
      <div className="p-6 flex-grow flex flex-col justify-center">
        <h3 className="text-xl font-semibold text-gray-800 text-center">
          {parts.map((part, index) => {
            if (part === '-' || part === '(' || part === ')') return null;
            const isName = parts[index - 1] === '-';
            const isAcronym = parts[index - 1] === '(';

            return (
              <span key={index} className={`block ${isName || isAcronym ? 'mt-1 text-gray-600 font-medium' : ''}`}>
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