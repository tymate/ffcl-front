import React from "react";
import Details from "../screens/Details";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Profile from "../screens/Profile";
import Clubs from "../screens/Clubs";
import Explore from "../screens/Explore";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import JoinClub from "../screens/JoinClub";
import CreateClub from "../screens/CreateClub";
import Club from "../components/icons/Club";

const ClubStack = createStackNavigator();
const ClubsNavigator = () => (
  <ClubStack.Navigator>
    <ClubStack.Screen
      name="Home"
      component={Clubs}
      options={{ headerShown: false }}
    />
    <ClubStack.Screen
      name="JoinClub"
      component={JoinClub}
      options={{ headerShown: false }}
    />
    <ClubStack.Screen
      name="CreateClub"
      component={CreateClub}
      options={{ headerShown: true }}
    />
  </ClubStack.Navigator>
);

const BookStack = createStackNavigator();
const BooksNavigator = () => (
  <BookStack.Navigator>
    <BookStack.Screen
      name="Books"
      component={Explore}
      options={{ headerShown: false }}
    />
    <BookStack.Screen
      name="Details"
      component={Details}
      options={{ headerShown: false }}
    />
  </BookStack.Navigator>
);

const Tab = createBottomTabNavigator();
const MainNavigator = () => {
  return (
    <Tab.Navigator barStyle={{ backgroundColor: "white" }}>
      <Tab.Screen
        options={{
          tabBarLabel: "Clubs",
          tabBarIcon: ({ color, focused }) => (
            <Club color={color} focused={focused} />
          ),
        }}
        name="Clubs"
        component={ClubsNavigator}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Explore",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="compass" color={color} size={26} />
          ),
        }}
        name="Explore"
        component={BooksNavigator}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="account-circle"
              color={color}
              size={26}
            />
          ),
        }}
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
};

export default MainNavigator;
