import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
        colors: {
        background: "#FAF9F6", // Blanc os / Off-white
        surface: "#FFFFFF",    // Blanc pur per a destacar elements
        foreground: "#1A1A1A", // Negre suau per a la lectura
        accent: "#B59E85",     // Bronze suau
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-geist-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;