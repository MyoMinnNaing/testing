/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Barlow", "sans-serif"],
    },
    container: {
      center: true,
      // default breakpoints but with 40px removed
      screens: {
        sm: "540px",
        md: "720px",
        lg: "960px",
        xl: "1140px",
      },
      // padding: "15px",
      // margin: "0px 100px",
      // border: "2px solid black",
    },
    extend: {
      fontFamily: {
        heading: ["Oswald", "sans-serif"],
      },
    },
  },
  plugins: [],
};
