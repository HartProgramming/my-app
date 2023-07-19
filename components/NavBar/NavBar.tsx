import React from "react";
import PhoneButton from "../Inputs/PhoneButton";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

interface NavBarButtonArray {
  label: string;
  component: any;
  image: any;
}

export default function NavBar({
  buttonArr,
}: {
  buttonArr: NavBarButtonArray[];
}) {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
    tabBarOptions={{
      labelStyle: {
        fontSize: 12,
        letterSpacing: 1.02
      } 
    }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const button = buttonArr.find(
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
      {buttonArr.map((value: any) => {
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
