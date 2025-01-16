import React from 'react'
import {Link,NavLink} from 'react-router-dom'
import logo from "../assets/logo1.png"

export default function Header() {
    return (
        <header className=" fixed shadow z-50 top-0 w-screen">
            <nav className="bg-white  shadow-xl border-b-2 border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src={logo}
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <Link
                            to="/login"
                            className="text-gray-800 ease-in duration-300 bg-slate-400 hover:bg-gray-200 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Log in
                        </Link>
                        <Link
                            to="/registration"
                            className="text-white ease-in duration-300 bg-orange-700 hover:bg-orange-300 hover:shadow-xl hover:text-black focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Get started
                        </Link>
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                        <li>
                                <NavLink
                                to="/"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200
                                         ${isActive ? "bg-blue-300 rounded-full p-1":"text-gray-700"} border-b border-gray-100
                                          hover:bg-gray-500 
                                          lg:hover:bg-transparent lg:border-0
                                           hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/trigger"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200
                                         ${isActive ? "bg-blue-300 rounded-full p-1":"text-gray-700"} border-b border-gray-100
                                          hover:bg-gray-50 
                                          lg:hover:bg-transparent lg:border-0
                                           hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Trigger
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                to="/socializer"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200
                                         ${isActive ? "bg-blue-300 rounded-full p-1":"text-gray-700"} border-b border-gray-100
                                          hover:bg-gray-50 
                                          lg:hover:bg-transparent lg:border-0
                                           hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Socializer
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                to="/researcher"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200
                                         ${isActive ? "bg-blue-300 rounded-full p-1":"text-gray-700"} border-b border-gray-100
                                          hover:bg-gray-50 
                                          lg:hover:bg-transparent lg:border-0
                                           hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Researcher
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/investor"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200
                                         ${isActive ? "bg-blue-300 rounded-full p-1":"text-gray-700"} border-b border-gray-100
                                          hover:bg-gray-50 
                                          lg:hover:bg-transparent lg:border-0
                                           hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Investor
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/events"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200
                                         ${isActive ? "bg-blue-300 rounded-full p-1":"text-gray-700"} border-b border-gray-100
                                          hover:bg-gray-50 
                                          lg:hover:bg-transparent lg:border-0
                                           hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Events
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/products"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 text-nowrap
                                         ${isActive ? "bg-blue-300 rounded-full p-1":"text-gray-700"} border-b border-gray-100
                                          hover:bg-gray-50 
                                          lg:hover:bg-transparent lg:border-0
                                           hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Products & Services
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/teams"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200
                                         ${isActive ? "bg-blue-300 rounded-full p-1":"text-gray-700"} border-b border-gray-100
                                          hover:bg-gray-50 
                                          lg:hover:bg-transparent lg:border-0
                                           hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Teams
                                </NavLink>
                            </li>
                            
                            <li>
                                <NavLink
                                to="/q&a"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200
                                         ${isActive ? "bg-blue-300 rounded-full p-1":"text-gray-700"} border-b border-gray-100
                                          hover:bg-gray-50 
                                          lg:hover:bg-transparent lg:border-0
                                           hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    q&a
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/carrer"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200
                                         ${isActive ? "bg-blue-300 rounded-full p-1":"text-gray-700"} border-b border-gray-100
                                          hover:bg-gray-50 
                                          lg:hover:bg-transparent lg:border-0
                                           hover:text-orange-700 lg:p-0`
                                    }
                                >
                                   Carrer
                                </NavLink>
                            </li>
                            
                            
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

