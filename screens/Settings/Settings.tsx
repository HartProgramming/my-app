import Card from "../../components/Card/Card";
import { StyleSheet } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  Ionicons,
  AntDesign,
} from "@expo/vector-icons";
import PhoneButton from "../../components/Inputs/PhoneButton";
import CardText from "../../components/Card/CardText";
import Navigation from "../../objects/NavigationType";
import { useState } from "react";
import SetMargin from "../../functions/SetMargin";
import LogoutDeleteModal from "./Components/Modal/LogoutDeleteModal";

export default function Settings() {
  interface SettingNavInterface {
    label: string;
    route: string;
    icon: JSX.Element;
  }

  interface UserProps {
    username: string;
    email: string;
  }

  const userDetails: UserProps = {
    username: "Ed",
    email: "hart@yahoo.com",
  };

  const [showModal, setShowModal] = useState<boolean>(false);

  const handleModal = () => {
    setShowModal(true);
  };

  const [userInfo, setUserInfo] = useState<UserProps>(userDetails);

  const navigation = useNavigation();

  const settingTabsArray: SettingNavInterface[] = [
    {
      label: "App Information",
      route: "app-info",
      icon: <MaterialIcons name="app-settings-alt" size={24} color="black" />,
    },
    {
      label: "Change Email/Password",
      route: "change-email-password",
      icon: (
        <MaterialCommunityIcons name="key-change" size={28} color="black" />
      ),
    },
    {
      label: "Update Info",
      route: "update-info-nav",
      icon: <Ionicons name="information-circle" size={28} color="black" />,
    },
    {
      label: "Delete Account",
      route: "delete-account",
      icon: <AntDesign name="delete" size={28} color="black" />,
    },
    {
      label: "Log Out",
      route: "log-out",
      icon: <AntDesign name="logout" size={28} color="black" />,
    },
  ];

  return (
    <Card scrollable={false} containerClass={styles.container}>
      <Card scrollable={false} containerClass={styles.scrollContainer}>
        <CardText
          semiBold
          container={styles.userInfoTextContainer}
          textStyle={styles.userInfoText}
          text={`Username: ${userInfo.username}`}
        />
        <CardText
          semiBold
          container={styles.userInfoTextContainer}
          textStyle={styles.userInfoText}
          text={`Email: ${userInfo.email}`}
        />
        <Card scrollable={false} containerClass={styles.tabsContainer}>
          {settingTabsArray.map((value: any) => (
            <PhoneButton
              semiBold
              image={value.icon}
              onPress={
                value.label === "Log Out"
                  ? () => handleModal()
                  : Navigation({ navigation }, value.route)
              }
              text={value.label}
              textClass={styles.settingTabsTextClass}
              buttonClass={styles.settingTabsButton}
              buttonContainerClass={styles.settingTabsButtonContainer}
            />
          ))}
        </Card>
        <LogoutDeleteModal showHide={setShowModal} visible={showModal} />
      </Card>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  scrollContainer: {
    backgroundColor: "white",
    marginTop: SetMargin(0.25),
  },
  userInfoTextContainer: {
    width: "80%",
    alignSelf: "center",
    justifyContent: "flex-end",
    alignItems: "flex-start",
  },
  userInfoText: {
    fontSize: 20,
    letterSpacing: 0.8,
  },
  settingTabsTextClass: {
    fontSize: 22,
    color: "black",
    marginLeft: 17,
    letterSpacing: 1.15,
  },
  settingTabsButton: {
    flexDirection: "row",
    padding: 5,

    alignItems: "center",
    width: "100%",
  },
  settingTabsButtonContainer: {
    width: "100%",
    padding: 25,
    borderTopWidth: 2,
    borderStyle: "solid",
    alignItems: "center",
  },
  tabsContainer: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    marginTop: SetMargin(0.05),
  },
});
