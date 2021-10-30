import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  Box,
  Button,
  InputBox,
  Row,
  Text,
  DismissButton
} from "../components/generic";
import RouteNames from "../RouteNames";
import { colors, spaces } from "../styles/styles";
import { useAuth } from "../context/authContext";
import {
  RegistrationContext,
  useRegistrationCtx,
  AllowedFields
} from "../context/registrationContext";

const Stack = createNativeStackNavigator();

const RegistrationScreen = () => {
  return (
    <RegistrationContext>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Group>
          <Stack.Screen
            name={RouteNames.EmailRegistrationScreen}
            component={EmailRegistration}
          />
          <Stack.Screen
            name={RouteNames.DataRegistrationScreen}
            component={DataRegistration}
          />
        </Stack.Group>
      </Stack.Navigator>
    </RegistrationContext>
  );
};

// TODO : Should we move these to a component file??
const EmailRegistration = ({ navigation }: { navigation: any }) => {
  const { setAuthData } = useRegistrationCtx();

  const [basicUserData, setBasicUserData] = useState<{
    email: string;
    password: string;
  }>({ email: "", password: "" });

  const setData = (text: string, field: AllowedFields) => {
    setBasicUserData((prevState) => ({
      ...prevState,
      [field]: text
    }));
  };

  // TODO : Add data verification

  const navigateToDataRegistration = () => {
    setAuthData(basicUserData);
    navigation.navigate(RouteNames.DataRegistrationScreen);
  };

  const navigateToLogin = () => {
    navigation.navigate(RouteNames.LoginScreen);
  };

  return (
    <Box flex={1} backgroundColor={colors.accent} py="7" px="7">
      <Box flex={1} justifyContent="flex-end">
        <Text.H1>Pertama, daftarkan emailmu dan buat password baru.</Text.H1>

        <Text.H3 mt="7">Email</Text.H3>
        <InputBox
          placeholder="Email anda"
          style={{ marginVertical: spaces["3"] }}
          onChangeText={(text) => setData(text, "email")}
        />

        <Text.H3 mt="5">Password</Text.H3>
        <InputBox
          placeholder="Password"
          style={{ marginVertical: spaces["3"] }}
          secureTextEntry
          onChangeText={(text) => setData(text, "password")}
        />

        <Text.Body>
          Sudah punya akun?{" "}
          <Text.Body onPress={navigateToLogin} style={{ fontWeight: "700" }}>
            Masuk disini
          </Text.Body>
        </Text.Body>
      </Box>

      <Box flex={0.2} justifyContent="flex-end">
        <Button
          type="primary"
          size="l"
          block
          onPress={navigateToDataRegistration}
        >
          BERIKUTNYA
        </Button>
      </Box>
    </Box>
  );
};

const DataRegistration = ({ navigation }: { navigation: any }) => {
  const { register, isAuthenticating } = useAuth();
  const { authData } = useRegistrationCtx();
  // const [userChildData, setUserChilData] = useState<{
  //   email: string;
  //   password: string;
  // }>({ email: "", password: "" });
  // const setData = (text: string, field: AllowedFields) => {
  //   setUserChilData((prevState) => ({
  //     ...prevState,
  //     [field]: text
  //   }));
  // };

  // TODO : Add verification

  const finishRegistration = async () => {
    // TODO Should post data to server & then run login function
    register(authData.email, authData.password);
  };

  return (
    <Box flex={1} backgroundColor={colors.warning} py="7" px="7">
      <Row py="7">
        <DismissButton name="chevron-back" navigation={navigation} size={32} />
      </Row>
      <Box flex={1} justifyContent="flex-end" mb="7" py="7">
        <Box pr="7">
          <Text.H1>Siapa nama panggilan dan usia anakmu?</Text.H1>
        </Box>

        <Text.H3 mt="7">Nama</Text.H3>
        <InputBox
          placeholder="Nama anak"
          style={{ marginVertical: spaces["3"] }}
        />
        <Text.H3 mt="5">Umur</Text.H3>
        <InputBox
          placeholder="Umur anak"
          style={{ marginVertical: spaces["3"] }}
          keyboardType="number-pad"
        />
      </Box>

      <Box flex={0.2} justifyContent="flex-end">
        <Button type="secondary" size="l" block onPress={finishRegistration}>
          {isAuthenticating ? "REGISTRASI" : "Mohon Tunggu"}
        </Button>
      </Box>
    </Box>
  );
};

export default RegistrationScreen;
