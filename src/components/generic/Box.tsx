import React, { ReactElement } from "react";
import { View, ViewProps } from "react-native";
import {
  NativeSafeAreaViewProps,
  SafeAreaView
} from "react-native-safe-area-context";
import { BoxProps } from "../../shared.types";
import { getMargin, getPadding } from "../../utils/spacing";

type Props = Partial<BoxProps> & ViewProps & NativeSafeAreaViewProps;

export const Box = (props: Props): ReactElement => {
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
    flex,
    flexDirection,
    justifyContent,
    alignItems,
    height,
    width,
    useSafeArea = false,
    flexWrap = "nowrap"
  } = props;

  const ViewComponent = useSafeArea ?
    SafeAreaView
    : View;

  const padding = getPadding({ pl, pt, pr, pb, px, py });
  const margin = getMargin({ ml, mt, mr, mb, mx, my });

  const style = {
    ...padding,
    ...margin,
    flex,
    flexDirection,
    backgroundColor,
    justifyContent,
    alignItems,
    flexWrap,
    height,
    width
  };

  return (
    <ViewComponent {...props} style={[style, props.style]}>
      {props.children}
    </ViewComponent>
  );
};
