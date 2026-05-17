import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        surface: "var(--surface)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        "outline-variant": "var(--outline-variant)",
      },
      fontFamily: {
        serif: ["var(--font-eb-garamond)", "serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      fontSize: {
        "display-2xl": [
          "120px",
          { lineHeight: "110px", letterSpacing: "-0.04em", fontWeight: "700" },
        ],
        "headline-lg": [
          "64px",
          { lineHeight: "72px", letterSpacing: "-0.02em", fontWeight: "600" },
        ],
        "headline-lg-mobile": [
          "40px",
          { lineHeight: "44px", fontWeight: "600" },
        ],
        "headline-md": ["32px", { lineHeight: "40px", fontWeight: "500" }],
        "body-lg": ["18px", { lineHeight: "28px", fontWeight: "400" }],
        "body-sm": ["14px", { lineHeight: "20px", fontWeight: "400" }],
        "label-caps": [
          "12px",
          { lineHeight: "16px", letterSpacing: "0.1em", fontWeight: "700" },
        ],
      },
      spacing: {
        unit: "8px",
        "margin-mobile": "20px",
        gutter: "24px",
        "margin-desktop": "64px",
        "block-gap": "128px",
      },
      borderRadius: {
        none: "0px",
        DEFAULT: "0px",
      },
    },
  },
  plugins: [],
} satisfies Config;
