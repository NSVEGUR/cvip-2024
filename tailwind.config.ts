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
        accent: "var(--accent-color)",
        "accent-soft": "var(--accent-soft-color)",
        complement: "var(--complement-color)",
        dominant: "var(--bg-dominant-color)",
        inverted: "var(--bg-inverted-color",
        muted: "var(--bg-muted-color)",
      },
      backgroundColor: {
        dominant: "var(--bg-dominant-color)",
        muted: "var(--bg-muted-color)",
        inverted: "var(--bg-inverted-color)",
      },
      textColor: {
        heading: "var(--text-heading-color)",
        dominant: "var(--text-dominant-color)",
        muted: "var(--text-muted-color)",
        inverted: "var(--text-inverted-color)",
      },
      borderColor: {
        dominant: "var(--border-dominant-color)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        waves: "url('/waves.svg')",
        poster: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)) , url('/poster.jpeg')",
      },
      screens: {
        "-3xl": { max: "1635px" },
        "-2xl": { max: "1535px" },
        "-xl": { max: "1279px" },
        "-lg": { max: "1023px" },
        "-md": { max: "767px" },
        "-sm": { max: "639px" },
        mobile: { max: "1250px" },
        "-xs": { max: "425px" },
        "-2xs": { max: "300px" },
        "@md": { min: "640px", max: "767px" },
        "@lg": { min: "768px", max: "1023px" },
        "@xl": { min: "1024px", max: "1279px" },
        "@2xl": { min: "1280px", max: "1535px" },
        "-mobile": { min: "1251px" },
      },
      animation: {
        fade: "fade 250ms ease-in-out",
        "slide-right": "slide-right 300ms ease-out",
        "slide-down": "slide-down 300ms ease-out",
        hamburger:
          "stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1), stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1)",
      },
      maxWidth: {
        container: "1400px",
      },
      minHeight: {
        container: "calc(100vh - 4rem/* 64px */)",
      },
      height: {
        container: "calc(100vh - 4rem/* 64px */)",
      },
    },
  },
  plugins: [],
};
export default config;
