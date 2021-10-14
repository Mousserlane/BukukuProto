import React from "react";
import { BookmarkedList } from "../components/BookmarkedList";
import { Box, Text } from "../components/generic";
import { useBookmarkedItems } from "../hooks/useBookmarkedList";
import { colors } from "../styles/styles";

const BookmarkScreen = () => {
  const booklist = useBookmarkedItems();

  return (
    <Box useSafeArea flex={1} px="7" backgroundColor={colors.accent}>
      <Text.H1 mt="4">Daftar Bacaan</Text.H1>
      <BookmarkedList bookList={booklist} />
    </Box>
  );
};

export default BookmarkScreen;
