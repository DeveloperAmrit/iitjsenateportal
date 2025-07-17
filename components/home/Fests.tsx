
import React from 'react'
import FullScreenCard from '../shared/FullScreenCard'
import { fests } from '@/data/fests' 
const Fests = () => {
  return (
    <div className='flex flex-col gap-y-24 bg-gray-900'> {/* Added flexbox and gap */}
      {fests.map((fest, index) => (
        <FullScreenCard
          key={index}
          backgroundUrl={fest.backgroundUrl}
          logoUrl={fest.logoUrl}
          title={fest.title}
          description={fest.description}
          date={fest.date}
          navLinks={fest.navlinks}
        />
      ))}
    </div>
  )
}

export default Fests