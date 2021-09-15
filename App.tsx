/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import type { ReactNode } from "react";
import { StyleSheet, useColorScheme } from "react-native";

import booklistMock from "./src/data/booklist_mock.json";
import { NavigationContainer } from "@react-navigation/native";
import MainScreens from "./src/screens/MainScreens";
import AuthenticationScreens from "./src/screens/AuthenticationScreens";

type Props = {
  children: ReactNode;
  title: string;
};

const App = () => {
  const isDarkMode = useColorScheme() === "dark";
  const { id, title, subtitle, cover_img, age_group, published_date } =
    booklistMock.books[0];
  const publishedDate = new Date(published_date);

  // Should get this from authContext
  const isAuthenticated = true;
  return (
    <NavigationContainer>
      {/* <Stack.Group> */}
      {isAuthenticated ? <MainScreens /> : <AuthenticationScreens />}
      {/* </Stack.Group> */}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600"
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400"
  },
  highlight: {
    fontWeight: "700"
  }
});

export default App;
