import React from 'react';
import { fests } from '@/data/fests';
import FestCard from './FestCard';

const FestCalendar = () => {
  return (
    <section className="w-full bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-12">
          <p className="text-lg text-gray-600">
            University events take place throughout the year, from educational showpieces to public lectures, national tours and one-off exhibitions.
          </p>
          <a href="#" className="text-fulvous font-semibold mt-2 inline-block border-b-2 border-fulvous">
            See all events
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fests.map((fest) => (
            <FestCard key={fest.title} fest={fest} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FestCalendar;