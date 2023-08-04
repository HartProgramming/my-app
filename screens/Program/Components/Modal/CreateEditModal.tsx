import { StyleSheet } from "react-native";
import Card from "../../../../components/Card/Card";
import CardText from "../../../../components/Card/CardText";
import { useEffect, useState } from "react";
import PhoneButton from "../../../../components/Inputs/PhoneButton";
import SetMargin from "../../../../functions/SetMargin";
import PhoneTextInput from "../../../../components/Inputs/PhoneTextInput";
import NumberInput from "../../../../components/Inputs/NumberInput";
import { CreateExerciseMealProps } from "../Interfaces/CreateExerciseMealInterface";
import { mealProps, exerciseProps } from "../../Arrays/CreateExerciseMealArrays";
import { endEvent } from "react-native/Libraries/Performance/Systrace";
import AddInput from "../Input/AddInput";
import MealExerciseDetailsInput from "../Input/MealExerciseDetailsInput";

export default function CreateEditModal() {
  const mealObj = {
    Calories: "",
    Protein: "",
    Sodium: "",
    Fat: "",
    Sugar: "",
    Cholesterol: "",
  };

  const exerciseObj = {
    Reps: '',
    Miles: '',
    Minutes: '',
    Sets: '',
    Weight: ''
  }

  const [textInputType, setTextInputType] = useState<"meal" | "exercise">(
    "meal"
  );
  const [displaySearchArr, setDisplaySearchArr] = useState<[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [mealDataObj, setMealDataObj] = useState<any>([]);

  const handleProgramAdd = () => {
    console.log(mealDataObj);
  };

  useEffect(() => {
    console.log(mealDataObj);
  }, [mealDataObj]);

  return (
    <Card scrollable={false} containerClass={styles.container}>
      <Card scrollable={false} containerClass={styles.buttonsContainer}>
        <PhoneButton
          semiBold
          buttonContainerClass={styles.buttonContainer}
          buttonClass={[styles.button, styles.topLeftRadius, styles.right]}
          textClass={styles.buttonText}
          onPress={() => setTextInputType("exercise")}
          text="Exercise"
        />
        <PhoneButton
          semiBold
          buttonContainerClass={styles.buttonContainer}
          buttonClass={[styles.button, styles.topRightRadius, styles.left]}
          textClass={styles.buttonText}
          onPress={() => setTextInputType("meal")}
          text="Meal"
        />
      </Card>
      <Card scrollable={false} containerClass={styles.createContainer}>
        <AddInput name={setName} type={textInputType} />
      </Card>
      <Card scrollable={false} containerClass={styles.detailContainer}>
        <MealExerciseDetailsInput
          mealObject={textInputType === 'meal' ? mealObj : exerciseObj}
          array={textInputType === 'meal' ? mealProps : exerciseProps}
          name={name}
          onChange={setMealDataObj}
          type={textInputType === 'meal' ? 'meal' : 'exercise'}
        />
      </Card>
      <Card scrollable={false} containerClass={styles.addContainer}>
        <PhoneButton
          semiBold
          onPress={handleProgramAdd}
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
  container: {
    height: SetMargin(0.7),
    width: "100%",
    backgroundColor: "white",
    borderTopRightRadius: 35,
    borderTopLeftRadius: 35,
    elevation: 5,
  },
  topLeftRadius: {
    borderTopLeftRadius: 35,
  },
  topRightRadius: {
    borderTopRightRadius: 35,
  },
  left: {
    borderStyle: "solid",
    borderColor: "white",
    borderLeftWidth: 1,
  },
  right: {
    borderStyle: "solid",
    borderColor: "white",
    borderRightWidth: 1,
  },
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
    marginTop: SetMargin(0.04),
  },
  addButtonContainer: {
    width: "50%",
    alignSelf: "center",
  },
  addButton: {
    backgroundColor: "black",
    width: "100%",
    alignItems: "center",
    padding: 10,
    borderRadius: 40,
  },
  addButtonText: {
    fontSize: 28,
    letterSpacing: 0.8,
    color: "white",
  },
});
