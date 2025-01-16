import React from 'react'
import img from "../assets/events.png"
import { Link } from 'react-router-dom'
function Events() {
  return (
    <div className="h-screen  justify-center mb-5 justify-items-center align-middle w-screen flex my-auto">
        <img
            src={img}
            alt="Background"
            className=" flex mt-28 mb-10  object-cover opacity-70"
        />

        {/* Overlay with text */}
        <div className="absolute w-5/6 rounded-xl shadow-2xl  h-screen flex-col p-20 justify-center justify-items-center items-center bg-eventColor bg-opacity-60">
            <h1 className="text-black text-4xl items-center mt-4 font-bold font-serif">Events </h1>
            <h2 className="text-black text-lg mx-32 text-center text-wrap mt-16 font-normal font-serif">We will continuously organize events to engage users in adding data to the platform, which can be further used to calibrate our search engine's accuracy.
                These events can be anything from hackathons to data collection drives to educational workshops. We want to create a community of users who are passionate about improving our search engine and making it the best it can be. Data collection drives: We could organize data collection drives where users help us to collect new data for our search engine. This could involve anything from scraping the web to transcribing historical documents. Educational workshops: We could host educational workshops to teach users about the importance of data quality and how to collect data responsibly. We could also teach users how to use our search engine and how to provide feedback to help us improve it. We believe that by engaging users in the data collection and curation process, we can create a search engine that is more accurate and relevant to the needs of our users.
            </h2>
            <Link to="/events" className="p-2  items-center">
                <button className="text-xl mt-16 ml-3 hover:bg-slate-800  hover:text-white bg-gray-500 items-center  w-44 h-14 rounded-md border border-blue-950">
                    Know More{`->`}
                </button>
            </Link>
        </div>
        
    </div>
  )
}

export default Events