const colors = require("tailwindcss/colors")

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter Variable",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      maxWidth: {
        prose: "68ch",
      },
      letterSpacing: {
        tightest: "-0.035em",
      },
      keyframes: {
        rise: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        rise: "rise 0.6s cubic-bezier(0.16, 1, 0.3, 1) both",
      },
    },

    // Deliberately restrained institutional palette: warm-white paper, deep
    // navy ink, one muted teal accent. Every ink/accent pair used for text is
    // checked against its background for WCAG AA contrast.
    colors: {
      transparent: colors.transparent,
      current: "currentColor",
      white: "#ffffff",
      black: "#000000",

      paper: {
        DEFAULT: "#FBFBF9", // warm white page background
        raised: "#FFFFFF",
        sunken: "#F4F5F2",
      },

      ink: {
        DEFAULT: "#0E1A2B", // 16.1:1 on paper
        strong: "#08111D",
        muted: "#44526A", // 8.0:1 on paper
        soft: "#5E6C82", // 5.4:1 on paper — body-safe
        faint: "#8A94A3", // decorative / large text only
      },

      accent: {
        DEFAULT: "#0B655A", // 6.0:1 on white — safe for body-size links
        strong: "#084A42",
        soft: "#E8F1EF",
        line: "#BFD8D3",
      },

      line: {
        DEFAULT: "#E2E5E0",
        strong: "#CFD4CC",
      },
    },

    screens: {
      xs: "420px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },

  plugins: [],
}
