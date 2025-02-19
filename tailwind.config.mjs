/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      xs: "450px",
      sm: "580px",
      md: "768px",
      lg: "1024px",
      xl: "1250px",
    },
  },
  plugins: [require("tailwindcss-animated"), require("daisyui")],
};
