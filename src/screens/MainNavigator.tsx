import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useAuth } from "../context/authContext";
import SplashScreen from "./SplashScreen";
import AuthenticatedScreens from "./AuthenticatedScreens";
import AuthenticationScreens from "./AuthenticationScreens";

const MainNavigator = () => {
  const { isCheckingAuthState, isAuthenticated } = useAuth();

  console.log("is checking auth", isCheckingAuthState);
  if (isCheckingAuthState) return <SplashScreen />;

  return (
    <NavigationContainer>
      {isAuthenticated ? <AuthenticatedScreens /> : <AuthenticationScreens />}
    </NavigationContainer>
  );
};

export default MainNavigator;
