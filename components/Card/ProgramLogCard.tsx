import { StyleSheet } from "react-native";
import Card from "./Card";
import CardText from "./CardText";
import { TodayLogInterface } from "../../screens/Activity/Interfaces/Interface";

export default function ProgramLogCard({
  mealArray,
  exerciseArray,
  cardHeader,
}: TodayLogInterface) {
  return (
    <Card scrollable={false} containerClass={styles.container}>
      {cardHeader}
      <Card scrollable={false} containerClass={styles.mealsContainer}>
        <CardText
          semiBold
          container={styles.mealsHeaderContainer}
          textStyle={styles.mealsHeader}
          text="Meals"
        />
        {mealArray.map((value) => {
          return (
            <CardText
              medium
              container={styles.mealDataContainer}
              textStyle={styles.mealData}
              text={`${value.Meal}: ${value.Calories}kCal ${value.Protein}g`}
            />
          );
        })}
      </Card>
      <Card scrollable={false} containerClass={styles.exercisesContainer}>
        <CardText
          semiBold
          container={styles.exercisesHeaderContainer}
          textStyle={styles.exercisesHeader}
          text="Exercises"
        />
        {exerciseArray.map((value) => {
          return (
            <CardText
              medium
              container={styles.exerciseDataContainer}
              textStyle={styles.exerciseData}
              text={`${value.Exercise}: ${
                value.Reps > 0
                  ? `${value.Reps} Reps`
                  : value.Miles > 0
                  ? `${value.Miles} Miles`
                  : value.Minutes > 0
                  ? `${value.Minutes} Minutes`
                  : ""
              }`}
            />
          );
        })}
      </Card>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mealsContainer: {},
  mealsHeaderContainer: {
    borderStyle: "solid",
    borderBottomColor: "black",
    borderBottomWidth: 2,
    width: "100%",
  },
  mealsHeader: {
    fontSize: 24,
    width: "85%",
    alignSelf: "center",
  },
  mealDataContainer: {
    borderStyle: "solid",
    borderBottomColor: "black",
    borderBottomWidth: 2,
    width: "100%",
    alignSelf: "center",
    padding: 5,
  },
  mealData: {
    width: "85%",
    alignSelf: "center",
  },
  exercisesContainer: {},
  exercisesHeaderContainer: {
    alignSelf: "center",
    width: "100%",
  },
  exercisesHeader: {
    fontSize: 24,
    width: "85%",
    alignSelf: "center",
  },
  exerciseDataContainer: {
    borderStyle: "solid",
    borderTopColor: "black",
    borderTopWidth: 2,
    width: "100%",
    padding: 5,
  },
  exerciseData: {
    width: "85%",
    alignSelf: "center",
  },
});
