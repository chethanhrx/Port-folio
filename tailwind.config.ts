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
        background: "#fafcff",
        card: "#ffffff",
        cardHover: "#f1f5f9",
        borderDark: "#e2e8f0",
        accentCyan: "#2563eb", // Royal Sapphire Blue accent
        accentBlue: "#3b82f6",
        accentIndigo: "#6366f1",
      },
      animation: {
        "spin-slow": "spin 25s linear infinite",
        pulse: "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 2.5s infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
      boxShadow: {
        "glow-cyan": "0 10px 25px -5px rgba(37, 99, 235, 0.3)",
        "card-hover": "0 20px 40px -15px rgba(37, 99, 235, 0.15)",
        "luxury": "0 10px 30px -10px rgba(0, 0, 0, 0.06)",
        "luxury-lg": "0 25px 50px -12px rgba(0, 0, 0, 0.08)",
      },
    },
  },
  plugins: [],
};
export default config;
