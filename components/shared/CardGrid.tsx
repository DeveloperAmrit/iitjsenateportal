"use client"

import React from 'react';
import InfoCard from './InfoCard';

interface CardGridProps {
  cols: number;
  title: string;
  items: { title: string; imageurl: string}[];
}

const CardGrid: React.FC<CardGridProps> = ({ cols, title, items }) => (
  <section className="w-full max-w-6xl mx-auto py-16 px-4">
    <h2 className="text-3xl font-bold mb-10 text-center text-gray-900">{title}</h2>
    <div className={`grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-${cols}`}>
      {items.map((item, i) => (
        <InfoCard key={i} title={item.title} imageurl={item.imageurl}/>
      ))}
    </div>
  </section>
);

export default CardGrid;