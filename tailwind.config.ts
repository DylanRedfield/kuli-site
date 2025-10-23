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
        'kuli-orange': '#FF6B35',
        'kuli-blue': '#2563EB',
        'kuli-dark': '#0F172A',
      },
    },
  },
  plugins: [],
};
export default config;
