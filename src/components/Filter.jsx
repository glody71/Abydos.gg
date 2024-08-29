import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

const Filter = () => {

    return (
        <div className='md:flex m-8 mt-24 ml-24 h-72 hidden md:visible'>
            <div className='bg-slate-900 bg-opacity-90 w-96 rounded-lg'>
                <div className='p-8 flex flex-col items-center'>
                    <h1 className='text-2xl text-white mb-4 font-bold'>Filter</h1>
                    <div className='flex flex-wrap justify-center gap-2'>
                        <button className='border-white border-2 rounded-full px-5 py-2 text-white font-semibold'>Trinity</button>
                        <button className='border-white border-2 rounded-full px-5 py-2 text-white font-semibold'>Abydos</button>
                        <button className='border-white border-2 rounded-full px-5 py-2 text-white font-semibold'>Millenium</button>
                        <button className='border-white border-2 rounded-full px-5 py-2 text-white font-semibold'>Hyakiyako</button>
                        <button className='border-white border-2 rounded-full px-5 py-2 text-white font-semibold'>Arius</button>
                        <button className='border-white border-2 rounded-full px-5 py-2 text-white font-semibold'>Red Winter</button>
                        <button className='border-white border-2 rounded-full px-5 py-2 text-white font-semibold'>Shanhaijing</button>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Filter