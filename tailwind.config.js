/** @type {import('tailwindcss').Config} */
const flattenColorPalette =
  require("tailwindcss/lib/util/flattenColorPalette").default;

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        gray: {
          50: "#F9FAFB", // Background
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
        },
        theme: "#ff385c",
        darkgray: {
          50: "#101010",
          100: "#1c1c1c",
          200: "#2b2b2b",
          300: "#444444",
          400: "#575757",
          500: "#767676",
          600: "#a5a5a5",
          700: "#d6d6d6",
          800: "#e8e8e8",
          900: "#f3f4f6",
        },
        black: {
          900: "#111727",
        },
      },
      boxShadow: {
        card: "0 0 10px 0 rgba(0, 0, 0, 0.05)",
        card_inner: "inset 0 0 10px 0 rgba(0, 0, 0, 0.1)",
      },
      width: {
        15: "3.75rem",
      },
      maxWidth: {
        "90%": "90%",
      },
    },
    fontSize: {
      ...require("tailwindcss/defaultTheme").fontSize,
      "t-1": "10rem",
      "t-2": "7.5rem",
      "t-3": "5rem",
      "t-4": "3rem",
      "t-5": "2rem",
      "t-6": "1.5rem",
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    require("tailwind-scrollbar"),
    addVariablesForColors,
  ],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
