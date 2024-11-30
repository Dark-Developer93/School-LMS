import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        white: "#FFFFFF",
        black: "#000000",
        sky: "#C3EBFA",
        "sky-light": "#EDF9FD",
        "sky-light-alt": "#E2F8FF",
        purple: "#CFCEFF",
        "purple-light": "#F1F0FF",
        "purple-light-alt": "#FDF2FB",
        yellow: "#FAE27C",
        "yellow-light": "#FEFCE8",
      },
    },
  },
  plugins: [],
};
export default config;
