/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "blue-primary": "#90CCF4",
        "blue-secondary": "#5DA2D5",
        "light-grey": "#ECECEC",
        "pink-primary": "#f77474",
        "pink-secondary": "#faafaf",
        "yellow-primary": "#F3D250",

        "dark-blue-primary": "#2E5283",
        "dark-blue-secondary": "#1A4063",
        "dark-light-grey": "#B1B1B1",
        "dark-pink-primary": "#AD4242",
        "dark-pink-secondary": "#D98888",
        "dark-yellow-primary": "#C4B637",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      fontFamily: {
        default: ["Rubik", "sans-serif"],
      },
    },
  },
  plugins: [],
}
