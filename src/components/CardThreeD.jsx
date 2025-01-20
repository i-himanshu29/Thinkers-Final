"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import img1 from "../assets/brain-Photoroom.png"

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
        <CardItem translateZ={100} className="w-full mt-4">
          <img
            src={img1}
            className="h-96 w-96 object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
