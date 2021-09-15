import React from "react";
import { Text } from "react-native";
import { Box, Button } from "../components/generic";
import RouteNames from "../RouteNames";

// Instead of getting the navigation object from hooks,
// it is passed in to every screen component.
// Read https://reactnavigation.org/docs/navigating
const HomeScreen = ({ navigation }: { navigation: any }) => {
  const navigateToBookDetail = () => {
    navigation.navigate(RouteNames.BookDetailScreen);
  };
  return (
    <Box useSafeArea justifyContent="center" alignItems="center" flex={1}>
      <Text>Hello from Home page</Text>
      <Button type="primary" size="m" onPress={navigateToBookDetail}>
        Navigate To Book Detail
      </Button>
    </Box>
  );
};

export default HomeScreen;
