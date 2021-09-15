import React, { ReactNode } from "react";
import { Text, TextStyle } from "react-native";
import { typography } from "../../styles/styles";

type Props = {
  children: ReactNode;
  style?: TextStyle;
  color?: string; // TODO : String might not be a good idea
};
export const CoreText = ({ children, style, color }: Props) => {
  // TODO : Style should contain typography.base and style props
  return <Text style={[typography.base, style]}>{children}</Text>;
};

CoreText.H1 = (props: Props) => <CoreText {...props} style={typography.h1} />;
CoreText.H3 = (props: Props) => <CoreText {...props} style={typography.h3} />;
CoreText.Body = (props: Props) => (
  <CoreText {...props} style={typography.body} />
);

export default CoreText;
