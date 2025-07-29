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
  href?: string;
}

const InfoCard: React.FC<CardProps> = ({ title, imageurl, href }) => {
  const parts = title.split(/(-|\(|\))/).map(part => part.trim()).filter(Boolean);

  const CardContent = (
    <motion.div
      variants={popUpVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full"
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

  if (href) {
    return (
      <Link href={href}>
        {CardContent}
      </Link>
    );
  }

  return CardContent;
};

export default InfoCard;