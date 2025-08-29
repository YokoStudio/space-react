import tailwindSpace from "@yokostudio/tailwind-space";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./lib/**/*.{html,jsx,tsx,js,ts}"],
  theme: {
    extend: {},
  },
  plugins: [tailwindSpace],
}

