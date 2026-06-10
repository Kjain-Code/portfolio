/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
      colors: {
        brand: {
          teal: "#2dd4bf",
          purple: "#a78bfa",
          dark: "#0a0a0f",
          card: "#0f0f1a",
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          from: { boxShadow: "0 0 20px #2dd4bf40" },
          to: { boxShadow: "0 0 40px #2dd4bf80" },
        },
      },
    },
  },
  plugins: [],
}