import type { Config } from "tailwindcss";
import daisyui from "daisyui";

const config: Config = {
  plugins: [daisyui],
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
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#2278D4",
          secondary_1: "#FF9F66",
          secondary_2: "#FF5F00",
          green: "#03A7A0",
          white_1: "#fff",
          white_2: "#F2F0F4",
          black_1: "#191919",
          black_2: "#343434",
        },
      },
    ],
  },
};
export default config;
