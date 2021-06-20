/* eslint-disable global-require */
module.exports = {
  darkMode: "class",
  purge: {
    content: ["./src/**/*.tsx", "./public/index.html"],
  },
  theme: {
    fontFamily: {
      sans: [
        "Inter",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Helvetica",
        "Arial",
        "sans-serif",
      ],
    },
    fontSize: {
      tiny: "0.625rem",
      xs: ".75rem",
      sm: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
    },
    colors: {
      transparent: "transparent",
      primary: {
        50: "var(--color-primary-50)",
        100: "var(--color-primary-100)",
        200: "var(--color-primary-200)",
        300: "var(--color-primary-300)",
        400: "var(--color-primary-400)",
        500: "var(--color-primary-500)",
        600: "var(--color-primary-600)",
        700: "var(--color-primary-700)",
        800: "var(--color-primary-800)",
        900: "var(--color-primary-900)",
      },
      secondary: {},
      accent: {
        DEFAULT: "var(--color-accent)",
        hover: "var(--color-accent-hover)",
        disabled: "var(--color-accent-disabled)",
      },
      black: "#000",
      white: "#FFF",
      error: {
        DEFAULT: "var(--color-error)",
      },
      success: {
        DEFAULT: "var(--color-success)",
      },
    },
    spacing: {
      0: "0px",
      3: "3px",
      5: "5px",
      10: "10px",
      15: "15px",
      20: "20px",
      30: "30px",
      40: "40px",
      50: "50px",
      60: "60px",
      70: "70px",
      80: "80px",
      90: "90px",
      100: "100px",
      110: "110px",
      200: "200px",
    },
    borderWidth: {
      DEFAULT: "1px",
      0: "0px",
      2: "2px",
      4: "4px",
    },
    extend: {
      borderRadius: {
        5: "5px",
        8: "8px",
      },
    },
  },
  variants: {
    extend: {},
  },
};