/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        newpurple: "#7B2BBE",
        title: "#0D0B19",
        borders: "#D9D9D9",
        text: "#211B25",
      },

      fontFamily: {
        title: ["Montserrat", "sans-serif"],
        title2: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
