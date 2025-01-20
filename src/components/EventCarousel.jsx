import React, { useState } from 'react';
import img1 from "../assets/group.png";
import img2 from "../assets/Techevents.jpeg";
import img3 from "../assets/Techevents3.jpg";
import img4 from "../assets/Techevents4.png";
import { Link } from 'react-router-dom';
import Button from './Button';

const images = [img1, img2, img3, img4];
const descriptions = [
    "We will continuously organize events to engage users in adding data to the platform, which can be further used to calibrate our search engine's accuracy. These events can be anything from hackathons to data collection drives to educational workshops.We want to create a community of users who are passionate about improving our search engine and making it the best it can be.These events can be anything from hackathons to data collection drives to educational workshops. ",
    "We will continuously organize events to engage users in adding data to the platform, which can be further used to calibrate our search engine's accuracy. These events can be anything from hackathons to data collection drives to educational workshops.We want to create a community of users who are passionate about improving our search engine and making it the best it can be.",
    "We will continuously organize events to engage users in adding data to the platform, which can be further used to calibrate our search engine's accuracy. These events can be anything from hackathons to data collection drives to educational workshops.We want to create a community of users who are passionate about improving our search engine and making it the best it can be.",
    "We will continuously organize events to engage users in adding data to the platform, which can be further used to calibrate our search engine's accuracy. These events can be anything from hackathons to data collection drives to educational workshops.We want to create a community of users who are passionate about improving our search engine and making it the best it can be.",
];

function Carousel() {
    const [current, setCurrent] = useState(0);
    const [isImageFirst, setIsImageFirst] = useState(true); // Track the position of the image and text

    function nextSlide() {
        setCurrent(current === images.length - 1 ? 0 : current + 1);
        setIsImageFirst(!isImageFirst); // Toggle the position
    }

    function prevSlide() {
        setCurrent(current === 0 ? images.length - 1 : current - 1);
        setIsImageFirst(!isImageFirst); // Toggle the position
    }

    return (
        <div className="h-screen flex-col items-center justify-center bg-blue-200 ">
        <h1 className="text-black text-5xl items-center text-center mt-12  mb-10 font-bold font-serif">Events </h1>
            <div className="flex items-center h-[80%] bg-blue-100 rounded-2xl mx-20 gap-5">
                {/* Left Arrow */}
                <div
                    className="left-arrow bg-gray-900 text-white hover:bg-gray-300 hover:text-black p-3 rounded-lg cursor-pointer"
                    onClick={prevSlide}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </div>

                {/* Image and Text */}
                <div className="flex items-center gap-10">
                    {isImageFirst ? (
                        <>
                            {/* Image */}
                            <img className="w-[50%] rounded-2xl shadow-2xl transition-transform transform hover:scale-95 hover:shadow-2xl" src={images[current]} alt={`Slide ${current + 1}`} />
                            {/* Text */}
                           <div className="flex-col bg-blue-50 p-10 border-3 justify-center justify-items-center h-[80%] rounded-2xl">
                              <p className=" text-justify text-md font-semibold text-gray-700 w-[70%]">{descriptions[current]}</p>
                              <Link to='/events'>
                              <button><Button/></button>
                              {/* <button className='ease-in duration-300 mt-5 text-white  bg-orange-700 hover:bg-orange-300 hover:shadow-xl hover:text-black focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none'>Know more</button> */}
                              </Link>
                           </div>
                        </>
                    ) : (
                        <>
                            {/* Text */}
                           <div className="flex-col w-[40%]  p-10 justify-items-center bg-blue-50 h-[80%] border-3 rounded-2xl">
                            <p className="text-md text-justify font-semibold text-gray-700 w-[70%] ">{descriptions[current]}</p>
                            <Link to='/events'>
                            <button><Button/></button>
                            {/* <button className='ease-in duration-300 mt-5 text-white  bg-orange-700 hover:bg-orange-300 hover:shadow-xl hover:text-black focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none'>Know more</button> */}
                            </Link>
                           </div>
                            {/* Image */}
                            <img className="w-[50%] rounded-2xl shadow-2xl transition-transform transform hover:scale-95 hover:shadow-2xl" src={images[current]} alt={`Slide ${current + 1}`} />
                            
                        </>
                    )}
                </div>

                {/* Right Arrow */}
                <div
                    className="right-arrow bg-gray-900 hover:bg-gray-300 hover:text-black text-white p-3 rounded-lg cursor-pointer"
                    onClick={nextSlide}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default Carousel;




// import React, { useState } from 'react'
// import img1 from "../assets/group.png"
// import img2 from "../assets/brain.png"
// import img3 from "../assets/child.png"
// import img4 from "../assets/Entrepreneur.png"

// const images = [img1,img2,img3,img4];

// function Carousel() {
//     const [current, setCurrent] = useState(0);

//     function nextSlide() {
//         setCurrent(current === images.length - 1 ? 0 : current + 1);
//     }
   
//     function prevSlide() {
//         setCurrent(current === 0 ? images.length - 1 : current - 1);
//     }
//     return (
//         <div>
//             <div className="slider flex justify-evenly p-5 items-center h-screen">
//                 <div className="left-arrow bg-gray-200 hover:bg-gray-400 hover:text-white p-2 rounded-lg cursor-pointer" onClick={prevSlide}>
//                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//                         <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
//                     </svg>
//                 </div>
//                 {images.map(
//                     (image, index) =>
//                         current === index && (
//                             <div>
//                               <div key={image} className="slide flex justify-center">
//                                   <img className='w-[80%] rounded-2xl' src={image} alt="images" />
//                               </div>
//                               <div>
//                                 <p>Hey whats up</p>
//                               </div>
//                             </div>
//                         )
//                 )}
//                 <div className="right-arrow bg-gray-200 hover:bg-gray-400 hover:text-white p-2 rounded-lg cursor-pointer" onClick={nextSlide}>
//                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
//                         <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
//                     </svg>
//                 </div>

//             </div>
//         </div>
//     )
// }

// export default Carousel