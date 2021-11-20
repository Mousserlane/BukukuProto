import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen";
import RouteNames from "../RouteNames";
import BookmarkScreen from "./BookmarkScreen";
import SettingScreen from "./SettingsScreen";
import { colors } from "../styles/styles";
import TabBarIcon from "../components/TabBarIcon";

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: colors.lightBlue }
      }}
    >
      <Tab.Screen
        name={RouteNames.HomeScreen}
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} iconName="home" />
          )
        }}
      />
      <Tab.Screen
        name={RouteNames.BookmarkScreen}
        component={BookmarkScreen}
        options={{
          tabBarLabel: "Bookmark",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} iconName="bookmark" />
          )
        }}
      />
      <Tab.Screen
        name={RouteNames.SettingsScreen}
        component={SettingScreen}
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} iconName="cog" />
          )
        }}
      />
    </Tab.Navigator>
  );
};

export default MainNavigator;
