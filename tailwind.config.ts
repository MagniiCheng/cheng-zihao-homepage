import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#141414",
        paper: "#f7f8f6",
        mist: "#e9ece7",
        line: "#d8ded6",
        moss: "#426b5f",
        cyan: "#2aa7a2",
        copper: "#b66f32",
        wine: "#8b3f54"
      },
      boxShadow: {
        soft: "0 24px 80px rgba(20, 20, 20, 0.10)",
        card: "0 16px 50px rgba(20, 20, 20, 0.08)"
      },
      fontFamily: {
        sans: [
          "var(--font-geist-sans)",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif"
        ]
      }
    }
  },
  plugins: []
};

export default config;
