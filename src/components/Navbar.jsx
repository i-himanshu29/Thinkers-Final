import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../components/ui/navbar-menu";
import img from "../assets/socializer-Photoroom.png";
import img1 from "../assets/brain.png"
import img2 from "../assets/research-Photoroom.png"
import img3 from "../assets/investorss-Photoroom.png"
import { Link,NavLink } from "react-router-dom";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }) {
  const [active, setActive] = useState(null);

  return (
    <div
      className={`fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 ${className}`}
    >
      <Menu setActive={setActive}>
        <NavLink
                to="/"
                    className={({isActive}) =>
                    `block py-2 pr-4 pl-3 duration-200 text-black
                    ${isActive ? " text-lg font-semibold rounded-lg p-1":"text-gray-700"} border-b border-gray-100
                    hover:bg-gray-500 
                    lg:hover:bg-transparent lg:border-0
                    hover:text-orange-700 lg:p-0`
                }>
            Home
        </NavLink>

        <MenuItem setActive={setActive} active={active} item="Products & Services">
          <div className="text-sm text-black grid grid-cols-2 gap-10 p-4">
            <ProductItem
                title = "Socializer"
                href="/socializer"
                src={img}
                description="Socializers are individuals who enjoy connecting with others and building relationships online."
            />
            <ProductItem
              title="Trigger"
              href="/trigger"
              src={img1}
              description="The Trigger Button is a permission regulator and license agreement activator."
            />
            <ProductItem
              title="Researcher"
              href="/researcher"
              src={img2}
              description="A Researcher is a person who collects, analyzes, and interprets data in order to advance knowledge or solve problems."
            />
            <ProductItem
              title="Investor"
              href="/investor"
              src={img3}
              description="this platform is the ideal solution for identifying and connecting with promising researchers and innovators."
            />
          </div>
        </MenuItem>

       

        <NavLink
                to="/events"
                    className={({isActive}) =>
                    `block py-2 pr-4 pl-3 duration-200 text-lg font-semibold text-black
                    ${isActive ? "bg-gray-400 text-lg font-semibold rounded-lg p-1":"text-black"} border-b border-gray-100
                    hover:bg-gray-500 
                    lg:hover:bg-transparent lg:border-0
                    hover:text-orange-700 lg:p-0`
                }>
            Events
        </NavLink>
        <NavLink
                to="/carrer"
                    className={({isActive}) =>
                    `block py-2 pr-4 pl-3 duration-200 text-lg font-semibold text-black
                    ${isActive ? "bg-gray-400 text-lg font-semibold rounded-lg p-1":"text-black"} border-b border-gray-100
                    hover:bg-gray-500 
                    lg:hover:bg-transparent lg:border-0
                    hover:text-orange-700 lg:p-0`
                }>
            Carrer
        </NavLink>
        <NavLink
                to="q&a/"
                    className={({isActive}) =>
                    `block py-2 pr-4 pl-3 duration-200 text-lg font-semibold hover:text-black
                    ${isActive ? "bg-gray-400  rounded-lg p-1":"text-black"} border-b border-gray-100
                    hover:bg-gray-500 
                    lg:hover:bg-transparent lg:border-0
                    hover:text-orange-700 lg:p-0`
                }>
            Q&A
        </NavLink>
        <Link
            to="/login"
            className="text-black ease-in duration-300 bg-blue-500 hover:bg-gray-200 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
            Log in
        </Link>
        <Link
            to="/registration"
            className="text-white ease-in duration-300 bg-blue-700 hover:bg-orange-300 hover:shadow-xl hover:text-black focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
        Get started
        </Link>
        
      </Menu>
    </div>
  );
}
