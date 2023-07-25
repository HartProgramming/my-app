import Card from "../../components/Card/Card";
import { StyleSheet, Text } from "react-native";
import PhoneButton from "../../components/Inputs/PhoneButton";
import { useNavigation } from "@react-navigation/native";
import PhoneTextInput from "../../components/Inputs/PhoneTextInput";
import { FunctionComponentElement } from "react";
import Picker from "react-native-picker-select";
import Details from "../Details/Details";
import Navigation from "../../objects/NavigationType";

export default function ChangeInfo() {
  const navigation = useNavigation();

  return (
    <Card scrollable={false} containerClass={styles.container}>
      <Details
      changeHeader={true}
      globalDetails={true}
      submitGoBackStyle={styles.buttonsContainer}
      submitGoBackContainer={true}
        button={
          <PhoneButton
            text="Go Back"
            onPress={() => Navigation({navigation},'Profile')}
            buttonClass={styles.button}
            buttonContainerClass={styles.buttonContainer}
            textClass={styles.buttonText}
          />
        }
      ></Details>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
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
    width: "50%",
    alignSelf: "center",
  },
  buttonsContainer: {
    alignItems: 'center',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    margin: 5,
    width: '70%'
  }
});
