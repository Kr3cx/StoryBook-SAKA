import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    './stories/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontSize: {
        'xs': '0.75rem', // Default 12px
        'sm': '0.875rem', // Default 14px
        'lg': '1.125rem', // Default 18px
        '2xl': '1.5rem',  // Default 24px
      },
    },
  },
  plugins: [],
};
export default config;
