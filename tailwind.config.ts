import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#f3f6fa",
        card: "#ffffff",
        cardHover: "#f8fafc",
        borderDark: "#cbd5e1",
        accentCyan: "#00f2fe",
        accentBlue: "#2563eb",
        accentIndigo: "#6366f1",
      },
      animation: {
        "spin-slow": "spin 30s linear infinite",
        pulse: "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 2.5s infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
      boxShadow: {
        "glow-cyan": "0 10px 30px -5px rgba(37, 99, 235, 0.35)",
        "card-hover": "0 25px 50px -12px rgba(15, 23, 42, 0.15)",
        "luxury": "0 10px 30px -10px rgba(15, 23, 42, 0.08)",
        "luxury-lg": "0 25px 60px -15px rgba(15, 23, 42, 0.12)",
      },
    },
  },
  plugins: [],
};
export default config;
