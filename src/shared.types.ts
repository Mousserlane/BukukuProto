import { ReactNode } from "react";

export type Space = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7";
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

export type BoxProps = Record<SpacingUnit, Space> & {
  flex: number;
  flexDirection: "column" | "row" | "row-reverse" | "column-reverse";
  backgroundColor: string;
  justifyContent:
    | "flex-start"
    | "center"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly";
  alignItems: "flex-start" | "center" | "flex-end" | "baseline" | "stretch";
  children: ReactNode;
  useSafeArea: boolean;
  flexWrap: "nowrap" | "wrap" | "wrap-reverse";
  height: number;
  width: number | string;
};

export type AgeGroup = "8-12" | "4-7" | "0-4";

export interface Book {
  id: string;
  title: string;
  subtitle?: string;
  coverImg?: string;
  ageGroup: AgeGroup;
  publishedDate: Date;
}

export interface BookDetail extends Book {
  author: string;
  rating: number;
  description: string;
  tags?: string[];
}

export type BookList = {
  ageGroup: AgeGroup;
  books: Book[];
};
