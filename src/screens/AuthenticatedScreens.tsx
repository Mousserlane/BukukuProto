import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import RouteNames from "../RouteNames";
import BookDetailScreen from "./BookDetailScreen";
import MainTabs from "./MainTabs";

const Stack = createNativeStackNavigator();

const AuthenticatedScreens = () => {
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen
          name={RouteNames.MainTabs}
          component={MainTabs}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          component={BookDetailScreen}
          name={RouteNames.BookDetailScreen}
          options={{ headerShown: false }}
          //   options={{
          //     headerShown: false
          //   }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default AuthenticatedScreens;
