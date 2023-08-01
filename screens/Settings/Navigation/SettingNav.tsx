import { createStackNavigator } from "@react-navigation/stack";
import ChangeEmail from "../ChangeEmail";
import ChangeInfo from "../ChangeInfo";
import LogOut from "../LogOut";
import DeleteAccount from "../DeleteAccount";
import AppInfo from "../AppInfo";
import NavigationStack from "../../../components/NavigationStack/NavigationStack";
import { NavigationArrayProps } from "../../../components/NavigationStack/NavigationStack";
import Settings from "../Settings";
import DetailsNavigation from "../../Details/Navigation/DetailsNavigation";
import ChangeInfoNavigation from "./ChageInfoNav";

export default function SettingNavigation() {
  const settingTabsArray: NavigationArrayProps[] = [
    {
      name: "main-settings", 
      component: Settings,
      options: false,
      backgroundColor: "",
      borderColor: "",
      fontColor: "",
    },
    {
      name: "app-info",
      options: false,
      component: AppInfo,
      backgroundColor: "",
      borderColor: "",
      fontColor: "",
    },
    {
      name: "change-email-password",
      options: false,
      component: ChangeEmail,
      backgroundColor: "",
      borderColor: "",
      fontColor: "",
    },
    {
      name: "update-info-nav",
      options: false,
      component: ChangeInfoNavigation,
      backgroundColor: "",
      borderColor: "",
      fontColor: "",
    },
    {
      name: "log-out",
      options: false,
      component: LogOut,
      backgroundColor: "",
      borderColor: "",
      fontColor: "",
    },
    {
      name: "delete-account",
      options: false,
      component: DeleteAccount,
      backgroundColor: "",
      borderColor: "",
      fontColor: "",
    },
  ];

  return <NavigationStack navArray={settingTabsArray} />;
}
