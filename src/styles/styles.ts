import { Space } from "../shared.types";

const spaces: Record<Space, number> = {
  0: 0,
  1: 2,
  2: 4,
  3: 8,
  4: 12,
  5: 16,
  6: 24,
  7: 32
};

const colors = {
  primary: "#274F66",
  secondary: "#03878F",
  warning: "#F2B351",
  danger: "#F2624F",
  accent: "#B4D8E0",
  cyan: "#518C99",
  yellow: "#F3D03E",
  lightBlue: "#C4E8F0",
  white: "#FFFFFF",
  black: "#000000",
  gray: "#B2B6B8"
};

const typography = {
  // TODO : Enable after installing the font
  base: {
    // fontFamily: "Gothic"
    color: colors.primary
  },
  h1: {
    fontWeight: "700",
    fontSize: 30,
    lineHeight: 37.5
  },
  h3: {
    fontWeight: "700",
    fontSize: 18,
    lineHeight: 22.5
  },
  body: {
    fontWeight: "600",
    fontSize: 12,
    lineHeight: 16.9
  }
} as const;

export { spaces, colors, typography };
