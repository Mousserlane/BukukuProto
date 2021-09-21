import React from "react";
import { Image, Text, TouchableOpacity } from "react-native";
import { Box } from "./generic";

interface CardProps {
  id: string;
  title: string;
  // TODO : Need fallback cover image
  coverImage?: string;
  publishedDate: Date;
  subtitle?: string;
  ageGroup?: string;
}

export const Card = (props: CardProps) => {
  const { id, title, coverImage } = props;
  const navigateToDetail = () => {
    // TODO : Add navigation
    // navigation.navigate(RouteNames.bookDetail, {id, title, subtitle, coverImage, ageGroup})
  };

  return (
    <TouchableOpacity onPress={navigateToDetail}>
      <Image
        source={{ uri: coverImage }}
        width={150}
        height={188}
        style={{ width: 150, height: 188, borderRadius: 8 }}
      />
    </TouchableOpacity>
  );
};
