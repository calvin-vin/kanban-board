/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-main": "#01959F",
        "primary-surface": "#F7FEFF",
        "secondary-main": "#FA9810",
        "secondary-border": "#FEEABC",
        "secondary-surface": "#FFFCF5",
        "danger-main": "#E11428",
        "danger-border": "#F5B1B7",
        "danger-surface": "#FFFAFA",
        "success-main": "#43936C",
        "success-border": "#B8DBCA",
        "success-surface": "#F8FBF9",
        "neutral-10": "#FFFFFF",
        "neutral-30": "#EDEDED",
        "neutral-40": "#E0E0E0",
        "neutral-70": "#757575",
        "neutral-90": "#404040",
        "neutral-100": "#1D1F20",
      },
    },
  },
  plugins: [],
};
