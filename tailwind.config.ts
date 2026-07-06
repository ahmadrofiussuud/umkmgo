import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#1B2E2B",
          light: "#2B4742",
          dark: "#101D1A",
        },
        paper: {
          DEFAULT: "#F3ECD8",
          light: "#FAF7EE",
          dark: "#E6DEC4",
        },
        ochre: {
          DEFAULT: "#C68A2E",
          hover: "#A87424",
          light: "#E1B267",
        },
        leaf: {
          DEFAULT: "#5C7A3D",
          hover: "#496130",
          light: "#7CA452",
        },
        clay: {
          DEFAULT: "#9A4B32",
          hover: "#7E3D29",
          light: "#C16B51",
        },
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        sans: ["'Plus Jakarta Sans'", "sans-serif"],
        mono: ["'IBM Plex Mono'", "monospace"],
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
      },
      borderRadius: {
        xs: "0.125rem",
        sm: "0.25rem",
        md: "0.5rem",
        lg: "0.75rem",
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
        organic: "20px 8px 24px 10px",
      },
    },
  },
  plugins: [],
};

export default config;
