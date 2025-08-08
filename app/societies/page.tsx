"use client"

import React, { useState, useEffect, useRef } from 'react'
import CouncilCard from '@/components/societies/CouncilCard'
import Cube from '@/components/societies/3DCube'
import ClubCard from '@/components/societies/ClubCard'
import { councils } from '@/data/councils'
import { ACACBoards, SACBoards } from '@/data/boards'
import { getCubeFaces } from '@/lib/utils'
import { BCCAClubs, BLAClubs, BACClubs, BSSClubs } from '@/data/clubs';
import { BSWCommunities, BHACommunities } from '@/data/communities';
import { BAICommunities, BDSCommunities, BCDCommunities } from '@/data/communities';
import { ACACOtherCommunities, BCCAOtherCommunities, SSOtherCommunities } from '@/data/communities';

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <div className="relative flex items-center justify-center my-16">
    <div className="absolute inset-0 flex items-center">
      <div className="w-full border-t-2 border-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
    </div>
    <div className="relative bg-gray-50 px-8">
      <h2 className="text-4xl font-bold text-center text-gray-800 drop-shadow-sm">
        {children}
      </h2>
    </div>
  </div>
);

const Societies = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const navRef = useRef<HTMLDivElement>(null);
    const ACAC_faces = getCubeFaces(ACACBoards);
    const SAC_faces = getCubeFaces(SACBoards);

    const SAC_communities = [...BSWCommunities, ...BHACommunities, ...BCCAOtherCommunities];
    const ACAC_communities = [...BAICommunities, ...BDSCommunities, ...BCDCommunities, ...ACACOtherCommunities];
    const SS_communities = [...SSOtherCommunities];

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

    return (
        <div className="min-h-screen bg-gray-50 relative">
            {/* Quick Navigation */}
            <div 
                ref={navRef}
                className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50"
            >
                {/* Toggle Button */}
                <button
                    onClick={() => setIsNavOpen(!isNavOpen)}
                    className={`absolute right-0 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-[#E58420] to-[#323273] text-white p-3 rounded-l-xl shadow-lg hover:shadow-xl transition-all duration-300 ${
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
                            <h3 className="font-bold text-lg text-[#060616] mb-1">Quick Nav</h3>
                            <div className="w-8 h-0.5 bg-gradient-to-r from-[#E58420] to-[#323273] rounded-full mx-auto"></div>
                        </div>
                        
                        <nav className="space-y-3">
                            <button
                                onClick={() => scrollToSection('councils-section')}
                                className="w-full text-left px-4 py-3 rounded-xl bg-gradient-to-r from-[#E58420]/10 to-[#323273]/10 hover:from-[#E58420] hover:to-[#323273] hover:text-white transition-all duration-300 text-[#060616] font-semibold text-sm group"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-[#E58420] rounded-full group-hover:bg-white"></div>
                                    Councils
                                </div>
                            </button>
                            
                            <button
                                onClick={() => scrollToSection('boards-section')}
                                className="w-full text-left px-4 py-3 rounded-xl bg-gradient-to-r from-[#E58420]/10 to-[#323273]/10 hover:from-[#E58420] hover:to-[#323273] hover:text-white transition-all duration-300 text-[#060616] font-semibold text-sm group"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-[#323273] rounded-full group-hover:bg-white"></div>
                                    Boards
                                </div>
                            </button>
                            
                            <button
                                onClick={() => scrollToSection('clubs-section')}
                                className="w-full text-left px-4 py-3 rounded-xl bg-gradient-to-r from-[#E58420]/10 to-[#323273]/10 hover:from-[#E58420] hover:to-[#323273] hover:text-white transition-all duration-300 text-[#060616] font-semibold text-sm group"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-[#262872] rounded-full group-hover:bg-white"></div>
                                    Clubs
                                </div>
                            </button>
                            
                            <button
                                onClick={() => scrollToSection('communities-section')}
                                className="w-full text-left px-4 py-3 rounded-xl bg-gradient-to-r from-[#E58420]/10 to-[#323273]/10 hover:from-[#E58420] hover:to-[#323273] hover:text-white transition-all duration-300 text-[#060616] font-semibold text-sm group"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-[#E58420] rounded-full group-hover:bg-white"></div>
                                    Communities
                                </div>
                            </button>
                        </nav>
                        
                        <div className="mt-4 pt-3 border-t border-gray-200">
                            <div className="text-xs text-[#323273] text-center">
                                Click to navigate
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 py-12">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-6xl font-bold text-gray-900 mb-4 drop-shadow-lg">
                        Student Societies
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Explore the vibrant community of student councils, boards, clubs, and societies at IIT Jodhpur
                    </p>
                </div>

                {/* Councils Section */}
                <section id="councils-section" className="mb-20 scroll-mt-20">
                    <SectionTitle>Student Councils</SectionTitle>
                    <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-200">
                        <div className="flex flex-col gap-8">
                            {councils.map((council, index) => (
                                <div key={index} className="transform hover:scale-[1.02] transition-transform duration-300">
                                    <CouncilCard
                                        title={council.title}
                                        about={council.about || 'About this council'}
                                        holderName={council.holder}
                                        contactInfo={council.contactInfo || "Contact information not available"}
                                        logoUrl={council.imageurl || '/images/IITJ/logo/iitjlogo.png'}
                                        socialLinks={council.socialLinks || []}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Boards Section */}
                <section id="boards-section" className="mb-20 scroll-mt-20">
                    <SectionTitle>Student Boards</SectionTitle>
                    <div className="space-y-12">
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl shadow-2xl p-8 border border-blue-200">
                            <h3 className="text-2xl font-semibold text-center text-blue-900 mb-8">
                                Boards under ACAC
                            </h3>
                            <div className="flex justify-center">
                                <Cube faces={ACAC_faces} />
                            </div>
                        </div>
                        
                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl shadow-2xl p-8 border border-green-200">
                            <h3 className="text-2xl font-semibold text-center text-green-900 mb-8">
                                Boards under SAC
                            </h3>
                            <div className="flex justify-center">
                                <Cube faces={SAC_faces} />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Clubs Section */}
                <section id="clubs-section" className="mb-20 scroll-mt-20">
                    <SectionTitle>Student Clubs</SectionTitle>
                    <div className="space-y-16">
                        {/* BCCA Clubs */}
                        <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-200">
                            <h3 className="text-3xl font-semibold text-center text-purple-900 mb-8 relative">
                                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                                    Clubs under BCCA
                                </span>
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {BCCAClubs.map((club, index) => (
                                    <div key={index} className="transform hover:scale-105 transition-transform duration-300">
                                        <ClubCard
                                            title={club.title}
                                            about={club.description || 'About this club'}
                                            holderName={club.holder}
                                            contactInfo={club.contactInfo || "Contact information not available"}
                                            logoUrl={club.imageurl || '/images/IITJ/logo/iitjlogo.png'}
                                            socialLinks={club.socialLinks || []}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* BLA Clubs */}
                        <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-200">
                            <h3 className="text-3xl font-semibold text-center text-blue-900 mb-8">
                                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                                    Clubs under BLA
                                </span>
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {BLAClubs.map((club, index) => (
                                    <div key={index} className="transform hover:scale-105 transition-transform duration-300">
                                        <ClubCard
                                            title={club.title}
                                            about={club.description || 'About this club'}
                                            holderName={club.holder}
                                            contactInfo={club.contactInfo || "Contact information not available"}
                                            logoUrl={club.imageurl || '/images/IITJ/logo/iitjlogo.png'}
                                            socialLinks={club.socialLinks || []}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* BAC Clubs */}
                        <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-200">
                            <h3 className="text-3xl font-semibold text-center text-orange-900 mb-8">
                                <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                                    Clubs under BAC
                                </span>
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {BACClubs.map((club, index) => (
                                    <div key={index} className="transform hover:scale-105 transition-transform duration-300">
                                        <ClubCard
                                            title={club.title}
                                            about={club.description || 'About this club'}
                                            holderName={club.holder}
                                            contactInfo={club.contactInfo || "Contact information not available"}
                                            logoUrl={club.imageurl || '/images/IITJ/logo/iitjlogo.png'}
                                            socialLinks={club.socialLinks || []}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* BSS Clubs */}
                        <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-200">
                            <h3 className="text-3xl font-semibold text-center text-green-900 mb-8">
                                <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                                    Clubs under BSS
                                </span>
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {BSSClubs.map((club, index) => (
                                    <div key={index} className="transform hover:scale-105 transition-transform duration-300">
                                        <ClubCard
                                            title={club.title}
                                            about={club.description || 'About this club'}
                                            holderName={club.holder}
                                            contactInfo={club.contactInfo || "Contact information not available"}
                                            logoUrl={club.imageurl || '/images/IITJ/logo/iitjlogo.png'}
                                            socialLinks={club.socialLinks || []}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Communities Section */}
                <section id="communities-section" className="mb-20 scroll-mt-20">
                    <SectionTitle>Student Communities</SectionTitle>
                    <div className="space-y-16">
                        {/* SAC Communities */}
                        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl shadow-2xl p-8 border border-indigo-200">
                            <h3 className="text-3xl font-semibold text-center text-indigo-900 mb-8">
                                Communities under SAC
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {SAC_communities.map((community, index) => (
                                    <div key={index} className="transform hover:scale-105 transition-transform duration-300">
                                        <ClubCard
                                            title={community.title}
                                            about={community.description || 'About this community'}
                                            holderName={community.holder}
                                            contactInfo={community.contactInfo || "Contact information not available"}
                                            logoUrl={community.imageurl || '/images/IITJ/logo/iitjlogo.png'}
                                            socialLinks={community.socialLinks || []}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* ACAC Communities */}
                        <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-3xl shadow-2xl p-8 border border-rose-200">
                            <h3 className="text-3xl font-semibold text-center text-rose-900 mb-8">
                                Communities under ACAC
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {ACAC_communities.map((community, index) => (
                                    <div key={index} className="transform hover:scale-105 transition-transform duration-300">
                                        <ClubCard
                                            title={community.title}
                                            about={community.description || 'About this community'}
                                            holderName={community.holder}
                                            contactInfo={community.contactInfo || "Contact information not available"}
                                            logoUrl={community.imageurl || '/images/IITJ/logo/iitjlogo.png'}
                                            socialLinks={community.socialLinks || []}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* SS Communities */}
                        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl shadow-2xl p-8 border border-amber-200">
                            <h3 className="text-3xl font-semibold text-center text-amber-900 mb-8">
                                Communities under SS
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {SS_communities.map((community, index) => (
                                    <div key={index} className="transform hover:scale-105 transition-transform duration-300">
                                        <ClubCard
                                            title={community.title}
                                            about={community.description || 'About this community'}
                                            holderName={community.holder}
                                            contactInfo={community.contactInfo || "Contact information not available"}
                                            logoUrl={community.imageurl || '/images/IITJ/logo/iitjlogo.png'}
                                            socialLinks={community.socialLinks || []}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Societies;