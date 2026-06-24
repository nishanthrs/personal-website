/** @type {import('tailwindcss').Config} */
module.exports = {
  // Toggle dark mode via a `dark` class on <html> instead of the OS media query
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,md,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,md,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
}
