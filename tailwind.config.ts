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
        ThemeMiddlePink: "#FDD6E6",
        ThemeDarkGray: "#666666",
        ThemeMainPink: "#FF7ABC",
        ThemeDarkPink: "#FF93CA",
        ThemeBlue: "#E9F8FF",
        ThemeDarkBlue: "#CFEEF8",
        ThemePink: "#FFE5FA",
        ThemePurple: "#E6E8FF",
        ThemeDarkPurple: "#868CD7",
        ThemeGray: "#707070",
      },
    },
  },
  plugins: [],
};
export default config;
