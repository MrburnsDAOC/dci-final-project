/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";
export default withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      // custom: "830px",
    },

    colors: {
      transparent: "transparent",
      current: "currentColor",
      // BG
      mainBg: "#0EA5E9",
      secondBg: "#ffffff",
      thirdBg: "#F0F9FF",
      // TEXT
      mainText: "#777777",
      secondText: "#ffffff",
      alertText: "#ff0000",
    },
    fontFamily: {
      sans: ["Asap Condensed", "ui-sans-serif", "system-ui"],
    },
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
    extend: {},
  },
  plugins: [],
});
