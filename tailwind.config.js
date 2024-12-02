/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:{
          "dark":"#1F1F21",
          "light":"#004C99",
          "main":'#001F3F'
        },
        secondary:{
         "dark":"#003366",
          "light":"#0066CC",
        },

    
      button:{
        "blue":"#4f46e5",
        "red":"#dc2626",
        "green":"#16a34a",
        "yellow":"#ca8a04"
      },
      "home":"#f3f4f6",

      typography:{
        "light":"#FBFAF5",
        "dark":"#374151"
      }


      },

    },
  },
  plugins: [],
}