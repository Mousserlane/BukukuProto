import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen";
import RouteNames from "../RouteNames";
import BookmarkScreen from "./BookmarkScreen";
import SettingScreen from "./SettingsScreen";

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name={RouteNames.HomeScreen}
        component={HomeScreen}
        options={{ tabBarLabel: "Home" }}
      />
      <Tab.Screen
        name={RouteNames.BookmarkScreen}
        component={BookmarkScreen}
        options={{ tabBarLabel: "Bookmark" }}
      />
      <Tab.Screen
        name={RouteNames.SettingsScreen}
        component={SettingScreen}
        options={{ tabBarLabel: "Settings" }}
      />
    </Tab.Navigator>
  );
};

export default MainNavigator;
