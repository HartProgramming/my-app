import { StyleSheet } from "react-native";
import Card from "../../../../components/Card/Card";
import CardText from "../../../../components/Card/CardText";
import PhoneTextInput from "../../../../components/Inputs/PhoneTextInput";
import { useEffect, useState } from "react";
import SetMargin from "../../../../functions/SetMargin";
import { KeyboardAvoidingView } from "react-native";
import PhoneButton from "../../../../components/Inputs/PhoneButton";
import SearchInput from "../../../Journal/Components/Input/SearchInput";
import { displaySearchArr } from "../../../Journal/Screens/SearchExercise";
import InfoDeleteOptionalCard from "../Card/InfoDeleteOptionalCard";

export interface SearchEditModalProps {
    day: string
}

export default function SearchEditModal({day}: SearchEditModalProps) {
  const [textInputType, setTextInputType] = useState<"meal" | "exercise">(
    "meal"
  );
  const [inputValue, setInputValue] = useState<string>("");
  const [resultsObj, setResultsObj] = useState<any>([]);
  const [programAddObj, setProgramAddObj] = useState<any>([]);

  const handleChange = (event: string) => {
    setInputValue(event);
  };

  const handleProgramAdd = () => {
    console.log(programAddObj);
    /* Post Object to backend and alter the selected days program */
  };

  useEffect(() => {
    if (textInputType === "meal") {
      /* backend request for the meal part of the database */
    } else if (textInputType === "exercise") {
      /* backend request for the exercise part of the database */
    }
  }, [textInputType]);

  useEffect(() => {
    console.log(resultsObj);
    setProgramAddObj((prev: any) => [...resultsObj, ...prev]);
  }, [resultsObj]);

  useEffect(() => {
    console.log(programAddObj.map((item: any) => item));
  }, [programAddObj]);

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
      <Card scrollable={false} containerClass={styles.searchContainer}>
        <SearchInput
          resultObject={setResultsObj}
          displaySearch={displaySearchArr}
          value={setInputValue}
          placeholder={
            textInputType === "meal" ? "Search Meal" : "Search Exercise"
          }
        />
      </Card>
      <Card scrollable={false} containerClass={styles.resultsContainer}>
        <CardText
          semiBold
          text={`Add to ${day}`}
          container={styles.resultsHeaderContainer}
          textStyle={styles.resultsHeader}
        />
        <Card scrollable={true} containerClass={styles.hiddenResults}>
            <Card scrollable={true} containerClass={styles.overflowResults}>
            {programAddObj.length > 0 &&
            programAddObj.map((value: any) => (
              <InfoDeleteOptionalCard text={value.name} />
            ))}
            </Card>
         
        </Card>
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
  searchContainer: {
    width: "90%",
    alignSelf: "center",
  },
  resultsContainer: {
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 2,
    width: "90%",
    alignSelf: "center",
    marginTop: SetMargin(0.02),
    height: SetMargin(0.34),
  },
  resultsHeaderContainer: {},
  resultsHeader: {
    fontSize: 28,
    textAlign: "center",
    letterSpacing: 1,
    borderBottomWidth: 2,
  },
  hiddenResults: {
    overflow: 'hidden'
  },
  overflowResults: {
    maxHeight: 400
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
