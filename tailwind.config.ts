import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "24px",
      screens: { "2xl": "1280px" },
    },
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: "hsl(var(--card))",
        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))",
        border: "hsl(var(--border))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: "hsl(var(--destructive))",
        success: "hsl(var(--success))",
        warning: "hsl(var(--warning))",
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "SF Pro Display",
          "SF Pro Text",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      fontSize: {
        "large-title": ["34px", { lineHeight: "41px", letterSpacing: "-0.02em", fontWeight: "700" }],
        "title-1": ["28px", { lineHeight: "34px", letterSpacing: "-0.02em", fontWeight: "700" }],
        "title-2": ["22px", { lineHeight: "28px", letterSpacing: "-0.01em", fontWeight: "700" }],
        "title-3": ["20px", { lineHeight: "25px", letterSpacing: "-0.01em", fontWeight: "600" }],
        headline: ["17px", { lineHeight: "22px", letterSpacing: "-0.01em", fontWeight: "600" }],
        body: ["17px", { lineHeight: "25px" }],
        callout: ["16px", { lineHeight: "21px" }],
        subhead: ["15px", { lineHeight: "20px" }],
        footnote: ["13px", { lineHeight: "18px" }],
        caption: ["12px", { lineHeight: "16px" }],
      },
      borderRadius: {
        card: "20px",
        btn: "12px",
        pill: "50px",
        sheet: "28px",
      },
      boxShadow: {
        ios: "0 1px 3px rgba(0,0,0,0.12)",
        "ios-lg": "0 8px 24px rgba(0,0,0,0.08)",
        "ios-xl": "0 24px 60px rgba(0,0,0,0.10)",
        glass:
          "0 1px 0 rgba(255,255,255,0.7) inset, 0 1px 3px rgba(0,0,0,0.08), 0 12px 32px rgba(0,0,0,0.06)",
        "glass-dark":
          "0 1px 0 rgba(255,255,255,0.12) inset, 0 1px 3px rgba(0,0,0,0.4), 0 12px 32px rgba(0,0,0,0.35)",
      },
      transitionTimingFunction: {
        ios: "cubic-bezier(0.25, 0.1, 0.25, 1)",
        spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
      transitionDuration: { 300: "300ms", 400: "400ms" },
      spacing: { section: "120px", gutter: "24px" },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "liquid-shift": {
          "0%,100%": { transform: "translate3d(0,0,0) scale(1)" },
          "50%": { transform: "translate3d(0,-2%,0) scale(1.02)" },
        },
        shimmer: {
          from: { backgroundPosition: "200% 0" },
          to: { backgroundPosition: "-200% 0" },
        },
      },
      animation: {
        "fade-up": "fade-up 300ms cubic-bezier(0.25,0.1,0.25,1) both",
        "liquid-shift": "liquid-shift 16s ease-in-out infinite",
        shimmer: "shimmer 2.4s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
