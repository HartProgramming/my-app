import { View, Text, Image } from "react-native";
import PhoneButton from "../../components/Inputs/PhoneButton";
import { StyleSheet, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import PhoneTextInput from "../../components/Inputs/PhoneTextInput";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import * as EmailValidator from "email-validator";
import logo from '../../images/logo/minhealthtrans.png';
import Navigation from "../../objects/NavigationType";
import SetMargin from "../../functions/SetMargin";
import Card from "../../components/Card/Card";

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
    /*
    if (passwordEqual && passwordTest && validateEmail) {
      transScreen("Details");
    } else {
      console.log("not true");
    }
    */
   transScreen('current-details')
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
      <Card scrollable={false} containerClass={styles.headerContainer}>
        <Image source={logo} />
      </Card>
      <Card scrollable={false} containerClass={styles.inputsContainer}>
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
      </Card>
      <View>
        <PhoneButton
        semiBold
          buttonClass={styles.buttonClass}
          buttonContainerClass={styles.buttonContainerClass}
          textClass={styles.buttonText}
          onPress={handleSignup}
          text="Sign Up"
        ></PhoneButton>
      </View>
      <Card scrollable={false} containerClass={styles.loginContainer}>
        <Text style={styles.loginClass}>
          Need to:
          <Text style={styles.loginText} onPress={Navigation({navigation}, "Log In")}>
            Login
          </Text>
          ?
        </Text>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1
  },
  headerContainer: {
    alignItems: "center",
    marginTop: SetMargin(.25)
  },
  header: {
    fontSize: 34,
    letterSpacing: 1.2,
  },
  inputsContainer: {
    marginTop: SetMargin(.05)
  },
  inputContainerClass: {
    alignItems: "center",
    padding: 5,
    width: '80%',
    alignSelf: 'center',
    marginTop: SetMargin(.01)
  },
  inputClass: {
    backgroundColor: "#e2e2e2",
    paddingLeft: 15,
    borderRadius: 35,
    justifyContent: "flex-start",
    flexDirection: "row",
    width: '80%',
    padding: 20
  },
  textClass: {
    fontSize: 18,
  },
  buttonContainerClass: {
    marginTop: SetMargin(.04),
    alignItems: "center",
    width: '43%',
    alignSelf: 'center'
  },
  buttonClass: {
    backgroundColor: "black",
    alignItems: "center",
    borderRadius: 45,
    justifyContent: "center",
    width: '100%',
    padding: 20
  },
  buttonText: {
    fontSize: 22,
    letterSpacing: 1.05,
    color: 'white'
  },
  loginText: {
    color: "#8c52ff",
  },
  loginClass: {
    color: "black",
    textAlign: "center",
  },
  icon: {
    marginTop: 22,
  },
  loginContainer: {

  }
});
