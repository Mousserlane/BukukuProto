import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { AgeGroup, BookList as BookListType } from "../shared.types";
import { Books } from "./Books";
import { Box, Text } from "./generic";
import { bookListMock } from "../data/booklist_mock";
import { colors } from "../styles/styles";

type Props = {
  bookList: BookListType[];
};

export const BookList = (props: any) => {
  const { bookList } = props;
  const [_bookList, setBookList] = useState(bookList);

  // TODO : Need to fix the type mismatch
  const renderList = ({ item }: { item: any }) => (
    <Box mt="6">
      <Text.H3 ml="2" mb="4">
        USIA {item.age_group}
      </Text.H3>
      <Books books={item.books} />
    </Box>
  );

  return <FlatList data={bookListMock} renderItem={renderList} />;
};
