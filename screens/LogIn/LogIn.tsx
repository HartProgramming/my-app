import { View, Text, Button, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import { Platform } from "react-native";
import HomeButtonComponent from "../Home/HomeButtonComponent";
export default function LogIn() {
  const screenHeight = Dimensions.get("window").height;

  const navigation = useNavigation();

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
          <TouchableOpacity style={styles.input}>
            <TextInput
              placeholder="Username"
              style={styles.textInput}
            ></TextInput>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.input}>
            <TextInput
              placeholder="Password"
              style={styles.textInput}
            ></TextInput>
          </TouchableOpacity>
        </View>
        <View style={styles.loginContainer}>
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginText} onPress={() => transScreen('Today')}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.forgotContainer}>
          <Text>
            Forgot <Text style={styles.transText}>Password</Text> or{" "}
            <Text style={styles.transText}>Username</Text>
          </Text>
          <Text>Need to <Text style={styles.transText} onPress={() => transScreen('Sign Up')}>Sign Up</Text>?</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    margin: "auto",
    backgroundColor: "green",
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
    marginTop: 300,
  },
  header: {
    fontWeight: "bold",
    fontSize: 32,
    color: "black",
  },
  buttonContainer: {
    display: "flex",
    margin: "auto",
    alignItems: "center",
  },
  textInput: {
    textAlign: "center",
    fontSize: 16,
  },
  input: {
    borderRadius: 30,
    padding: 14,
    margin: 10,
    backgroundColor: "#c3c3c3",
    width: 200,
  },
  loginContainer: {
    display: "flex",
    alignItems: "center",
  },
  loginButton: {
    backgroundColor: "black",
    borderRadius: 10,
    padding: 14,
    margin: 10,
    width: 200,
  },
  signUpButton: {
    backgroundColor: "black",
    padding: 10,
    borderRadius: 20,
  },
  loginText: {
    color: "green",
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    letterSpacing: 1.2,
  },
  signUpText: {
    color: "green",
  },
  forgotContainer: {
    display: "flex",
    alignItems: "center",
  },
  transText: {
    color: "blue",
  },
});
