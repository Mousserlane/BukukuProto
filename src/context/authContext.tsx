/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, {
  useState,
  createContext,
  ReactNode,
  useEffect,
  useContext
} from "react";
import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";

import { UserData } from "../shared.types";
import { useDatabase } from "./appSetup";
import { Alert } from "react-native";

type User = FirebaseAuthTypes.User | null;
interface Auth {
  isAuthenticated: boolean;
  isInitializing: boolean;
  isAuthenticating: boolean;
  user: User;
  login: (email: string, password: string) => void;
  logout: () => void;
  register: (email: string, password: string, userData: UserData) => void;
}

const value: Auth = {
  isAuthenticated: false,
  isInitializing: true,
  isAuthenticating: false,
  user: null,
  login: (email, password) => {
    /** function init */
  },
  logout: () => {
    /** function init */
  },
  register: (email, password, userData) => {
    /** function init */
  }
};

const AuthContext = createContext(value);

const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [_value, setAuthValue] = useState(value);
  const database = useDatabase();
  const listenToAuthStateChange = async (user: User) => {
    if (_value.isInitializing) {
      setAuthValue((prevValue) => ({
        ...prevValue,
        isInitializing: false
      }));
    }

    const hasToken = !!user?.getIdToken();

    if (hasToken) {
      setAuthValue((prevValue) => ({
        ...prevValue,
        user,
        isAuthenticated: true
      }));
    }
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(listenToAuthStateChange);
    return subscriber;
  }, []);

  const login = async (email: string, password: string) => {
    setAuthValue((prevValue) => ({ ...prevValue, isAuthenticating: true }));
    try {
      const _auth = await auth().signInWithEmailAndPassword(email, password);
      if (_auth) {
        // TODO Should dispatch user data to persistent storage or redux or etc...
        setAuthValue((prevValue) => ({
          ...prevValue,
          user: _auth.user,
          isAuthenticated: true
        }));
      }
    } catch (error) {
      Alert.alert("Error while logging in, please try again");
    } finally {
      setAuthValue((prevValue) => ({ ...prevValue, isAuthenticating: false }));
    }
  };

  const logout = async () => {
    // TODO : Should purge all user related data from persistent storage or redux or etc...
    await auth().signOut();
    setAuthValue((prevValue) => ({
      ...prevValue,
      isAuthenticated: false
    }));
  };

  // TODO : Should include other data for the user database as well
  const register = async (
    email: string,
    password: string,
    userData: UserData
  ) => {
    setAuthValue((prevValues) => ({ ...prevValues, isAuthenticating: true }));
    try {
      const createdUser = await auth().createUserWithEmailAndPassword(
        email,
        password
      );
      const { user } = createdUser;
      const dbUserData = {
        ...userData,
        email: user.email,
        uid: user.uid,
        photoUrl: user.photoURL
      };

      if (!database) {
        // eslint-disable-next-line no-undef
        throw Error("DB instance is not ready");
      }
      await database.ref(`/users/${user.uid}`).set(dbUserData);
    } catch (error) {
      // eslint-disable-next-line no-undef
      console.error("Error while authenticating", error);
    } finally {
      setAuthValue((prevValues) => ({
        ...prevValues,
        isAuthenticating: false
      }));
    }
  };

  return (
    <AuthContext.Provider value={{ ..._value, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const authContext = useContext(AuthContext);
  if (!authContext) {
    // eslint-disable-next-line no-undef
    console.error(
      "Auth context is undefined. Make sure you're using it within AuthContextProvider"
    );
  }
  return authContext;
};

export { AuthContextProvider as Auth, useAuth };
