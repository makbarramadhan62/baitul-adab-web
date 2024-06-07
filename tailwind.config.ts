import type { Config } from "tailwindcss";
import daisyui from "daisyui";
import tailwindScrollbar from "tailwind-scrollbar";

const config: Config = {
  plugins: [daisyui, tailwindScrollbar],
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
          "primary-content": "#FF9F66",
          "secondary-content": "#FF5F00",
          success: "#03A7A0",
          "base-100": "#fff",
          "base-200": "#F2F0F4",
          neutral: "#191919",
          "base-content": "#343434",
        },
      },
      "winter",
    ],
  },
};
export default config;
