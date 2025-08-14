'use client';

import React, { useState, useEffect, useRef } from 'react';
import PersonCard from '@/components/shared/PersonCard';
import { genSecs, vps, clubMembers } from '@/data/people';

interface Person {
  id: number;
  name: string;
  position: string;
  email: string;
  phone: string;
  links: {
    linkedin?: string;
    instagram?: string;
  };
  image: string;
}

interface Club {
  clubName: string;
  members: Person[];
}

const SenatePortal = () => {
  const [expandedClubs, setExpandedClubs] = useState<Set<string>>(new Set());
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  // Handle clicks outside of navigation
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsNavOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsNavOpen(false);
  };

  const toggleClubExpansion = (clubName: string) => {
    const newExpandedClubs = new Set(expandedClubs);
    if (newExpandedClubs.has(clubName)) {
      newExpandedClubs.delete(clubName);
    } else {
      newExpandedClubs.add(clubName);
    }
    setExpandedClubs(newExpandedClubs);
  };

  const renderClubSection = (clubs: Club[], sectionColor: string) => {
    return clubs.map((club, clubIndex) => {
      const isExpanded = expandedClubs.has(club.clubName);
      const visibleMembers = isExpanded ? club.members : club.members.slice(0, 3);
      const hasMoreMembers = club.members.length > 3;

      return (
        <div key={clubIndex} className="mb-12">
          <h3 className={`text-2xl font-semibold ${sectionColor} mb-6 text-center`}>
            {club.clubName}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleMembers.map((person: Person) => (
              <PersonCard key={person.id} person={person} />
            ))}
          </div>
          
          {hasMoreMembers && (
            <div className="flex justify-center mt-6">
              <button
                onClick={() => toggleClubExpansion(club.clubName)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg ${
                  isExpanded
                    ? 'bg-gray-500 hover:bg-gray-600 text-white'
                    : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white'
                }`}
              >
                {isExpanded ? 'Show Less' : `Show More (${club.members.length - 3} more)`}
              </button>
            </div>
          )}
        </div>
      );
    });
  };
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white relative mt-18">
      {/* Quick Navigation */}
      <div 
        ref={navRef}
        className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50"
      >
        {/* Toggle Button */}
        <button
          onClick={() => setIsNavOpen(!isNavOpen)}
          className={`absolute right-0 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-3 rounded-l-xl shadow-lg hover:shadow-xl transition-all duration-300 ${
            isNavOpen ? 'translate-x-48' : 'translate-x-0'
          }`}
        >
          <svg 
            className={`w-5 h-5 transition-transform duration-300 ${isNavOpen ? 'rotate-180' : ''}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Navigation Panel */}
        <div className={`bg-white rounded-l-2xl shadow-2xl border border-gray-200 overflow-hidden transition-all duration-300 ${
          isNavOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}>
          <div className="p-6 w-48">
            <div className="text-center mb-4">
              <h3 className="font-bold text-lg text-gray-900 mb-1">Quick Nav</h3>
              <div className="w-8 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-full mx-auto"></div>
            </div>
            
            <nav className="space-y-3">
              <button
                onClick={() => scrollToSection('general-secretaries-section')}
                className="w-full text-left px-4 py-3 rounded-xl bg-gradient-to-r from-blue-600/10 to-indigo-700/10 hover:from-blue-600 hover:to-indigo-700 hover:text-white transition-all duration-300 text-gray-900 font-semibold text-sm group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full group-hover:bg-white"></div>
                  General Secretaries
                </div>
              </button>
              
              <button
                onClick={() => scrollToSection('vice-presidents-section')}
                className="w-full text-left px-4 py-3 rounded-xl bg-gradient-to-r from-blue-600/10 to-indigo-700/10 hover:from-blue-600 hover:to-indigo-700 hover:text-white transition-all duration-300 text-gray-900 font-semibold text-sm group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-indigo-700 rounded-full group-hover:bg-white"></div>
                  Vice Presidents
                </div>
              </button>
              
              <button
                onClick={() => scrollToSection('technical-clubs-section')}
                className="w-full text-left px-4 py-3 rounded-xl bg-gradient-to-r from-blue-600/10 to-indigo-700/10 hover:from-blue-600 hover:to-indigo-700 hover:text-white transition-all duration-300 text-gray-900 font-semibold text-sm group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full group-hover:bg-white"></div>
                  Technical Clubs
                </div>
              </button>
              
              <button
                onClick={() => scrollToSection('cultural-clubs-section')}
                className="w-full text-left px-4 py-3 rounded-xl bg-gradient-to-r from-blue-600/10 to-indigo-700/10 hover:from-blue-600 hover:to-indigo-700 hover:text-white transition-all duration-300 text-gray-900 font-semibold text-sm group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full group-hover:bg-white"></div>
                  Cultural Clubs
                </div>
              </button>
              
              <button
                onClick={() => scrollToSection('sports-clubs-section')}
                className="w-full text-left px-4 py-3 rounded-xl bg-gradient-to-r from-blue-600/10 to-indigo-700/10 hover:from-blue-600 hover:to-indigo-700 hover:text-white transition-all duration-300 text-gray-900 font-semibold text-sm group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full group-hover:bg-white"></div>
                  Sports Clubs
                </div>
              </button>
            </nav>
            
            <div className="mt-4 pt-3 border-t border-gray-200">
              <div className="text-xs text-gray-600 text-center">
                Click to navigate
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Meet the Senate
          </h1>
          <p className="text-xl text-center text-blue-100 max-w-3xl mx-auto">
            Get to know the dedicated student leaders who work tirelessly to represent your interests and enhance campus life at IIT Jodhpur.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* General Secretaries Section */}
        <section id="general-secretaries-section" className="mb-16 scroll-mt-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            General Secretaries
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {genSecs.map((person) => (
              <PersonCard key={person.id} person={person} />
            ))}
          </div>
        </section>

        {/* Vice Presidents Section */}
        <section id="vice-presidents-section" className="mb-16 scroll-mt-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Vice Presidents
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vps.map((person) => (
              <PersonCard key={person.id} person={person} />
            ))}
          </div>
        </section>

        {/* Technical Clubs Section */}
        <section id="technical-clubs-section" className="mb-16 scroll-mt-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Technical Clubs
          </h2>
          {renderClubSection(clubMembers.technicalClubs, "text-blue-600")}
        </section>

        {/* Cultural Clubs Section */}
        <section id="cultural-clubs-section" className="mb-16 scroll-mt-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Cultural Clubs
          </h2>
          {renderClubSection(clubMembers.culturalClubs, "text-purple-600")}
        </section>

        {/* Sports Clubs Section */}
        <section id="sports-clubs-section" className="mb-16 scroll-mt-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Sports Clubs
          </h2>
          {renderClubSection(clubMembers.sportsClubs, "text-green-600")}
        </section>
      </div>
    </div>
  );
};

export default SenatePortal;
