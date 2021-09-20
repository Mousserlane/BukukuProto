import React, { ReactNode } from "react";
import { Text, TextStyle } from "react-native";
import { Margin } from "../../shared.types";
import { typography } from "../../styles/styles";
import { getMargin } from "../../utils/spacing";

type Props = Partial<Margin> & {
  children: ReactNode;
  onPress?: () => void;
  style?: TextStyle;
  color?: string; // TODO : String might not be a good idea
};
export const CoreText = ({
  ml,
  mt,
  mr,
  mb,
  mx,
  my,
  children,
  style,
  color,
  onPress
}: Props) => {
  // TODO : Style should contain typography.base and style props
  const margin = getMargin({ ml, mt, mr, mb, mx, my });

  return (
    <Text style={[typography.base, style, margin]} onPress={onPress}>
      {children}
    </Text>
  );
};

CoreText.H1 = (props: Props) => <CoreText {...props} style={typography.h1} />;
CoreText.H3 = (props: Props) => <CoreText {...props} style={typography.h3} />;
CoreText.Body = (props: Props) => (
  <CoreText {...props} style={typography.body} />
);

export default CoreText;
