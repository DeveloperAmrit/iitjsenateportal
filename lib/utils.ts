import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type Board = {
  title: string;
  about?: string;
  holder: string;
  contactInfo?: string;
  imageurl?: string;
  socialLinks?: { label: string; href: string }[];
  clubs?: string[];
};

// Only the first 6 boards for each cube, and ensure all required fields are present

export const getCubeFaces = (boards: Board[]) => {
  const emptyFace = {
    boardTitle: "",
    about: "No data available",
    holderName: "N/A",
    contactInfo: "N/A",
    logoUrl: '/images/IITJ/logo/iitjlogo.png',
    socialLinks: [],
    clubs: []
  };
  return Array.from({ length: 6 }, (_, i) => {
    const board = boards[i];
    return board
      ? {
          boardTitle: board.title,
          about: board.about || 'About this board',
          holderName: board.holder,
          contactInfo: board.contactInfo || "Contact information not available",
          logoUrl: board.imageurl || '/images/IITJ/logo/iitjlogo.png',
          socialLinks: board.socialLinks || [],
          clubs: board.clubs || []
        }
      : emptyFace;
  }) as [
    typeof emptyFace,
    typeof emptyFace,
    typeof emptyFace,
    typeof emptyFace,
    typeof emptyFace,
    typeof emptyFace
  ];
};