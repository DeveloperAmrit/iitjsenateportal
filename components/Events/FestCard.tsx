"use client"

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
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
  const getEventDate = (dateStr: string) => {
    try {
      const parsableDateStr = dateStr.split('-')[0].trim();
      const date = new Date(parsableDateStr);
      if (isNaN(date.getTime())) return { day: 'TBA', month: 'TBA' };
      const day = date.getDate();
      const month = date.toLocaleString('default', { month: 'short' });
      return { day, month };
    } catch (e) {
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
      className="flex flex-col bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg h-full"
    >
      <div className="p-6 flex justify-between items-start">
        <div className="pr-4">
          <h3 className="text-xl font-bold mb-2">{fest.title}</h3>
          <p className="text-sm text-gray-400 line-clamp-3">{fest.description}</p>
        </div>
        <div className="text-right flex-shrink-0">
          <div className="text-5xl font-extrabold text-fulvous">{day}</div>
          <div className="text-lg font-semibold -mt-1">{month}</div>
        </div>
      </div>
      <div className="mt-auto">
        <div className="relative h-48 w-full">
          <img src={fest.backgroundUrl} alt={fest.title} className="w-full h-full object-cover" />
        </div>
        <div className="flex justify-between bg-gray-700 p-3">
          <Button asChild variant="ghost" className="text-white hover:bg-gray-600 hover:text-white">
            <Link href={fest.website} target="_blank">Register</Link>
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="ghost" className="text-white hover:bg-gray-600 hover:text-white">More Info</Button>
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