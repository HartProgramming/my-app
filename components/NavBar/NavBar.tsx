import React from "react";
import PhoneButton from "../Inputs/PhoneButton";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import TodayScreen from "../../screens/Activity/Screens/MainActivity";
import RegimenNavigation from "../../screens/Journal/Navigation/RegimenNavigation";
import MainProgram from "../../screens/Program/Screens/MainProgram";
import Settings from "../../screens/Settings/Settings";
import { NavBarInterface } from "../../App";

export default function NavBar() {
  const navBarArray: NavBarInterface[] = [
    {
      label: "Activity",
      component: TodayScreen,
      image: () => <FontAwesome5 name="running" size={24} color={"#8c52ff"} />,
      backgroundColor: "",
      fontColor: "",
      borderColor: "",
      route: "activity",
    },
    {
      label: "Journal",
      component: RegimenNavigation,
      image: () => <Ionicons name="journal" size={24} color={"#8c52ff"} />,
      backgroundColor: "#191919",
      fontColor: "",
      borderColor: "",
      route: "journal",
    },
    {
      label: "Program",
      component: MainProgram,
      image: () => <FontAwesome5 name="history" size={24} color={"#8c52ff"} />,
      backgroundColor: "",
      fontColor: "",
      borderColor: "",
      route: "program",
    },
    {
      label: "Profile",
      component: Settings,
      image: () => <Ionicons name="person" size={24} color={"#8c52ff"} />,
      backgroundColor: "",
      fontColor: "",
      borderColor: "",
      route: "profile",
    },
  ];
  const Tab = createBottomTabNavigator<any>();

  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: {
          fontSize: 12,
          letterSpacing: 1.02,
        },
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const button = navBarArray.find(
            (button) => button.label === route.name
          );
          if (button && button.image) {
            return button.image();
          } else {
            return null;
          }
        },
      })}
    >
      {navBarArray.map((value: any) => {
        return (
          <Tab.Screen
            options={{ headerShown: false }}
            initialParams={{
              backgroundColor: value.backgroundColor,
              fontColor: value.fontColor,
              borderColor: value.borderColor,
            }}
            name={value.label}
            component={value.component}
          />
        );
      })}
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 75,
    backgroundColor: "green",
  },
  buttonClass: {
    display: "flex",
  },
  buttonContainerClass: {
    display: "flex",
  },
  textClass: {
    fontSize: 18,
  },
});
