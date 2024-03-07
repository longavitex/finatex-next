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
    },
    colors: {
      transparent: 'transparent',
      'black': '#121212',
      'secondary': '#64666C',
      'surface': '#F5F5F2',
      'blue': '#2868D8',
      'critical': '#EB4D4D',
      'success': '#37CC8E',
      'orange': '#EA603F',
      'white': '#FFFFFF',
      'deep-purple': '#15143B',
      'gradient': '#5D47E2',
      'dark': '#0F1E37',
      'grey': '#3F4B5F',
      'dark-blue': '#173363',
      'dark-purple': '#130E38',
      'placehover': '#B1B1B1',
      'yellow': '#F2C94C',
      'line': 'rgba(0, 0, 0, 0.1)',
    },
  },
  plugins: [],
};
export default config;
