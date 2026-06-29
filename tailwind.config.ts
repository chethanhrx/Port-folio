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
        neonCyan: '#00e5ff',
        neonPurple: '#a855f7',
        neonPink: '#ec4899',
        accentBlue: '#3b82f6',
        accentIndigo: '#6366f1',
      },
      animation: {
        "spin-slow": "spin 30s linear infinite",
        "spin-reverse": "spin 20s linear infinite",
        pulse: "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 2.5s infinite",
        glow: "glow 3s ease-in-out infinite alternate",
        "orbit": "orbit 8s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(0, 229, 255, 0.3)" },
          "100%": { boxShadow: "0 0 40px rgba(0, 229, 255, 0.6)" },
        },
        orbit: {
          "0%": { transform: "rotate(0deg) translateX(120px) rotate(0deg)" },
          "100%": { transform: "rotate(360deg) translateX(120px) rotate(-360deg)" },
        },
      },
      boxShadow: {
        "glow-cyan": "0 0 30px rgba(0, 229, 255, 0.4), 0 0 60px rgba(0, 229, 255, 0.15)",
        "glow-purple": "0 0 30px rgba(168, 85, 247, 0.4), 0 0 60px rgba(168, 85, 247, 0.15)",
        "glow-pink": "0 0 30px rgba(236, 72, 153, 0.4)",
        "card-glass": "0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
        "card-hover": "0 25px 60px rgba(0, 229, 255, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.08)",
        "luxury": "0 10px 30px -10px rgba(0, 0, 0, 0.5)",
        "luxury-lg": "0 25px 60px -15px rgba(0, 0, 0, 0.6)",
      },
      backgroundImage: {
        'galaxy-gradient': 'radial-gradient(ellipse at center, rgba(0, 229, 255, 0.08) 0%, rgba(168, 85, 247, 0.05) 40%, transparent 70%)',
      },
    },
  },
  plugins: [],
};
export default config;
