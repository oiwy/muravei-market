/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      container: {
        center: true,
        padding: "24px",
      },
      colors: {
        primary: "#e70a40",
        secondary: "#54595f",
        text: "#7a7a7a",
      },
    },
  },
  plugins: [],
};
