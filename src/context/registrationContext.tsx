import React, { createContext, ReactNode, useContext, useState } from "react";

interface AuthData {
  email: string;
  password: string;
}

interface UserData {
  childName: string;
  childAge: number;
}

type RegistrationData = AuthData & UserData;
export type AllowedFields = keyof RegistrationData;

interface RegistrationContextValue {
  authData: AuthData;
  userData: UserData;
  // eslint-disable-next-line no-unused-vars
  setAuthData: (data: AuthData) => void;
}

const initValue: RegistrationContextValue = {
  authData: {
    email: "",
    password: ""
  },
  userData: {
    childName: "",
    childAge: 0
  },
  // eslint-disable-next-line no-unused-vars
  setAuthData: (data: AuthData) => {
    /** init function*/
  }
};

const RegistrationContext = createContext(initValue);

const RegistrationContextProvider = ({ children }: { children: ReactNode }) => {
  const [authData, _setAuthData] = useState<AuthData>(initValue.authData);
  const [userData, _setUserData] = useState<UserData>(initValue.userData);

  const setAuthData = (newAuthData: AuthData) => {
    _setAuthData({
      ...authData,
      ...newAuthData
    });
  };

  return (
    <RegistrationContext.Provider value={{ authData, userData, setAuthData }}>
      {children}
    </RegistrationContext.Provider>
  );
};

const useRegistrationCtx = () => {
  const registrationContext = useContext(RegistrationContext);
  if (!registrationContext) {
    // eslint-disable-next-line no-undef
    console.error(
      "Registration context is undefined. Make sure you're using it within RegistrationContext"
    );
  }

  return registrationContext;
};

// const useSetContextData = (
//   data: Partial<RegistrationData>,
//   field: AllowedFields
// ) => {
//   const { setAuthData } = useRegistrationCtx();

//   const [passedData, setPassedData] = useState<Partial<RegistrationData>>({
//     email: "",
//     password: "",
//     childName: "",
//     childAge: 0
//   });

//   // TODO : Finish this
//   const setDataToState = () => {
//     setPassedData((prevData) => ({
//       ...prevData,
//       [field]: data
//     }));
//   };

//   setAuthData(passedData);
// };

export {
  RegistrationContextProvider as RegistrationContext,
  useRegistrationCtx
};
