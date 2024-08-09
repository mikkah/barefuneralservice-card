import { Merriweather } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Merriweather: ['Merriweather', 'sans-serif'],
        OpenSans: ['Open Sans', 'sans-serif'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      white: '#FFFFFF',
      gray1: '#F7F7F4',
      gray500: '#6B7280',
      bareMint40: '#E0F2EE',
      bareChalk: '#F7F7F4',
      green1: '#035E61',
      green2: '#035658',
      green3: '#B0E0D6'
    }
  },
  plugins: [],
};
export default config;
