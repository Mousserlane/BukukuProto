import React from "react";

import { ImageBackground } from "react-native";
import {Rating} from "react-native-ratings";
import { Box, DismissButton, Text, Row, Button } from "../components/generic";
import { colors } from "../styles/styles";

const BookDetailScreen = ({
  navigation,
  route
}: {
  navigation: any;
  route: any;
}): React.ReactElement => {
  const { params } = route;

  const navigateToReadBook = () => {
    // TODO : Navigate to the actual book
  }

  return (
    <Box flex={1}>
      <Box flex={0.5}>
        <ImageBackground
          source={{ uri: params.coverImage }}
          style={{ width: "100%", height: "100%", }}
          resizeMode="cover"
        >
          <Box px="4" pt="7" mt="3">
            <DismissButton name="chevron-back" navigation={navigation} color={colors.white} size={32} />
          </Box>
        </ImageBackground>
      </Box>
      <Box flex={0.5} backgroundColor={colors.accent} px="6" py="6">
        <Box mb="5">
          <Text.H1>{params.title}</Text.H1>
          {params.subtitle ?
            <Text.Body>{params.subtitle.toUpperCase()}</Text.Body>
            : null}
        </Box>
        <Text.Caption>Tobias Kuhlmann</Text.Caption>
        <Row mt="4">
          {/** TODO : consider changing the rating component */}
          <Rating
            type="custom"
            readonly
            imageSize={15}
            tintColor={colors.accent}
            style={{ backgroundColor: "blue" }}
            ratingColor={colors.orange}
          />
          <Text.Remarks ml="3">18 Reviews</Text.Remarks>
        </Row>
        <Row mt="6" mb="4" justifyContent="space-between" alignItems="center">
          <Text.Remarks>#adventure #inspiring</Text.Remarks>
          <Text.Remarks>Usia {params.ageGroup}</Text.Remarks>
        </Row>
        <Text.Body mb="7">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo consequat. Duis aute irure dolor
          in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur.
        </Text.Body>
        <Button
          ellipseButton
          type="primary"
          size="s"
          onPress={navigateToReadBook}>Read Now</Button>
      </Box>
    </Box>
  );
};

export default BookDetailScreen;
