"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';

interface Council {
  title: string;
  fullform: string;
  imageurl: string;
  holder: string;
  about: string;
  contactInfo: string;
  socialLinks: { label: string; href: string }[];
}

const CouncilCard: React.FC<{ council: Council }> = ({ council }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getAcronym = (title: string) => {
    const parts = title.split('-').map(part => part.trim());
    return parts[parts.length - 1] || 'N/A';
  };

  const acronym = getAcronym(council.title);

  const linkedInUrl = council.socialLinks.find(link => link.label.toLowerCase() === 'linkedin')?.href;
  const instagramUrl = council.socialLinks.find(link => link.label.toLowerCase() === 'instagram')?.href;
  const facebookUrl = council.socialLinks.find(link => link.label.toLowerCase() === 'facebook')?.href;


  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="group relative rounded-lg overflow-hidden shadow-lg h-full md:w-[1000px] bg-gray-800 text-white"
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-500 group-hover:scale-110"
        style={{ backgroundImage: `url('/images/fests/bg/background7.jpg')` }}
      />
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      
      <div className="relative flex flex-col h-full p-5">
        <div className="flex justify-between items-start">
          <div className="pr-4 flex-grow">
            <div className="flex items-center mb-4">
              
              <div className="ml-4">
                <h4 className="text-lg font-bold text-white">General Secretary</h4>
                <p className="text-sm text-gray-300">{council.fullform}</p>
              </div>
            </div>
            
            <p className={`text-sm text-gray-300 ${isExpanded ? '' : 'line-clamp-3'}`}>
              {council.about}
            </p>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-fulvous font-semibold mt-2 text-sm"
            >
              {isExpanded ? 'See Less' : 'See More'}
            </button>
          </div>

          <div className="text-right flex-shrink-0 flex flex-col items-end">
            <div className="text-3xl font-extrabold text-fulvous mb-2">{council.holder}</div>
            <Avatar className="h-35 w-30 border-1 border-fulvous/80 flex items-center flex items-center mx-auto">
              <AvatarImage src={council.imageurl || '/images/IITJ/logo/iitjlogo.png'} alt={council.holder} />
              <AvatarFallback>{council.holder.substring(0, 2)}</AvatarFallback>
            </Avatar>
          </div>
        </div>
        
        {/* Footer: Social Icons */}
        <div className="mt-auto flex justify-end items-center gap-4 pt-4">
            {instagramUrl && (
                <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-transform duration-200 hover:scale-110">
                    <FaInstagram size={24} />
                </a>
            )}
            {linkedInUrl && (
                <a href={linkedInUrl} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-transform duration-200 hover:scale-110">
                    <FaLinkedin size={24} />
                </a>
            )}
             {facebookUrl && (
                <a href={facebookUrl} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-transform duration-200 hover:scale-110">
                    <FaFacebook size={24} />
                </a>
            )}
        </div>
      </div>
    </motion.div>
  );
};

export default CouncilCard;