import React from "react";
import { FlatList } from "react-native";
import { Book } from "../shared.types";
import { Card } from "./Card";
import { Box } from "./generic";

type Props<T> = {
  books: T[];
};

export const Books = (props: Props<any>) => {
  const { books } = props;

  const renderCard = ({ item }: { item: Book }) => (
    <Box ml="3">
      <Card
        id={item.id}
        title={item.title}
        coverImage={item.coverImg}
        publishedDate={item.publishedDate}
        subtitle={item.subtitle}
        ageGroup={item.ageGroup}
      />
    </Box>
  );

  return (
    <FlatList
      horizontal
      data={books}
      renderItem={renderCard}
      keyExtractor={(item, index) => `${item.id}_${index}`}
    />
  );
};
