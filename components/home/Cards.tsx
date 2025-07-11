
import React from 'react'
import { councils } from '@/data/councils'
import { ACACBoards, SACBoards } from '@/data/boards'
import { BCCAClubs, BLAClubs, BACClubs, BSSClubs } from '@/data/clubs'
import CardGrid from '../shared/CardGrid'
import InfiniteMarquee from '../shared/Marquee'

const mapItems = (arr: { title: string; imageurl: string }[]) =>
  arr.map(({ title, imageurl }) => ({ title, imageurl }))

const Cards: React.FC = () => {
  const councilItems = mapItems(councils)
  const acacItems = mapItems(ACACBoards)
  const sacItems = mapItems(SACBoards)
  const acacClubs = mapItems(BCCAClubs)
  const sacClubs = [
    ...mapItems(BLAClubs),
    ...mapItems(BACClubs),
    ...mapItems(BSSClubs),
  ]

  return (
    <div className="flex flex-col items-center gap-24 p-4">
      <CardGrid title="Councils under the Student Body" cols={3} items={councilItems} />
      <CardGrid title="Boards under ACAC" cols={5} items={acacItems} />
      <CardGrid title="Boards under SAC" cols={5} items={sacItems} />
      <InfiniteMarquee
        data={acacClubs}
        marqueeTitle="Societies under ACAC"
        minItemsPerRow={2}
        maxItemsPerRow={3}
      />
      <InfiniteMarquee
        data={sacClubs}
        marqueeTitle="Societies under SAC"
        maxItemsPerRow={9}
      />
    </div>
  )
}

export default Cards
