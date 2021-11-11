import React from "react";
import { FlatList } from "react-native";
import { Book } from "../shared.types";
import { Card } from "./Card";
import { Box } from "./generic";

type Props = {
  bookList: Book[];
};

export const BookmarkedList = (props: Props) => {
  const { bookList } = props;

  const renderList = ({ item }: { item: Book }) => (
    <Box mr="6" mt="6">
      <Card
        id={item.id}
        publishedDate={item.publishedDate}
        title={item.title}
        ageGroup={item.ageGroup}
        coverImage={item.coverImg}
        key={item.title}
        subtitle={item.subtitle}
      />
    </Box>
  );

  return (
    <FlatList
      data={bookList}
      renderItem={renderList}
      numColumns={2}
      keyExtractor={(item, index) => `${item.id}_${index}`}
    />
  );
};
