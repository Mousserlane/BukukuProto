import React from "react";
import { FlatList } from "react-native";
import { Book } from "../shared.types";
import { Card } from "./Card";
import { Box } from "./generic";

type Props = {
  books: Book[];
};

export const Books = (props: Props) => {
  const { books } = props;

  const renderCard = ({ item }: { item: Book }) => (
    <Box ml="3">
      <Card
        id={item.id}
        title={item.title}
        coverImage={item.cover_img}
        publishedDate={item.published_date}
      />
    </Box>
  );

  return <FlatList horizontal data={books} renderItem={renderCard} />;
};
