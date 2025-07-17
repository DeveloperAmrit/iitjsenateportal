"use client"

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type FullScreenCardProps = {
  backgroundUrl: string;
  logoUrl: string;
  title: string;
  description: string;
  date?: string;
  navLinks: { label: string; href: string }[];
  id?: string;
};

const FullScreenCard: React.FC<FullScreenCardProps> = ({
  backgroundUrl,
  logoUrl,
  title,
  description,
  date,
  navLinks,
  id,
}) => {
  return (
    <div id={id} className="relative flex items-center justify-center w-full min-h-screen py-24 px-4 sm:px-8 lg:px-16">
      {/* Background Section: */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={backgroundUrl}
          alt="Background"
          fill
          
          className="object-cover object-center scale-105 transition-transform duration-700 ease-out group-hover:scale-100" 
          priority
        />
       
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90" />
      </div>

      {/* Content Card Section: */}
      <motion.div
        initial={{ opacity: 0, y: 100 }} 
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, type: "spring", bounce: 0.35 }} 
        viewport={{ once: true, amount: 0.3 }} 

        className="relative z-10 flex flex-col items-center p-8 sm:p-12 md:p-20 rounded-3xl shadow-2xl bg-white/3 backdrop-blur-lg border border-white/20 max-w-5xl w-full text-white overflow-hidden" 
      >
  
        <div className="absolute inset-0 bg-black/20 rounded-3xl" />

        <div className="mb-8 mt-4"> 
          <Image
            src='/images/IITJ/logo/iitjlogo.png'
            alt="Event Logo" 
            width={140} 
            height={140} 
            className="rounded-full shadow-xl border-4 border-white/50 object-cover" 
            priority
            onError={(e) => { 
              e.currentTarget.onerror = null;
              e.currentTarget.src = '/images/placeholder-logo.png'; 
            }}
          />
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold drop-shadow-lg mb-4 text-center leading-tight"> 
          {title}
        </h1>

        {date && (
          <div className="text-xl md:text-2xl font-semibold mb-6 text-center text-white/90 tracking-wide"> 
            {date}
          </div>
        )}

        <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-10 text-center max-w-3xl leading-relaxed">
          {description}
        </p>

        <div className="flex flex-wrap gap-5 md:gap-8 justify-center mt-4"> 
          {navLinks.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              className="px-8 py-3 rounded-full bg-white text-gray-900 font-bold shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 text-lg md:text-xl flex items-center justify-center min-w-[160px]"
              whileHover={{ scale: 1.05, boxShadow: "0px 6px 15px rgba(0,0,0,0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              {link.label}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default FullScreenCard;