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
        brand: {
          navy: '#2B4C6F',
          'navy-light': '#3D5A7C',
          'navy-dark': '#1A3A52',
          blue: '#4A90E2',
          teal: '#50E3C2',
          purple: '#B968E0',
          pink: '#FF6B9D',
          yellow: '#FFD93D',
          cream: '#F5E6D3',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
