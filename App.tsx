import React from "react";
import { AppSetup } from "./src/context/appSetup";
import { Auth } from "./src/context/authContext";
import MainNavigator from "./src/screens/MainNavigator";

const App = () => {
  return (
    <AppSetup>
      <Auth>
        <MainNavigator />
      </Auth>
    </AppSetup>
  );
};

export default App;
