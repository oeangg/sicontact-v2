/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        twYellow: "var(--yellow)",
        twGreen: "var(--green)",
      },
      fontFamily: {
        Pacifico: ["var(--font-pacifico)"],
        OpenSans: ["var(--font-open_Sans)"],
      },
    },
  },
  plugins: [],
};
