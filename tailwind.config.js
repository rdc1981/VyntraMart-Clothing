/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    themes: ["light", "dark"],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
}

