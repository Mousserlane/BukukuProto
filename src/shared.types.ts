
export type Space = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7"
export type SpacingUnit =
  | "pl"
  | "pt"
  | "pr"
  | "pb"
  | "px"
  | "py"
  | "ml"
  | "mt"
  | "mr"
  | "mb"
  | "mx"
  | "my";


export type Padding = Record<
  Extract<SpacingUnit, "pl" | "pt" | "pr" | "pb" | "px" | "py">,
  Space | undefined
>;

export type Margin = Record<
  Extract<SpacingUnit, "ml" | "mt" | "mr" | "mb" | "mx" | "my">,
  Space | undefined
>;