/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "color-mix(in srgb, var(--border) 100%, transparent)",
        input: "color-mix(in srgb, var(--input) 100%, transparent)",
        ring: "color-mix(in srgb, var(--ring) 100%, transparent)",
        background: "color-mix(in srgb, var(--background) 100%, transparent)",
        foreground: "color-mix(in srgb, var(--foreground) 100%, transparent)",
        primary: {
          DEFAULT: "color-mix(in srgb, var(--primary) 100%, transparent)",
          foreground: "color-mix(in srgb, var(--primary-foreground) 100%, transparent)",
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
        },
        secondary: {
          DEFAULT: "color-mix(in srgb, var(--secondary) 100%, transparent)",
          foreground: "color-mix(in srgb, var(--secondary-foreground) 100%, transparent)",
          50: "#f5f3ff",
          100: "#ede9fe",
          200: "#ddd6fe",
          300: "#c4b5fd",
          400: "#a78bfa",
          500: "#8b5cf6",
          600: "#7c3aed",
          700: "#6d28d9",
          800: "#5b21b6",
          900: "#4c1d95",
        },
        destructive: {
          DEFAULT: "color-mix(in srgb, var(--destructive) 100%, transparent)",
          foreground: "color-mix(in srgb, var(--destructive-foreground) 100%, transparent)",
        },
        muted: {
          DEFAULT: "color-mix(in srgb, var(--muted) 100%, transparent)",
          foreground: "color-mix(in srgb, var(--muted-foreground) 100%, transparent)",
        },
        accent: {
          DEFAULT: "color-mix(in srgb, var(--accent) 100%, transparent)",
          foreground: "color-mix(in srgb, var(--accent-foreground) 100%, transparent)",
        },
        popover: {
          DEFAULT: "color-mix(in srgb, var(--popover) 100%, transparent)",
          foreground: "color-mix(in srgb, var(--popover-foreground) 100%, transparent)",
        },
        card: {
          DEFAULT: "color-mix(in srgb, var(--card) 100%, transparent)",
          foreground: "color-mix(in srgb, var(--card-foreground) 100%, transparent)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        marquee: "marquee 25s linear infinite",
        "marquee-reverse": "marquee-reverse 25s linear infinite",
        gradient: "gradient 8s linear infinite",
        "spin-gradient": "spin-gradient 6s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        gradient: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        "spin-gradient": {
          "0%": {
            backgroundPosition: "0% 50%",
          },
          "100%": {
            backgroundPosition: "100% 50%",
          },
        },
      },
    },
  },
  plugins: [],
};
