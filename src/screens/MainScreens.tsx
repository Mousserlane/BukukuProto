import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import RouteNames from "../RouteNames";
import BookDetailScreen from "./BookDetailScreen";
import MainTabs from "./MainTabs";

const Stack = createNativeStackNavigator();

const MainScreens = () => {
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen
          name={RouteNames.MainNavigator}
          component={MainTabs}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          component={BookDetailScreen}
          name={RouteNames.BookDetailScreen}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default MainScreens;
