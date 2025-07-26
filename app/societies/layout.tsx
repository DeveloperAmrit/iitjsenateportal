import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-gray-900 text-white">
      <div className="h-16 bg-black/50 backdrop-blur-md shadow-lg"></div>
      <main className="w-full mx-auto px-4 py-8">{children}</main>
    </div>
  );
}