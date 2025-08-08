"use client";

import React, { useEffect } from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

type MarqueeItem = {
  title: string;
  imageurl: string;
};

type InfiniteMarqueeProps = {
  data: MarqueeItem[];
  marqueeTitle?: string;
  minItemsPerRow?: number;
  maxItemsPerRow?: number;
  fadeWidth?: string;
};

function chunkArray<T>(arr: T[], chunkSize: number): T[][] {
  const result: T[][] = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    result.push(arr.slice(i, i + chunkSize));
  }
  return result;
}

const InfiniteMarquee: React.FC<InfiniteMarqueeProps> = ({
  data,
  marqueeTitle = "Featured",
  minItemsPerRow = 3,
  maxItemsPerRow = 6,
  fadeWidth = "150px",
}) => {
  let itemsPerRow = Math.ceil(data.length / 2);
  itemsPerRow = Math.max(minItemsPerRow, Math.min(maxItemsPerRow, itemsPerRow));
  const rows = chunkArray(data, itemsPerRow);

  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
      });
    }
  }, [controls, inView]);

  const cardHoverVariant = {
    scale: 1.05, 
    boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.25)", 
    y: -5, 
    transition: {
      type: "spring" as const, 
      stiffness: 300,
      damping: 20,
    },
  };


  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      animate={controls}
      className="w-full py-8 bg-gray-900"
    >
      <h2 className="w-full text-center text-3xl font-bold mb-8 text-fulvous">{marqueeTitle}</h2>
      <div className="flex flex-col gap-4">
        {rows.map((row, idx) => (
          <div
            key={idx}
            className="relative overflow-hidden"
            style={{
              maskImage: `linear-gradient(to right, 
                rgba(0,0,0,0) 0%, 
                rgba(0,0,0,1) ${fadeWidth}, 
                rgba(0,0,0,1) calc(100% - ${fadeWidth}), 
                rgba(0,0,0,0) 100%
              )`,
              WebkitMaskImage: `linear-gradient(to right, 
                rgba(0,0,0,0) 0%, 
                rgba(0,0,0,1) ${fadeWidth}, 
                rgba(0,0,0,1) calc(100% - ${fadeWidth}), 
                rgba(0,0,0,0) 100%
              )`,
            }}
          >
            <Marquee
              speed={40 + idx * 10}
              pauseOnHover={true}
              gradient={false}
              direction={idx % 2 === 0 ? "left" : "right"}
              className="py-2"
              autoFill
            >
              <div className="flex w-full justify-evenly ">
                {row.map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-x-4 bg-gray-700 rounded-lg shadow-md px-4 py-3 mx-4 min-w-[220px] h-[80px] border border-gray-700 hover:shadow-fulvous/20 hover:border-fulvous/50 transition-all duration-10"
                    whileHover={cardHoverVariant}
                    initial={false}
                  >
                    <Image
                      src='/images/IITJ/logo/iitjlogo.png'
                      alt={item.title}
                      width={40}
                      height={40}
                      className="rounded-full object-cover flex-shrink-0"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = '/images/IITJ/logo/iitjlogo.png'; // Fallback
                      }}
                    />
                    <span className="w-full text-base font-medium text-center text-gray-200">{item.title}</span>
                  </motion.div>
                ))}
              </div>
            </Marquee>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default InfiniteMarquee;