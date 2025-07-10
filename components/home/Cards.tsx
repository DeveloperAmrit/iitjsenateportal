import React from 'react'
import { councils } from '@/data/councils'
import { ACACBoards, SACBoards } from '@/data/boards'
import { BCCAClubs, BLAClubs, BACClubs, BSSClubs, } from '@/data/clubs'
import CardGrid from '../shared/CardGrid'


const Cards = () => {
    const council_items = councils.map((council) => ({
        title: council.title,
        imageurl: council.imageurl,
    }));

    const acac_items = ACACBoards.map((board) => ({
        title: board.title,
        imageurl: board.imageurl,
    }));
    const sac_items = SACBoards.map((board) => ({
        title: board.title,
        imageurl: board.imageurl,
    }));


    const bcca_items = BCCAClubs.map((club) => ({
        title: club.title,
        imageurl: club.imageurl,
    }));
    const bla_items = BLAClubs.map((club) => ({
        title: club.title,
        imageurl: club.imageurl,
    }));
    const bac_items = BACClubs.map((club) => ({
        title: club.title,
        imageurl: club.imageurl,
    }));
    const bss_items = BSSClubs.map((club) => ({
        title: club.title,
        imageurl: club.imageurl,
    }));


    return (
        <div className='w-7xl mx-auto flex flex-col mt-24 gap-24 p-4'>
            <CardGrid title='Councils' cols={3} items={council_items} />
            <CardGrid title='ACAC Boards' cols={5} items={acac_items} />
            <CardGrid title='SAC Boards' cols={5} items={sac_items} />
        </div>
    )
}

export default Cards