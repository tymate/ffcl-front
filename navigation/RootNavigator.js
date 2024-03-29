import React, { useContext } from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { AuthContext } from "../providers/AuthProvider";
import { createStackNavigator } from "@react-navigation/stack";
import { Spinner } from "native-base";
import MainNavigator from "./MainNavigator";
import AuthNavigator from "./AuthNavigator";

const Stack = createStackNavigator();

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "white",
  },
};

const RootNavigator = () => {
  const { accessToken } = useContext(AuthContext);
  if (accessToken === "loading") {
    return <Spinner />;
  }

  return (
    <NavigationContainer theme={navTheme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {Boolean(accessToken) ? (
          <Stack.Screen name="Main" component={MainNavigator} />
        ) : (
          <Stack.Screen name="Auth" component={AuthNavigator} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
