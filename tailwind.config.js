/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: { sm: "480px", md: "834px", lg: "1000px", xl: "1440px" },
      colors: {
        lightblue: "#e8f4fc",
        lightpurple: "#f4f3f8",
        lightgreen: "#ecfbf0",
        lightgrey: "#f3ece5",
      },
      backgroundImage: {
        hero: "url('../public/assets/img/Gradient-BG-Warm.jpg')",
        heroCold: "url('../public/assets/img/Gradient-BG-Cold.jpg')",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
