import React from 'react'
import img from "../assets/brain.png"
import { Link } from 'react-router-dom'
import { TextGenerateEffectDemo } from './TextGenerateEffect'
import { ThreeDCardDemo } from './CardThreeD'
import { TailwindcssButtons } from './TailwindButton'
function Trigger() {
  return (
    <div className="w-screen flex mb-10 h-[90vh] justify-center justify-items-center bg-white">
        <div className="w-1/2  justify-cetner  justify-items-center p-2 ml-5 ">
            {/* <img src={img} className="rounded-2xl shadow-2xl mt-5 "/> */}
            {/* <div 
                class="absolute inset-0  group-hover:bg-[rgba(180,132,60,0.5)] transition duration-300 ease-in-out"
            ></div> */}
            <ThreeDCardDemo/>
        </div>
        
        <div className="w-1/2 p-5 flex justify-self-center justify-center items-center">
            <div className="p-5 mr-10 mt-24 flex-col justify-items-center justify-center">
                <h1 className='text-4xl font-extrabold items-center font-serif text-orange-700 text-center my-4'>Trigger </h1>
                {/* <p className="text-black p-5 font-normal text-center my-5 text-wrap">TRIGGER THINKERS CORPORATION PVT LTD will employ TRIGGER, a patent filed technology called "A Centralised Interaction System for Facilitating Communication and Collaboration between Entities".
                    The Trigger Button is a permission regulator and license agreement activator. When a user uses the Trigger Button to hide or unhide their data, they are agreeing to the following terms and conditions: The user grants permission to Thinkers Platform to store and process their data.
                    The user grants permission to other users to view and interact with their data, subject to the user's privacy settings. The user agrees to be bound by the Thinkers Platform Terms of Service and Privacy Policy.
                </p> */}
                <TextGenerateEffectDemo/>
                <Link to="/trigger" className="p-2 items-center justify-end">
                    {/* <button className="text-xl ml-3 hover:bg-white  hover:text-black bg-customChai items-center  w-44 h-14 rounded-md border border-blue-950">
                        Know More{`->`}
                    </button> */}
                    <TailwindcssButtons/>
                </Link>
            </div>
        </div>
        
    </div>
  )
}

export default Trigger