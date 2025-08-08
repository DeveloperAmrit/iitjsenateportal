import React from "react";
import Image from "next/image";

type ClubCardProps = {
  title: string;
  about: string;
  holderName: string;
  contactInfo: string;
  logoUrl: string;
  socialLinks: { label: string; href: string }[];
};

const ClubCard: React.FC<ClubCardProps> = ({
  title,
  about,
  holderName,
  contactInfo,
  logoUrl,
  socialLinks,
}) => {
  return (
    <div className="bg-gradient-to-br from-white via-gray-50 to-gray-100 border border-gray-200 rounded-3xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-[1.02] max-w-md relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#E58420] to-[#323273] opacity-10 rounded-full -translate-y-10 translate-x-10"></div>
      <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-[#262872] to-[#E58420] opacity-10 rounded-full translate-y-8 -translate-x-8"></div>
      
      <div className="relative z-10">
        {/* Title */}
        <div className="text-center mb-6">
          <h3 className="font-bold text-2xl text-[#060616] mb-2">
            {title}
          </h3>
          <div className="w-12 h-1 bg-gradient-to-r from-[#E58420] to-[#323273] rounded-full mx-auto"></div>
        </div>
        
        {/* Logo Section */}
        <div className="flex justify-center mb-6">
          <div className="w-28 h-28 bg-white rounded-2xl border-2 border-gray-200 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300 hover:scale-105">
            {logoUrl ? (
              <Image
                src={logoUrl}
                alt={`${title} Logo`}
                width={90}
                height={90}
                className="rounded-xl object-cover"
              />
            ) : (
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-[#E58420] to-[#323273] rounded-full mx-auto mb-2"></div>
                <span className="text-[#323273] text-xs font-medium">Logo</span>
              </div>
            )}
          </div>
        </div>
        
        {/* About Section */}
        <div className="bg-white/80 backdrop-blur-sm border border-gray-200/30 rounded-2xl p-4 shadow-md mb-4 hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 bg-[#E58420] rounded-full"></div>
            <span className="text-sm font-semibold text-[#323273] uppercase tracking-wide">About</span>
          </div>
          <p className="text-[#060616] text-sm leading-relaxed">{about}</p>
        </div>

        {/* Contact Section */}
        <div className="bg-white/80 backdrop-blur-sm border border-gray-200/30 rounded-2xl p-4 shadow-md mb-4 hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 bg-[#262872] rounded-full"></div>
            <span className="text-sm font-semibold text-[#323273] uppercase tracking-wide">Contact</span>
          </div>
          <div className="space-y-1">
            <p className="font-bold text-[#060616] text-sm">{holderName || "Not assigned"}</p>
            <p className="text-[#323273] text-sm font-medium">{contactInfo}</p>
          </div>
        </div>

        {/* Social Links */}
        <div className="bg-white/80 backdrop-blur-sm border border-gray-200/30 rounded-2xl p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-2 h-2 bg-[#E58420] rounded-full"></div>
            <span className="text-sm font-semibold text-[#323273] uppercase tracking-wide">Social Links</span>
            <div className="w-2 h-2 bg-[#262872] rounded-full"></div>
          </div>
          
          <div className="flex flex-wrap gap-2 justify-center">
            {socialLinks.length > 0 ? (
              socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative px-3 py-2 bg-gradient-to-r from-[#E58420] to-[#323273] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:from-[#323273] hover:to-[#262872] text-xs"
                >
                  <span className="relative z-10">{link.label}</span>
                  <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              ))
            ) : (
              <div className="text-center py-2">
                <div className="w-6 h-6 bg-gradient-to-br from-[#E58420]/30 to-[#323273]/30 rounded-full mx-auto mb-1"></div>
                <span className="text-[#323273]/60 text-xs italic">No links available</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClubCard;