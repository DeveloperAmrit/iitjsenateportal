"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

interface Fest {
  title: string;
  description: string;
  backgroundUrl: string;
  date: string;
  website: string;
  navlinks: { label: string; href: string }[];
  porHolders: string[];
}

const FestCard: React.FC<{ fest: Fest }> = ({ fest }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getEventDate = (dateStr: string) => {
    try {
      const parsableDateStr = dateStr.split('-')[0].trim();
      const date = new Date(parsableDateStr);
      if (isNaN(date.getTime())) return { day: 'TBA', month: 'TBA' };
      const day = date.getDate();
      const month = date.toLocaleString('default', { month: 'short' });
      return { day, month };
    } catch (error) {
      console.error("Error parsing date:", error);
      return { day: 'TBA', month: 'TBA' };
    }
  };

  const { day, month } = getEventDate(fest.date);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="group relative rounded-lg overflow-hidden shadow-lg h-full bg-gray-800 text-white"
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-500 group-hover:scale-110"
        style={{ backgroundImage: `url(${fest.backgroundUrl})` }}
      />
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div className="relative flex flex-col h-full p-6">
        <div className="flex justify-between items-start">
          <div className="pr-4">
            <h3 className="text-2xl font-bold mb-2">{fest.title}</h3>
            <p className={`text-sm text-gray-300 ${isExpanded ? '' : 'line-clamp-3'}`}>
              {fest.description}
            </p>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-fulvous font-semibold mt-2"
            >
              {isExpanded ? 'See Less' : 'See More'}
            </button>
          </div>
          <div className="text-right flex-shrink-0">
            <div className="text-6xl font-extrabold text-fulvous">{day}</div>
            <div className="text-xl font-semibold -mt-1">{month}</div>
          </div>
        </div>
        <div className="mt-auto flex justify-end">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="ghost" className="text-white hover:bg-gray-700 hover:text-white">More Info</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-white">
              <DialogHeader>
                <DialogTitle>{fest.title} - POR Holders</DialogTitle>
              </DialogHeader>
              <div className="py-4">
                <ul className="list-disc pl-5 space-y-2">
                  {fest.porHolders.map((holder, index) => (
                    <li key={index}>{holder}</li>
                  ))}
                </ul>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </motion.div>
  );
};

export default FestCard;