import type { Config } from "tailwindcss";
import { DEFAULT_CIPHERS } from "tls";
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
 
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*/.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors:{
        darkpurple:'#2c0c40',
        customPurple:'#2a135c'
      },
      fontSize: {
        'tiny': '0.625rem', // 10px
        'xxl': '1.75rem',   // 28px
        'xxxl': '2.25rem',  // 36px
        '4.5xl': '2.5rem',  // 40px
        '7xl': '5rem',      // 80px
        '8xl': '6rem',      // 96px
        '9xl': '8rem',      // 128px
      },
    },
  },
  plugins: [
    addVariablesForColors,
  ],
};

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );}

export default config;
