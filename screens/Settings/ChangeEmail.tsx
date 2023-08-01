import Card from "../../components/Card/Card";
import { StyleSheet } from "react-native";
import PhoneButton from "../../components/Inputs/PhoneButton";
import { useEffect, useRef, useState } from "react";
import PhoneTextInput from "../../components/Inputs/PhoneTextInput";
import * as EmailValidator from "email-validator";
import { useNavigation } from "@react-navigation/native";
import Navigation from "../../objects/NavigationType";
import { MaterialIcons, Entypo, AntDesign } from "@expo/vector-icons";
import SetMargin from "../../functions/SetMargin";
import CardText from "../../components/Card/CardText";
import { userAgent } from "next/server";

export default function ChangeEmail() {
  type emailWarningCheck =
    | "New === Current"
    | "Confirm === Current"
    | "New !== Confirm"
    | "!New"
    | "!Current"
    | "!Confirm";

  interface emailWarning {
    emailWarningType: emailWarningCheck;
    warning: string;
  }

  const emailWarningArray: emailWarning[] = [
    {
      emailWarningType: "New !== Confirm",
      warning: "Your New Email does not match your Confirm Email",
    },
    {
      emailWarningType: "New === Current",
      warning: "Your New Email matches your Current Email",
    },
    { emailWarningType: "!New", warning: "New Email is not in email format" },
    {
      emailWarningType: "Confirm === Current",
      warning: "Your Confirmation Email matches your Current Email",
    },
    {
      emailWarningType: "!Confirm",
      warning: "Confirm Email is not in email format",
    },
    {
      emailWarningType: "!Current",
      warning: "Current Email is not in email format",
    },
  ];

  const [showEmail, setShowEmail] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [currentEmail, setCurrentEmail] = useState<string>("");
  const [currentPassword, setCurrentPassword] = useState<string>("");
  const [confirmNewEmail, setConfirmNewEmail] = useState<string>("");
  const [newEmail, setNewEmail] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmNewPassword, setConfirmNewPassword] = useState<string>("");
  const [focus, setFocus] = useState<string>("");
  const [sendButton, setSendButton] = useState<boolean>(false);
  const [sendVerify, setSendVerify] = useState<boolean>(false);
  const [verified, setVerified] = useState<boolean>(false);
  const [emailWarning, setEmailWarning] = useState<boolean>(false);
  const [emailWarningType, setEmailWarningType] =
    useState<emailWarningCheck>("New === Current");

  const currentEmailRef = useRef("current-email");
  const currentPasswordRef = useRef("current-password");
  const newEmailRef = useRef("new-email");
  const newPasswordRef = useRef("new-password");
  const confirmNewPasswordRef = useRef("confirm-new-password");
  const confirmEmailRef = useRef("confirm-new-email");

  const navigation = useNavigation();

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
    } else if (focus === "confirm-new-email") {
      setConfirmNewEmail(event);
    }
  };

  const handleChangeEmail = () => {
    if (
      currentEmail !== newEmail &&
      newEmail === confirmNewEmail &&
      EmailValidator.validate(newEmail) &&
      EmailValidator.validate(currentEmail) 
    ) {
      setSendButton(true);
      setEmailWarning(false);
    } else if (currentEmail === newEmail) {
      setEmailWarning(true);
      setEmailWarningType("New === Current");
    } else if (confirmNewEmail !== newEmail) {
      setEmailWarning(true);
      setEmailWarningType("New !== Confirm");
    } else if (confirmNewEmail === currentEmail) {
      setEmailWarning(true);
      setEmailWarningType("Confirm === Current");
    } else if (!EmailValidator.validate(currentEmail)) {
      setEmailWarning(true);
      setEmailWarningType("!Current");
    } else if (!EmailValidator.validate(newEmail)) {
      setEmailWarning(true);
      setEmailWarningType("!New");
    } else if (!EmailValidator.validate(confirmNewEmail)) {
      setEmailWarning(true);
      setEmailWarningType("!Confirm");
    }
  };

  const handleSend = () => {
    if (sendButton === true) {
      setSendVerify(false);
    } else {
      setSendVerify(true);
    }
  };

  const handleVerification = () => {
    /* Send Verification to Email / Phone Number */
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
    {
      placeholder: "Confirm New Email",
      text: confirmNewEmail,
      ref: confirmEmailRef,
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
    console.log(sendButton);

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
    confirmNewPassword,
    sendButton,
  ]);

  return (
    <Card scrollable={false} containerClass={styles.container}>
      <Card scrollable={false} containerClass={styles.changeDetailsContainer}>
        <Card scrollable={false} containerClass={styles.backContainer}>
          <PhoneButton
            image={
              <MaterialIcons
                name="keyboard-arrow-left"
                size={48}
                color="black"
              />
            }
            onPress={Navigation({ navigation }, "main-settings")}
            text=""
            buttonClass={styles.backButton}
            buttonContainerClass={styles.backButtonContainer}
            textClass={styles.backButtonText}
          />
        </Card>
        <Card scrollable={false} containerClass={styles.changeEmailContainer}>
          <CardText
            semiBold
            text="Change Email"
            container={styles.changeEmailHeaderContainer}
            textStyle={styles.changeEmailHeader}
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
          <Card
            scrollable={false}
            containerClass={styles.changeEmailButtonContainer}
          >
            {!sendButton &&
            <PhoneButton
              semiBold
              text="Change"
              textClass={styles.changeButtonText}
              buttonClass={styles.changeButton}
              buttonContainerClass={styles.changeButtonContainer}
              onPress={handleChangeEmail}
            />
}
          </Card>
          <>
            {sendButton && (
                <PhoneButton
                  text="Send Verification"
                  textClass={styles.sendButtonText}
                  buttonClass={styles.sendButton}
                  buttonContainerClass={styles.sendButtonContainer}
                  onPress={handleVerification}
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
      {emailWarning &&
        emailWarningArray.map(
          (value) => emailWarningType === value.emailWarningType
        ) &&
        emailWarningArray.map((item) => {
          return (
            <Card
              scrollable={false}
              containerClass={styles.emailWarningContainer}
            >
              <Entypo name="warning" size={24} color={"orange"} />
              <CardText
                container={styles.emailWarningTextContainer}
                textStyle={styles.emailWarningText}
                text={item.warning}
              />
              <AntDesign name="closecircle" size={24} color={"black"} />
            </Card>
          );
        })}
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  backContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: SetMargin(-0.25),
  },
  backButton: {
    flexDirection: "row",
    padding: 15,
  },
  backButtonContainer: {
    width: "90%",
    padding: 5,
  },
  backButtonText: {
    fontSize: 24,
    fontWeight: "bold",
    letterSpacing: 1.15,
    alignSelf: "center",
  },
  changeDetailsContainer: {
    width: "100%",
    alignSelf: "center",
    justifyContent: "center",
    flex: 1,
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 2,
  },
  changeEmailContainer: {
    width: "100%",
    alignItems: "center",
    marginTop: SetMargin(0.05),
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 2,
  },
  changeEmailHeaderContainer: {
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 2,
  },
  changeEmailHeader: {
    fontSize: 24,
    letterSpacing: 0.8,
  },
  changePasswordContainer: {
    width: "100%",
    alignItems: "center",
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
  changeEmailButtonContainer: {
    width: "100%",
  },
  changeButton: {
    alignItems: "center",
    padding: 10,
    width: "100%",
  },
  changeButtonText: {
    fontSize: 26,
    color: "white",
    letterSpacing: 0.8,
  },
  changeButtonContainer: {
    width: "50%",
    backgroundColor: "black",
    alignSelf: "center",
    borderRadius: 25,
  },
  sendButtonContainer: {

  },
  sendButton: {

  },
  sendButtonText: {

  },
  buttonContainer: {},
  button: {},
  buttonText: {},
  emailWarningContainer: {},
  emailWarningTextContainer: {},
  emailWarningText: {},
});
