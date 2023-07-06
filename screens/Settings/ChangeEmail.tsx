import Card from "../../components/Card/Card";
import { StyleSheet } from "react-native";
import PhoneButton from "../../components/Inputs/PhoneButton";
import { useEffect, useRef, useState } from "react";
import PhoneTextInput from "../../components/Inputs/PhoneTextInput";
import * as EmailValidator from "email-validator";
import { useNavigation } from "@react-navigation/native";

export default function ChangeEmail() {
  const [showEmail, setShowEmail] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [currentEmail, setCurrentEmail] = useState<string>("");
  const [currentPassword, setCurrentPassword] = useState<string>("");
  const [newEmail, setNewEmail] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmNewPassword, setConfirmNewPassword] = useState<string>("");
  const [focus, setFocus] = useState<string>("");
  const [sendButton, setSendButton] = useState<boolean>(false);
  const [sendVerify, setSendVerify] = useState<boolean>(false);
  const [verified, setVerified] = useState<boolean>(false);

  const currentEmailRef = useRef("current-email");
  const currentPasswordRef = useRef("current-password");
  const newEmailRef = useRef("new-email");
  const newPasswordRef = useRef("new-password");
  const confirmNewPasswordRef = useRef("confirm-new-password");

  const navigation = useNavigation();

  const transScreen = (event: string) => {
    navigation.navigate(event as never);
  };

  interface ChangeDetails {
    placeholder: string;
    text: string;
    ref: any;
    secureTextEntry: boolean;
    keyboardType: string;
  }

  const handleFocus = (event: any) => {
    if (event.current === "current-email") {
      setFocus(event.current);
    } else if (event.current === "current-password") {
      setFocus(event.current);
    } else if (event.current === "new-email") {
      setFocus(event.current);
    } else if (event.current === "new-password") {
      setFocus(event.current);
    } else if (event.current === "confirm-new-password") {
      setFocus(event.current);
    }
  };

  const handleChange = (event: string) => {
    if (focus === "current-email") {
      setCurrentEmail(event);
    } else if (focus === "current-password") {
      setCurrentPassword(event);
    } else if (focus === "new-email") {
      setNewEmail(event);
    } else if (focus === "new-password") {
      setNewPassword(event);
    } else if (focus === "confirm-new-password") {
      setConfirmNewPassword(event);
    }
  };

  const handleEmail = () => {
    if (showEmail === false) {
      setShowEmail(true);
    } else {
      setShowEmail(false);
    }
  };

  const handleSend = () => {
    if (sendVerify === true) {
      setSendVerify(false);
    } else {
      setSendVerify(true);
    }
  };

  const handleVerification = () => {
    if (verified === true) {
      setVerified(false);
    } else {
      setVerified(true);
    }
  };

  const handlePassword = () => {
    if (showPassword === false) {
      setShowPassword(true);
    } else {
      setShowPassword(false);
    }
  };

  const changeEmailArr: ChangeDetails[] = [
    {
      placeholder: "Current Email",
      text: currentEmail,
      ref: currentEmailRef,

      secureTextEntry: false,
      keyboardType: "email-address",
    },
    {
      placeholder: "New Email",
      text: newEmail,
      ref: newEmailRef,

      secureTextEntry: false,
      keyboardType: "email-address",
    },
  ];

  const changePasswordArr: ChangeDetails[] = [
    {
      placeholder: "Current Password",
      text: currentPassword,
      ref: useRef("current-password"),

      secureTextEntry: false,
      keyboardType: "default",
    },
    {
      placeholder: "New Password",
      text: newPassword,
      ref: newPasswordRef,

      secureTextEntry: false,
      keyboardType: "default",
    },
    {
      placeholder: "Confirm New Password",
      text: confirmNewPassword,
      ref: confirmNewPasswordRef,

      secureTextEntry: false,
      keyboardType: "default",
    },
  ];

  useEffect(() => {
    console.log(sendButton)
   
    console.log(focus);
    console.log(currentPassword);
    console.log(newPassword);
    console.log(confirmNewPassword);
    if (currentPassword === "backend" && newPassword === confirmNewPassword) {
      setSendButton(true);
    }
  }, [
    newEmail,
    currentEmail,
    currentPassword,
    newPassword,
    confirmNewPassword,sendButton
  ]);

  return (
    <Card scrollable={false} containerClass={styles.container}>
      <Card scrollable={false} containerClass={styles.changeDetailsContainer}>
        <Card scrollable={false} containerClass={styles.changeEmailContainer}>
          <PhoneButton
            onPress={() => transScreen("Settings")}
            text="Go Back"
            textClass={styles.buttonText}
            buttonClass={styles.button}
            buttonContainerClass={styles.buttonContainer}
          />
          <PhoneButton
            onPress={handleEmail}
            textClass={styles.buttonText}
            buttonClass={styles.button}
            buttonContainerClass={styles.buttonContainer}
            text="Change Email"
          />
          {changeEmailArr.map((value) => {
            return (
              <PhoneTextInput
                textClass={styles.inputText}
                inputClass={styles.input}
                inputContainerClass={styles.inputContainer}
                placeholder={value.placeholder}
                secureTextEntry={value.secureTextEntry}
                keyboardType={"email-address"}
                value={value.text}
                ref={value.ref}
                onChange={handleChange}
                onFocus={() => handleFocus(value.ref)}
              />
            );
          })}
          <>
            {sendButton &&
              EmailValidator.validate(newEmail) &&
              EmailValidator.validate(currentEmail) && (
                <PhoneButton
                  text="Send"
                  textClass={styles.sendText}
                  buttonClass={styles.sendButton}
                  buttonContainerClass={styles.sendButtonContainer}
                  onPress={() => handleSend}
                />
              )}
          </>
          <>
            {sendVerify &&
              EmailValidator.validate(newEmail) &&
              EmailValidator.validate(currentEmail) && (
                <PhoneButton
                  text="Verify"
                  textClass={styles.sendText}
                  buttonClass={styles.sendButton}
                  buttonContainerClass={styles.sendButtonContainer}
                  onPress={() => handleVerification}
                />
              )}
          </>
        </Card>
        <Card
          scrollable={false}
          containerClass={styles.changePasswordContainer}
        >
          <PhoneButton
            onPress={handlePassword}
            text="Change Password"
            buttonClass={styles.button}
            buttonContainerClass={styles.buttonContainer}
            textClass={styles.buttonText}
          />
          {changePasswordArr.map((value) => {
            return (
              <PhoneTextInput
                textClass={styles.inputText}
                inputClass={styles.input}
                inputContainerClass={styles.inputContainer}
                placeholder={value.placeholder}
                secureTextEntry={value.secureTextEntry}
                keyboardType={"default"}
                value={
                  value.ref === "current-password"
                    ? currentPassword
                    : value.ref === "new-password"
                    ? newPassword
                    : value.ref === "confirm-new-password"
                    ? confirmNewPassword
                    : null
                }
                ref={value.ref}
                onChange={handleChange}
                onFocus={() => handleFocus(value.ref)}
              />
            );
          })}
          <>
            {sendButton &&
              currentPassword === "backend" &&
              newPassword === confirmNewPassword && (
                <PhoneButton
                  text="Send"
                  textClass={styles.sendText}
                  buttonClass={styles.sendButton}
                  buttonContainerClass={styles.sendButtonContainer}
                  onPress={() => handleSend}
                />
              )}
          </>
          <>
            {sendVerify &&
              currentPassword === "backend" &&
              newPassword === confirmNewPassword && (
                <PhoneButton
                  text="Verify"
                  textClass={styles.sendText}
                  buttonClass={styles.sendButton}
                  buttonContainerClass={styles.sendButtonContainer}
                  onPress={() => handleVerification}
                />
              )}
          </>
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
  changeDetailsContainer: {
    width: "100%",
    alignSelf: "center",
    justifyContent: "center",
    flex: 1,
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 2,
    marginTop: -90,
  },
  changeEmailContainer: {
    width: "100%",
    alignItems: "center",
  },
  changePasswordContainer: {
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 24,
    fontWeight: "bold",
    letterSpacing: 1.15,
    color: "#8c52ff",
    alignSelf: "center",
  },
  button: {
    borderRadius: 10,
    borderColor: "#8c52ff",
    borderWidth: 2,
    borderStyle: "solid",
    padding: 10,
  },
  buttonContainer: {
    width: "85%",
  },
  inputText: {
    fontSize: 18,
  },
  input: {
    backgroundColor: "#f2f2f2",
    padding: 10,
    borderRadius: 15,
    borderStyle: "solid",
    borderColor: "gray",
    borderWidth: 1,
  },
  inputContainer: {
    width: "65%",
    margin: 10,
  },
  sendButton: {
    flex: 1,
  },
  sendText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  sendButtonContainer: {
    width: "50%",
  },
});
