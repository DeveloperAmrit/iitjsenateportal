import React from 'react';
import { councils } from '@/data/councils';
import { ACACBoards, SACBoards } from '@/data/boards';
import { BCCAClubs, BLAClubs, BACClubs, BSSClubs, BCDClubs, BAIClubs, SAAClubs, BIECLubs, SenateCommitties } from '@/data/clubs';
import CardGrid from '../shared/CardGrid';
import InfiniteMarquee from '../shared/Marquee';
import InfoCard from '../shared/InfoCard';

type ItemWithAbout = {
  title: string;
  imageurl: string;
};

type Item = {
  title: string;
  imageurl: string;
};


const mapItemsForCards = (arr: ItemWithAbout[]) =>
  arr.map(({ title, imageurl}) => ({ title, imageurl}));
  
const mapItemsForMarquee = (arr: Item[]) =>
  arr.map(({ title, imageurl }) => ({ title, imageurl }));

const Cards: React.FC = () => {
  const councilItems = mapItemsForCards(councils);
  const acacItems = mapItemsForCards(ACACBoards);
  const sacItems = mapItemsForCards(SACBoards);
  const acacClubs = [
    ...mapItemsForMarquee(BCCAClubs),
    ...mapItemsForMarquee(BAIClubs),
    ...mapItemsForMarquee(SAAClubs),
    ...mapItemsForMarquee(BIECLubs),
    ...mapItemsForMarquee(BCDClubs),
    ...mapItemsForMarquee(SenateCommitties)
  ];
  const sacClubs = [
    ...mapItemsForMarquee(BLAClubs),
    ...mapItemsForMarquee(BACClubs),
    ...mapItemsForMarquee(BSSClubs),
  ];

  return (
    <div className="flex flex-col items-center gap-16 py-10 bg-gray-300 text-white">
      <CardGrid title="Councils under the Student Body" cols={3} items={councilItems} />
      <CardGrid title="Boards under ACAC" cols={3} items={acacItems} />

      <section className="w-full max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center text-gray-900">Boards under SAC</h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {sacItems.map((item, i) => (
            <InfoCard key={i} title={item.title} imageurl={item.imageurl}/>
          ))}
        </div>
      </section>

      <InfiniteMarquee
        data={acacClubs}
        marqueeTitle="Societies under ACAC"
        minItemsPerRow={3}
        maxItemsPerRow={5}
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