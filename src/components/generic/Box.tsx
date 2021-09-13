import React, { ReactNode } from "react";
import { View, ViewProps } from "react-native";
import {
  NativeSafeAreaViewProps,
  SafeAreaView
} from "react-native-safe-area-context";
import { Margin, Padding, Space, SpacingUnit } from "../../shared.types";
import { spaces } from "../../styles/styles";

type BoxProps = Record<SpacingUnit, Space> & {
  flex: number;
  direction: "column" | "row" | "row-reverse" | "column-reverse";
  backgroundColor: string;
  justifyContent:
    | "flex-start"
    | "center"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly";
  children: ReactNode;
  shouldUseSafeArea: boolean;
};

type Props = Partial<BoxProps> & ViewProps & NativeSafeAreaViewProps;

const getPadding = (padding: Padding) => {
  if (padding.pl) return { paddingLeft: spaces[padding.pl] };
  if (padding.pt) return { paddingTop: spaces[padding.pt] };
  if (padding.pr) return { paddingRight: spaces[padding.pr] };
  if (padding.pb) return { paddingBottom: spaces[padding.pb] };
  if (padding.px) return { paddingHorizontal: spaces[padding.px] };
  if (padding.py) return { paddingVertical: spaces[padding.py] };

  return {};
};

const getMargin = (margin: Margin) => {
  // TODO : If necessary, find a way to automate this.
  if (margin.ml) return { marginLeft: spaces[margin.ml] };
  if (margin.mt) return { marginTop: spaces[margin.mt] };
  if (margin.mr) return { marginRight: spaces[margin.mr] };
  if (margin.mb) return { marginBottom: spaces[margin.mb] };
  if (margin.mx) return { marginHorizontal: spaces[margin.mx] };
  if (margin.my) return { marginVertical: spaces[margin.my] };
  return {};
};

export const Box = (props: Props) => {
  const {
    pl,
    pt,
    pr,
    pb,
    px,
    py,
    ml,
    mt,
    mr,
    mb,
    mx,
    my,
    backgroundColor,
    flex = 1,
    direction = "column",
    justifyContent = "flex-start",
    shouldUseSafeArea = false
  } = props;

  const ViewComponent = shouldUseSafeArea ? SafeAreaView : View;

  const padding = getPadding({ pl, pt, pr, pb, px, py });
  const margin = getMargin({ ml, mt, mr, mb, mx, my });
  const style = {
    ...padding,
    ...margin,
    flex,
    flexDirection: direction,
    backgroundColor,
    justifyContent
  };

  return (
    <ViewComponent {...props} style={[style, props.style]}>
      {props.children}
    </ViewComponent>
  );
};
