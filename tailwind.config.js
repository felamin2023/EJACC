/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#111827",
        yellow: "#FCB814",
        gray1: "#F0F2F5",
        lightblue: "#C5D7E5",
        primary: "#749AB6",
        gray2: "#6B7280",
      },
    },
  },
  plugins: [],
};

//"./templates/**/*.html",