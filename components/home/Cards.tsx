import React from 'react';
import { councils } from '@/data/councils';
import { ACACBoards, SACBoards } from '@/data/boards';
import { BCCAClubs, BLAClubs, BACClubs, BSSClubs } from '@/data/clubs';
import CardGrid from '../shared/CardGrid';
import InfiniteMarquee from '../shared/Marquee';
import InfoCard from '../shared/InfoCard';

const mapItems = (arr: { title: string; imageurl: string }[]) =>
  arr.map(({ title, imageurl }) => ({ title, imageurl }));

const Cards: React.FC = () => {
  const councilItems = mapItems(councils);
  const acacItems = mapItems(ACACBoards);
  const sacItems = mapItems(SACBoards);
  const acacClubs = mapItems(BCCAClubs);
  const sacClubs = [
    ...mapItems(BLAClubs),
    ...mapItems(BACClubs),
    ...mapItems(BSSClubs),
  ];

  return (
    <div className="flex flex-col items-center gap-16 py-10 bg-gray-900 text-white">
      <CardGrid title="Councils under the Student Body" cols={3} items={councilItems} />
      <CardGrid title="Boards under ACAC" cols={3} items={acacItems} />

      <section className="w-full max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center text-fulvous">Boards under SAC</h2>
        <div className="flex flex-wrap gap-8 justify-center">
          {sacItems.map((item, i) => (
            <div key={i} className="w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.33%-1.5rem)] lg:w-[calc(33.33%-1.5rem)]">
              <InfoCard title={item.title} imageurl={item.imageurl} />
            </div>
          ))}
        </div>
      </section>

      <InfiniteMarquee
        data={acacClubs}
        marqueeTitle="Societies under ACAC"
        minItemsPerRow={3}
        maxItemsPerRow={6}
      />
      <InfiniteMarquee
        data={sacClubs}
        marqueeTitle="Societies under SAC"
        maxItemsPerRow={9}
      />
    </div>
  );
};

export default Cards;