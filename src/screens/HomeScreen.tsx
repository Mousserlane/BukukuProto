import React from "react";
import { Box } from "../components/generic";
import { HomeScreenHeader } from "../components/HomeScreenHeader";
import { BookList } from "../components/BookList";
import { colors } from "../styles/styles";
import { useBookList } from "../hooks/useBookList";

// Instead of getting the navigation object from hooks,
// it is passed in to every screen component.
// Read https://reactnavigation.org/docs/navigating
const HomeScreen = ({ navigation }: { navigation: any }) => {
  const booklist = useBookList();

  return (
    <Box useSafeArea flex={1} py="6" px="6" backgroundColor={colors.accent}>
      <HomeScreenHeader />
      {/** TODO Fix this mismatch craphole */}
      <BookList bookList={booklist} />
    </Box>
  );
};

export default HomeScreen;
