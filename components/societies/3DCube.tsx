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
    { idx: 0, rot: { x: 0, y: 0 } },
    { idx: 1, rot: { x: 0, y: -90 } },
    { idx: 2, rot: { x: 0, y: 90 } },
    { idx: 3, rot: { x: -90, y: 0 } },
    { idx: 4, rot: { x: 90, y: 0 } },
    { idx: 5, rot: { x: 180, y: 0 } },
  ];

  const rotateTo = (x: number, y: number, idx: number) => {
    setRotation({ x, y });
    setActiveFace(idx);
  };

  return (
    <div className="min-h-screen flex items-center gap-x-10 px-8 justify-center text-white py-16">
      <div className="mx-auto max-w-xl bg-white/10 rounded-2xl shadow-2xl border border-gray-200 flex flex-col md:flex-row items-stretch p-8 gap-8">
        {/* Buttons on the left */}
        <div className="flex flex-col justify-center gap-4 min-w-[180px]">
          {faceConfigs.map((item, idx) => (
            <button
              key={idx}
              onClick={() => rotateTo(item.rot.x, item.rot.y, item.idx)}
              className={`bg-blue-600 px-4 py-2 rounded-lg font-semibold shadow hover:bg-blue-800 transition-all duration-200 ${
                activeFace === item.idx ? "ring-2 ring-blue-400" : ""
              } ${!faces[item.idx].boardTitle && "hidden"}`}
            >
              {faces[item.idx].boardTitle}

              <span className='hidden ring-2 ring-blue-400'></span>
            </button>
          ))}
        </div>
      </div>

      {/* Cube on the right */}
      <div className="flex-1 flex items-center justify-center">
        <div className="cube-container">
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
              <CubeFace {...faces[5]} />
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
      </div>
    </div>
  );
};

export default Cube;

