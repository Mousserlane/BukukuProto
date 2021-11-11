import React, { useState } from "react";
import { Box, Button, InputBox, Text, Row } from "../components/generic";
import { useAuth } from "../context/authContext";
import RouteNames from "../RouteNames";
import { colors, spaces } from "../styles/styles";

const LoginScreen = ({ navigation }: { navigation: any }) => {
  const { login, isAuthenticating } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const logIn = async () => {
    // NOTE : navigation will be handled by auth listener
    login(email, password);
  };

  const navigateToRegistrationScreen = () => {
    navigation.navigate(RouteNames.RegistrationScreen);
  };

  const navigateToResetPassword = () => {
    navigation.navigate(RouteNames.ResetPasswordScreen);
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
            onChangeText={setEmail}
          />
        </Box>

        <Box width="100%">
          <Row alignItems="center" justifyContent="space-between">
            <Text.H3>Password</Text.H3>
            <Text.Remarks onPress={navigateToResetPassword}>
              Lupa password?
            </Text.Remarks>
          </Row>
          <InputBox
            placeholder="Password"
            style={{ marginVertical: spaces["3"] }}
            secureTextEntry
            onChangeText={setPassword}
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
          {isAuthenticating ? "Memproses" : "Masuk"}
        </Button>
      </Box>
    </Box>
  );
};

export default LoginScreen;
