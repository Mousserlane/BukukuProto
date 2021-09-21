import React from "react";
import { FlatList } from "react-native";
import { Box } from "../components/generic";
import RouteNames from "../RouteNames";
import { HomeScreenHeader } from "../components/HomeScreenHeader";
import { BookList } from "../components/BookList";
import { colors } from "../styles/styles";

// Instead of getting the navigation object from hooks,
// it is passed in to every screen component.
// Read https://reactnavigation.org/docs/navigating
const HomeScreen = ({ navigation }: { navigation: any }) => {
  const navigateToBookDetail = () => {
    navigation.navigate(RouteNames.BookDetailScreen);
  };

  return (
    <Box useSafeArea flex={1} py="6" px="6" backgroundColor={colors.accent}>
      <HomeScreenHeader />
      <BookList />
    </Box>
  );
};

export default HomeScreen;
