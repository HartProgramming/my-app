import Card from "../../components/Card/Card";
import { StyleSheet } from "react-native";
import CardText from "../../components/Card/CardText";
import LoginInput from "../LogIn/Components/LoginInput";
import { useEffect, useState } from "react";
import PhoneButton from "../../components/Inputs/PhoneButton";
import SetMargin from "../../functions/SetMargin";
import LogoutDeleteModal from "./Components/Modal/LogoutDeleteModal";

export default function DeleteAccount() {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleDelete = () => {
    setShowModal(true);
  };

  useEffect(() => {
    console.log(password, username, email);
  }, [username, email, password]);

  return (
    <Card containerClass={styles.container} scrollable={true}>
      <Card scrollable={false} containerClass={styles.topLevelContainer}>
        <CardText
          bold
          text="Delete Account"
          container={styles.headerContainer}
          textStyle={styles.header}
        />
      </Card>
      <Card scrollable={false} containerClass={styles.loginLevelContainer}>
        <LoginInput
          placeholder="Email"
          secureEntry={false}
          value={setEmail}
          keyboardType="email-address"
        />
        <LoginInput
          placeholder="Username"
          secureEntry={false}
          value={setUsername}
          keyboardType="default"
        />
        <LoginInput
          placeholder="Password"
          secureEntry={true}
          value={setPassword}
          keyboardType="default"
        />
      </Card>
      <Card scrollable={false} containerClass={styles.deleteContainer}>
        <PhoneButton
          semiBold
          text="Delete Account"
          onPress={handleDelete}
          buttonContainerClass={styles.deleteButtonContainer}
          buttonClass={styles.deleteButton}
          textClass={styles.deleteButtonText}
        />
      </Card>
      <LogoutDeleteModal showHide={setShowModal} visible={showModal} />
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  topLevelContainer: {
    marginTop: SetMargin(0.25),
    marginBottom: SetMargin(0.03),
  },
  headerContainer: {
    alignItems: "center",
  },
  header: {
    fontSize: 32,
    letterSpacing: 1,
  },
  loginLevelContainer: {
    width: "70%",
    alignSelf: "center",
  },
  deleteContainer: {
    alignItems: "center",
    marginTop: SetMargin(0.15),
  },
  deleteButtonContainer: {
    width: "60%",
    marginTop: SetMargin(0.03),
  },
  deleteButton: {
    padding: 15,
    alignItems: "center",
    width: "100%",
    backgroundColor: "black",
    borderRadius: 35,
  },
  deleteButtonText: {
    fontSize: 24,
    color: "white",
    letterSpacing: 0.5,
  },
});
