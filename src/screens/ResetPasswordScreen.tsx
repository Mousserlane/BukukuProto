import React, { useState } from "react";
import { Box, Button, InputBox, Text } from "../components/generic";
import auth from "@react-native-firebase/auth";
import { colors } from "../styles/styles";
import { Alert } from "react-native";
import RouteNames from "../RouteNames";

const ResetPasswordScreen = ({ navigation }: { navigation: any }) => {
  const [email, setEmail] = useState("");
  const [isSendingResetPassword, setIsSendingResetPassword] = useState(false);

  const navigateToLogin = () => {
    navigation.navigate(RouteNames.LoginScreen);
  };

  const resetPassword = async () => {
    setIsSendingResetPassword(true);
    try {
      await auth().sendPasswordResetEmail(email);
      Alert.alert(
        "Link password reset berhasil dikirim, silahkan cek email kamu."
      );
    } catch (error) {
      Alert.alert("Gagal mengirim email reset password");
    } finally {
      setIsSendingResetPassword(false);
    }
  };

  const listenToInputChange = (text: string) => {
    setEmail(text);
  };

  return (
    <Box
      flex={1}
      justifyContent="center"
      alignItems="center"
      px="4"
      backgroundColor={colors.accent}
    >
      <Text.H1 mb="5">Lupa Password</Text.H1>
      <InputBox
        placeholder="Masukkan email kamu disini"
        onChangeText={listenToInputChange}
      />
      <Box mt="6" alignItems="center">
        <Button size="m" type="primary" onPress={resetPassword}>
          {isSendingResetPassword ? "Mengirim" : "Kirim"}
        </Button>
        <Text.Caption mt="5" onPress={navigateToLogin}>
          Login
        </Text.Caption>
      </Box>
    </Box>
  );
};

export default ResetPasswordScreen;
