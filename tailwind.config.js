export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "fade-in-up": "fadeInUp 0.5s ease-out forwards",
        "spin": "spin 1s linear infinite",
        "glow": "glow 3s ease-in-out infinite",
        "zoom-in-out": "zoom-in-out 3s ease-in-out infinite",
        "float": "float 2s ease-in-out infinite",
      },
      fontFamily: {
        tomorrow: ['Tomorrow', 'sans-serif']
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 10px rgba(254, 129, 39, 0.3)" },
          "50%": { boxShadow: "0 0 20px rgba(254, 129, 39, 0.6)" },
        },
        "zoom-in-out": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
      },
    },
  },
};