import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
    <div className="bg-black/50 backdrop-blur-md shadow-lg h-16"> </div>
    <div className="min-h-screen bg-gray-50">
      <main className="w-7xl mx-auto px-4 py-8">{children}</main>
    </div>
    </>
  );
}