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
import CreateRegimenInput from "../../../../components/Inputs/CreateRegimenInput";
import { AntDesign } from "@expo/vector-icons";


export interface SearchEditModalProps {
  day: string;
  modalType: "program" | "journal";
  textInputType: "meal" | "exercise";
  close: any;
  data: any;
}

export default function SearchEditModal({
  day,
  modalType,
  textInputType,
  close,
  data
}: SearchEditModalProps) {
  const [inputType, setInputType] = useState<"meal" | "exercise">("meal");
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
    data(resultsObj)
  }, [resultsObj]);

  useEffect(() => {
  }, [programAddObj]);

  return (
    <Card scrollable={false} containerClass={styles.container}>
      {modalType === "journal" && (
        <Card scrollable={false} containerClass={styles.buttonsContainer}>
          <PhoneButton
            semiBold
            buttonContainerClass={styles.buttonContainer}
            buttonClass={[styles.button, styles.topLeftRadius, styles.right]}
            textClass={styles.buttonText}
            onPress={() => setInputType("exercise")}
            text="Exercise"
          />
          <PhoneButton
            semiBold
            buttonContainerClass={styles.buttonContainer}
            buttonClass={[styles.button, styles.topRightRadius, styles.left]}
            textClass={styles.buttonText}
            onPress={() => setInputType("meal")}
            text="Meal"
          />
        </Card>
      )}
     <Card scrollable={false} containerClass={styles.regimenInputContainer}>
     <CreateRegimenInput setData={setResultsObj} inputType={textInputType} addNameType={'search'} />

     </Card>
      <Card scrollable={false} containerClass={styles.closeContainer}>
        <AntDesign
          onPress={() => close(false)}
          name="closecircle"
          size={40}
          color={"black"}
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
    marginTop: SetMargin(.04)
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
    overflow: "hidden",
  },
  overflowResults: {
    maxHeight: 400,
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
  closeContainer: {
    width: '90%',
    alignSelf: 'center',
    alignItems: 'flex-end'
  },
  regimenInputContainer: {
    marginTop: SetMargin(.09),
  }
});
