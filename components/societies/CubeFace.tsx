import React from "react";
import Image from "next/image";

type CubeFaceProps = {
  boardTitle: string;
  about: string;
  holderName: string;
  contactInfo: string;
  logoUrl: string;
  socialLinks: { label: string; href: string }[];
  clubs: string[];
};

const CubeFace: React.FC<CubeFaceProps> = ({
  boardTitle,
  about,
  holderName,
  contactInfo,
  logoUrl,
  socialLinks,
  clubs,
}) => {
  return (
    <div className="w-full h-full bg-black/60 p-5 flex flex-col relative overflow-hidden shadow-xl border border-cyan-200/20 rounded-xl">
      {/* Header */}
      <div className="flex justify-between items-start mb-2">
        <span className="text-md font-bold bg-black/70 border border-cyan-200/20 rounded-lg p-3 text-cyan-100 shadow-sm">
          {boardTitle}
        </span>
      </div>
      {/* Main Content */}
      <div className="flex flex-row gap-4 flex-1">
        {/* Left side */}
        <div className="flex flex-col gap-3 flex-1">
          <div className="bg-black/50 border border-cyan-200/10 rounded-lg p-3 text-cyan-100 text-sm shadow-sm">
            {about}
          </div>
          <div className="bg-black/50 border border-cyan-200/10 rounded-lg p-3 text-cyan-100 text-sm shadow-sm flex flex-col gap-2">
            <span className="font-medium">{holderName}</span>
            <span className="ml-2 text-cyan-200 break-all">
              {contactInfo}
            </span>
          </div>
        </div>
        {/* Right side */}
        <div className="flex flex-col items-center gap-4 min-w-[150px]">
          <div className="bg-black/40 border border-cyan-200/10 rounded-xl flex flex-col items-center justify-center p-3 shadow">
            <div className="w-24 h-24 rounded-full flex items-center justify-center mb-2 shadow bg-cyan-100/10 border border-cyan-200/30">
              {logoUrl ? (
                <Image
                  src={logoUrl}
                  alt="ACAC logo"
                  width={80}
                  height={80}
                  className="rounded-full object-cover"
                />
              ) : (
                <span className="text-cyan-200 text-xs text-center">
                  ACAC logo
                </span>
              )}
            </div>
          </div>
          <div className="bg-black/40 border border-cyan-200/10 rounded-lg p-2 w-full text-center shadow">
            <span className="font-medium text-cyan-100 text-xs">
              Social media links
            </span>
            <div className="flex flex-wrap gap-2 justify-center mt-1">
              {socialLinks.length > 0 ? (
                socialLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-3 py-1 rounded-full bg-cyan-600/80 text-white text-xs font-semibold shadow hover:bg-cyan-400/90 transition"
                  >
                    {link.label}
                  </a>
                ))
              ) : (
                <span className="text-cyan-300 text-xs italic">No links</span>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Bottom side */}
      <div className="bg-black/50 border border-cyan-200/10 rounded-lg p-3 text-cyan-100 text-sm min-h-[60px] flex flex-col shadow-sm mt-3">
        <span className="font-medium mb-1">
          Clubs under{" "}
          {boardTitle.split("(")[1]?.replace(")", "") || boardTitle}:
        </span>
        <div className="flex flex-wrap gap-2 mt-1">
          {clubs.length > 0 ? (
            clubs.map((club, idx) => (
              <span
                key={idx}
                className="px-2 py-1 rounded bg-cyan-900/40 border border-cyan-200/20 text-xs text-cyan-100"
              >
                {club}
              </span>
            ))
          ) : (
            <span className="italic text-cyan-300">No clubs listed</span>
          )}
        </div>
      </div>

      {/* Glass shine effect */}
      <div className="pointer-events-none absolute inset-0 rounded-xl overflow-hidden">
        <div className="absolute -top-8 -left-8 w-1/3 h-1/3 bg-white/10 blur-[6px] rotate-12" />
        <div className="absolute bottom-2 right-2 w-1/5 h-1/5 bg-white/5 blur-[3px] rounded-full" />
      </div>
    </div>
  );
};

export default CubeFace;