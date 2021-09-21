import React from "react";
import { Auth } from "./src/context/authContext";
import MainNavigator from "./src/screens/MainNavigator";

const App = () => {
  return (
    <Auth>
      <MainNavigator />
    </Auth>
  );
};

export default App;
