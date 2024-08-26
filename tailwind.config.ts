import type { Config } from "tailwindcss";

const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const flowbite = require("flowbite-react/tailwind");
const withMT = require("@material-tailwind/react/utils/withMT");

const config: Config = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        trueGray: colors.neutral,
      },
    },
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
      stock: [defaultTheme.fontFamily.sans],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [flowbite.plugin()],
};
export default config;
