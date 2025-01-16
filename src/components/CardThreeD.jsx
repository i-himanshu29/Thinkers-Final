"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import img1 from "../assets/brain-Photoroom.png"

// Use a simple img tag for the image since Vite doesn't have a built-in Image component like Next.js
export function ThreeDCardDemo() {
  return (
    <CardContainer className="inter-var">
      <CardBody
        className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-customChai dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border"
      >
        <CardItem
          translateZ={50}
          className="text-xl font-normal font-serif text-neutral-600 dark:text-black"
        >
          A Centralised Interaction System for Facilitating Communication and Collaboration between Entities
        </CardItem>
        {/* <CardItem
          as="p"
          translateZ={60}
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Hover over this card to unleash the power of CSS perspective
        </CardItem> */}
        <CardItem translateZ={100} className="w-full mt-4">
          <img
            src={img1}
            // height="1000"
            // width="1000"
            className="h-96 w-96 object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        {/* <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as="a"
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Try now →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Sign up
          </CardItem>
        </div> */}
      </CardBody>
    </CardContainer>
  );
}
