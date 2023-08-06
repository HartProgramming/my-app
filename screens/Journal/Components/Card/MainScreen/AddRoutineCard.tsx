import { PermissionsAndroid, StyleSheet } from "react-native";
import Card from "../../../../../components/Card/Card";
import CardText from "../../../../../components/Card/CardText";
import { FlatList } from "react-native";
import {
  StandardExerciseProps,
  StandardMealProps,
} from "../../../../../interfaces/GlobalInterface";
import CardTitle from "react-native-paper/lib/typescript/src/components/Card/CardTitle";
import PhoneButton from "../../../../../components/Inputs/PhoneButton";
import { useEffect, useState } from "react";
import SetMargin from "../../../../../functions/SetMargin";

interface AddRoutineCardProps {
  array: any;
  counter: any;
  cardHeader: string;
  cardType: "Meal" | "Exercise";
}

export default function AddRoutineCard({
  array,
  cardHeader,
  cardType,
  counter,
}: AddRoutineCardProps) {
  const [dataObject, setDataObject] = useState<any>([]);
  const [arrayCounter, setArrayCounter] = useState<number>(0);
  const [dataArray, setDataArray] = useState<[]>(array);

  const renderExerciseList = ({ item }) => (
    <Card
      key={item}
      scrollable={false}
      containerClass={styles.listItemContainer}
    >
      <CardText
        medium
        text={`${item}: `}
        container={styles.labelContainer}
        textStyle={styles.label}
      />
      <CardText
        regular
        text={array.ExerciseData[item]}
        container={styles.infoContainer}
        textStyle={styles.info}
      />
    </Card>
  );

  const renderMealList = ({ item }) => (
    <Card
      key={item}
      scrollable={false}
      containerClass={styles.listItemContainer}
    >
      <CardText
        medium
        text={`${item}: `}
        container={styles.labelContainer}
        textStyle={styles.label}
      />
      <CardText
        regular
        text={array.MealData[item]}
        container={styles.infoContainer}
        textStyle={styles.info}
      />
    </Card>
  );

  return (
    <Card scrollable={false} containerClass={styles.container}>
      <Card scrollable={false} containerClass={styles.cardTopContainer}>
        <CardText
          bold
          text={cardHeader}
          container={styles.cardHeaderContainer}
          textStyle={styles.cardHeader}
        />
        <PhoneButton
          semiBold
          text="Add"
          onPress={() => setDataObject(dataArray)}
          buttonContainerClass={styles.buttonContainer}
          buttonClass={styles.button}
          textClass={styles.buttonText}
        />
      </Card>

      <Card scrollable={false} containerClass={styles.topLevelContainer}>
        <CardText
          semiBold
          text={cardType === "Meal" ? array.Meal : array.Exercise}
          container={styles.cardTypeContainer}
          textStyle={styles.cardTypeHeader}
        />
      <Card scrollable={false} containerClass={styles.cardDetailsContainer}>
        <FlatList
          renderItem={
            cardType === "Exercise" ? renderExerciseList : renderMealList
          }
          data={
            cardType === "Meal"
              ? Object.keys(array.MealData)
              : Object.keys(array.ExerciseData)
          }
        />
      </Card>
  
      </Card>
      <Card scrollable={false} containerClass={styles.nextButtonContainer}>
        <PhoneButton
          text="Prev"
          semiBold
          onPress={() => counter((prev) => (prev -= 1))}
          buttonContainerClass={styles.buttonContainer}
          buttonClass={styles.button}
          textClass={styles.buttonText}
        />
        <PhoneButton
          semiBold
          text="Next"
          onPress={() => counter((prev) => (prev += 1))}
          buttonContainerClass={styles.buttonContainer}
          buttonClass={styles.button}
          textClass={styles.buttonText}
        />
      </Card>
    </Card>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
  },
  container: {
    flexDirection: "column",
    width: "100%",
    alignSelf: "center",
    marginTop: SetMargin(0.005),
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
  },
  cardTopContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  cardHeaderContainer: {
    flexDirection: "row",
  },
  cardHeader: {
    fontSize: 24,
    letterSpacing: 0.5,
  },
  topLevelContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    width: "90%",
    alignSelf: "center",
    borderWidth: 2,
    borderRightWidth: 0,
    marginTop: SetMargin(.02),
    padding: 10
  },
  cardTypeContainer: {
    justifyContent: "center",
  },
  cardTypeHeader: {
    fontSize: 22,
    letterSpacing: 0.5,
  },
  buttonContainer: {
    width: "50%",
    borderWidth: 2,
  },
  button: {
    backgroundColor: "black",
    width: "100%",
    alignItems: "center",
    padding: 5,
  },
  buttonText: {
    fontSize: 20,
    color: "white",
  },
  listContainer: {},
  listItemContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
  labelContainer: {
    width: "55%",
  },
  label: { fontSize: 22 },
  infoContainer: {
    width: "45%",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  info: { fontSize: 20 },
  nextButtonContainer: {
    flexDirection: "row",
    marginTop: SetMargin(.02),
    width: '90%',
    alignSelf: 'center'
  },
  cardDetailsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "90%",
    alignSelf: "center",
  },
});
