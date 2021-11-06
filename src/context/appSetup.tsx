import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from "react";
import firebase from "@react-native-firebase/app";
import "@react-native-firebase/database";
import { DATABASE_URL } from "../Constant";
import { FirebaseDatabaseTypes } from "@react-native-firebase/database";

interface AppSetup {
  database: FirebaseDatabaseTypes.Module | null;
}

const value: AppSetup = {
  database: null
};

const AppSetupContext = createContext(value);

const AppSetupContextProvider = ({ children }: { children: ReactNode }) => {
  const [_setupValue, setSetupValue] = useState(value);

  useEffect(() => {
    const database = firebase.app().database(DATABASE_URL);
    setSetupValue({ database });
  }, []);

  return (
    <AppSetupContext.Provider value={_setupValue}>
      {children}
    </AppSetupContext.Provider>
  );
};

const useDatabase = () => {
  const appSetupCtx = useContext(AppSetupContext);
  if (!appSetupCtx) {
    // eslint-disable-next-line no-undef
    console.error(
      "app setup context is undefined. Make sure you're using it within AppSetupContextProvider"
    );
  }

  return appSetupCtx.database;
};

export { AppSetupContextProvider as AppSetup, useDatabase };
