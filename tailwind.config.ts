import type { Config } from "tailwindcss";
const { colors: defaultColors } = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      },
    },
    extend: {
      fontSize: {
        tiny: "0.75rem",
        small: "0.875rem",
        medium: "1rem",
        large: "1.125rem",
        xl: "1.25rem",
        xxl: "1.5rem",
        h5: "2rem",
        h4: "2.25rem",
        h3: "2.5rem",
        h2: "3rem",
        h1: "3.5rem",
        display: "4.5rem",
      },
      colors: {
        ...defaultColors,
        ...{
          primary: "#00B207",
          "soft-primary": "#84D187",
          "hard-primary": "#2C742F",
          warning: "#FF8A00",
          danger: "#EA4B48",
          white: "#FFFFFF",
        },
      },
    },
  },
  plugins: [],
};
export default config;
