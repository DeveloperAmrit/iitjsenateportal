"use client"

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
}) => {
  // Calculate items per row based on data length
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

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      animate={controls}
      className="w-full py-4 rounded-lg shadow-lg shadow-gray-300 border-t border-gray-100 bg-white"
    >
      <h2 className="w-full text-center text-2xl font-bold mb-2">{marqueeTitle}</h2>
      <div className="flex flex-col gap-2">
        {rows.map((row, idx) => (
          <Marquee
            key={idx}
            speed={40 + idx * 10}
            pauseOnHover={false}
            gradient={false}
            direction={idx % 2 === 0 ? "left" : "right"}
            className="py-1"
            autoFill
          >
            <div className="flex w-full justify-evenly">
              {row.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-x-4 gap-2 bg-white/80 rounded shadow px-4 py-2 mx-2 min-w-[180px] min-h-[80px] border-t border-gray-100"
                >
                  <Image
                    src={item.imageurl}
                    alt={item.title}
                    width={32}
                    height={32}
                    className="rounded-full object-cover"
                  />
                  <span className="w-full text-base font-medium text-center">{item.title}</span>
                </div>
              ))}
            </div>
          </Marquee>
        ))}
      </div>
    </motion.div>
  );
};

export default InfiniteMarquee;