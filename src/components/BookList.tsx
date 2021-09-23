import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { AgeGroup, Book, BookList as BookListType } from "../shared.types";
import { Books } from "./Books";
import { Box, Text } from "./generic";

type Props<T, U> = {
  bookList: BookListType[];
};
export const BookList = (props: Props<AgeGroup, any[]>) => {
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
