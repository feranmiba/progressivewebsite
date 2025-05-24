import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"], 
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        bodyText: "#8A8A8A",
        mainText: "#122928",
        iconText: "#979797",
        bg: "#FFE5A5",
        green: "#41963D",
        darkGreen: "#246E20",
      },
    },
  },
};

export default config;
