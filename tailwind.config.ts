import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0A0A0A",
          soft: "#1A1A1A",
        },
        snow: {
          DEFAULT: "#FAFAFA",
          soft: "#F2F2F2",
        },
        ice: {
          50: "#F4F8FB",
          100: "#E6EEF5",
          200: "#CFDEEB",
          300: "#A9C3D8",
          400: "#7FA4C1",
          500: "#5585A8",
          600: "#3E6A8A",
          700: "#2F506B",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      fontSize: {
        hero: ["clamp(2.75rem, 7vw, 6rem)", { lineHeight: "0.95", letterSpacing: "-0.04em" }],
        display: ["clamp(2rem, 4.5vw, 3.75rem)", { lineHeight: "1.02", letterSpacing: "-0.03em" }],
        eyebrow: ["0.75rem", { lineHeight: "1", letterSpacing: "0.22em" }],
      },
      boxShadow: {
        soft: "0 1px 2px rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.04)",
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease-out both",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
