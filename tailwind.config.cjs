/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        display:['Playfair Display', "serif"],
        body:['Outfit', "sans-serif"],
      },
      colors:{
        primary:{
          600:"#996830",
          300:"#C4A386",
          50:"#E6D8CC",
        },
        neutral:{
          900:"#2C2C2C",
          700:"#444444",
          500:"#7C7C7C",
          300:"#D9D9D9",
          100:"E5E5E5",
        }
      },
      fontSize:{
        "display-2xl":["72px",{letterSpacing: "-0.025em",lineHeight:"96px"}],
        "display-xl":["60px",{letterSpacing: "-0.025em",lineHeight:"72px"}],
        "display-lg":["48px",{letterSpacing: "0em",lineHeight:"60px"}],
        "display-md":["36px",{letterSpacing: "0em",lineHeight:"48px"}],
        "display-sm":["30px",{letterSpacing: "0em",lineHeight:"40px"}],
        "display-xs":["24px",{letterSpacing: "0em",lineHeight:"32px"}],
        "body-xl":["20px",{letterSpacing: "0em",lineHeight:"32px"}],
        "body-lg":["18px",{letterSpacing: "0em",lineHeight:"32px"}],
        "body-md":["16px",{letterSpacing: "0em",lineHeight:"24px"}],
        "body-sm":["14px",{letterSpacing: "0em",lineHeight:"24px"}],
        "body-xs":["12px",{letterSpacing: "0em",lineHeight:"16px"}],
      }
    },
  },
  plugins: [],
}