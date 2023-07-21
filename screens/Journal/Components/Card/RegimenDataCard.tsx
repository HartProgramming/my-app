import Card from "../../../../components/Card/Card";
import { StyleSheet } from "react-native";
import { Text, Image } from "react-native";
import { useEffect, useState } from "react";
import SetMargin from "../../../../functions/SetMargin";
import { ExerciseActivity, MealActivity } from "../../Screens/MainRegimen";
import RecentActivityImageButton from "../../../Activity/Components/Button/RecentActivityImageButton";

interface RegimenDataCardProps {
  icon: any;
  dataType: string;
  mealData?: MealActivity;
  exerciseData?: ExerciseActivity;
}

export default function RegimenDataCard({
  icon,
  mealData,
  exerciseData,
  dataType,
}: RegimenDataCardProps) {
  useEffect(() => {
    console.log(exerciseData.exercise);
  }, []);

  return (
    <Card scrollable={false} containerClass={styles.container}>
      {dataType === "Exercise" ? (
        <RecentActivityImageButton
          labelStyle={styles.label}
          imageStyle={styles.image}
          label={exerciseData?.exercise}
          source={icon}
        />
      ) : (
        <RecentActivityImageButton
          labelStyle={styles.label}
          imageStyle={styles.image}
          label={exerciseData?.exercise}
          source={icon}
        />
      )}
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: SetMargin(0.15),
    width: SetMargin(0.15),
    borderRadius: 15,
  },
  textContainer: {},
  label: {},
});
