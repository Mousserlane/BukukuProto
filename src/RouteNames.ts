const WelcomeStack = {
  SplashScreen: "SplashScreen" as const
};

const AuthStack = {
  LoginScreen: "LoginScreen" as const,
  RegistrationScreen: "RegistrationScreen" as const,
  ResetPasswordScreen: "ResetPasswordScreen" as const
};

const MainStack = {
  // TODO : MainNavigator refers to the main tab navigator component.
  // Should this be called something else?
  MainNavigator: "MainNavigator" as const,
  HomeScreen: "HomeScreen" as const,
  BookmarkScreen: "BookmarkScreen" as const,
  BookDetailScreen: "BookDetailScreen" as const,
  ReaderScreen: "ReaderScreen" as const
};

export default {
  ...WelcomeStack,
  ...AuthStack,
  ...MainStack
};
