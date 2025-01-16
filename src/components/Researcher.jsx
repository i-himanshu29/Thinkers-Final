import React from 'react'
import img from "../assets/research-Photoroom.png"
import img1 from '../assets/investorss-Photoroom.png'
import { Link } from 'react-router-dom'
function Researcher() {
  return (
    <div className='w-screen h-screen mt-5'>
        <div className='flex p-8  gap-6 items-center self-center'>
            <div className='flex-col p-2 rounded-md shadow-md bg-researcherColor w-1/2'>
                    <h1 className='text-4xl text- font-serif font-bold flex justify-center'>Researcher</h1>
                    <Link to='/researcher'>
                        <img src={img}/>
                    </Link>
            </div>
            <div className='flex-col p-2   rounded-md shadow-md bg-investorColor w-1/2'>
                    <h1 className='text-4xl text- font-serif font-bold flex justify-center'>Investor</h1>
                    <Link to='/investor'>
                        <img src={img1}/>
                    </Link>
            </div>
        </div>

    </div>
  )
}

export default Researcher