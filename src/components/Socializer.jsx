import React from 'react'
import img from "../assets/socializer-Photoroom.png"
import { Link } from 'react-router-dom'
function Socializer() {
  return (
    <div className="w-screen flex mb-5 h-96 justify-center justify-items-center bg-socializerColor">
        <div className="w-1/2  justify-cetner  justify-items-center p-5 ml-5 ">
            <img src={img} className="rounded-2xl h-full shadow-2xl transition-transform transform hover:scale-95 hover:shadow-2xl"/>
        </div>
        
        <div className="w-1/2 self-center p-5">
            <div className="p-10 flex-col  self-center justify-center">
                <h1 className='text-4xl font-bold items-center font-serif text-black text-center my-4'>Socializer</h1>
                <p className="text-black font-normal text-center my-5 text-wrap ">Socializers are individuals who enjoy connecting with others and building relationships online.
                    If you are a socializer means you like to socialize more on the social media platforms using internet. You can use this platform to connect with your friends and family and socialize via Photos, Videos, Text and other forms of communication.
                </p>
                <Link to="/socializer" className="p-2 items-center my-4 justify-end">
                    <button className="text-xl ml-3 hover:bg-white  hover:text-black bg-socializerColor items-center  w-44 h-14 rounded-md border border-blue-950">
                        Know More{`->`}
                    </button>
                </Link>
            </div>
        </div>
        
    </div>
  )
}

export default Socializer