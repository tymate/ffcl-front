import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/auth/Login";
import SignUp from "../screens/auth/SignUp";

const AuthStack = createStackNavigator();
const AuthNavigator = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name="Login" component={Login} />
    <AuthStack.Screen name="SignUp" component={SignUp} />
  </AuthStack.Navigator>
);

export default AuthNavigator;
