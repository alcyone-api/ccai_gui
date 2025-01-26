export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#201f1e', // Background color
        accent: '#fe8127', // Accent color (orange)
        textPrimary: '#f5f5f5', // Primary text color
        textAccent: '#fe8127', // Accent text color
        secondary: '#2d2c2b', // Secondary background color
      },
      animation: {
        "fade-in-up": "fadeInUp 0.5s ease-out forwards",
        "spin": "spin 1s linear infinite",
        "glow": "glow 3s ease-in-out infinite",
        "zoom-in-out": "zoom-in-out 3s ease-in-out infinite",
        "float": "float 2s ease-in-out infinite",
        "pulse": "pulse 3s infinite",
        "rotate-clockwise-fast": "rotate-clockwise-fast 10s linear infinite",
        "rotate-counterclockwise-fast": "rotate-counterclockwise-fast 15s linear infinite",
        "particle-trail": "particle-trail 10s linear infinite",
        "gradient-glow": "gradient-glow 3s infinite ease-in-out",
        "zoom-in": "zoomIn 0.3s ease-out forwards",
        "rotate-very-slow": "rotate-very-slow 60s linear infinite", // Very slow rotation
        "pulse-orange-bright": "pulseOrangeBright 6s infinite ease-in-out", // Bright orange pulsing
      },
      fontFamily: {
        tomorrow: ['Tomorrow', 'sans-serif'],
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 10px rgba(0, 123, 255, 0.3)" },
          "50%": { boxShadow: "0 0 20px rgba(0, 123, 255, 0.6)" },
        },
        "zoom-in-out": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
        pulse: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.7 },
        },
        "rotate-clockwise-fast": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        "rotate-counterclockwise-fast": {
          from: { transform: "rotate(360deg)" },
          to: { transform: "rotate(0deg)" },
        },
        "particle-trail": {
          from: { transform: "rotate(0deg) translateX(80px) rotate(0deg)" },
          to: { transform: "rotate(360deg) translateX(80px) rotate(-360deg)" },
        },
        "gradient-glow": {
          "0%, 100%": {
            boxShadow: "0 0 20px 5px rgba(0, 123, 255, 0.5), 0 0 30px 10px rgba(254, 129, 39, 0.3)",
          },
          "50%": {
            boxShadow: "0 0 25px 10px rgba(0, 123, 255, 0.8), 0 0 40px 15px rgba(254, 129, 39, 0.5)",
          },
        },
        zoomIn: {
          "0%": { opacity: 0, transform: "scale(0.9)" },
          "100%": { opacity: 1, transform: "scale(1)" },
        },
        "rotate-very-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        pulseOrangeBright: {
          "0%, 100%": { opacity: 0.6 }, // Brighter base opacity
          "50%": { opacity: 1 }, // Maximum brightness at peak
        },
      },
      boxShadow: {
        'input': '0 0 0 2px rgba(254, 129, 39, 0.5)',
        'card': '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      backdropBlur: {
        'sm': '4px',
        'md': '8px',
      },
    },
  },
  plugins: [],
};