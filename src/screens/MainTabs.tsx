import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen";
import RouteNames from "../RouteNames";
import BookmarkScreen from "./BookmarkScreen";

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={RouteNames.HomeScreen} component={HomeScreen} />
      <Tab.Screen name={RouteNames.BookmarkScreen} component={BookmarkScreen} />
    </Tab.Navigator>
  );
};

export default MainNavigator;
