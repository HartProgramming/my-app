import Card from "../../components/Card/Card";
import { StyleSheet } from "react-native";
import PhoneButton from "../../components/Inputs/PhoneButton";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { Text } from "react-native";
import Navigation from "../../objects/NavigationType";
import SetMargin from "../../functions/SetMargin";


export default function AppInfo() {
  const navigation = useNavigation();

  interface AppDetails {
    label: string;
    details: string | number;
  }

  const appDetailsArr: AppDetails[] = [
    { label: "Version", details: 1.0 },
    { label: "Designer", details: "Edward Hart" },
    { label: "Donate", details: "Details Below" },
    { label: "Cash App", details: "" },
    { label: "PayPal", details: "" },
    { label: "Venmo", details: "" },
    { label: "Bitcoin", details: "" },
  ];

  return (
    <Card scrollable={false} containerClass={styles.container}>
      <Card scrollable={false} containerClass={styles.buttonsContainer}>
        <PhoneButton
          image={<MaterialIcons name="keyboard-arrow-left" size={48} color="black" />}
          onPress={Navigation({navigation}, "main-settings")}
          text="" 
          buttonClass={styles.button}
          buttonContainerClass={styles.buttonContainer}
          textClass={styles.buttonText}
        />
      </Card>
      <Card scrollable={false} containerClass={styles.detailsContainer}>
        {appDetailsArr.map((value) => {
          return (
            <Card scrollable={false} containerClass={styles.detailCard}>
              <Text style={styles.detailLabel}>{value.label}:</Text>
              <Text style={styles.detailText}> {value.details}</Text>
            </Card>
          );
        })}
      </Card>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  buttonsContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: SetMargin(.1),
  },
  button: {
    borderRadius: 15,
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "#8c52ff",
    flexDirection: "row",
    padding: 15,
  },
  buttonContainer: {
    width: "90%",
    padding: 5,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#8c52ff",
    marginLeft: 17,
    letterSpacing: 1.15,
  },
  detailsContainer: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#8c52ff",
    width: "95%",
    alignSelf: "center",
  },
  detailCard: {
    flexDirection: 'row'
  },
  detailLabel: {
    fontSize: 20
  },
  detailText: {
    fontSize: 20
  }
});
