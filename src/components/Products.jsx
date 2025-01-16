import React from 'react'
import img1 from "../assets/instructor-Photoroom.png"
import { Link } from 'react-router-dom'
import { CardHoverEffectDemo } from './ProductCard'
function Products() {
  return (
    <div className="flex-col h-[80vh] w-screen mb-4">
        {/* heading  */}
        <div className=" ">
            <h1  className="text-center align-middle text-5xl font-extrabold font-serif text-purple-900">Products And Services</h1>
        </div>
        {/* main container  */}
        <div className="flex justify-center  p-2 w-full">
        {/* image  */}
           <div className=" w-[40vw]">
                <Link to='/products'>
                    <img src={img1}
                        className="align-middle  items-center justify-center justify-items-center"
                    />
                </Link>
           </div>
        
           <div class=" gap-3 p-4 w-[50%]">

                <CardHoverEffectDemo/>
                {/* <div class=" h-54 rounded-3xl flex items-center justify-center text-center text-black font-normal transition-transform transform hover:scale-95 hover:shadow-2xl bg-customBlue ">
                <Link to='/researcher'>
                ★ Researchers: Looking for funding, collaborators, or guidance.
                </Link>
                </div>
                <div class=" h-54 rounded-3xl flex items-center justify-center text-center text-black font-normal transition-transform transform hover:scale-95 hover:shadow-2xl bg-customBlue ">
                <Link to='/investor'>
                ★ Investors: Looking for promising projects to invest in.
                </Link>
                </div>
                <div class=" h-54 rounded-3xl flex items-center justify-center text-center text-black font-normal transition-transform transform hover:scale-95 hover:shadow-2xl bg-customBlue">
                ★ Skilled unemployed individuals: Looking for investment or guidance
                </div>
                <div class=" h-54 rounded-3xl flex items-center justify-center text-center text-black font-normal transition-transform transform hover:scale-95 hover:shadow-2xl bg-customBlue ">
                ★ Anyone: Looking to socialize and collaborate with other thinkers.
                </div> */}
            </div>
        </div>
    </div>
  )
}

export default Products