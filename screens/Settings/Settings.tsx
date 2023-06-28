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
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DeleteAccount from "./DeleteAccount";
import ChangeEmail from "./ChangeEmail";
import ChangeInfo from "./ChangeInfo";
import AppInfo from "./AppInfo";
import LogOut from "./LogOut";

export default function Settings() {
  const Stack = createStackNavigator();

  const navigation = useNavigation<StackNavigationProp<ScreenParam>>();

  type ScreenParam = {
    screen: {id: number} | undefined
  }

  const transScreen = (standard: any, screenName: string) => {
    navigation.navigate(standard as any, {screen: screenName} as any);
  };

  interface SettingTabs {
    label: string;
    route: string;
    icon: any;
    component: any;
  }

  const settingTabsArray: SettingTabs[] = [
    {
      label: "App Information",
      route: "app-info",
      icon: <MaterialIcons name="app-settings-alt" size={24} color="#8c52ff" />,
      component: { AppInfo },
    },
    {
      label: "Change Email/Password",
      route: "change-email-password",
      icon: (
        <MaterialCommunityIcons name="key-change" size={28} color="#8c52ff" />
      ),
      component: { ChangeEmail },
    },
    {
      label: "Change Info",
      route: "change-info",
      icon: <Ionicons name="information-circle" size={28} color="#8c52ff" />,
      component: { ChangeInfo },
    },
    {
      label: "Log Out",
      route: "log-out",
      icon: <AntDesign name="logout" size={28} color="#8c52ff" />,
      component: { LogOut },
    },
    {
      label: "Delete Account",
      route: "delete-account",
      icon: <AntDesign name="delete" size={28} color="#8c52ff" />,
      component: { DeleteAccount },
    },
  ];

  return (
    <Card scrollable={false} containerClass={styles.container}>
      <Card scrollable={true} containerClass={styles.scrollContainer}>
        <Card scrollable={false} containerClass={styles.tabsContainer}>
          {settingTabsArray.map((value: any) => (
            <PhoneButton image={value.icon} onPress={() => transScreen('Setting', value.route)} text={value.label} textClass={styles.settingTabsTextClass} buttonClass={styles.settingTabsButton} buttonContainerClass={styles.settingTabsButtonContainer}/>
          ))}
        </Card>
      </Card>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    backgroundColor: "white",
    flex: 1,
  },
  settingTabsTextClass: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#8c52ff",
    marginLeft: 17,
    letterSpacing: 1.15,
  },
  settingTabsButton: {
    flex: 1,
    borderRadius: 15,
    borderStyle: "solid",
    borderWidth: 4,
    borderColor: "#8c52ff",
    flexDirection: "row",
    padding: 15,
  },
  settingTabsButtonContainer: {
    width: "90%",
    padding: 5,
  },
  tabsContainer: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    marginTop: 200,
  },
});
