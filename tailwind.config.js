/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins:["Poppins", "sans-serif"],
      },
      colors:{
        primary: "#2E073F",
        secondary: "#FF8A8A",
        third:"#7A1CAC",
        forth:"#AD49E1",
        fifth:"#EBD3F8"
      },
      container: {
        center: true,
        padding:{
          DEFAULT: "1rem",
          sm:"2rem",
          lg:"4rem",
          xl:"5rem",
          "2xl":"6rem"
        }
      }
    },
  },
  plugins: [],
}