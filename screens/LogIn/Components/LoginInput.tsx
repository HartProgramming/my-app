import { StyleSheet } from "react-native";
import PhoneTextInput from "../../../components/Inputs/PhoneTextInput";
import { useEffect, useState } from "react";
import SetMargin from "../../../functions/SetMargin";

interface LoginInputProps {
  placeholder: string;
  secureEntry: boolean;
  value: any;
  keyboardType: "email-address" | "default";
}

export default function LoginInput({
  keyboardType,
  value,
  placeholder,
  secureEntry,
}: LoginInputProps) {
  const [inputValue, setInputValue] = useState<string>("");

  const handleChange = (event: string) => {
    setInputValue(event);
    value(event);
  };

  useEffect(() => {
    console.log(inputValue);
  }, [inputValue]);
 
  return (
    <PhoneTextInput
      keyboardType={keyboardType}
      onChange={handleChange}
      value={inputValue}
      secureTextEntry={secureEntry}
      placeholder={placeholder}
      textClass={styles.text}
      inputClass={styles.input}
      inputContainerClass={styles.inputContainer}
      regular={true}
    />
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    marginTop: SetMargin(0.016),
    alignItems: "center",
    justifyContent: "center",
  },

  input: {
    borderRadius: 50,
    backgroundColor: "#f7f7f7",
    width: "100%",
    borderStyle: "solid",
    borderColor: "#8c52ff",
    borderWidth: 2,
    justifyContent: "center",
    height: SetMargin(0.08),
  },
  text: {
    fontSize: 20,
    justifyContent: "center",
  },
});
