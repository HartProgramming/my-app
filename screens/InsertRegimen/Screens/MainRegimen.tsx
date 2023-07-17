import Card from "../../../components/Card/Card";
import { StyleSheet } from "react-native";
import CardText from "../../../components/Card/CardHeader";
import RegimenButton from "../Components/Buttons/RegimenButton";
import Navigation from "../../../objects/NavigationType";
import { useNavigation } from "@react-navigation/native";
import SetMargin from "../../../functions/SetMargin";
import RegimenDataCard from "../Components/Card/RegimenDataCard";
import Jogging from "../../../images/cardimages/joggingstreet.jpeg";

export interface ExerciseActivity {
  exercise: string;
  reps?: number;
  miles?: number;
  minutes?: number;
}

export default function MainRegimen() {
  const navigation = useNavigation();

  const DUMMY_EXERCISE: ExerciseActivity[] = [
    { exercise: "Jogging", miles: 3 },
  ];

  return (
    <Card scrollable={false} containerClass={styles.container}>
      <Card scrollable={false} containerClass={styles.recentContainer}>
        <CardText
          text="Recent Activity"
          textStyle={styles.recentHeader}
          container={styles.recentHeaderContainer}
        />
        <Card scrollable={false} containerClass={styles.detailsContainer}>
          <CardText
            text="Exercise"
            textStyle={styles.detailsHeader}
            container={styles.detailsHeaderContainer}
          />
          <RegimenDataCard
            dataType="Exercise"
            icon={Jogging}
            data={DUMMY_EXERCISE}
          />
        </Card>
        <Card scrollable={false} containerClass={styles.detailsContainer}>
          <CardText
            text="Meal"
            textStyle={styles.detailsHeader}
            container={styles.detailsHeaderContainer}
          />
        </Card>
      </Card>
      <Card scrollable={false} containerClass={styles.buttonsContainer}>
        <RegimenButton
          label="Search"
          onPress={Navigation({ navigation }, "search")}
        />
        <RegimenButton
          label="Create"
          onPress={Navigation({ navigation }, "create")}
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
    marginTop: SetMargin(0.13),
  },
  recentContainer: {
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "blue",
    marginTop: SetMargin(0.05),
  },
  recentHeaderContainer: {
    alignSelf: "center",
  },
  recentHeader: {
    fontSize: 28,
    fontWeight: "bold",
    letterSpacing: 1.2,
  },
  detailsContainer: {
    borderColor: "red",
    borderWidth: 2,
    borderStyle: "solid",
    marginTop: SetMargin(0.0),
  },
  detailsHeaderContainer: {},
  detailsHeader: {
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 1.1,
  },
});
