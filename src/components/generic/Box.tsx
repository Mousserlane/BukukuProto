import React, { ReactNode } from "react";
import { View, ViewProps } from "react-native";
import {
  NativeSafeAreaViewProps,
  SafeAreaView
} from "react-native-safe-area-context";
import { Spaces } from "../../shared.types";
import { spaces } from "../../styles/styles";

type BoxProps = {
  // TODO : Fix the spaces type declaration. Find a way to do this with TS utils or something similar
  pl: Spaces;
  pt: Spaces;
  pr: Spaces;
  pb: Spaces;
  px: Spaces;
  py: Spaces;
  ml: Spaces;
  mt: Spaces;
  mr: Spaces;
  mb: Spaces;
  mx: Spaces;
  my: Spaces;
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
// TODO : Find a better way to map the spaces so we don't need to define default value
// or include undefined space

export const Box = (props: Props) => {
  const {
    pl = "0",
    pt = "0",
    pr = "0",
    pb = "0",
    px = "0",
    py = "0",
    ml = "0",
    mt = "0",
    mr = "0",
    mb = "0",
    mx = "0",
    my = "0",
    backgroundColor,
    flex = 1,
    direction = "column",
    justifyContent = "flex-start",
    shouldUseSafeArea = false
  } = props;

  const ViewComponent = shouldUseSafeArea ? SafeAreaView : View;
  const style = {
    flex,
    ...(px
      ? { paddingHorizontal: spaces[px] }
      : { paddingLeft: spaces[pl], paddingRight: spaces[pr] }),
    ...(py
      ? { paddingVertical: spaces[py] }
      : { paddingTop: spaces[pt], paddingBottom: spaces[pb] }),
    ...(mx
      ? { marginHorizontal: spaces[mx] }
      : { marginLeft: spaces[ml], marginRight: spaces[mr] }),
    ...(my
      ? { marginVertical: spaces[my] }
      : { marginTop: spaces[mt], marginBottom: spaces[mb] }),
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
