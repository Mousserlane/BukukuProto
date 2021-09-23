import React from "react";

import { ImageBackground } from "react-native";
import { Box, Text } from "../components/generic";
import { colors } from "../styles/styles";

const BookDetailScreen = ({
  navigation,
  route
}: {
  navigation: any;
  route: any;
}) => {
  const { params } = route;
  return (
    <Box flex={1}>
      <Box flex={0.5}>
        <ImageBackground
          source={{ uri: params.coverImage }}
          style={{ width: "100%", height: "100%" }}
          resizeMode="cover"
        ></ImageBackground>
      </Box>
      <Box flex={0.5} backgroundColor={colors.accent} px="6" py="6">
        <Box mb="4">
          <Text.H1>{params.title}</Text.H1>
          {params.subtitle ? <Text.Body>{params.subtitle}</Text.Body> : null}
        </Box>
        <Text.Body>Tobias Kuhlmann</Text.Body>
      </Box>
    </Box>
  );
};

export default BookDetailScreen;
