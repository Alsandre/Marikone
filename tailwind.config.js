module.exports = {
  content: [
    "./pages/*.{js,ts,jsx,tsx}",
    "./components/*.{js,ts,jsx,tsx}",
    "./icons/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: "#FFFF",
        section: "#FAFAFA",
        body: "#646464",
        "dark-100": "#27272A",
        "dark-200": "#18181B",
        "accent-100": "#FCDED6",
        "accent-200": "#FFC3B2",
        sent: "#10B981",
      },
    },
    container: {
      center: true,
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
      serif: ["Poppins", "serif"],
    },
  },
  plugins: [],
};
