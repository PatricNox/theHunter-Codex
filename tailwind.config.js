const {
  colors: { white },
} = require("tailwindcss/defaultTheme"); // eslint-disable-line @typescript-eslint/no-var-requires

const colorSchema = {
  base: {
    blue: "#004986",
    blueSemi: "#a1bcd6",
    blueLight: "#a1bcd6",
    black: "#322e2f",
    blackSemi: "#a7a5a6",
    blackLight: "#dedede",
    blackLighter: "#f7f7f7",
  },
  accent: {
    green: "#50af41",
    greenSemi: "#bfe7af",
    greenLight: "#e7f6e1",
    blue: "#009cdc",
    blueSemi: "#aadbf4",
    blueLight: "#dff1fb",
    orange: "#ee7402",
    orangeSemi: "#fbc3a2",
    orangeLight: "#fde9dc",
    yellow: "#ffd600",
    yellowSemi: "#fff19a",
    yellowLight: "#fffad9",
    pink: "#e83a8d",
    pinkSemi: "#f1a7d7",
    pinkLight: "#fadef0",
    purpleSemi: "#6B46C1",
    purpleLight: "#E9D8FD",
    red: "#eb361e",
    redSemi: "#f17161",
    redLight: "#f9c2bb",
  },
};

module.exports = {
  theme: {
    colors: {
      white,
      ...colorSchema,
    },
    fontFamily: {
      sans: ["Weblysleek-light", "Arial", "Helvetica", "sans-serif"],
      heading: ["Weblysleek-semilight", "Arial", "Helvetica", "sans-serif"],
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      // panel pc has resolution 1366x768
      xl: "1400px",
      // => @media (min-width: 1400px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  variants: {
    backgroundColor: ["responsive", "odd", "hover", "focus"],
  },
  plugins: [],
};
