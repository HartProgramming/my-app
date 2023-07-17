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
    />
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    alignSelf: "center",
    width: '75%'
  },
  input: {
    borderRadius: 50,
    margin: 10,
    backgroundColor: "#f7f7f7",
    width: "100%",
    height: SetMargin(0.08),
    borderStyle: "solid",
    borderColor: "#8c52ff",
    borderWidth: 2,
    justifyContent: "center",
  },
  text: {
    fontSize: 21,
    textAlign: 'left',
    marginLeft: SetMargin(.02)
  },
});
