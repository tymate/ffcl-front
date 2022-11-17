import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/auth/Login";

const AuthStack = createStackNavigator();
const AuthNavigator = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name="Login" component={Login} />
  </AuthStack.Navigator>
);

export default AuthNavigator;
