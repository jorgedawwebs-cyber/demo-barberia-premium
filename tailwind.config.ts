import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#0a0a0a",
        charcoal: "#111111",
        dark: "#1a1a1a",
        "dark-2": "#222222",
        gray: {
          DEFAULT: "#2a2a2a",
          "800": "#1e1e1e",
          "700": "#2a2a2a",
          "600": "#3a3a3a",
          "500": "#555555",
          "400": "#777777",
          "300": "#999999",
          "200": "#bbbbbb",
          "100": "#dddddd",
        },
        gold: {
          DEFAULT: "#c9a84c",
          light: "#e8c96d",
          dark: "#a8862e",
        },
        cream: "#f5f0e8",
        white: "#f5f5f5",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Playfair Display", "serif"],
        display: ["Cormorant Garamond", "serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease forwards",
        "slide-up": "slideUp 0.8s ease forwards",
        "slide-in-left": "slideInLeft 0.8s ease forwards",
        "slide-in-right": "slideInRight 0.8s ease forwards",
        shimmer: "shimmer 2s infinite",
        "spin-slow": "spin 8s linear infinite",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #c9a84c 0%, #e8c96d 50%, #c9a84c 100%)",
        "dark-gradient": "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)",
        "radial-dark": "radial-gradient(ellipse at center, #1a1a1a 0%, #0a0a0a 100%)",
      },
      boxShadow: {
        gold: "0 0 30px rgba(201, 168, 76, 0.3)",
        "gold-lg": "0 0 60px rgba(201, 168, 76, 0.4)",
        dark: "0 25px 50px rgba(0,0,0,0.8)",
        glow: "0 0 20px rgba(201, 168, 76, 0.5)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
