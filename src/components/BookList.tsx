import React from "react";
import { FlatList } from "react-native";
import { BookList as BookListType } from "../shared.types";
import { Books } from "./Books";
import { Box, Text } from "./generic";

type Props = {
  bookList: BookListType[];
};
export const BookList = (props: Props) => {
  const { bookList } = props;

  const renderList = ({ item }: { item: BookListType }) => (
    <Box mt="6">
      <Text.H3 ml="2" mb="4">
        USIA {item.ageGroup}
      </Text.H3>
      <Books books={item.books} />
    </Box>
  );

  return <FlatList data={bookList} renderItem={renderList} />;
};
