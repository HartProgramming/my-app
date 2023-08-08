import { StyleSheet } from "react-native";
import Card from "../Card/Card";
import SetMargin from "../../functions/SetMargin";
import AddInput from "../../screens/Program/Components/Input/AddInput";
import MealExerciseDetailsInput from "../../screens/Program/Components/Input/MealExerciseDetailsInput";
import PhoneButton from "./PhoneButton";
import { useEffect, useState } from "react";
import {
  mealProps,
  exerciseProps,
} from "../../screens/Program/Arrays/CreateExerciseMealArrays";
import SearchInput from "../../screens/Journal/Components/Input/SearchInput";
import { displaySearchArr } from "../../screens/Journal/Screens/SearchExercise";


interface CreateRegimenInputProps {
  setData: any;
  inputType: "meal" | "exercise";
  addNameType: "search" | "create";
}

export default function CreateRegimenInput({
  addNameType,
  setData,
  inputType,
}: CreateRegimenInputProps) {
  const [textInputType, setTextInputType] = useState<"meal" | "exercise">(
    inputType
  );
  const [inputValue, setInputValue] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [mealDataObj, setMealDataObj] = useState<any>([]);
  const [inputData, setInputData] = useState<any>([]);
  const [resultsObj, setResultsObj] = useState<any>([]);

  useEffect(() => {}, []);

  const mealObj = {
    Name: "",
    Calories: "",
    Protein: "",
    Sodium: "",
    Fat: "",
    Sugar: "",
    Cholesterol: "",
  };

  const exerciseObj = {
    Name: "",
    Reps: "",
    Miles: "",
    Minutes: "",
    Sets: "",
    Weight: "",
  };

  useEffect(() => {
  }, [name, mealDataObj])

  return (
    <Card scrollable={false} containerClass={styles.container}>
      <Card scrollable={false} containerClass={styles.createContainer}>
        {addNameType === "create" ? (
          <AddInput name={setName} type={textInputType} />
        ) : (
          <SearchInput
            name={setName}
            displaySearch={displaySearchArr}
            value={setInputValue}
            placeholder={
              textInputType === "meal" ? "Search Meal" : "Search Exercise"
            }
          />
        )}
      </Card>
      <Card scrollable={false} containerClass={styles.detailContainer}>
        <MealExerciseDetailsInput
          mealObject={textInputType === "meal" ? mealObj : exerciseObj}
          array={textInputType === "meal" ? mealProps : exerciseProps}
          name={name}
          onChange={setMealDataObj}
          type={textInputType === "meal" ? "meal" : "exercise"}
        />
      </Card>
      <Card scrollable={false} containerClass={styles.addContainer}>
        <PhoneButton
          semiBold
          onPress={() => setData(mealDataObj)}
          text="Add"
          buttonContainerClass={styles.addButtonContainer}
          buttonClass={styles.addButton}
          textClass={styles.addButtonText}
        />
      </Card>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {},
  createContainer: {
    width: "100%",
  },
  buttonContainer: {
    width: "50%",
  },
  button: {
    width: "100%",
    padding: 15,
    backgroundColor: "black",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 28,
    letterSpacing: 0.8,
  },
  buttonsContainer: {
    flexDirection: "row",
    width: "100%",
  },
  detailContainer: {},
  addContainer: {
    width: "90%",
    alignSelf: "center",
    marginTop: SetMargin(0.01),
  },
  addButtonContainer: {
    width: "50%",
    alignSelf: "center",
  },
  addButton: {
    backgroundColor: "black",
    width: "100%",
    alignItems: "center",
    padding: 5,
    borderRadius: 40,
  },
  addButtonText: {
    fontSize: 28,
    letterSpacing: 0.8,
    color: "white",
  },
});
