import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Row } from ".";
import { Space } from "../../shared.types";

type ButtonPosition = "left" | "right";
type IconName = "close" | "chevron-back";

type Props = {
  navigation: any; // TODO : Should be Navigation type
  name: IconName;
  size?: number;
  color?: string;
};

export const DismissButton = (props: Props) => {
  const { size = 24, color, name, navigation } = props;

  const dismissScreen = () => {
    navigation.goBack();
  };

  return (
    <Ionicons name={name} size={size} color={color} onPress={dismissScreen} />
  );
};
