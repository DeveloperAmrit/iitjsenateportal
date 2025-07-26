"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type CouncilCardProps = {
  title: string;
  about: string;
  holderName: string;
  contactInfo: string;
  logoUrl: string;
  socialLinks: { label: string; href: string }[];
};

const CouncilCard: React.FC<CouncilCardProps> = ({
  title,
  about,
  holderName,
  contactInfo,
  logoUrl,
  socialLinks,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6 flex flex-col md:flex-row gap-6 shadow-lg hover:shadow-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300"
    >
      <div className="flex-1 flex flex-col gap-5">
        <h3 className="font-semibold text-2xl mb-2 text-white">{title}</h3>
        <div className="bg-gray-900/70 border border-gray-700 rounded-lg p-4 shadow-sm text-gray-300">
          {about}
        </div>
        <div className="bg-gray-900/70 border border-gray-700 rounded-lg p-4 shadow-sm flex items-center gap-2">
          <span className="font-medium text-white">{holderName}</span>
          <span className="ml-2 text-gray-400">{contactInfo}</span>
        </div>
      </div>
      <div className="flex flex-col items-center gap-5 min-w-[200px]">
        <div className="bg-gray-900/70 border border-gray-700 rounded-xl flex flex-col items-center justify-center p-6 shadow">
          <div className="w-28 h-28 rounded-full flex items-center justify-center mb-2 shadow bg-gray-800">
            {logoUrl ? (
              <Image
                src={logoUrl}
                alt="Council Logo"
                width={90}
                height={90}
                className="rounded-full object-cover"
              />
            ) : (
              <span className="text-gray-400 text-center">Logo</span>
            )}
          </div>
        </div>
        <div className="bg-gray-900/70 border border-gray-700 rounded-xl p-4 w-full text-center shadow">
          <span className="font-semibold text-gray-300 mb-2 block">
            Social Links
          </span>
          <div className="grid grid-cols-2 gap-3 justify-center mt-2">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 rounded-full bg-cyan-600/80 text-white font-medium shadow hover:scale-105 hover:bg-cyan-500/80 transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CouncilCard;