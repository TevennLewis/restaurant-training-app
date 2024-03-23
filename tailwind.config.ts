import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        plumPurple: "#5F0F40",
        flameOrange: "#FB8B24",
        ironOrange: "#E36414",
        xmasCandy: "#9A031E",
        explodingStar: "#FFD93D",
        white: "#fff",
        black: "#000",
        pelati: "#FF3131",
        green: "#00FF00",
      },
    },
  },
  plugins: [],
};
export default config;
