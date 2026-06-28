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
        background: "#06080f",
        card: "#0f1423",
        cardHover: "#161e33",
        borderDark: "#1f293d",
        accentCyan: "#00f2fe",
        accentBlue: "#38bdf8",
        accentIndigo: "#6366f1",
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
        pulse: "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      boxShadow: {
        "glow-cyan": "0 0 30px -5px rgba(0, 242, 254, 0.25)",
        "card-hover": "0 12px 35px -10px rgba(0, 242, 254, 0.15)",
      },
    },
  },
  plugins: [],
};
export default config;
