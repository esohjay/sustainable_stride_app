/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "340px",
      md: "640px",
      lg: "1024px",
      xl: "1440px",
    },
    extend: {
      colors: {
        altColor: "#eae0d5",
        dark: "#533e2d",
        secondaryColor: "#c6ac8f",
        mainColor: "#7d4f50",
        primaryLight: "#FFF7F2",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        heroBg: "url('/images/ugs-with-fam.jpg')",
        authBg: "url('/images/ugs-bg.jpg')",
        LgBg: "url('/images/lg-bg-4.png')",
      },
    },
  },
  plugins: [],
};
