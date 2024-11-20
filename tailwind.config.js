/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"], // Paths to your files
  theme: {
    extend: {
      colors: {
        gold: {
          100: "#FDF4E3", // Lightest Gold
          200: "#F8E4BF", // Lighter Gold
          300: "#F3D59B", // Medium-Light Gold
          400: "#EEC578", // Light-Medium Gold
          500: "#E2B46C", // Base Gold
          600: "#B99156", // Dark Gold
          700: "#8F6E41", // Darker Gold
          800: "#654B2C", // Deep Gold
          900: "#3B2817", // Deepest Gold
        },
        blue: {
          100: "#E5F3FA", // Light Blue
          200: "#B8DBEF", // Lighter Blue
          300: "#8AC3E5", // Medium-Light Blue
          400: "#5BAADB", // Light-Medium Blue
          500: "#2D92D1", // Base Blue
          600: "#2373A6", // Dark Blue
          700: "#1A557C", // Darker Blue
          800: "#003658", // Deep Blue (Base Color)
          900: "#00233A", // Deepest Blue
        },
      },
    },
  },
  plugins: [],
};
