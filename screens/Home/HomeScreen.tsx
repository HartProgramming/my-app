import { View, Text, StyleSheet, Dimensions } from "react-native";
import Card from "../../components/Card/Card";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Image } from "react-native";
import MainButton from "./HomeButtonComponent";
import Navigation from "../../objects/NavigationType";
import SetMargin from "../../functions/SetMargin";

export default function HomeScreen() {
  const logo = require("../../images/logo/minhealthtrans.png");

  const navigation = useNavigation();
  return (
    <Card scrollable={false} containerClass={styles.container}>
      <Card scrollable={false} containerClass={styles.headerContainer}>
        <Image source={logo}></Image>
      </Card>

      <Card scrollable={false} containerClass={styles.containerButton}>
        <MainButton
          onPress={Navigation({ navigation }, "Sign Up")}
          label="Get Started"
        />
        <MainButton
          onPress={Navigation({ navigation }, "Log In")}
          label="Login"
        />
      </Card>
    </Card> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  headerContainer: {
    alignItems: "center",
    marginTop: SetMargin(.12)
  },
  containerButton: {
    marginTop: SetMargin(0.5),
    flexDirection: "column",
  },
  header: {
    fontWeight: "bold",
    fontSize: 32,
    color: "green",
  },
});
