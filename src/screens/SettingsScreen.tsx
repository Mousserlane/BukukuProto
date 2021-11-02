import React from "react";
import { Box, Button } from "../components/generic";
import { useAuth } from "../context/authContext";

const SettingScreen = () => {
  const { logout } = useAuth();
  return (
    <Box useSafeArea flex={1} justifyContent="center" alignItems="center">
      <Button size="m" type="primary" onPress={logout}>
        Logout
      </Button>
    </Box>
  );
};

export default SettingScreen;
