import { StyleSheet } from "react-native";
import Card from "../../../../components/Card/Card";
import PhoneTextInput from "../../../../components/Inputs/PhoneTextInput";
import { useEffect, useState } from "react";
import CardText from "../../../../components/Card/CardHeader";
import { FontAwesome } from "@expo/vector-icons";
import SetMargin from "../../../../functions/SetMargin";
import SearchResultText from "../../../../components/Inputs/SearchResultText";
import { Text } from "react-native";
import ReusableDetails from "../../../Details/ReusableDetails";

interface SearchInputProps {
  placeholder: string;
  value: any;
  displaySearch: any;
  resultObject: any;
}

export default function SearchInput({
  placeholder,
  value,
  displaySearch,
  resultObject,
}: SearchInputProps) {
  const [inputValue, setInputValue] = useState<string>("");
  const [displaySearchResults, setDisplaySearchResults] = useState<[]>([]);
  const [resultsDataObj, setResultsDataObj] = useState<any>();

  const handleChange = (event: string) => {
    setInputValue(event);
    value(event);
  };

  const handleResult = () => {
    resultObject(resultsDataObj)
    setInputValue('')
  };

  useEffect(() => {
    setDisplaySearchResults(
      inputValue.length > 1
        ? displaySearch.some((value: any) =>
            value.name.toLowerCase().includes(inputValue.toLowerCase())
          )
          ? displaySearch.filter((value: any) =>
              value.name.toLowerCase().includes(inputValue.toLowerCase())
            )
          : [{ name: "No Results", index: "No Results" }]
        : [{ name: "No Results" }]
    );
    setResultsDataObj(displaySearchResults)
  }, [inputValue]);

  const searchIcon = (
    <Card scrollable={false} containerClass={styles.iconContainer}>
      <FontAwesome style={styles.icon} name="search" size={24} color="black" />
    </Card>
  );

  return (
    <Card scrollable={false} containerClass={styles.inputContainer}>
      <PhoneTextInput
        secureTextEntry={false}
        keyboardType="default"
        value={inputValue}
        onChange={handleChange}
        inputContainerClass={styles.inputContainer}
        inputClass={styles.input}
        textClass={styles.text}
        placeholder={placeholder}
        children={searchIcon}
      />
      <Card scrollable={false} containerClass={styles.noScrollResultsContainer}>
        <Card scrollable={true} containerClass={styles.inputContainer}>
          {inputValue.length > 0 &&
            displaySearchResults.map((value: any) => {
              return (
                <SearchResultText
                  container={styles.input}
                  onPress={() => handleResult()}
                >
                  <Text>{value.name}</Text>
                </SearchResultText>
              );
            })}
        </Card>
      </Card>
    </Card>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    width: "85%",
    alignSelf: "center",
    marginTop: SetMargin(0.01),
  },
  input: {
    backgroundColor: "#e5e5e5",
    borderRadius: 15,
    flexDirection: "row-reverse",
    justifyContent: "flex-end",
    overflow: "hidden",
  },
  text: {
    fontSize: 18,
    position: "relative",
    marginLeft: SetMargin(0.02),
  },
  resultsContainer: {
    maxHeight: 180,
  },
  iconContainer: {
    width: "20%",
    borderColor: "blue",
    borderWidth: 2,
    borderStyle: "solid",
    alignItems: "center",
    backgroundColor: "gray",
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    padding: 15,
  },
  icon: {},
  noScrollResultsContainer: {
    position: "relative",
    zIndex: 1,
    maxHeight: 200,
    width: "90%",
    alignSelf: "center",
  },
  resultsTextContainer: {
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "white",
  },
  resultText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "red",
  },
});
