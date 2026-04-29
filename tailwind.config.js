/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0D1B3E", // Deep Navy for backgrounds
        secondary: "#FFC107", // The vibrant Golden Yellow from the logo
        accent: "#F5F0E8", // Ivory
        "logo-navy": "#1B2A6B", // Exact Navy from logo
        "logo-yellow": "#FFC107", // Exact Yellow from logo
        surface: "#121C38", // Lighter Navy for cards
        ivory: "#F5F0E8",
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        sans: ["DM Sans", "sans-serif"],
        accent: ["Cormorant Garamond", "serif"],
      },
      animation: {
        'scroll-down': 'scroll-down 2s ease-in-out infinite',
      },
      keyframes: {
        'scroll-down': {
          '0%, 100%': { transform: 'translateY(0)', opacity: 0.5 },
          '50%': { transform: 'translateY(10px)', opacity: 1 },
        }
      }
    },
  },
  plugins: [],
};
