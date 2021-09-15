import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Alert, StyleSheet, Text } from "react-native";
import { Box, Button, InputBox, Row } from "../components/generic";
import RouteNames from "../RouteNames";
import { colors, spaces } from "../styles/styles";

const Stack = createNativeStackNavigator();

const RegistrationScreen = () => {
  return (
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
  );
};

// TODO : Should we move these to a component file??
const EmailRegistration = ({ navigation }: { navigation: any }) => {
  const navigateToDataRegistration = () => {
    navigation.navigate(RouteNames.DataRegistrationScreen);
  };
  return (
    <Box
      flex={1}
      justifyContent="center"
      alignItems="flex-start"
      style={styles.emailRegistration}
      px="7"
    >
      <Text>Pertama, daftarkan emailmu dan buat password baru.</Text>
      {/* <Box mt="7" /> */}
      <Box width="100%" mt="7" mb="5">
        <Text style={{}}>Email</Text>
        <InputBox
          placeholder="Email anda"
          style={{ marginVertical: spaces["3"] }}
        />
      </Box>
      <Box width="100%" mb="7">
        <Text style={{}}>Password</Text>
        <InputBox
          placeholder="Password"
          style={{ marginVertical: spaces["3"] }}
          secureTextEntry
        />
      </Box>
      <Button
        type="primary"
        size="l"
        block
        onPress={navigateToDataRegistration}
      >
        BERIKUTNYA
      </Button>
    </Box>
  );
};

const DataRegistration = () => {
  const finishRegistration = () => {
    console.log("Registration finished");
  };
  return (
    <Box
      flex={1}
      justifyContent="center"
      alignItems="flex-start"
      style={styles.dataRegistration}
      px="7"
    >
      <Text>Siapa nama panggilan dan usia anakmu?</Text>
      {/* <Box mt="7" /> */}
      <Box width="100%" mt="7" mb="5">
        <Text style={{}}>Nama</Text>
        <InputBox
          placeholder="Nama anak"
          style={{ marginVertical: spaces["3"] }}
        />
      </Box>
      <Box width="100%" mb="7">
        <Text style={{}}>Umur</Text>
        <InputBox
          placeholder="Umur anak"
          style={{ marginVertical: spaces["3"] }}
          keyboardType="number-pad"
        />
      </Box>
      <Button type="secondary" size="l" block onPress={finishRegistration}>
        REGISTRASI
      </Button>
    </Box>
  );
};

const styles = StyleSheet.create({
  emailRegistration: {
    backgroundColor: colors.accent
  },
  dataRegistration: {
    backgroundColor: colors.warning
  }
});

export default RegistrationScreen;
