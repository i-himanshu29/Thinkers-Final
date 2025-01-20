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
            </div>
        </div>
    </div>
  )
}

export default Products