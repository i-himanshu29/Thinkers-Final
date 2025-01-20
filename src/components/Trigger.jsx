import React from 'react'
import img from "../assets/brain.png"
import { Link } from 'react-router-dom'
import { TextGenerateEffectDemo } from './TextGenerateEffect'
import { ThreeDCardDemo } from './CardThreeD'
import Button from './Button'
function Trigger() {
  return (
    <>
      <div className="w-screen flex mb-10 h-[90vh] justify-center justify-items-center bg-white">
        <div className="w-1/2  justify-cetner  justify-items-center p-2 ml-5 ">
            <ThreeDCardDemo/>
        </div>
        <div className="w-1/2 p-5 flex justify-self-center justify-center items-center">
            <div className="p-5 mr-10 mt-24 flex-col justify-items-center justify-center">
                <h1 className='text-4xl font-extrabold items-center font-serif text-orange-700 text-center my-4'>Trigger </h1>
                <TextGenerateEffectDemo/>
                <Link to="/trigger" className="p-2 items-center justify-end">
                    <button><Button/></button>
                </Link>
            </div>
        </div>
    </div>
    </>
  )
}

export default Trigger