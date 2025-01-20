import React from 'react'
import mission from "../assets/mission.png"
import { Link } from 'react-router-dom'
import Button from './Button'
function About() {
  return (
    <div className=" w-screen h-[90vh] p-10 bg-white ">
        <div className=" flex bg-slate-300 h-full  relative w-full  rounded-2xl shadow-3xl ">
                <div className="flex w-4/5 p-4   rounded-3xl bg-richblack-800   mx-auto justify-center">
                        <div className="flex-col  w-[60%] justify-center items-center p-5  justify-items-center">
                            <h1 className="text-5xl justify-center mt-5 text-red-400 justify-items-center items-center text-center font-extrabold">What We Are</h1>
                            <p className="text-wrap font-serif item-center text-black mt-5 p-3 text-center">"Thinkers Corporation offers 'Thinkers,' a unique platform where users can
                                publicly post their ideas, protect them using a trigger button (IP), draft
                                projects, and raise funds from investors, all within a social networking
                                environment truly a one of a kind platform for idea sharing and project
                                development.Thinkers Corporation is developing a platform that will enable users to socialize through events, researchers to collaborate on research and projects, and investors to find and invest in promising projects.
                                Thinkers Platform is a unique Indian platform that solves many relevant economic and educational issues by empowering thinkers to invent, research, and socialize with peers of similar interests and expertise. Using technology, we shall provide users 
                                with tools to enhance their creativity, capability, and productivity, enabling them to contribute to their communities and our nation. Thinkers will serve as a platform for users to implement their ideas and use their minds to their fullest potential."
                          </p>
                          <Link to="/about" className="p-2 items-center justify-center">
                              <button className=""><Button/></button>
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