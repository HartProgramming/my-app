import { View, Text, Button, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { useEffect, useRef, useState } from "react";
import { Image } from "react-native";
import PhoneTextInput from "../../components/Inputs/PhoneTextInput";
import Card from "../../components/Card/Card";
import PhoneButton from "../../components/Inputs/PhoneButton";
type handleLogin = (status: boolean) => void;

export default function LogIn({ handleLogin }: { handleLogin: handleLogin }) {
  const navigation = useNavigation();

  const logo = require("../../images/logo/minhealthtrans.png");

  interface HandleUser {
    name: string;
    key: number;
    secureText: boolean;
    keyboardType: string;
    value: string;
    ref: any;
  }

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [focus, setFocus] = useState<any>("");
  const [loginConfirm, setLoginConfirm] = useState<boolean>(false);
  const [hidePassword, setHidePasword] = useState<boolean>(true);
  const [hideShowText, setHideShowText] = useState<string>('Show');

  const emailRef = useRef("email");
  const passwordRef = useRef("password");

  const handleUserArray: HandleUser[] = [
    {
      name: "Email Address",
      key: 1,
      secureText: false,
      keyboardType: "email-address",
      value: email,
      ref: emailRef,
    },
    {
      name: "Password",
      key: 2,
      secureText: hidePassword,
      keyboardType: "default",
      value: password,
      ref: passwordRef,
    },
  ];

  const handleFocus = (event: any) => {
    console.log(event.current);
    setFocus(event.current);
  };

  const handleChange = (event: string) => {
    console.log(event);
    if (focus === "email") {
      setEmail(event);
    } else if (focus === "password") {
      setPassword(event);
    }
  };

  const transScreen = (route: string) => {
    navigation.navigate(route as never);
  };

  const togglePassword = (event: string) => {
    if(event === 'Show'){
      setHidePasword(false);
      setHideShowText('Hide');
    }else{
      setHidePasword(true);
      setHideShowText('Show');
    }
  };

  const setLogin = () => {
    console.log("hi");
    if (loginConfirm === true) {
      handleLogin(true);
    }
  };

  useEffect(() => {
    console.log(email);
    console.log(password);
    setLoginConfirm(true);
    if (email === "hart.edward91@gmail.com" && password === "blasters") {
      setLoginConfirm(true);
    }
  }, [email, password]);

  return (
    <Card scrollable={false} containerClass={styles.container}>
      <Card scrollable={false} containerClass={styles.headerContainer}>
        <Image source={logo}></Image>
      </Card>
      <Card scrollable={false} containerClass={styles.containerButton}>
        <PhoneTextInput
          ref={emailRef}
          onFocus={() => handleFocus(emailRef)}
          value={email}
          secureTextEntry={false}
          keyboardType={"email-address"}
          placeholder={"Email Address"}
          inputClass={styles.input}
          inputContainerClass={styles.buttonContainer}
          onChange={handleChange}
          textClass={styles.textInput}
        />
        <Card scrollable={false} containerClass={styles.passwordContainer}>
          <PhoneTextInput
            ref={passwordRef}
            onFocus={() => handleFocus(passwordRef)}
            value={password}
            secureTextEntry={hidePassword}
            keyboardType={"default"}
            placeholder={"Password"}
            inputClass={styles.input}
            inputContainerClass={styles.buttonContainer}
            onChange={handleChange}
            textClass={styles.textInput}
          />
          <PhoneButton
            onPress={() => togglePassword(hideShowText)}
            textClass={hidePassword ? styles.hideText : styles.showText}
            buttonContainerClass={styles.hideShowButtonContainer}
            buttonClass={hidePassword ? styles.hideButton : styles.showButton}
            text={hideShowText}
          />
        </Card>

        <View style={styles.loginContainer}>
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginText} onPress={setLogin}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.forgotContainer}>
          <Text>
            Forgot <Text style={styles.transText}>Password</Text> or{" "}
            <Text style={styles.transText}>Username</Text>?
          </Text>

          <Text>
            Need to{" "}
            <Text
              style={styles.transText}
              onPress={() => transScreen("Sign Up")}
            >
              Sign Up
            </Text>
            ?
          </Text>
        </View>
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
  passwordContainer: {
    flexDirection: "row",
    alignSelf: 'center',
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 2,
    width: '55%',
    alignItems: 'center'
  },
  hideShowButtonContainer: {
    alignItems: "center",
    height: 50,
    width: 88,
    borderRadius: 50,
    justifyContent: 'center',
    padding: 5
  },
  hideButton: {
    backgroundColor: "#8c52ff",
    color: 'white',
    width: '100%',
    height: 47,
    borderRadius: 45,
    alignItems: 'center',
    borderStyle: 'solid',
    borderColor: '#8c52ff',
    borderWidth: 3,
    justifyContent: 'center',
  },
  showButton: {
    backgroundColor: "white",
    color: 'purple',
    width: '100%',
    height: 47,
    borderRadius: 45,
    alignItems: 'center',
    borderStyle: 'solid',
    borderColor: '#8c52ff',
    borderWidth: 3,
    justifyContent: 'center',
  },
  hideText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  showText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#8c52ff",
    textAlignVertical: 'center'
  },
  loginContainer: {
    display: "flex",
    alignItems: "center",
  },
  loginButton: {
    backgroundColor: "#8c52ff",
    borderRadius: 10,
    padding: 14,
    margin: 10,
    width: 200,
  },
  signUpButton: {
    backgroundColor: "#8c52ff",
    padding: 10,
    borderRadius: 20,
  },
  loginText: {
    color: "white",
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
