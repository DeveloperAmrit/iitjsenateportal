"use client"

import React from 'react'
import { motion, Variants } from 'framer-motion'

interface CardGridProps {
  cols: number
  title: string
  items: { title: string; imageurl: string }[]
}

interface CardProps {
  title: string
  imageurl: string
}

const popUpVariant: Variants = {
  hidden: { opacity: 0.2, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

const Card: React.FC<CardProps> = ({ title, imageurl }) => (
  <motion.div
    variants={popUpVariant}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: false, amount: 0.3 }} // ← this makes it animate every time it enters view
    className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300"
  >
    <div className="flex items-center justify-center h-48 bg-gray-100 overflow-hidden">
      <img
        src={imageurl}
        alt={title}
        loading="lazy"
        className="h-48 object-cover"
        onError={(e) => {
          e.currentTarget.onerror = null
          e.currentTarget.src = '/images/IITJ/logo/iitjlogo.png'
        }}
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-800 text-center">{title}</h3>
    </div>
  </motion.div>
)

const CardGrid: React.FC<CardGridProps> = ({ cols, title, items }) => (
  <section className="w-4/5 mx-auto my-16">
    <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">{title}</h2>
    <div className={`grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-${cols}`}>
      {items.map((item, i) => (
        <Card key={i} title={item.title} imageurl={item.imageurl} />
      ))}
    </div>
  </section>
)

export default CardGrid
