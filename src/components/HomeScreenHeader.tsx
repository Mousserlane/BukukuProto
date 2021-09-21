import React from "react";
import { StyleSheet } from "react-native";
import { colors } from "../styles/styles";
import { Box, Row, Text } from "./generic";

export const HomeScreenHeader = () => {
  return (
    <Row alignItems="center">
      <Box
        width={60}
        style={styles.circle}
        backgroundColor={colors.secondary}
      />
      <Text.H1 ml="2">bukuku</Text.H1>
    </Row>
  );
};

const styles = StyleSheet.create({
  circle: {
    height: 60,
    borderRadius: 30
  }
});
