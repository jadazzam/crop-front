import { defineConfig, defineGlobalStyles } from "@pandacss/dev";
const globalCss = defineGlobalStyles({
  "html, body": {
    color: "#008000",
    lineHeight: "1.5",
  },
});
export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          infinum: {
            0: { value: "#FFFFFF" },
            50: { value: "#FFBA08" },
            100: { value: "#38785F" },
            200: { value: "#000000" },
          },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",

  jsxFramework: "react",

  globalCss,
});