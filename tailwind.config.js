/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FBF1E7",
        creamsoft: "#FDF7F1",
        brandred: "#E8342A",
        brandreddark: "#C6281F",
        navy: "#1E2A3A",
        navysoft: "#4B5768",
        brandorange: "#E8A25F",
        brandorangesoft: "#F0B87D",
        teal: "#2AA79B",
        tealdark: "#228C82",
        footernavy: "#182233",
        hline: "#EDE0D2",
      },
      fontFamily: {
        heading: ["'Baloo 2'", "system-ui", "sans-serif"],
        body: ["'Inter'", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
