/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
const flowbite = require("flowbite-react/tailwind");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      borderRadius: {
        'large-1-5': 'calc(theme("borderRadius.large") / 1.5)',
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
  plugins: [
    flowbite.plugin()
  ],
}


