import type { Config } from "tailwindcss";
import { heroui } from "@heroui/theme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/card/dist/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/image/dist/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/button/dist/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/system/dist/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/skeleton/dist/**/*.{js,ts,jsx,tsx}",
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
  plugins: [heroui()],
};

export default config;
