import React from "react";
import { Box, Button, InputBox, Text } from "../components/generic";
import RouteNames from "../RouteNames";
import { colors, spaces } from "../styles/styles";

const LoginScreen = ({ navigation }: { navigation: any }) => {
  const logIn = () => {
    navigation.navigate(RouteNames.MainNavigator);
  };

  const navigateToRegistrationScreen = () => {
    navigation.navigate(RouteNames.RegistrationScreen);
  };

  return (
    <Box flex={1} backgroundColor={colors.accent} py="7" px="7">
      <Box flex={1} justifyContent="flex-end">
        <Text.H1>Selamat datang kembali!</Text.H1>

        {/** TODO : These Boxes can be replaced with Text margin options */}
        <Box mt="7" mb="5">
          <Text.H3>Email</Text.H3>
          <InputBox
            placeholder="Email anda"
            style={{ marginVertical: spaces["3"] }}
          />
        </Box>

        <Box width="100%">
          <Text.H3>Password</Text.H3>
          <InputBox
            placeholder="Password"
            style={{ marginVertical: spaces["3"] }}
            secureTextEntry
          />
        </Box>

        <Text.Body>
          Belum punya akun?{" "}
          <Text.Body
            onPress={navigateToRegistrationScreen}
            style={{ fontWeight: "700" }}
          >
            Registrasi
          </Text.Body>
        </Text.Body>
      </Box>

      <Box flex={0.2} justifyContent="flex-end">
        <Button type="primary" size="l" block onPress={logIn}>
          Masuk
        </Button>
      </Box>
    </Box>
  );
};

export default LoginScreen;
