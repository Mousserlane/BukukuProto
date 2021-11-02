import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import RouteNames from "../RouteNames";
import LoginScreen from "./LoginScreen";
import RegistrationScreen from "./RegistrationScreen";
import ResetPasswordScreen from "./ResetPasswordScreen";

const Stack = createNativeStackNavigator();

const AuthenticationScreens = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Group>
        <Stack.Screen
          name={RouteNames.RegistrationScreen}
          component={RegistrationScreen}
        />
        <Stack.Screen name={RouteNames.LoginScreen} component={LoginScreen} />
        <Stack.Screen
          name={RouteNames.ResetPasswordScreen}
          component={ResetPasswordScreen}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default AuthenticationScreens;
