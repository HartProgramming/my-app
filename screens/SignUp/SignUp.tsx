import { View, Text } from "react-native";
import PhoneButton from "../../components/Inputs/PhoneButton";
import { StyleSheet, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import PhoneTextInput from "../../components/Inputs/PhoneTextInput";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import * as EmailValidator from "email-validator";

export default function SignUp() {
  interface Data {
    email: any;
    password: any;
    confirmPassword: any;
  }

  const [data, setData] = useState<object>();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [passwordEqual, setPasswordEqual] = useState<boolean>(false);
  const [passwordTest, setPasswordTest] = useState<boolean>(false);
  const [validateEmail, setValidateEmail] = useState<boolean>();
  const [snackBar, setSnackBar] = useState<boolean>(false);
  const [snackBarText, setSnackBarText] = useState<string>("");

  const screenHeight = Dimensions.get("window").height;

  const navigation = useNavigation();

  const transScreen = (route: string) => {
    navigation.navigate(route as never);
  };

  const handleSignup = () => {
    if (passwordEqual && passwordTest && validateEmail) {
      transScreen("Details");
    } else {
      console.log("not true");
    }
  };

  const handleEmail = (text: string) => {
    setEmail(text);
    const detailedData: Data = {
      email: text,
      password: password,
      confirmPassword: confirmPassword,
    };
    setData(detailedData)
    console.log(text);
  };

  const handlePassword = (text: string) => {
    setPassword(text);
    const detailedData: Data = {
      email: email,
      password: text,
      confirmPassword: confirmPassword,
    };
    setData(detailedData)
    console.log(password)
  };

  const handleConfirm = (text: string) => {
    setConfirmPassword(text);
    const detailedData: Data = {
      email: email,
      password: password,
      confirmPassword: text,
    };
    setData(detailedData)
    console.log(text);
  };

  function passwordTestStandards(specialPassword: string) {
    const hasNumeric = /\d/.test(specialPassword);
    const hasAlphabeticalLower = /[a-z]/.test(specialPassword);
    const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(specialPassword);
    const hasAlphabeticalHigher = /[A-Z]/.test(specialPassword);

    const passwordConfirmed =
      hasAlphabeticalLower &&
      hasAlphabeticalHigher &&
      hasSpecialChars &&
      hasNumeric &&
      specialPassword.length >= 8;

    if (passwordConfirmed) {
      setSnackBarText("Password meets standards");
      setSnackBar(true);
      return true;
    } else if (specialPassword.length < 8) {
      setSnackBarText("Password requires at least 8 characters");
      setSnackBar(true);
      return false;
    } else if (
      hasAlphabeticalLower &&
      hasAlphabeticalHigher &&
      hasNumeric &&
      hasSpecialChars === false
    ) {
      setSnackBarText('Password requires a special character "Ex: &$%@..." ');
      setSnackBar(true);
      return false;
    } else if (
      hasAlphabeticalLower &&
      hasAlphabeticalHigher &&
      hasSpecialChars &&
      hasNumeric !== true
    ) {
      setSnackBarText("Password requires a number");
      setSnackBar(true);
      return false;
    } else if (
      hasAlphabeticalHigher &&
      hasSpecialChars &&
      hasNumeric &&
      hasAlphabeticalLower !== true
    ) {
      setSnackBarText("Password requires a lowercase alphabetical");
      setSnackBar(true);
      return false;
    } else if (
      hasAlphabeticalLower &&
      hasSpecialChars &&
      hasNumeric &&
      hasAlphabeticalHigher !== true
    ) {
      setSnackBarText("Password requires an uppercase alphabetical");
      setSnackBar(true);
      return false;
    }
  }

  useEffect(() => {
    
    console.log(confirmPassword)
    if (password === confirmPassword && password !== "" && passwordTestStandards(password)) {
      setPasswordEqual(true);
      setPasswordTest(true);
    } else if(password !== confirmPassword){
      setPasswordEqual(false);
      setPasswordTest(true);
    }

    if (EmailValidator.validate(email)) {
      setValidateEmail(true);
    } else {
      setValidateEmail(false);
    }

    console.log(data);
  }, [email, password, confirmPassword]);

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
          onChange={handleEmail}
          secureTextEntry={false}
          value={email}
          keyboardType="email-address"
          children={
            validateEmail && (
              <Ionicons
                style={styles.icon}
                name="md-checkmark-circle"
                size={32}
                color="green"
              />
            )
          }
        ></PhoneTextInput>
        <PhoneTextInput
          placeholder="Password"
          inputClass={styles.inputClass}
          inputContainerClass={styles.inputContainerClass}
          textClass={styles.textClass}
          onChange={handlePassword}
          secureTextEntry={true}
          value={password}
          keyboardType="default"
          children={null}
        ></PhoneTextInput>
        <PhoneTextInput
          placeholder="Confirm Password"
          inputClass={styles.inputClass}
          inputContainerClass={styles.inputContainerClass}
          textClass={styles.textClass}
          onChange={handleConfirm}
          secureTextEntry={true}
          value={confirmPassword}
          keyboardType="default"
          children={
            passwordEqual && (
              <Ionicons
                style={styles.icon}
                name="md-checkmark-circle"
                size={32}
                color="green"
              />
            )
          }
        ></PhoneTextInput>
      </View>
      <View>
        <PhoneButton
          buttonClass={styles.buttonClass}
          buttonContainerClass={styles.buttonContainerClass}
          textClass={styles.buttonText}
          onPress={handleSignup}
          text="Sign Up"
        ></PhoneButton>
      </View>
      <View>
        <Text style={styles.loginClass}>
          Need to{" "}
          <Text style={styles.loginText} onPress={() => transScreen("Log In")}>
            Login
          </Text>
          ?
        </Text>
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
    display: "flex",
    alignItems: "center",
  },
  header: {
    color: "green",
    fontSize: 34,
    fontWeight: "bold",
    letterSpacing: 1.2,
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
    paddingLeft: 15,
    borderRadius: 14,
    justifyContent: "flex-start",
    flexDirection: "row",
  },
  textClass: {
    fontSize: 18,
  },
  buttonContainerClass: {
    display: "flex",
    alignItems: "center",
  },
  buttonClass: {
    backgroundColor: "green",
    width: 150,
    display: "flex",
    alignItems: "center",
    height: 57,
    borderRadius: 15,
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 22,
    fontWeight: "bold",
    letterSpacing: 1.2,
  },
  loginText: {
    color: "green",
    textAlign: "center",
    fontSize: 16,
  },
  loginClass: {
    color: "white",
    textAlign: "center",
  },
  icon: {
    marginTop: 22,
  },
});
