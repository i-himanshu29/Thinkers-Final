// // "use client";
// "use client";

// import React, { useState } from "react";
// import { MultiStepLoader as Loader } from "../components/ui/multi-step-loader";
// import { IconSquareRoundedX } from "@tabler/icons-react";
// import img from "../assets/features-Photoroom.png"
// const loadingStates = [
//   {
//     text: "Professional Networking",
//   },
//   {
//     text: "Real Time Media Sharing",
//   },
//   {
//     text: "Blogging",
//   },
//   {
//     text: "Individual Tagging",
//   },
//   {
//     text: "Search By Interest",
//   },
//   {
//     text: "Data/Privacy Security",
//   },
//   {
//     text: "Audio and Video Sharing",
//   },
//   {
//     text: "Real Time Data Sharing",
//   },
//   {
//     text: "Group Tagging",
//   },
//   {
//     text: "Emergency Services",
//   },
// ];

// export function MultiStepLoaderDemo() {
//   const [loading, setLoading] = useState(false);
//   return (
//     <div className="relative w-full h-[80vh] flex items-center justify-center">
//       {/* Background Image */}
//       <div
//         className="absolute w-full h-[60vh] inset-0 bg-cover bg-center z-0 opacity-70" 
//       ><img src={img}/></div>
//       {/* Faded Overlay */}
//       <div className="absolute inset-0 bg-black/50 z-0" />

//       {/* Core Loader Modal */}
//       <Loader loadingStates={loadingStates} loading={loading} duration={2000} />

//       {/* Foreground Content */}
//       <div className="z-10">
//         <button
//           onClick={() => setLoading(true)}
//           className="bg-[#39C3EF] hover:bg-[#39C3EF]/90 text-black text-sm md:text-base transition font-medium duration-200 h-10 rounded-lg px-8 flex items-center justify-center"
//           style={{
//             boxShadow:
//               "0px -1px 0px 0px #ffffff40 inset, 0px 1px 0px 0px #ffffff40 inset",
//           }}
//         >
//           ✨ Click Here to Unveil the Magic! ✨
//         </button>
//         {loading && (
//           <button
//             className="fixed top-4 right-4 text-black dark:text-white z-[120]"
//             onClick={() => setLoading(false)}
//           >
//             <IconSquareRoundedX className="h-10 w-10" />
//           </button>
//         )}
//       </div>
//     </div>
//   );
// }


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
      {/* The buttons are for demo only, remove it in your actual code ⬇️ */}
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
