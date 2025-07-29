"use client"

import React, { useState } from 'react';
import '../../styles/3dcube.css';
import CubeFace from './CubeFace';

interface CubeFaceData {
  boardTitle: string;
  about: string;
  holderName: string;
  contactInfo: string;
  logoUrl: string;
  socialLinks: { label: string; href: string }[];
  clubs: string[];
}

interface CubeProps {
  faces: [CubeFaceData, CubeFaceData, CubeFaceData, CubeFaceData, CubeFaceData, CubeFaceData];
}

type Rotation = { x: number; y: number };

const Cube: React.FC<CubeProps> = ({ faces }) => {
  const [rotation, setRotation] = useState<Rotation>({ x: 0, y: 0 });
  const [activeFace, setActiveFace] = useState<number>(0);

  // Button/face mapping
  const faceConfigs = [
    { idx: 0, rot: { x: 0, y: 0 }, label: "Front" },
    { idx: 1, rot: { x: 0, y: -90 }, label: "Right" },
    { idx: 2, rot: { x: 0, y: 90 }, label: "Left" },
    { idx: 3, rot: { x: -90, y: 0 }, label: "Top" },
    { idx: 4, rot: { x: 90, y: 0 }, label: "Bottom" },
    { idx: 5, rot: { x: 180, y: 0 }, label: "Back" },
  ];

  const rotateTo = (x: number, y: number, idx: number) => {
    setRotation({ x, y });
    setActiveFace(idx);
  };

  return (
    <div className="w-full flex items-center justify-center py-16">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-24 max-w-7xl mx-auto px-8">
        
        {/* Control Panel */}
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-6 w-[320px] flex-shrink-0 lg:sticky lg:top-8">
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-[#060616] mb-2">Board Navigator</h3>
            <div className="w-12 h-1 bg-gradient-to-r from-[#E58420] to-[#323273] rounded-full mx-auto"></div>
          </div>
          
          <div className="space-y-3">
            <div className="text-xs font-semibold text-[#323273] uppercase tracking-wider mb-3 text-center">
              Select a Board
            </div>
            {faceConfigs.map((item, idx) => (
              faces[item.idx].boardTitle && (
                <button
                  key={idx}
                  onClick={() => rotateTo(item.rot.x, item.rot.y, item.idx)}
                  className={`w-full px-4 py-3 rounded-lg font-semibold text-left transition-all duration-300 border-2 group relative overflow-hidden ${
                    activeFace === item.idx 
                      ? "bg-gradient-to-r from-[#E58420] to-[#323273] text-white border-transparent shadow-lg transform scale-105" 
                      : "bg-white text-[#060616] border-gray-200 hover:border-[#E58420] hover:shadow-md hover:scale-102"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1 min-w-0 pr-2">
                      <div className="font-bold text-xs mb-1 truncate">
                        {faces[item.idx].boardTitle.replace(/^Board of /, '')}
                      </div>
                      <div className={`text-xs opacity-75 ${
                        activeFace === item.idx ? "text-white/80" : "text-[#323273]"
                      }`}>
                        {item.label}
                      </div>
                    </div>
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 flex-shrink-0 ${
                      activeFace === item.idx 
                        ? "bg-white/20 text-white" 
                        : "bg-[#E58420]/10 text-[#E58420] group-hover:bg-[#E58420]/20"
                    }`}>
                      {idx + 1}
                    </div>
                  </div>
                  
                  {/* Hover effect overlay */}
                  {activeFace !== item.idx && (
                    <div className="absolute inset-0 bg-gradient-to-r from-[#E58420]/5 to-[#323273]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                  )}
                </button>
              )
            ))}
          </div>
          
          {/* Current board info */}
          <div className="mt-6 p-3 bg-gradient-to-br from-[#E58420]/5 to-[#323273]/5 rounded-lg border border-[#E58420]/20">
            <div className="text-xs font-semibold text-[#323273] uppercase tracking-wider mb-1">
              Currently Viewing
            </div>
            <div className="font-bold text-sm text-[#060616] truncate">
              {faces[activeFace].boardTitle}
            </div>
          </div>
        </div>

        {/* 3D Cube */}
        <div className="flex-1 flex items-center justify-center min-h-[600px] lg:pl-8">
          <div className="relative">
            {/* Cube container with enhanced styling */}
            <div className="cube-container relative">
              <div
                className="cube"
                style={{
                  transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                }}
              >
                <div className="face front flex items-center justify-center">
                  <CubeFace {...faces[0]} />
                </div>
                <div className="face back flex items-center justify-center">
                  <div className="back-content">
                    <CubeFace {...faces[5]} />
                  </div>
                </div>
                <div className="face right flex items-center justify-center">
                  <CubeFace {...faces[1]} />
                </div>
                <div className="face left flex items-center justify-center">
                  <CubeFace {...faces[2]} />
                </div>
                <div className="face top flex items-center justify-center">
                  <CubeFace {...faces[3]} />
                </div>
                <div className="face bottom flex items-center justify-center">
                  <CubeFace {...faces[4]} />
                </div>
              </div>
            </div>
            
            {/* Subtle shadow beneath cube */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-64 h-8 bg-black/10 rounded-full blur-lg opacity-60"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cube;

