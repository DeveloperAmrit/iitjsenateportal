"use client"

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type FullScreenCardProps = {
  backgroundUrl: string;
  logoUrl: string;
  title: string;
  description: string;
  date?: string; // <-- Added date prop
  navLinks: { label: string; href: string }[];
};

const FullScreenCard: React.FC<FullScreenCardProps> = ({
  backgroundUrl,
  logoUrl,
  title,
  description,
  date, // <-- Accept date prop
  navLinks,
}) => {
  return (
    <div className="relative flex items-center justify-center my-12">
      <div className="absolute inset-0 rounded-3xl overflow-hidden">
        <Image
          src={backgroundUrl}
          alt="Background"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
        viewport={{ once: true }}
        className="relative z-10 flex flex-col items-center px-8 py-12 rounded-3xl shadow-2xl bg-white/10 backdrop-blur-lg border border-white/20 max-w-lg w-full"
      >
        <div className="mb-6">
          <Image
            src={logoUrl}
            alt="Logo"
            width={80}
            height={80}
            className="rounded-full shadow-lg border-4 border-white/40"
            priority
          />
        </div>
        <h1 className="text-4xl font-extrabold text-white drop-shadow mb-2 text-center">
          {title}
        </h1>
        {date && (
          <div className="mb-2 text-white/80 text-lg font-semibold text-center">
            {date}
          </div>
        )}
        <p className="text-lg text-white/90 mb-8 text-center">
          {description}
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-5 py-2 rounded-full bg-white/80 text-gray-900 font-semibold shadow hover:bg-white transition-all duration-200 hover:scale-105"
            >
              {link.label}
            </a>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default FullScreenCard;