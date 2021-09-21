import React, {
  useState,
  createContext,
  ReactNode,
  useEffect,
  useContext
} from "react";

interface Auth {
  isAuthenticated: boolean;
  isCheckingAuthState: boolean;
  login: () => void;
  logout: () => void;
}

const value: Auth = {
  isAuthenticated: false,
  isCheckingAuthState: true,
  login: () => {},
  logout: () => {}
};

const AuthContext = createContext(value);

const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [_value, setAuthValue] = useState(value);

  const login = async () => {
    // TODO Should dispatch user data to persistent storage or redux or etc...
    setAuthValue({
      ..._value,
      isAuthenticated: true
    });
  };

  const logout = async () => {
    // TODO : Should purge all user related data from persistent storage or redux or etc...
    setAuthValue({
      ..._value,
      isAuthenticated: false
    });
  };

  useEffect(() => {
    const checkAuthentication = async () => {
      // TODO : Should have a token expiry checker hooks.
      const isTokenExpired = false;
      const isUserExist = false;
      if (isTokenExpired || !isUserExist) {
        // TODO : Should delete user data & navigate back to Auth screen
        setAuthValue({
          ..._value,
          isAuthenticated: false,
          isCheckingAuthState: false
        });
      } else {
        setAuthValue({
          ..._value,
          isAuthenticated: true,
          isCheckingAuthState: false
        });
      }
    };

    checkAuthentication();
  }, []);

  return (
    <AuthContext.Provider value={{ ..._value, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const authContext = useContext(AuthContext);
  if (!authContext) {
    console.error(
      "Auth context is undefined. Make sure you're using it within AuthContextProvider"
    );
  }
  return authContext;
};

export { AuthContextProvider as Auth, useAuth };
