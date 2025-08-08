"use client"

import React from 'react';
import Image from 'next/image';
import { FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';

interface Council {
  title: string;
  fullform: string;
  imageurl: string;
  holder: string;
  about: string;
  contactInfo: string;
  socialLinks: { label: string; href: string }[];
}

const CouncilCard: React.FC<{ council: Council }> = ({ council }) => {

  const title = council.title;
  const logoUrl = council.imageurl;
  const holderName = council.holder;
  const about = council.about;
  const contactInfo = council.contactInfo;
  const socialLinks = council.socialLinks || [];

  const linkedInUrl = council.socialLinks.find(link => link.label.toLowerCase() === 'linkedin')?.href;
  const instagramUrl = council.socialLinks.find(link => link.label.toLowerCase() === 'instagram')?.href;
  const facebookUrl = council.socialLinks.find(link => link.label.toLowerCase() === 'facebook')?.href;


  return (
    <div className="bg-gradient-to-br from-white via-gray-50 to-gray-100 border border-gray-200 rounded-3xl p-8 flex flex-col lg:flex-row gap-8 shadow-2xl hover:shadow-3xl transition-all duration-300  relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#E58420] to-[#323273] opacity-10 rounded-full -translate-y-16 translate-x-16"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#262872] to-[#E58420] opacity-10 rounded-full translate-y-12 -translate-x-12"></div>

      <div className="flex-1 flex flex-col gap-6 z-10">
        {/* Title */}
        <div className="relative">
          <h3 className="font-bold text-3xl text-[#060616] mb-2 relative z-10">
            {title}
          </h3>
          <div className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-[#E58420] to-[#323273] rounded-full"></div>
        </div>

        {/* About Section */}
        <div className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-2 h-2 bg-[#E58420] rounded-full"></div>
            <span className="font-semibold text-[#323273] text-sm uppercase tracking-wide">
              About
            </span>
          </div>
          <p className="text-[#060616] leading-relaxed">{about}</p>
        </div>

        {/* Contact Info */}
        <div className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-2 h-2 bg-[#262872] rounded-full"></div>
            <span className="font-semibold text-[#323273] text-sm uppercase tracking-wide">
              Contact
            </span>
          </div>
          <div className="space-y-2">
            <p className="font-bold text-[#060616] text-lg">{holderName}</p>
            <p className="text-[#323273] font-medium">{contactInfo}</p>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex flex-col items-center gap-6 min-w-[250px] z-10">
        {/* Logo Section */}
        <div className="bg-white/90 backdrop-blur-sm border border-gray-200/50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#E58420]/20 to-[#323273]/20 flex items-center justify-center shadow-inner border-4 border-white">
            {logoUrl ? (
              <Image
                src={logoUrl}
                alt="Council Logo"
                width={100}
                height={100}
                className="rounded-full object-cover"
              />
            ) : (
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-[#E58420] to-[#323273] rounded-full mx-auto mb-2"></div>
                <span className="text-[#323273] text-xs font-medium">Logo</span>
              </div>
            )}
          </div>
        </div>

        {/* Social Links */}
        <div className="bg-white/90 backdrop-blur-sm border border-gray-200/50 rounded-3xl p-6 w-full shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-2 h-2 bg-[#E58420] rounded-full"></div>
            <span className="font-bold text-[#323273] text-sm uppercase tracking-wide">
              Social Links
            </span>
            <div className="w-2 h-2 bg-[#262872] rounded-full"></div>
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            {socialLinks.length > 0 ? (
              socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative px-4 py-2 bg-gradient-to-r from-[#E58420] to-[#323273] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:from-[#323273] hover:to-[#262872] text-sm"
                >
                  <span className="relative z-10">{link.label}</span>
                  <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              ))
            ) : (
              <div className="text-center py-4">
                <div className="w-8 h-8 bg-gradient-to-br from-[#E58420]/30 to-[#323273]/30 rounded-full mx-auto mb-2"></div>
                <span className="text-[#323273]/60 text-sm italic">
                  No links available
                </span>
              </div>
            )}
          </div>
        </div>
        
        {/* Footer: Social Icons */}
        <div className="mt-auto flex justify-end items-center gap-4 pt-4">
          {instagramUrl && (
            <a 
              href={instagramUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#323273] hover:text-[#E58420] transition-all duration-200 hover:scale-110"
            >
              <FaInstagram size={24} />
            </a>
          )}
          {linkedInUrl && (
            <a 
              href={linkedInUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#323273] hover:text-[#E58420] transition-all duration-200 hover:scale-110"
            >
              <FaLinkedin size={24} />
            </a>
          )}
          {facebookUrl && (
            <a 
              href={facebookUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#323273] hover:text-[#E58420] transition-all duration-200 hover:scale-110"
            >
              <FaFacebook size={24} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default CouncilCard;