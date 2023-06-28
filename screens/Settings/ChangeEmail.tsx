import Card from "../../components/Card/Card";
import { StyleSheet } from "react-native";
import PhoneButton from "../../components/Inputs/PhoneButton";
import { useEffect, useRef, useState } from "react";
import PhoneTextInput from "../../components/Inputs/PhoneTextInput";
import * as EmailValidator from "email-validator";

export default function ChangeEmail() {
  const [showEmail, setShowEmail] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [currentEmail, setCurrentEmail] = useState<string>("");
  const [currentPassword, setCurrentPassword] = useState<string>("");
  const [newEmail, setNewEmail] = useState<string>("");
  const [focus, setFocus] = useState<string>("");
  const [sendButton, setSendButton] = useState<boolean>(false);
  const [sendVerify, setSendVerify] = useState<boolean>(false);
  const [verified, setVerified] = useState<boolean>(false);

  const currentEmailRef = useRef<string>("current-email");
  const currentPasswordRef = useRef<string>("current-password");
  const newEmailRef = useRef<string>("new-email");

  interface ChangeEmailDetails {
    placeholder: string;
    text: string;
    ref: any;
    onChange: any;
    onFocus: any;
    secureTextEntry: boolean;
    keyboardType: string;
  }

  const handleFocus = (event: string) => {
    if (event === "current-email") {
      setFocus(event);
    } else if (event === "current-password") {
      setFocus(event);
    } else if (event === "new-email") {
      setFocus(event);
    }
  };

  const handleChange = (event: string) => {
    if (focus === "current-email") {
      setCurrentEmail(event);
    } else if (focus === "current-password") {
      setCurrentPassword(event);
    } else if (focus === "new-email") {
      setNewEmail(event);
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

  const changeEmailArr: ChangeEmailDetails[] = [
    {
      placeholder: "Current Email",
      text: currentEmail,
      ref: currentEmailRef,
      onChange: handleChange,
      onFocus: handleFocus,
      secureTextEntry: false,
      keyboardType: "email-address",
    },
    {
      placeholder: "New Email",
      text: newEmail,
      ref: newEmailRef,
      onChange: handleChange,
      onFocus: handleFocus,
      secureTextEntry: false,
      keyboardType: "email-address",
    },
  ];

  useEffect(() => {
    if (
      EmailValidator.validate(newEmail) &&
      EmailValidator.validate(currentEmail)
    ) {
      setSendButton(true);
    }
  }, [newEmail, currentEmail]);

  return (
    <Card scrollable={false} containerClass={styles.container}>
      <Card scrollable={false} containerClass={styles.changeDetailsContainer}>
        <Card scrollable={false} containerClass={styles.changeEmailContainer}>
          <PhoneButton
            onPress={handleEmail}
            textClass={styles.buttonText}
            buttonClass={styles.button}
            buttonContainerClass={styles.buttonContainer}
            text="Change Email"
          />
          {showEmail &&
            changeEmailArr.map((value) => {
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
                  onChange={value.onChange}
                  onFocus={value.onFocus}
                />
              );
            })}
          <>
            {sendButton && (
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
            {sendVerify && (
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
    width: "90%",
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
  inputText: {},
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
