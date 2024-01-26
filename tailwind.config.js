/* eslint-disable no-undef */
const { mauve, violet } = require("@radix-ui/colors");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        headline: "#0d0d0d",
        paragraph: "#2a2a2a",
        buttonText: "#0d0d0d",
        offwhite: "#E9E8E4",
        darkred: "#B72522",
        greenishBlue: "#0C3542",
        palewhite: "#E1DFD3",
        ...mauve,
        ...violet,
        "electric-blue": "#057bc4",
      },
      keyframes: {
        slideDown: {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        slideUp: {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        slideDown: "slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)",
        slideUp: "slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)",
      },
    },
  },
  plugins: [],
};
