import Card from "../../components/Card/Card";
import { StyleSheet } from "react-native";
import PhoneButton from "../../components/Inputs/PhoneButton";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { Text } from "react-native";
import Navigation from "../../objects/NavigationType";
import SetMargin from "../../functions/SetMargin";
import CardText from "../../components/Card/CardText";


export default function AppInfo() {
  const navigation = useNavigation();

  interface AppDetails {
    label: string;
    details: string;
  }

  const appDetailsArr: AppDetails[] = [
    { label: "Version", details: '1.0' },
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
      <CardText semiBold text="App Info" container={styles.appInfoContainer} textStyle={styles.appInfo} />

      <Card scrollable={false} containerClass={styles.detailsContainer}>
        {appDetailsArr.map((value) => {
          return (
            <Card scrollable={false} containerClass={styles.detailCard}>
              <CardText medium textStyle={styles.detailLabel} container={styles.detailLabelContainer} text={`${value.label}: `}/>
              <CardText regular textStyle={styles.detailText} container={styles.detailTextContainer} text={value.details} />
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
    marginTop: SetMargin(.06),
  },
  button: {

    flexDirection: "row",
    padding: 15,
  },
  buttonContainer: {
    width: "90%",
    padding: 5,
  },
  appInfoContainer: {
    width: '100%',
    marginTop: SetMargin(.1)
  },
  appInfo: {
    fontSize: 28,
    textAlign: 'center'
  },

  buttonText: {
    
  },
  detailsContainer: {
    marginTop: SetMargin(.05),
    width: "80%",
    alignSelf: "center",
  },
  detailCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    borderStyle: 'solid',
    borderBottomColor: 'black',
    borderBottomWidth: 2
  },
  detailLabelContainer: {

  },
  detailLabel: {
    fontSize: 22
  },
  detailTextContainer: {

  },
  detailText: {
    fontSize: 20
  },
 
  
});
