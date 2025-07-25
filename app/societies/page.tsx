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
            <h2 className="text-3xl my-10 font-bold text-center text-gray-800">Councils</h2>
            <div className='flex flex-col gap-y-16'>
                {
                    councils.map((council, index) => (
                        <CouncilCard
                            key={index}
                            title={council.title}
                            about={council.about || 'About this council'}
                            holderName={council.holder}
                            contactInfo={council.contactInfo || "Contact information not available"}
                            logoUrl={council.imageurl || '/images/IITJ/logo/iitjlogo.png'}
                            socialLinks={council.socialLinks || []}
                        />
                    ))
                }
            </div>
            <div className='my-10 border border-gray-300 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300'>
                <h2 className="text-3xl my-10 font-bold text-center text-gray-800">Baords under ACAC</h2>
                <div className='flex flex-col gap-y-16'>
                    <Cube faces={ACAC_faces} />
                </div>
            </div>
            <div className='my-10 border border-gray-300 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300'>
                <h2 className="text-3xl my-10 font-bold text-center text-gray-800">Baords under SAC</h2>
                <div className='flex flex-col gap-y-16'>
                    <Cube faces={SAC_faces} />
                </div>
            </div>
        </div>
    )
}

export default Societies