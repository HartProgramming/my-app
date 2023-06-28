import { createStackNavigator } from "@react-navigation/stack";
import ChangeEmail from "./ChangeEmail";
import ChangeInfo from "./ChangeInfo";
import LogOut from "./LogOut";
import DeleteAccount from "./DeleteAccount";
import AppInfo from "./AppInfo";

export default function SettingNavigation() {
  const SettingsStack = createStackNavigator();

  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        options={{ headerShown: false }}
        name="app-info"
        component={AppInfo}
      />
      <SettingsStack.Screen
        options={{ headerShown: false }}
        name="change-email-password"
        component={ChangeEmail}
      />
      <SettingsStack.Screen
        options={{ headerShown: false }}
        name="change-info"
        component={ChangeInfo}
      />
      <SettingsStack.Screen
        options={{ headerShown: false }}
        name="log-out"
        component={LogOut}
      />
      <SettingsStack.Screen
        options={{ headerShown: false }}
        name="delete-account"
        component={DeleteAccount}
      />
    </SettingsStack.Navigator>
  );
}
