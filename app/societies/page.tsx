import CouncilCard from '@/components/societies/CouncilCard'
import Cube from '@/components/societies/3DCube'
import React from 'react'
import { councils } from '@/data/councils'
import { ACACBoards, SACBoards } from '@/data/boards'
import { getCubeFaces } from '@/lib/utils'

const Societies = () => {
    const ACAC_faces = getCubeFaces(ACACBoards);
    const SAC_faces = getCubeFaces(SACBoards);

    return (
        <div>
            <div className='py-16'>
                <div className='text-center px-4'>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight center">
                    Councils, Boards, and Societies
                </h1>
                <p className="text-xl md:text-2xl text-gray-200 mx-auto max-w-3xl mt-4 mb-8">
                    Explore the diverse range of student-led organizations at IIT Jodhpur.
                </p>
                </div>
                
                <div className='flex flex-col gap-y-16 max-w-7xl mx-auto'>
                    {
                        councils.map((council, index) => (
                            <CouncilCard
                                key={index}
                                title={council.fullform}
                                about={council.about || 'About this council'}
                                holderName={council.holder}
                                contactInfo={council.contactInfo || "Contact information not available"}
                                logoUrl={council.imageurl || '/images/IITJ/logo/iitjlogo.png'}
                                socialLinks={council.socialLinks || []}
                            />
                        ))
                    }
                </div>
            </div>
            <div className='my-10 border border-gray-700 bg-gray-800/20 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300'>
                <h2 className="text-4xl my-10 font-bold text-center text-white">Boards under ACAC</h2>
                <div className='flex flex-col gap-y-16'>
                    <Cube faces={ACAC_faces} />
                </div>
            </div>
            <div className='my-10 border border-gray-700 bg-gray-800/20 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300'>
                <h2 className="text-4xl my-10 font-bold text-center text-white">Boards under SAC</h2>
                <div className='flex flex-col gap-y-16'>
                    <Cube faces={SAC_faces} />
                </div>
            </div>
        </div>
    )
}

export default Societies;