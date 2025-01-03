/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
        white: "var(--white)",
        grey: "var(--grey)",
        blue: "var(--blue)",
        dark: "var(--dark-blue)",
      },
    },
  },
  plugins: [],
};
