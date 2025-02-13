"use client";

import React from "react";
import reactElementToJSXString from "react-element-to-jsx-string";
import { ButtonsCard } from "../components/ui/tailwindcss-buttons";

// TailwindcssButtons Component
export function TailwindcssButtons() {
  const copy = (button) => {
    if (button.code) {
      copyToClipboard(button.code);
      return;
    }
    const buttonString = reactElementToJSXString(button.component);
    if (buttonString) {
      copyToClipboard(buttonString);
    }
  };

  return (
    <div className="pb-40 px-4 w-full">
      {/* <Toaster position="top-center" /> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full max-w-7xl mx-auto gap-10">
        {buttons.map((button, idx) => (
          <ButtonsCard key={idx} onClick={() => copy(button)}>
            {button.component}
          </ButtonsCard>
        ))}
      </div>
    </div>
  );
}

// Button definitions
export const buttons = [
    {
        name: "Border Magic",
        description: "Border Magic button for your website",
        showDot: false,
        component: (
          <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              Know More...
            </span>
          </button>
        ),
      },
  // ... Add the rest of the button definitions here
];
