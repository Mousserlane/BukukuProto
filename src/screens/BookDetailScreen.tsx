import { StackActions } from "@react-navigation/routers";
import React from "react";

import { ImageBackground } from "react-native";
import {Rating} from "react-native-ratings";
import { Box, DismissButton, Text, Row, Button } from "../components/generic";
import { useBookDetail } from "../hooks/useBookDetail";
import RouteNames from "../RouteNames";
import { colors } from "../styles/styles";

const BookDetailScreen = ({
  navigation,
  route
}: {
  navigation: any;
  route: any;
}) => {
  const { params } = route;
  const bookDetail = useBookDetail(params.id)
  const navigateToReadBook = () => {
    // TODO : Navigate to the actual book
  }

  if (!bookDetail) {
    // Should navigate to Not Found page
    // navigation.dispatch(StackActions.replace(RouteNames.NotFound));
    return null;
  }

  return (
    <Box flex={1}>
      <Box flex={0.5}>
        <ImageBackground
          source={{ uri: bookDetail.coverImg }}
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
          <Text.H1>{bookDetail.title}</Text.H1>
          {bookDetail.subtitle ?
            <Text.Body>{bookDetail.subtitle.toUpperCase()}</Text.Body>
            : null}
        </Box>
        <Text.Caption>{bookDetail.author}</Text.Caption>
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
          <Text.Remarks>Usia {bookDetail.ageGroup}</Text.Remarks>
        </Row>
        <Text.Body mb="7">
          {bookDetail.description}
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
