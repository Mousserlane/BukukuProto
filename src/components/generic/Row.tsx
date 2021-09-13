import React from "react";
import { ViewProps } from "react-native";
import { NativeSafeAreaViewProps } from "react-native-safe-area-context";
import { BoxProps } from "../../shared.types";
import { Box } from "./Box";

// TODO : This feels a bit repetitive, try and see if we can unify this somehow
type Props = Partial<BoxProps> & ViewProps & NativeSafeAreaViewProps;

export const Row = (props: Props) => {
  return (
    <Box {...props} flexDirection="row">
      {props.children}
    </Box>
  );
};
