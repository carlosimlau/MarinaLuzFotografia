import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          beige: "#F5F1E8",
          sage: "#8B9D83",
          gold: "#C9B687",
          terracota: "#D4A59A",
        },
        neutral: {
          "off-white": "#FAFAF9",
          "dark-gray": "#2C2C2C",
          "light-gray": "#F5F5F5",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        playfair: ["var(--font-playfair)", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
