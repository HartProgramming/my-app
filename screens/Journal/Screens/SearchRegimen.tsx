import Card from "../../../components/Card/Card";
import SetMargin from "../../../functions/SetMargin";
import RegimenButton from "../Components/Buttons/RegimenButton";
import { StyleSheet } from "react-native";
import Navigation from "../../../objects/NavigationType";
import { useNavigation } from "@react-navigation/native";
import CardText from "../../../components/Card/CardHeader";

export default function SearchRegimen() {
  const navigation = useNavigation();

  return (
    <Card scrollable={false} containerClass={styles.container}>
        <CardText container={styles.headerContainer} textStyle={styles.header} text="Search"/>
      <Card scrollable={false} containerClass={styles.buttonsContainer}>
        <RegimenButton
          label="Exercise"
          onPress={Navigation({ navigation }, "search-exercise")}
        />
        <RegimenButton
          label="Meal"
          onPress={Navigation({ navigation }, "search-meal")}
        />
        <RegimenButton
          label="Back"
          onPress={Navigation({ navigation }, "main-regimen")}
        />
      </Card>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonsContainer: {
    marginTop: SetMargin(0.35),
  },
  headerContainer: {
    alignSelf: 'center',
    marginTop: SetMargin(.14),
    marginBottom: SetMargin(-.2)
  },
  header: {
    fontSize: 34,
    fontWeight: 'bold',
    letterSpacing: 1.15
  }
});
