import React from "react";
import { Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import RouteNames from "../RouteNames";

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
  const { id, title, coverImage, subtitle } = props;
  const navigation = useNavigation<any>();

  const navigateToDetail = () => {
    navigation.navigate(RouteNames.BookDetailScreen, {
      id,
      title,
      coverImage,
      subtitle
    });
    // navigation.navigate(RouteNames.BookDetailScreen, {id, title, subtitle, coverImage, ageGroup})
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
