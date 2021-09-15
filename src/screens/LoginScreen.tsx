import React from "react";
import { Text } from "react-native";
import { Box } from "../components/generic";
import RouteNames from "../RouteNames";

const LoginScreen = ({ navigation }: { navigation: any }) => {
  const navigateToRegistrationScreen = () => {
    navigation.navigate(RouteNames.RegistrationScreen);
  };
  return (
    <Box flex={1} justifyContent="center" alignItems="center">
      <Text onPress={navigateToRegistrationScreen}>Register?</Text>
    </Box>
  );
};

export default LoginScreen;
