/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#164b3b",
        secondary: "#dc352d",
      },
      fontFamily: {
        mermaid: "Mermaid Swash Caps",
      },
    },
  },
  plugins: [],
};
