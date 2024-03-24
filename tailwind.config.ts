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
        white: "#fff",
        black: "#000",
        plumPurple: "#5F0F40",
        flameOrange: "#FB8B24",
        ironOrange: "#E36414",
        xmasCandy: "#9A031E",
        explodingStar: "#FFD93D",
        pelati: "#FF3131",
        green: "#00FF00",
        oceanBlue: "#0077B6",
        mintGreen: "#A8DADC",
        goldenrodYellow: "#FFD700",
        lavenderPurple: "#B57EDC",
        coralPink: "#FF6B6B",
        tealBlue: "#388E8E",
        mustardYellow: "#FFDB58",
        slateGray: "#708090",
        rubyRed: "#E32636",
        forestGreen: "#228B22",
      },
    },
  },
  plugins: [],
};
export default config;
