
import React, { useState } from "react";
import { MultiStepLoader as Loader } from "../components/ui/multi-step-loader";
import { IconSquareRoundedX } from "@tabler/icons-react";

const loadingStates = [
  {
    text: "Professional Networking",
  },
  {
    text: "Real Time Media Sharing",
  },
  {
    text: "Blogging",
  },
  {
    text: "Individual Tagging",
  },
  {
    text: "Search By Interest",
  },
  {
    text: "Data/Privacy Security",
  },
  {
    text: "Audio and Video Sharing",
  },
  {
    text: "Real Time Data Sharing",
  },
  {
    text: "Group Tagging",
  },
  {
    text: "Emergency Services",
  },
];

export function MultiStepLoaderDemo() {
  const [loading, setLoading] = useState(false);
  return (
    <div className="w-full flex-col bg-blue-300 h-[40vh] flex items-center justify-center">
      
      <h1 className="text-3xl font-serif font-extrabold mb-10">Our Features</h1>
      {/* Core Loader Modal */}
      <Loader loadingStates={loadingStates} loading={loading} duration={2000} />
      <button
        onClick={() => setLoading(true)}
        className="bg-blue-500 hover:bg-[#39C3EF]/90 text-black mx-auto text-sm md:text-base transition font-medium duration-200 h-10 rounded-lg px-8 flex items-center justify-center"
        style={{
          boxShadow:
            "0px -1px 0px 0px #ffffff40 inset, 0px 1px 0px 0px #ffffff40 inset",
        }}>
        🌟 Discover the Magic with a Single Click! 🌟
      </button>
      {loading && (
        <button
          className="fixed top-4 right-4 text-black dark:text-white z-[120]"
          onClick={() => setLoading(false)}>
          <IconSquareRoundedX className="h-10 w-10" />
        </button>
      )}
    </div>
  );
}
