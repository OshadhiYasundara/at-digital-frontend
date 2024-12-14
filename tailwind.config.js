/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary": "#6B3CC9",
        "orange" : "#F28D35",
        "text"   : "#2F2F2F",
        "green"  : "#4DCA79",
        "blue"   : "#1CBDDD"
      
      }
    },
  },
  plugins: [],
}