import React, { useContext } from "react";
import { Box, Button, Text } from "native-base";
import { AuthContext } from "../providers/AuthProvider";

const Profile = () => {
  const { deleteToken } = useContext(AuthContext);

  return (
    <Box style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Profile</Text>
      <Button onPress={deleteToken}>Logout</Button>
    </Box>
  );
};

export default Profile;
