import React from 'react'
import mission from "../assets/mission.png"
import { Link } from 'react-router-dom'
function About() {
  return (
    <div className=" w-screen h-[90vh] p-10 bg-white ">
        <div className=" flex bg-slate-300 h-full  relative w-full  rounded-2xl shadow-3xl ">
                <div className="flex w-4/5 p-4   rounded-3xl bg-richblack-800   mx-auto justify-center ">
                        <div className="flex-col  w-96 justify-center p-5 ">
                            <h1 className="text-5xl justify-center mt-5 text-red-400 justify-items-center items-center text-center font-extrabold">What We Are</h1>
                            <p className="text-wrap font-serif item-center text-black mt-5 p-3 text-center">"Thinkers Corporation offers 'Thinkers,' a unique platform where users can
                                publicly post their ideas, protect them using a trigger button (IP), draft
                                projects, and raise funds from investors, all within a social networking
                                environment truly a one of a kind platform for idea sharing and project
                                development."
                          </p>
                          <Link to="/about" className="p-2 items-center justify-end">
                              <button className="text-xl ml-3 hover:bg-slate-800  hover:text-white bg-gray-500 items-center  w-44 h-14 rounded-md border border-blue-950">
                                Know More{`->`}
                              </button>
                            </Link>
                        </div>
                        <div className=" w-2/5 bg-slate-200 h-[70vh] md:1/5 rounded-3xl shadow-2xl ">
                          <img src={mission}
                              className=" shadow-lg rounded-2xl p-2 mt-6 mb-1 transition-transform transform hover:scale-95 hover:shadow-2xl bg-gradient-to-r from-white via-blue-500 to-white-500 "
                          />
                      </div>
                </div>
                
        </div>
    </div>
  )
}

export default About