/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          darkest: "#005461",
          dark: "#0C7779",
          medium: "#249E94",
          light: "#3BC1A8",
        },
      },
    },
  },
  plugins: [],
};
