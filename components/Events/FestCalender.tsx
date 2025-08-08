import React from 'react';
import { fests } from '@/data/fests';
import FestCard from './FestCard';

const FestCalendar = () => {
  return (
    <section className="w-full bg-gray-800 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">Upcoming Fests and Events</h2>
          <p className="text-lg text-gray-400 mt-2">
            Explore the vibrant events and fests that make our campus come alive.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {fests.map((fest) => (
            <FestCard key={fest.title} fest={fest} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FestCalendar;