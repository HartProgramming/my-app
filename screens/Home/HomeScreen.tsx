import {
  View,
  Button,
  Text,
  StyleSheet,
  Platform,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Card from "../../components/Card/Card";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Link } from "@react-navigation/native";
import PhoneButton from "../../components/Inputs/PhoneButton";
import { Image } from "react-native";

export default function HomeScreen() {
  const screenHeight = Dimensions.get("window").height;

  const logo = require("../../images/logo/minhealthtrans.png");

  const navigation = useNavigation();

  const [data, setData] = useState(false);

  const transScreen = (route: string) => {
    navigation.navigate(route as never);
  };

  return (
    <Card scrollable={false} containerClass={styles.container}>
      <Card scrollable={true} containerClass={styles.scrollcontainer}>
        <Card scrollable={false} containerClass={styles.headerContainer}>
          <Image source={logo}></Image>
        </Card>

        <Card scrollable={false} containerClass={styles.containerButton}>
          <PhoneButton
            onPress={() => transScreen("Log In")}
            textClass={styles.buttonText}
            text="Login"
            buttonClass={styles.button}
            buttonContainerClass={styles.buttonContainer}
          />
          <PhoneButton
            onPress={() => transScreen("Sign Up")}
            text="Sign Up"
            textClass={styles.buttonText}
            buttonClass={styles.button}
            buttonContainerClass={styles.buttonContainer}
          />
        </Card>
        <View>{data && <Text>Hello</Text>}</View>
      </Card>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  scrollcontainer: {
    padding: 16,
    marginTop: 80
  },
  headerContainer: {
    alignItems: "center",
  },
  containerButton: {
    marginTop: 400,
  },
  header: {
    fontWeight: "bold",
    fontSize: 32,
    color: "green",
  },
  buttonContainer: {
    display: "flex",
    margin: "auto",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 1.1
  },
  button: {
    borderRadius: 10,
    padding: 14,
    margin: 10,
    backgroundColor: "#8c52ff",
    width: 200,
  },
});
