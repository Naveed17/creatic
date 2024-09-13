/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        padding: "1rem",
        center: true,
        screens: {
          lg: "1170px",
          "2xl": "1400px",
        },
      },
      colors: {
        primary: "#6D95FC",
      },
    },
  },
  plugins: [
    plugin(({ addBase, theme }) => {
      addBase({
        // or whichever color you'd like
        html: { color: theme("colors.white") },
      });
    }),
  ],
};
