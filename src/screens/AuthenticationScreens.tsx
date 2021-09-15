import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import RouteNames from "../RouteNames";
import LoginScreen from "./LoginScreen";

const Stack = createNativeStackNavigator();

const AuthenticationScreens = () => {
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen name={RouteNames.LoginScreen} component={LoginScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default AuthenticationScreens;
