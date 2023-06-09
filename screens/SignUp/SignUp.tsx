import { View, Text } from "react-native";
import PhoneButton from "../../components/Inputs/PhoneButton";
import { StyleSheet, Dimensions } from "react-native";
import React from "react";
import PhoneTextInput from "../../components/Inputs/PhoneTextInput";

export default function SignUp() {
  const screenHeight = Dimensions.get("window").height;

  const handleChange = () => {
    console.log("change");
  };

  const handleClick = () => {
    console.log('click')
  }

  return (
    <View style={[styles.container, { height: screenHeight }]}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Simplcise</Text>
      </View>
      <View>
        <PhoneTextInput
          placeholder="Email"
          inputClass={styles.inputClass}
          inputContainerClass={styles.inputContainerClass}
          textClass={styles.textClass}
          onChange={handleChange}
          secureTextEntry={false}
        ></PhoneTextInput>
        <PhoneTextInput
          placeholder="Password"
          inputClass={styles.inputClass}
          inputContainerClass={styles.inputContainerClass}
          textClass={styles.textClass}
          onChange={handleChange}
          secureTextEntry={true}
        ></PhoneTextInput>
        <PhoneTextInput
          placeholder="Confirm Password"
          inputClass={styles.inputClass}
          inputContainerClass={styles.inputContainerClass}
          textClass={styles.textClass}
          onChange={handleChange}
          secureTextEntry={true}
        ></PhoneTextInput>
      </View>
      <View>
        <PhoneButton buttonClass={styles.buttonClass} buttonContainerClass={styles.buttonContainerClass} textClass={styles.buttonText} onPress={handleClick} text="Sign Up"></PhoneButton>
      </View>
      <View>
        <Text style={styles.loginClass}>Need to <Text style={styles.loginText}>Login</Text>?</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "black",
  },
  headerContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  header:{
    color: 'green',
    fontSize: 34,
    fontWeight: 'bold',
    letterSpacing: 1.2
  },
  inputContainerClass: {
    display: "flex",
    alignItems: "center",
    padding: 10,
  },
  inputClass: {
    backgroundColor: "#e2e2e2",
    width: 225,
    height: 75,
    display: "flex",
    alignItems: "center",
    borderRadius: 14,
    justifyContent: "center",
  },
  textClass: {
    fontSize: 18,
  },
  buttonContainerClass: {
    display: 'flex',
    alignItems: 'center'
  },
  buttonClass: {
    backgroundColor: 'green',
    width: 150,
    display: 'flex',
    alignItems: 'center',
    height: 57,
    borderRadius: 15,
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 22,
    fontWeight: 'bold',
    letterSpacing: 1.2
  },
  loginText: {
    color: 'green',
    textAlign: 'center',
    fontSize: 16
  },
  loginClass: {
    color: 'white',
    textAlign: 'center'
  }

});
