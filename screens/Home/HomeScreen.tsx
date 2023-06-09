import {
  View,
  Button,
  Text,
  StyleSheet,
  Platform,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Link } from "@react-navigation/native";
export default function HomeScreen() {
  const screenHeight = Dimensions.get("window").height;

  const navigation = useNavigation();

  const [data, setData] = useState(false);

  const transScreen = (route: string) => {
    navigation.navigate(route as never);
  };


  return (
    <View style={[styles.container, { height: screenHeight }]}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Daily</Text>
      </View>
      <View style={styles.containerButton}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => transScreen('Log In')} style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => transScreen('Sign Up')} style={styles.button}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>{data && <Text>Hello</Text>}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    margin: "auto",
    backgroundColor: "black",
  },
  headerContainer: {
    display: "flex",
    alignItems: "center",
    margin: "auto",
    border: "2px solid black",
    padding: 10,
    marginTop: 90,
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
  },
  button: {
    borderRadius: 10,
    padding: 14,
    margin: 10,
    backgroundColor: "green",
    width: 200,
  },
});
