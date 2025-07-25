import React from "react";
import Image from "next/image";

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
    <div className="bg-gradient-to-br from-gray-100 via-white to-gray-200 border border-gray-300 rounded-2xl p-6 flex flex-col md:flex-row gap-6 shadow-xl hover:shadow-2xl transition-shadow duration-300">
      <div className="flex-1 flex flex-col gap-5">
        <h3 className="font-semibold text-xl mb-2 text-gray-800">{title}</h3>
        <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm text-gray-700">
          {about}
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm flex items-center gap-2">
          <span className="font-medium text-gray-800">{holderName}</span>
          <span className="ml-2 text-gray-500">{contactInfo}</span>
        </div>
      </div>
      <div className="flex flex-col items-center gap-5 min-w-[200px]">
        <div className="bg-white border border-gray-200 rounded-xl flex flex-col items-center justify-center p-6 shadow">
          <div className="w-28 h-28 rounded-full flex items-center justify-center mb-2  shadow">
            {logoUrl ? (
              <Image
                src={logoUrl}
                alt="Council Logo"
                width={90}
                height={90}
                className="rounded-full object-cover"
              />
            ) : (
              <span className="text-gray-500 text-center">ACAC logo</span>
            )}
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-4 w-full text-center shadow">
          <span className="font-semibold text-gray-700 mb-2 block">
            Social media links
          </span>
          <div className="grid grid-cols-2 gap-3 justify-center mt-2">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 text-white font-medium shadow hover:scale-105 hover:from-blue-600 hover:to-blue-800 transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CouncilCard;