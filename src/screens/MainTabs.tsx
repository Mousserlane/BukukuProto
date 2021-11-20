import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen";
import RouteNames from "../RouteNames";
import BookmarkScreen from "./BookmarkScreen";
import SettingScreen from "./SettingsScreen";
import Icon from "react-native-vector-icons/Entypo";

const Tab = createBottomTabNavigator();

const HomeIcon = () => <Icon name="home" size={24} />;
const BookmarkIcon = () => <Icon name="bookmark" size={24} />;
// const SearchIcon = () => <Icon name="magnifying-glass" size={24} />;
const SettingIcon = () => <Icon name="cog" size={24} />;

const MainNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name={RouteNames.HomeScreen}
        component={HomeScreen}
        options={{ tabBarLabel: "Home", tabBarIcon: HomeIcon }}
      />
      <Tab.Screen
        name={RouteNames.BookmarkScreen}
        component={BookmarkScreen}
        options={{ tabBarLabel: "Bookmark", tabBarIcon: BookmarkIcon }}
      />
      <Tab.Screen
        name={RouteNames.SettingsScreen}
        component={SettingScreen}
        options={{ tabBarLabel: "Settings", tabBarIcon: SettingIcon }}
      />
    </Tab.Navigator>
  );
};

export default MainNavigator;
