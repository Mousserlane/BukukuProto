import React, { ReactNode } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps
} from "react-native";
import { colors } from "../../styles/styles";

type ButtonSize = "s" | "m" | "l";
type ButtonType = "primary" | "secondary" | "warning" | "danger";

type Props = {
  ellipseButton?: boolean;
  block?: boolean;
  type: ButtonType;
  children: ReactNode;
  size: ButtonSize;
} & TouchableOpacityProps;

const ELLIPSE_RADIUS = 50;
const REGULAR_RADIUS = 8;

export const Button = (props: Props) => {
  const { type, ellipseButton, children, size = "m", block = false } = props;

  const buttonColor = colors[type];
  const radiusStrength = ellipseButton ? ELLIPSE_RADIUS : REGULAR_RADIUS;
  const paddingSize = {
    s: { px: 16, py: 11 },
    m: { px: 24, py: 12 },
    l: { px: 46, py: 16 }
  };

  const style = {
    backgroundColor: buttonColor,
    borderRadius: radiusStrength,
    paddingHorizontal: paddingSize[size].px,
    paddingVertical: paddingSize[size].py
  };
  const buttonWidth = block ? { width: "100%" } : {};

  return (
    <TouchableOpacity
      {...props}
      style={[style, buttonWidth, buttonStyle.centerAlignment]}
    >
      <Text style={buttonStyle.buttonText}>{children}</Text>
    </TouchableOpacity>
  );
};

const buttonStyle = StyleSheet.create({
  centerAlignment: {
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    color: colors.white,
    fontWeight: "800"
  }
});
