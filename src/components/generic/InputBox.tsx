import React from "react";

import { StyleSheet, TextInput, TextInputProps } from "react-native";
import { colors, spaces } from "../../styles/styles";

type Props = TextInputProps & { showBorder?: boolean };

// TODO : Should a need for form(or more complex use case) arise,
// please install formik
export const InputBox = (props: Props) => {
  const { showBorder = false } = props;
  const borderStyle = showBorder
    ? {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: colors.gray
      }
    : {};

  return (
    <TextInput
      {...props}
      style={[styles.base, borderStyle]}
      placeholderTextColor={colors.gray}
    />
  );
};

const styles = StyleSheet.create({
  base: {
    backgroundColor: colors.white,
    borderRadius: 8,
    width: "100%",
    paddingHorizontal: spaces["6"],
    paddingVertical: spaces["5"]
  }
});
