import React from "react";
import Details from "../screens/Details";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Profile from "../screens/Profile";
import MyClubs from "../screens/MyClubs";
import Explore from "../screens/Explore";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import JoinClub from "../screens/JoinClub";
import CreateClub from "../screens/CreateClub";
import Club from "../components/icons/Club";
import ClubDetail from "../screens/ClubDetail";
import ClubOptions from "../screens/ClubOptions";
import ClubInvite from "../screens/ClubInvite";

const ClubStack = createStackNavigator();
const ClubsNavigator = () => (
  <ClubStack.Navigator
    screenOptions={{
      headerBackTitleVisible: true,
      headerTintColor: "indigo",
      headerTitleStyle: { display: "none" },
    }}
  >
    <ClubStack.Screen
      name="Home"
      component={MyClubs}
      options={{ headerShown: false }}
    />
    <ClubStack.Screen name="JoinClub" component={JoinClub} />
    <ClubStack.Screen name="CreateClub" component={CreateClub} />
    <ClubStack.Screen name="ClubDetail" component={ClubDetail} />
    <ClubStack.Screen
      name="ClubOptions"
      component={ClubOptions}
      options={{
        headerBackTitle: "Club detail",
      }}
    />
    <ClubStack.Screen
      name="ClubInvite"
      component={ClubInvite}
      options={{
        headerBackTitle: "Settings",
      }}
    />
  </ClubStack.Navigator>
);

const BookStack = createStackNavigator();
const BooksNavigator = () => (
  <BookStack.Navigator
    screenOptions={{
      headerBackTitleVisible: true,
      headerTintColor: "indigo",
      headerTitleStyle: { display: "none" },
    }}
  >
    <BookStack.Screen
      name="Books"
      component={Explore}
      options={{ headerShown: false }}
    />
    <BookStack.Screen name="Details" component={Details} />
  </BookStack.Navigator>
);

const Tab = createBottomTabNavigator();
const MainNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#6C63FF",
        style: {
          borderTopColor: "transparent",
          height: 60,
        },
      }}
      barStyle={{ backgroundColor: "white" }}
    >
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
