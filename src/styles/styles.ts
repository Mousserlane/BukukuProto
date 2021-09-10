import { Spaces } from "../shared.types";

const spaces: Record<Spaces, number> = {
    0: 0,
    1: 2,
    2: 4,
    3: 8,
    4: 12,
    5: 16,
    6: 24,
    7: 32
}

const colors = {
    primary: "#274F66",
    secondary: "#03878F",
    warning: "#F2B351",
    danger: "#F2624F",
    accent: "#B4D8E0",
    cyan: "#518C99",
    yellow: "#F3D03E",
    lightBlue: "#C4E8F0",

}

export { spaces, colors }