import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      maxWidth: {
        '8xl': '1600px',
      },
      colors: {
        primary: {
          light: "#00B4D8", // pacific-cyan
          DEFAULT: "#0077B6", // honolulu-blue
          dark: "#005A8C", // darker variant
        },
        secondary: {
          light: "#87CB8B", // lighter mantis
          DEFAULT: "#66BB6A", // mantis
          dark: "#4C8C4F", // darker mantis
        },
        accent: {
          light: "#FFB74D", // mellow orange
          DEFAULT: "#FF9800", // orange
          dark: "#F57C00", // darker orange
        },
        background: {
          light: "#F0F9FF", // light azure
          DEFAULT: "#FFFEF8", // baby-powder
          dark: "#323031", // jet
        },
        neutral: {
          light: "#4B4A4D", // lighter jet
          DEFAULT: "#323031", // jet
          dark: "#1F1E1F", // darker jet
        }
      },
      container: {
        center: true,
        padding: '1rem',
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
      },
      animation: {
        blob: "blob 7s infinite",
      },
    },
    fontFamily: {
      'body': [
        'Inter',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'system-ui',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji'
      ],
      'sans': [
        'Inter',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'system-ui',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji'
      ]
    }
  },
  plugins: [],
};

export default config;
