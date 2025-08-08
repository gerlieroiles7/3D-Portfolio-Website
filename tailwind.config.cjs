/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#0a0a0a",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        // Minimalist pink and white palette for content
        "pink-primary": "#ec4899",
        "pink-light": "#fce7f3",
        "pink-dark": "#be185d",
        "pink-accent": "#f472b6",
        "gray-light": "#f9fafb",
        "gray-medium": "#e5e7eb",
        "gray-dark": "#374151",
        "glass": "rgba(255, 255, 255, 0.1)",
        "glass-dark": "rgba(0, 0, 0, 0.3)",
      },
      boxShadow: {
        card: "0px 35px 120px -15px rgba(236, 72, 153, 0.1)",
        "pink-glow": "0 0 20px rgba(236, 72, 153, 0.3)",
        "pink-light": "0 0 20px rgba(236, 72, 153, 0.2)",
        "glass": "0 8px 32px 0 rgba(236, 72, 153, 0.1)",
        "glass-inset": "inset 0 1px 0 rgba(255, 255, 255, 0.1)",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
        "slide-up": "slideUp 0.5s ease-out",
        "slide-down": "slideDown 0.5s ease-out",
        "fade-in": "fadeIn 0.5s ease-out",
        "scale-in": "scaleIn 0.3s ease-out",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(236, 72, 153, 0.3)" },
          "100%": { boxShadow: "0 0 30px rgba(236, 72, 153, 0.5)" },
        },
        slideUp: {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.9)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
