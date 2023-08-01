import { StyleSheet } from "react-native";
import Card from "../../../../components/Card/Card";
import CardText from "../../../../components/Card/CardText";
import { useEffect, useState } from "react";
import PhoneButton from "../../../../components/Inputs/PhoneButton";
import SetMargin from "../../../../functions/SetMargin";
import PhoneTextInput from "../../../../components/Inputs/PhoneTextInput";
import NumberInput from "../../../../components/Inputs/NumberInput";
import { CreateExerciseMealProps } from "../Interfaces/CreateExerciseMealInterface";
import { mealProps } from "../../Arrays/CreateExerciseMealArrays";
import { endEvent } from "react-native/Libraries/Performance/Systrace";

export default function CreateEditModal() {
  const [textInputType, setTextInputType] = useState<string>("");
  const [displaySearchArr, setDisplaySearchArr] = useState<[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [numericInputValue, setNumericInputValue] = useState<string>("");
  const [focus, setFocus] = useState<string>("");
  const [calories, setCalories] = useState<string>("");
  const [protein, setProtein] = useState<string>("");
  const [sodium, setSodium] = useState<string>("");
  const [fat, setFat] = useState<string>("");
  const [cholesterol, setCholesterol] = useState<string>("");
  const [sugar, setSugar] = useState<string>("");
  const [mealDataObj, setMealDataObj] = useState<any>([]);

  const handleProgramAdd = () => {};

  const handleAddName = () => {
    setName(inputValue);
    setInputValue("");
  };

  const handleChange = (event: string) => {
    setInputValue(event);
  };

  const handleNumberChange = (event: string) => {
    if (focus === "Calories") {
      setNumericInputValue(event);
      setCalories(event);
    } else if (focus === "Protein") {
      setNumericInputValue(event);
      setProtein(event);
    } else if (focus === "Sodium") {
      setNumericInputValue(event);
      setSodium(event);
    } else if (focus === "Fat") {
      setNumericInputValue(event);
      setFat(event);
    } else if (focus === "Sugar") {
      setNumericInputValue(event);
      setSugar(event);
    } else if (focus === "Cholesterol") {
      setNumericInputValue(event);
      setCholesterol(event);
    }
  };

  const handleNumericFocus = (event: string) => {
    setFocus(event);
  };

  useEffect(() => {
    const mealObjectArray = [
      { title: name },
      { Calories: calories },
      { Protein: protein },
      { Sodium: sodium },
      {Sugar: sugar},
      {Cholesterol: cholesterol},
      {Fat: fat}
    ];
    setMealDataObj(mealObjectArray)
    console.log(mealObjectArray)
  }, [calories, protein, sodium, fat, sugar, cholesterol]);

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
        <PhoneTextInput
          keyboardType="default"
          value={inputValue}
          secureTextEntry={false}
          onChange={handleChange}
          placeholder={textInputType === "exercise" ? "Exercise" : "Meal"}
          inputContainerClass={styles.inputContainer}
          inputClass={styles.input}
          textClass={styles.inputText}
          medium
        />
        <PhoneButton
          semiBold
          text="Add"
          onPress={handleAddName}
          buttonContainerClass={styles.addNameButtonContainer}
          buttonClass={styles.addNameButton}
          textClass={styles.addNameButtonText}
        />
      </Card>
      <Card scrollable={false} containerClass={styles.detailContainer}>
        {textInputType === "meal" && (
          <Card scrollable={false} containerClass={styles.detailsContainer}>
            <CardText
              medium
              container={styles.detailLabelContainer}
              textStyle={styles.detailLabel}
              text="Name: "
            />
            <CardText
              container={styles.detailTextContainer}
              textStyle={styles.detailText}
              text={name}
            />
          </Card>
        )}
        {mealProps.map((value) => (
          <Card scrollable={false} containerClass={styles.detailsContainer}>
            <CardText
              medium
              container={styles.detailLabelContainer}
              textStyle={styles.detailLabel}
              text={value.label}
            />
            <NumberInput
              value={numericInputValue}
              onChange={handleNumberChange}
              placeholder={"0"}
              secureTextEntry={false}
              inputContainerClass={styles.numberInputContainer}
              inputClass={styles.numberInput}
              textClass={styles.numberInputText}
              key={value.label}
              onFocus={() => handleNumericFocus(value.label)}
            />
          </Card>
        ))}
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
    width: "90%",
    alignSelf: "center",
    flexDirection: "row",
    marginTop: SetMargin(0.03),
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
  inputContainer: {
    borderWidth: 2,
    width: "70%",
    backgroundColor: "rgba(0,0,0,.12)",
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
    alignSelf: "center",
    height: SetMargin(0.07),
  },
  input: {},
  inputText: {
    fontSize: 20,
  },
  addNameButtonContainer: {
    justifyContent: "center",
    backgroundColor: "black",
    width: "30%",
    alignItems: "center",
    height: SetMargin(0.07),
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
  },
  addNameButton: {},
  addNameButtonText: {
    color: "white",
    fontSize: 24,
  },

  detailContainer: {
    height: SetMargin(0.35),
    borderWidth: 2,
    width: "90%",
    alignSelf: "center",
    marginTop: SetMargin(0.02),
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  detailsContainer: {
    flexDirection: "row",
    borderWidth: 2,
    alignItems: "center",
  },
  detailLabelContainer: {
    borderWidth: 2,
    width: "40%",
  },
  detailLabel: {
    fontSize: 20,
  },
  detailTextContainer: {
    width: "60%",
    borderWidth: 2,
  },
  detailText: {
    fontSize: 22,
  },
  numberInputContainer: {},
  numberInput: {},
  numberInputText: {
    fontSize: 22,
  },
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
