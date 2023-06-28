import PhoneButton from "../Inputs/PhoneButton";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

interface GoBackProps {
  navigator: string;
  route?: string;
}

export default function GoBackButton({ navigator, route }: GoBackProps) {
  const navigation = useNavigation();

  const transScreen = (event: string, screen?: any) => {
    navigation.navigate(event as any, { screen: screen } as any);
  };

  return (
    <>
      <PhoneButton
        onPress={() => transScreen(navigator, route)}
        text='Go Back'
        textClass={styles.settingTabsTextClass}
        buttonClass={styles.settingTabsButton}
        buttonContainerClass={styles.settingTabsButtonContainer}
      />
    </>
  );
}

const styles = StyleSheet.create({
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
});
