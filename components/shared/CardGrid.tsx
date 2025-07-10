"use client"

import React, {useEffect} from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface CardGridProps {
  cols: number
  title: string
  items: Item[];
}

interface Item {
    title: string
    imageurl: string
}

const CardGrid = ({ cols, title, items }: CardGridProps) => {
  const controls = useAnimation()
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut' },
      })
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      animate={controls}
      className='w-full rounded-lg shadow-lg shadow-gray-300 border-t border-gray-100 bg-white'
    >
      <h2 className='text-2xl font-bold text-center m-4'>{title}</h2>
      <div className={`grid grid-cols-${cols} gap-4 p-4`}>
        {items.map((item, index) => (
          <div
            key={index}
            className='w-full flex justify-between gap-x-4 items-center rounded-lg shadow-md p-4 border-t border-gray-100'
          >
            <img
              src='/images/iitjlogo.png'
              alt={item.title}
              className='w-16 h-16 object-cover rounded-t-lg'
            />
            <h3 className='text-lg font-semibold mt-2 w-28'>{item.title}</h3>
          </div>
        ))}
      </div>

      {/* Tailwind helper */}
      <span className='hidden grid-cols-3'>
        <span className='grid-cols-5'></span>
      </span>
    </motion.div>
  )
}

export default CardGrid