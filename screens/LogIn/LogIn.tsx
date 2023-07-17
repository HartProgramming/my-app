import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { useEffect, useRef, useState } from "react";
import { Image } from "react-native";
import Card from "../../components/Card/Card";
import PhoneButton from "../../components/Inputs/PhoneButton";
import LoginInput from "./Components/LoginInput";
import Navigation from "../../objects/NavigationType";
import MainButton from "../Home/HomeButtonComponent";
import SetMargin from "../../functions/SetMargin";

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

  const [user, setUser] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [focus, setFocus] = useState<any>("");
  const [loginConfirm, setLoginConfirm] = useState<boolean>(false);
  const [hidePassword, setHidePasword] = useState<boolean>(true);
  const [hideShowText, setHideShowText] = useState<string>("Show");

  const emailRef = useRef("email");
  const passwordRef = useRef("password");

  const handleUserArray: HandleUser[] = [
    {
      name: "Email Address",
      key: 1,
      secureText: false,
      keyboardType: "email-address",
      value: user,
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

  const togglePassword = (event: string) => {
    if (event === "Show") {
      setHidePasword(false);
      setHideShowText("Hide");
    } else {
      setHidePasword(true);
      setHideShowText("Show");
    }
  };

  const setLogin = () => {
    console.log("hi");
    if (loginConfirm === true) {
      handleLogin(true);
    }
  };

  useEffect(() => {
    console.log(user);
    console.log(password);
    setLoginConfirm(true);
    if (user === "hart.edward91@gmail.com" && password === "blasters") {
      setLoginConfirm(true);
    }
  }, [user, password]);

  return (
    <Card scrollable={false} containerClass={styles.container}>
      <Card scrollable={false} containerClass={styles.headerContainer}>
        <Image source={logo}></Image>
      </Card>
      <Card scrollable={false} containerClass={styles.containerButton}>
        <Card scrollable={false} containerClass={styles.buttonsContainer}>
          <LoginInput
            keyboardType="email-address"
            value={setUser}
            secureEntry={false}
            placeholder="Email/Username"
          />
        </Card>

        <Card scrollable={false} containerClass={styles.buttonsContainer}>
          <LoginInput
            keyboardType="default"
            value={setPassword}
            secureEntry={hidePassword}
            placeholder="Password"
          />
          <PhoneButton
            onPress={() => togglePassword(hideShowText)}
            textClass={hidePassword ? styles.hideText : styles.showText}
            buttonContainerClass={styles.hideShowButtonContainer}
            buttonClass={hidePassword ? styles.hideButton : styles.showButton}
            text={""}
          />
        </Card>
        <Card scrollable={false} containerClass={styles.loginButtonContainer}>
          <MainButton label="Login" onPress={setLogin} />
        </Card>

        <Card scrollable={false} containerClass={styles.forgotContainer}>
          <Text>
            Forgot <Text style={styles.transText}>Password</Text> or{" "}
            <Text style={styles.transText}>Username</Text>?
          </Text>

          <Text>
            Need to{" "}
            <Text
              style={styles.transText}
              onPress={Navigation({ navigation }, "Sign Up")}
            >
              Sign Up
            </Text>
            ?
          </Text>
        </Card>
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
    marginTop: SetMargin(0.35),
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "center",
  },
  header: {
    fontWeight: "bold",
    fontSize: 32,
    color: "black",
  },
 
  loginButton: {},
  loginButtonText: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    letterSpacing: 1.15,
    color: "white",
  },
  buttonContainer: {
    alignItems: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    width: "70%",
  },
  hideShowButtonContainer: {
    alignItems: "center",
    width: "2%",
    height: "2%",
    justifyContent: "center",
  },
  hideButton: {
    backgroundColor: "#8c52ff",
    color: "white",
    borderRadius: 50,
    alignItems: "center",
    borderStyle: "solid",
    borderColor: "#8c52ff",
    borderWidth: 3,
    justifyContent: "center",
    padding: 25,
    marginRight: SetMargin(-0.1),
  },
  showButton: {
    backgroundColor: "white",
    color: "purple",
    borderRadius: 50,
    alignItems: "center",
    borderStyle: "solid",
    borderColor: "#8c52ff",
    borderWidth: 3,
    justifyContent: "center",
    padding: 25,
    marginRight: SetMargin(-0.1),
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
    textAlignVertical: "center",
  },
  loginContainer: {
    display: "flex",
    alignItems: "center",
  },

  signUpButton: {
    backgroundColor: "#8c52ff",
    padding: 10,
    borderRadius: 20,
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
