import { StyleSheet } from "react-native";
import Card from "../../../../components/Card/Card";
import CardText from "../../../../components/Card/CardText";
import SetMargin from "../../../../functions/SetMargin";
import { FlatList } from "react-native";
import PhoneButton from "../../../../components/Inputs/PhoneButton";
import { useNavigation } from "@react-navigation/native";
import Navigation from "../../../../objects/NavigationType";
import { BorderlessButton } from "react-native-gesture-handler";

export default function CreateMainScreen() {
  const navigation = useNavigation();

  const createRegimen = [
    { label: "Create Program", route: "create-program" },
    { label: "Create Exercise Plan", route: "create-exercise" },
    { label: "Create Meal Plan", route: "create-meal" },
  ];

  const renderButtons = ({ item }) => (
    <PhoneButton
    semiBold
      onPress={Navigation({ navigation }, item.route)}
      text={item.label}
      buttonContainerClass={styles.buttonContainer}
      buttonClass={styles.button}
      textClass={styles.buttonText}
    />
  );

  return (
    <Card scrollable={false} containerClass={styles.container}>
      <Card scrollable={false} containerClass={styles.topContainer}>
        <CardText
          bold
          text="Instructions"
          container={styles.instructionsHeaderContainer}
          textStyle={styles.instructionsHeader}
        />
        <CardText
          regular
          text="Below are three portals that allow you to create a program, exercise, or meal regimen. You will be able to insert entries and track your progress conveniently. By creating a regimen and posting it for sale you will also be able to sell it in our shop and receive 25% revenue from every sale."
          container={styles.instructionsContainer}
          textStyle={styles.instructions}
        />
      </Card>
      <Card scrollable={false} containerClass={styles.buttonsContainer}>
        <FlatList renderItem={renderButtons} data={createRegimen} />
      </Card>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  topContainer: {
    width: "90%",
    borderWidth: 0,
    alignSelf: "center",
    marginTop: SetMargin(0.09),
    padding: 10,
    borderRadius: 15,
    elevation: 5,
    backgroundColor: "white",
  },
  instructionsHeaderContainer: {},
  instructionsHeader: {
    fontSize: 28,
    letterSpacing: 0.8,
  },
  instructionsContainer: {
    width: "95%",
    alignSelf: "flex-end",
  },
  instructions: {
    fontSize: 18,
    letterSpacing: 0.5,
    lineHeight: 33,
  },
  buttonsContainer: {
    flexDirection: 'column',
    width: '90%',
    alignSelf: 'center',
    marginTop: SetMargin(.03),
    backgroundColor: 'white'
  },
  buttonContainer: {
    marginTop: SetMargin(.02),
    marginBottom: SetMargin(.02),
    width: '90%',
    alignSelf: 'center',
  },
  button: {
    alignItems: 'center',
    padding: 15,
    backgroundColor: 'black',
    borderRadius: 55,
    elevation: 5
  },
  buttonText: {
    fontSize: 24,
    letterSpacing: .5,
    color: 'white'
  },
});
