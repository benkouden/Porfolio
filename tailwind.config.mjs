import { transform } from 'next/dist/build/swc/generated-native';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Satisfy":["Satisfy" , "cursive"] 
        
      },
      colors :{
        primary :"#f50b0a"
        

      },
      container: {
        center: true,
        padding :{
          DEFAULT: "1rem",
          sm : "2rem",
          lg: "4rem",
          "2xl" : "6rem",
        },
      },
      animation : {
        "spin-superslow" : "spin 1s linear infinite ",
        rocket : "rocket 3s linear infinite ",
      },
      keyframes: {
        rocket: {
          "0%, 100%":{
          transform : "rotate(-2deg) translate (0px , 0px) ",
        },
        "50%":{
          transform : "rotate(2deg) translate (50px , 50px) ",
        },
        }
      }
    },
  },
  plugins: [],
};
