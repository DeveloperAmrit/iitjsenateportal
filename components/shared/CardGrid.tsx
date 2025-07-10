import React from 'react'

interface CardGridProps {
  cols: number
  title: string
  items: Item[];
}

interface Item {
    title: string
    imageurl: string
}

const CardGrid = ({cols, title, items}:CardGridProps) => {
  return (
    <div className=''>

    </div>
  )
}

export default CardGrid