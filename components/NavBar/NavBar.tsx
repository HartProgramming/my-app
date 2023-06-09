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

  const navigation = useNavigation();

  const transScreen = (route: any) => {
    navigation.navigate(route as never);
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const button = buttonArr.find(
            (button) => button.label === route.name
          );
          if (button && button.image) {
            return button.image();
          }else {
            return null
          }
        },
      })}
    >
      {buttonArr.map((value: any) => {
        return <Tab.Screen options={{ headerShown: false}} name={value.label} component={value.component} />;
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
