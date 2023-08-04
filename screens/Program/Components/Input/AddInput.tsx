import { StyleSheet } from "react-native";
import Card from "../../../../components/Card/Card";
import PhoneTextInput from "../../../../components/Inputs/PhoneTextInput";
import PhoneButton from "../../../../components/Inputs/PhoneButton";
import { useState } from "react";
import SetMargin from "../../../../functions/SetMargin";

export interface AddInputProps {
  name: any;
  type: 'exercise' | 'meal'
}

export default function AddInput({ name, type }: AddInputProps) {
  const [inputValue, setInputValue] = useState<string>("");

  const handleAddName = () => {
    name(inputValue);
    setInputValue("");
  };

  const handleChange = (event: string) => {
    setInputValue(event);
  };

  return (
    <Card scrollable={false} containerClass={styles.createContainer}>
      <PhoneTextInput
        keyboardType="default"
        value={inputValue}
        secureTextEntry={false}
        onChange={handleChange}
        placeholder={type === "exercise" ? "Exercise" : "Meal"}
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
  );
}

const styles = StyleSheet.create({
  createContainer: {
    width: "90%",
    alignSelf: "center",
    flexDirection: "row",
    marginTop: SetMargin(0.03),
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
});
