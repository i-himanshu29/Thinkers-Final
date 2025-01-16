"use client";

import React from "react";
import { StickyScroll } from "../components/ui/sticky-scroll-reveal";
import img1 from "../assets/socializer-Photoroom.png"
import img2 from "../assets/research-Photoroom.png"
import img3 from "../assets/investorss-Photoroom.png"
import img4 from "../assets/brain-Photoroom.png"
import { Link } from "react-router-dom";

const content = [
  {
    title: "Socializer",
    description:
      "Socializers are individuals who enjoy connecting with others and building relationships online.If you are a socializer means you like to socialize more on the social media platforms using internet. You can use this platform to connect with your friends and family and socialize via Photos, Videos, Text and other forms of communication.",
    content: (
      <div
        className="h-full w-full bg-socializerColor flex items-center justify-center text-white"
      >
        <Link to="/socializer">
            <img
            src={img1}
            className="h-full w-full p-3 object-cover"
            alt="linear board demo"
            />
        </Link>
        
      </div>
      
    ),
    button:(
        <Link to="/socializer">
            <button className="text-red-900 font-bold text-xl border-2 bg-gray-400 rounded-md border-white w-36 h-8">Know more...</button>
    </Link>
    )
  },
  {
    title: "Researcher",
    description:
      "A Researcher is a person who collects, analyzes, and interprets data in order to advance knowledge or solve problems.If you belong to the researcher community this profile segment well suits you as this provides you to easily write, create, share and study your projects. You can also look for suitable investors if you use our premium services.Researchers work in a wide range of fields, including science, engineering, medicine, social sciences, and humanities. Researchers play an important role in society by expanding our understanding of the world around us and developing new technologies and solutions to the challenges we face.",
    content: (
      <div className="h-full w-full flex bg-researcherColor items-center justify-center text-white">
        <Link to="/researcher">
            <img
            src={img2}
            className="h-full p-5 w-full object-cover"
            alt="linear board demo"
            />
        </Link>
      </div>
    ),
    button:(
        <Link to="/researcher">
            <button className="text-red-900 font-bold text-xl border-2 bg-gray-400 rounded-md border-white w-36 h-8">Know more...</button>
    </Link>
    )
  },
  {
    title: "Investor",
    description:
      "For investors, this platform is the ideal solution for identifying and connecting with promising researchers and innovators.If you are an investor, this is the best platform to get in touch with future prospects, can easily identify researchers and innovators and go through their research to contribute and promote them with the help of money and other resources and get benefitted from it.",
    content: (
      <div
        className="h-full w-full bg-investorColor flex items-center justify-center text-white"
      >
        <Link to="/investor">
            <img
            src={img3}
            className="h-full w-full object-cover"
            alt="linear board demo"
            />
        </Link>
      </div>
    ),
    button:(
        <Link to="/investor">
            <button className="text-red-900 font-bold text-xl border-2 bg-gray-400 rounded-md border-white w-36 h-8">Know more...</button>
    </Link>
    )
  },
  {
    title: "Trigger",
    description:
      "A Centralised Interaction System for Facilitating Communication and Collaboration between Entities.The Trigger Button is a permission regulator and license agreement activator. When a user uses the Trigger Button to hide or unhide their data, they are agreeing to the following terms and conditions: The user grants permission to Thinkers Platform to store and process their data.",
    content: (
      <div
        className="h-full w-full bg-triggerColor flex items-center justify-center text-white"
      >
        <Link to="/trigger">
            <img
            src={img4}
            className="h-full w-full object-cover"
            alt="linear board demo"
            />
        </Link>
      </div>
    ),
    button:(
        <Link to="/trigger">
            <button className="text-red-900 font-bold text-xl border-2 bg-gray-400 rounded-md border-white w-36 h-8">Know more...</button>
    </Link>
    )
  },
];

export function StickyScrollRevealDemo() {
  return (
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  );
}
