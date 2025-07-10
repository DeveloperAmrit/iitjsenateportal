import React from 'react'
import FullScreenCard from '../shared/FullScreenCard'
import {fests} from '@/data/fests'

const Fests = () => { 
  return (
    <div>
        {fests.map((fest, index) =>(
            <FullScreenCard
                key={index}
                backgroundUrl={fest.backgroundUrl}
                logoUrl={fest.logoUrl}
                title={fest.title}
                description={fest.description}
                date={fest.date} // Pass the date prop
                navLinks={fest.navlinks}
            />
        ))}
    </div>
  )
}

export default Fests