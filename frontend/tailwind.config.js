/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit", //for faster runtime
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      display: ['"Roboto"', '"sans-serif"'], //need to add a new font
    },

    extend: {
      colors: {
        black: "#161616", // Background black
        yellow: "#FFEB3B", // Bright yellow for accents
        white: "#FFFFFF", // Primary text
        gray: "#B0BEC5", // Cool gray for secondary text
        red: "#E53935", // Rich red for alerts or urgency
        darkBlack: "#121212", // Optional for card backgrounds
      },
    },
  },
  plugins: [],
};
