/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }

      "3xl": "1920px",
      // => @media (min-width: 1920px) { ... }
    },
    fontFamily: {
      "OneZero-Apparat-Light":"OneZero-Apparat-Light",
      "OneZero-Apparat-Book": "OneZero-Apparat-Book",
      "OneZero-Apparat-Medium": "OneZero-Apparat-Medium",
      "OneZero-Apparat-Bold": "OneZero-Apparat-Bold",
    },
    listStyleType: {
      plus: "'+'",
      minus: "'-'",
    },
    extend: {
        // backgroundImage:{
        //   'hero-mobile':"url('./src/assets/bg-mobile.png')",
        //   'hero-desktop':"url('./src/assets/bg-desktop.png')"
        // },
        // backgroundImage:{
        //   'ts-mobile':"url('./src/assets/sec_bg_mob.png')",
        //   'ts-desktop':"url('./src/assets/sec_bg_desk.png')"
        // },
        dropShadow: {
          re: "0px 1px 14px rgba(0, 0, 0, 0.12)",
        },
        colors: {
          blue: "#2D68F3",
          grey: "#F2F2F2",
          midGrey: "#707070",
          lightGrey: "#CBCBCB",
          darkGrey: "#3E3E3E",
          borderGrey: "#9E9E9E",
          backdrop: "#6B6B6B",
        },
        
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
