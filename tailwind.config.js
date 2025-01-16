const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
      keyframes: {
        "move-left-right": {
          "0%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(20px)" },
          "100%": { transform: "translateX(0)" },
          fadeIn: {
            '0%': { opacity: '0', transform: 'translateY(20px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' },
          },
        },
        "move-loop": {
          "0%": { transform: "translateX(-100%)" },
          "50%": { transform: "translateX(100%)" },
        },
        shimmer: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
      },
      animation: {
        "move-left-right": "move-left-right 5s ease-in-out infinite",
        "move-loop": "move-loop 8s linear ",
        fadeIn: 'fadeIn 0.5s ease-in-out forwards',
        shimmer: "shimmer 2s linear infinite",
      },
      colors: {
        customBlue: 'rgb(140, 156, 228)', // Name your color (e.g., customBlue)
        customChai:'rgb(255, 241, 175)',
        littleChai:'rgb(255, 255, 232)',
        socializerColor:'rgb(228,252,188)',
        investorColor:'rgb(236,164,164)',
        researcherColor:'rgb(252,228,180)',
        triggerColor:'rgba(178,135,62,255)',
        eventColor:'rgb(36,100,132)'
      },
    },
  },
  plugins: [addVariablesForColors,require('tailwind-scrollbar-hide')],
};

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}