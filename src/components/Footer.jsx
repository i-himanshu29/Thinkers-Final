import React from 'react'
import { Link } from 'react-router-dom';
import logo from "../assets/logo1.png"
import { FloatingDockDemo } from './FooterDocks';
export default function Footer() {
    return (
        <footer className="bg-gray-200 border-y">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex flex md:justify-between">
                    <div className="w-full md:w-1/3 p-5 mb-4 md:mb-0">
                        <h2 className="text-3xl font-extrabold font-serif text-nowrap mb-2">Thinker Corporation pvt.ltd.</h2>
                        <p className="text-black  text-wrap">
                            Empowering minds with innovative ideas. Join us on the journey of exploration and creativity.
                        </p>
                    </div>
                    <div className="mb-6 md:mb-0">
                        <Link to="/" className="flex items-center">
                            <img
                                src={logo}
                                className="mr-3 mt-3 h-24 w-24"
                                alt="Logo"
                            />
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold items-center text-gray-900 uppercase">Resources</h2>
                            <ul className="text-gray-500 font-medium">
                                <li >
                                    <Link to="/" className="hover:underline">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about" className="hover:underline">
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/trigger" className="hover:underline">
                                        Trigger
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/socializer" className="hover:underline">
                                        Socializer
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/researcher" className="hover:underline">
                                        Researcher
                                    </Link>
                                </li>
                                
                                
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold items-center text-gray-900 uppercase">Resources</h2>
                            <ul className="text-gray-500 font-medium">
                                <li>
                                    <Link to="/investor" className="hover:underline">
                                        Investor
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/products" className="hover:underline">
                                        Products & Services
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/carrer" className="hover:underline">
                                        Carrer
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/q&a" className="hover:underline">
                                        Q&A
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/events" className="hover:underline">
                                        Events
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Legal</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <Link to="#" className="hover:underline">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="hover:underline">
                                        Terms &amp; Conditions
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-8 border-gray-300 sm:mx-auto lg:my-8" />
                <div className="sm:flex justify-center justify-items-center sm:items-center ">
                    <div className="mt-2 text-lg  text-center text-black mb-2 ">
                        &copy; {new Date().getFullYear()} Thinker. All rights reserved.
                    </div>

                    <div className="flex  justify-center items-center mt-4 space-x-5 sm:justify-center sm:mt-0">
                        <div className="w-36 h-10">
                            <h1 className=" text-lg font-semibold ml-5 mt-1.5 items-center font-sans">Follow us</h1>
                        </div>
                        <FloatingDockDemo/>
                    </div>
                </div>
            </div>
        </footer>
    );
}
