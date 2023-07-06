import { useFocusEffect, useNavigation } from "@react-navigation/native";
import Card from "../../components/Card/Card";
import { StyleSheet } from "react-native";
import { Text } from "react-native";
import PhoneTextInput from "../../components/Inputs/PhoneTextInput";
import { useEffect, useState, useRef } from "react";
import PhoneButton from "../../components/Inputs/PhoneButton";
import { FlatList } from "react-native";
import { userAgent } from "next/server";

interface SearchResults {
  label: string;
  item: string;
  index: number;
}

interface CriteriaMeal {
  name: string | undefined;
  brand?: string | undefined;
  ounces?: string | undefined;
  calories: string | undefined;
  protein: string | undefined;
  key: string | undefined;
}

interface CriteriaExercise {
  name: string | undefined;
  reps?: string | undefined;
  miles?: string | undefined;
  minutes?: string | undefined;
  key: string | undefined;
}

const exerciseRecentArray: CriteriaExercise[] = [
  { name: "Jogging", miles: "3", key: "Jogging3" },
];

const mealRecentArray: CriteriaMeal[] = [
  { name: "Stir Fry", calories: "500", protein: "20", key: "StirFriy500" },
];

const searchResultsArray: SearchResults[] = [
  { label: "Abs", item: "Abs", index: 1 },
  { label: "greek", item: "greek", index: 2 },
  { label: "tulips", item: "tulips", index: 3 },
  { label: "Seafood", item: "Seafood", index: 4 },
];

export default function InsertRegimen() {
  interface CreateLabels {
    label: string;
    key: number;
    placeholder: string;
    input: any;
  }

  const [inputMealBoo, setInputMealBoo] = useState<boolean>(true);
  const [searchEntry, setSearchEntry] = useState<string>("");
  const [selectedSearchButton, setSelectedSearchButton] =
    useState<boolean>(true);
  const [searchBoo, setSearchBoo] = useState<boolean>(true);
  const [selectedSearchCreateButton, setSelectedSearchCreatedButton] =
    useState<boolean>(true);
  const [searchResult, setSearchResult] = useState<boolean>(false);
  const [listResults, setListResults] = useState<any>();
  const [searchResultBoo, setSearchResultBoo] = useState<boolean>(false);
  const [displaySearch, setDisplaySearch] = useState<any>();
  const [displayRecentResult, setDisplayRecentResult] = useState<any>([]);
  const [mostRecentMealBoo, setMostRecentMealBoo] = useState<boolean>();
  const [displayCreateLabels, setDisplayCreateLabels] = useState<any>([]);

  const [mealCreateEntry, setMealCreateEntry] = useState<string>("");
  const [brandCreateEntry, setBrandCreateEntry] = useState<string>("");
  const [ouncesCreateEntry, setOuncesCreateEntry] = useState<string>("");
  const [caloriesCreateEntry, setCaloriesCreateEntry] = useState<string>("");
  const [proteinCreateEntry, setProteinCreateEntry] = useState<string>("");
  const [exerciseCreateEntry, setExerciseCreateEntry] = useState<string>();
  const [repsCreateEntry, setRepsCreateEntry] = useState<string>("");
  const [milesCreateEntry, setMilesCreateEntry] = useState<string>("");
  const [minutesCreateEntry, setMinutesCreateEntry] = useState<string>("");

  const [createMealEntryData, setCreateMealEntryData] = useState<any>([]);
  const [createExerciseEntryData, setCreateExerciseEntryData] = useState<any>(
    []
  );
  const [focusInput, setFocusInput] = useState<any>();

  const mealCreateArray: CreateLabels[] = [
    {
      label: "Enter Meal",
      key: 1,
      placeholder: "Meal",
      input: useRef("mealInput"),
    },
    {
      label: "Enter Brand",
      key: 2,
      placeholder: "Brand",
      input: useRef("brandInput"),
    },
    {
      label: "Enter Ounces",
      key: 3,
      placeholder: "Oz",
      input: useRef("ouncesInput"),
    },
    {
      label: "Enter Calories",
      key: 4,
      placeholder: "Kcal",
      input: useRef("caloriesInput"),
    },
    {
      label: "Enter Protein",
      key: 5,
      placeholder: "Protein",
      input: useRef("proteinInput"),
    },
  ];

  const exerciseCreateArray: CreateLabels[] = [
    {
      label: "Enter Name",
      key: 1,
      placeholder: "Exercise",
      input: useRef("exerciseInput"),
    },
    {
      label: "Enter Reps",
      key: 2,
      placeholder: "Reps",
      input: useRef("repsInput"),
    },
    {
      label: "Enter Miles",
      key: 3,
      placeholder: "Miles",
      input: useRef("milesInput"),
    },
    {
      label: "Enter Minutes",
      key: 4,
      placeholder: "Minutes",
      input: useRef("minutesInput"),
    },
  ];

  const handleCreateButton = (event: any) => {};

  const handleFocus = (event: any) => {
    setFocusInput(event.current);
    if (event.current === "mealInput") {
      setFocusInput(event.current);
    } else if (event.current === "brandInput") {
      setFocusInput(event.current);
    } else if (event.current === "ouncesInput") {
      setFocusInput(event.current);
    } else if (event.current === "caloriesInput") {
      setFocusInput(event.current);
    } else if (event.current === "proteinInput") {
      setFocusInput(event.current);
    } else if (event.current === "exerciseInput") {
      setFocusInput(event.current);
    } else if (event.current === "repsInput") {
      setFocusInput(event.current);
    } else if (event.current === "milesInput") {
      setFocusInput(event.current);
    } else if (event.current === "minutesInput") {
      setFocusInput(event.current);
    }
    console.log(event);
  };

  const handleChange = (event: string) => {
    console.log(focusInput);
    console.log(event);
    if (searchBoo) {
      setSearchEntry("");
      if (inputMealBoo) {
        setSearchEntry(event);
      } else if (!inputMealBoo) {
        setSearchEntry(event);
      }
    } else if (!searchBoo) {
      if (selectedSearchButton) {
        if (focusInput === "mealInput") {
          setMealCreateEntry(event);
        } else if (focusInput === "brandInput") {
          setBrandCreateEntry(event);
        } else if (focusInput === "caloriesInput") {
          if (!Number(event)) {
            console.log("hi");
            setCaloriesCreateEntry("Please Insert a Number");
          } else {
            setCaloriesCreateEntry(event);
          }
        } else if (focusInput === "proteinInput") {
          if (!Number(event)) {
            setProteinCreateEntry("");
          } else {
            setProteinCreateEntry(event);
          }
        } else if (focusInput === "ouncesInput") {
          if (!Number(event)) {
            setOuncesCreateEntry("");
          } else {
            setOuncesCreateEntry(event);
          }
        }
      } else if (!selectedSearchButton) {
        if (focusInput === "exerciseInput") {
          setExerciseCreateEntry(event);
        } else if (focusInput === "repsInput") {
          if (!Number(event)) {
            setRepsCreateEntry("");
          } else {
            setRepsCreateEntry(event);
          }
        } else if (focusInput === "milesInput") {
          if (!Number(event)) {
            setMilesCreateEntry("");
          } else {
            setMilesCreateEntry(event);
          }
        } else if (focusInput === "minutesInput") {
          if (!Number(event)) {
            setMinutesCreateEntry("");
          } else {
            setMinutesCreateEntry(event);
          }
        }
      }
    }
  };

  useEffect(() => {
    setDisplayRecentResult(
      selectedSearchButton ? mealRecentArray : exerciseRecentArray
    );
  }, []);

  useEffect(() => {
    setDisplayCreateLabels(
      selectedSearchButton ? mealCreateArray : exerciseCreateArray
    );
    setSearchResult(searchEntry.length > 1 ? true : false);
    setDisplaySearch(
      searchResult
        ? searchResultsArray.some((value) =>
            value.label.toLowerCase().includes(searchEntry.toLowerCase())
          )
          ? searchResultsArray.filter((value) =>
              value.label.toLowerCase().includes(searchEntry.toLowerCase())
            )
          : [{ label: "No Results", index: "No Results" }]
        : [{ label: "No Results" }]
    );
  }, [searchEntry, searchResult]);

  useEffect(() => {
    const mealDataArray: CriteriaMeal[] = [
      {
        name: mealCreateEntry,
        protein: proteinCreateEntry,
        calories: caloriesCreateEntry,
        ounces: ouncesCreateEntry,
        brand: brandCreateEntry,
        key:
          mealCreateEntry +
          proteinCreateEntry +
          caloriesCreateEntry +
          brandCreateEntry,
      },
    ];
    setCreateMealEntryData(mealDataArray);
  }, []);

  useEffect(() => {
    const exerciseDataArray: CriteriaExercise[] = [
      {
        name: exerciseCreateEntry,
        reps: repsCreateEntry,
        minutes: minutesCreateEntry,
        miles: milesCreateEntry,
        key:
          exerciseCreateEntry +
          minutesCreateEntry +
          repsCreateEntry +
          milesCreateEntry,
      },
    ];
    setCreateExerciseEntryData(exerciseDataArray);
  }, []);

  useEffect(() => {
    setMostRecentMealBoo(true);
    setDisplayCreateLabels(
      selectedSearchButton ? mealCreateArray : exerciseCreateArray
    );
    setDisplayRecentResult(
      selectedSearchButton ? mealRecentArray : exerciseRecentArray
    );
    console.log(selectedSearchButton);
    console.log(displayCreateLabels);
  }, [selectedSearchButton]);

  const handleButtonSwitch = (event: string) => {
    console.log(event);
    if (event === "Search") {
      setSelectedSearchCreatedButton(true);
      setSearchBoo(true);
    } else if (event === "Create") {
      setSelectedSearchCreatedButton(false);
      setSearchBoo(false);
    } else if (event === "Search Meal") {
      setSelectedSearchButton(true);
      setInputMealBoo(true);
    } else if (event === "Search Exercise") {
      setSelectedSearchButton(false);
      setInputMealBoo(false);
    } else if (event === "Create Meal") {
      setSelectedSearchButton(true);
    } else if (event === "Create Exercise") {
      setSelectedSearchButton(false);
    }
  };

  return (
    <Card containerClass={styles.container} scrollable={true}>
      <Text style={styles.header}>Insert Regimens</Text>
      <Card scrollable={false} containerClass={styles.menuContainer}>
        <Card scrollable={false} containerClass={styles.menuButtonsContainer}>
          <PhoneButton
            buttonClass={
              selectedSearchCreateButton
                ? styles.selectedMenuButton
                : styles.menuButton
            }
            buttonContainerClass={
              selectedSearchCreateButton
                ? styles.selectedMenuButtonContainer
                : styles.menuButtonContainer
            }
            text="Search"
            textClass={
              selectedSearchCreateButton
                ? styles.selectedMenuText
                : styles.menuText
            }
            onPress={() => handleButtonSwitch("Search")}
          ></PhoneButton>
          <PhoneButton
            buttonClass={
              selectedSearchCreateButton
                ? styles.menuButton
                : styles.selectedMenuButton
            }
            buttonContainerClass={
              selectedSearchCreateButton
                ? styles.menuButtonContainer
                : styles.selectedMenuButtonContainer
            }
            text="Create"
            textClass={
              selectedSearchCreateButton
                ? styles.menuText
                : styles.selectedMenuText
            }
            onPress={() => handleButtonSwitch("Create")}
          ></PhoneButton>
        </Card>
      </Card>
      <Card scrollable={false} containerClass={styles.searchContainer}>
        {searchBoo && (
          <>
            <Card
              scrollable={false}
              containerClass={styles.searchButtonsContainer}
            >
              <PhoneButton
                buttonClass={
                  selectedSearchButton
                    ? styles.selectedSearchButton
                    : styles.searchButton
                }
                buttonContainerClass={
                  selectedSearchButton
                    ? styles.selectedSearchButtonContainer
                    : styles.searchButtonContainer
                }
                text="Search Meal"
                textClass={
                  selectedSearchButton
                    ? styles.selectedSearchText
                    : styles.searchText
                }
                onPress={() => handleButtonSwitch("Search Meal")}
              />
              <PhoneButton
                buttonClass={
                  !selectedSearchButton
                    ? styles.selectedSearchButton
                    : styles.searchButton
                }
                buttonContainerClass={
                  !selectedSearchButton
                    ? styles.selectedSearchButtonContainer
                    : styles.searchButtonContainer
                }
                text="Search Exercise"
                textClass={
                  !selectedSearchButton
                    ? styles.selectedSearchText
                    : styles.searchText
                }
                onPress={() => handleButtonSwitch("Search Exercise")}
              />
            </Card>
            <Card scrollable={false} containerClass={styles.resultsContainer}>
              <PhoneTextInput
                keyboardType="default"
                secureTextEntry={false}
                value={searchEntry}
                placeholder={inputMealBoo ? "Search Meal" : "Search Exercise"}
                textClass={styles.text}
                inputClass={styles.input}
                inputContainerClass={styles.inputContainer}
                onChange={handleChange}
              />
              <Card
                scrollable={false}
                containerClass={styles.noScrollResultsContainer}
              >
                <Card
                  scrollable={true}
                  containerClass={styles.resultsContainer}
                >
                  {searchResult &&
                    displaySearch.map((value: any) => {
                      return (
                        <Card
                          scrollable={false}
                          containerClass={styles.resultsTextContainer}
                        >
                          <Text style={styles.resultText}>{value.label}</Text>
                        </Card>
                      );
                    })}
                </Card>
              </Card>
            </Card>
          </>
        )}
        {!searchBoo && (
          <>
            <Card
              scrollable={false}
              containerClass={styles.searchButtonsContainer}
            >
              <PhoneButton
                buttonClass={
                  selectedSearchButton
                    ? styles.selectedSearchButton
                    : styles.searchButton
                }
                buttonContainerClass={
                  selectedSearchButton
                    ? styles.selectedSearchButtonContainer
                    : styles.searchButtonContainer
                }
                text="Create Meal"
                textClass={
                  selectedSearchButton
                    ? styles.selectedSearchText
                    : styles.searchText
                }
                onPress={() => handleButtonSwitch("Create Meal")}
              />
              <PhoneButton
                buttonClass={
                  !selectedSearchButton
                    ? styles.selectedSearchButton
                    : styles.searchButton
                }
                buttonContainerClass={
                  !selectedSearchButton
                    ? styles.selectedSearchButtonContainer
                    : styles.searchButtonContainer
                }
                text="Create Exercise"
                textClass={
                  !selectedSearchButton
                    ? styles.selectedSearchText
                    : styles.searchText
                }
                onPress={() => handleButtonSwitch("Create Exercise")}
              />
            </Card>
            <Card
              scrollable={false}
              containerClass={styles.createLabelsContainer}
            >
              {displayCreateLabels.map((value: any) => {
                return (
                  <Card
                    scrollable={false}
                    containerClass={styles.insertDataContainer}
                  >
                    <Text style={styles.createLabel}>{value.label}</Text>
                    <PhoneTextInput
                      keyboardType="default"
                      onFocus={() => handleFocus(value.input)}
                      ref={value.input}
                      secureTextEntry={false}
                      value={
                        value.label === "Enter Meal"
                          ? mealCreateEntry
                          : value.label === "Enter Brand"
                          ? brandCreateEntry
                          : value.label === "Enter Ounces"
                          ? ouncesCreateEntry
                          : value.label === "Enter Calories"
                          ? caloriesCreateEntry
                          : value.label === "Enter Protein"
                          ? proteinCreateEntry
                          : value.label === "Enter Name"
                          ? exerciseCreateArray
                          : value.label === "Enter Reps"
                          ? repsCreateEntry
                          : value.label === "Enter Miles"
                          ? milesCreateEntry
                          : value.label === "Enter Minutes"
                          ? minutesCreateEntry
                          : ""
                      }
                      placeholder={value.placeholder}
                      textClass={styles.createInputText}
                      inputClass={styles.createInput}
                      inputContainerClass={styles.createInputContainer}
                      onChange={handleChange}
                    />
                  </Card>
                );
              })}
            </Card>
          </>
        )}

        <Card scrollable={false} containerClass={styles.displayRecentContainer}>
          <Card
            scrollable={false}
            containerClass={styles.recentHeaderContainer}
          >
            <Text style={styles.recentHeader}>
              Most Recent {`${mostRecentMealBoo ? "Meal" : "Exercise"}`}
            </Text>
          </Card>
          <Card scrollable={false} containerClass={styles.recentInputContainer}>
            {mostRecentMealBoo &&
              displayRecentResult.map((value: any) => {
                return (
                  <Card
                    key={value.key}
                    scrollable={false}
                    containerClass={styles.recentConsumedContainer}
                  >
                    <Text>Recent Meal: {value.name} </Text>
                    {value.brand !== undefined && <Text>{value.brand}</Text>}
                    {value.ounces !== undefined && <Text>{value.ounces}</Text>}
                    <Text>Calories: {value.calories} kcal</Text>
                    <Text>Protein: {value.protein}g</Text>
                  </Card>
                );
              })}
            {!mostRecentMealBoo
              ? displayRecentResult.map((value: any) => {
                  return (
                    <Card
                      scrollable={false}
                      containerClass={styles.recentConsumedContainer}
                    >
                      <Text>Reacent Exercise: {value.name}</Text>
                      {value.reps !== undefined && (
                        <Text>Reps: {value.reps}</Text>
                      )}
                      {value.miles !== undefined && (
                        <Text>Miles: {value.miles}</Text>
                      )}
                      {value.minutes !== undefined && (
                        <Text>Minutes: {value.minutes}</Text>
                      )}
                    </Card>
                  );
                })
              : null}
          </Card>
        </Card>
      </Card>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    fontSize: 28,
    marginBottom: 15,
  },
  menuContainer: {
    alignItems: "center",
  },
  menuButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "90%",
  },
  menuButtonContainer: {
    width: "50%",
  },
  menuButton: {
    backgroundColor: "#8c52ff",
    alignItems: "center",
    padding: 10,
    borderRadius: 35,
  },
  menuText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  selectedMenuButtonContainer: {
    width: "50%",
  },
  selectedMenuButton: {
    backgroundColor: "white",
    alignItems: "center",
    padding: 10,
    borderRadius: 35,
    borderStyle: "solid",
    borderColor: "#8c52ff",
    borderWidth: 4,
  },
  selectedMenuText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#8c52ff",
  },
  searchContainer: {
    alignSelf: "center",
    borderWidth: 1,
    borderStyle: "solid",
    width: "90%",
    marginTop: 15,
  },
  searchButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    alignItems: "center",
    borderColor: "#8c52ff",
    borderWidth: 3,
    borderStyle: "solid",
  },
  selectedSearchButtonContainer: {
    borderStyle: "solid",
    borderColor: "#8c52ff",
    width: "50%",
  },
  selectedSearchButton: {
    padding: 7,
    backgroundColor: "white",
  },
  searchButtonContainer: {
    width: "50%",
    borderStyle: "solid",
    borderColor: "white",
    borderWidth: 1,
  },
  searchButton: {
    padding: 7,
    backgroundColor: "#8c52ff",
  },
  searchText: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
  selectedSearchText: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    color: "#8c52ff",
  },
  noScrollResultsContainer: {
    position: "relative",
    zIndex: 1,
    maxHeight: 200,
    borderWidth: 1,
    borderColor: "#8c52ff",
    backgroundColor: "#fff",
    width: "90%",
    alignSelf: "center",
    marginTop: 5,
  },
  resultsContainer: {
    maxHeight: 180,
  },
  resultsTextContainer: {
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "white",
    backgroundColor: "#e2e2e2",
  },
  resultText: {
    fontSize: 22,
    fontWeight: "bold",
  },
  inputContainer: {
    width: "90%",
    alignSelf: "center",
    marginTop: 20,
  },
  input: {
    backgroundColor: "#e2e2e2",
    borderRadius: 35,
    padding: 15,
  },
  text: {
    fontSize: 18,
    textAlign: "left",
  },
  displayRecentContainer: {
    borderStyle: "solid",
    borderColor: "#8c52ff",
    borderWidth: 3,
  },
  recentHeaderContainer: {
    alignItems: "center",
  },
  recentHeader: {
    fontSize: 20,
    color: "#8c52ff",
  },
  recentInputContainer: {
    alignItems: "center",
  },
  insertDataContainer: {
    alignItems: "center",
    flexDirection: "row",
    width: "95%",
    justifyContent: "space-around",
    marginTop: 10,
  },
  createInputContainer: {
    width: "60%",
    alignSelf: "center",
  },
  createInput: {
    backgroundColor: "#e2e2e2",
    borderRadius: 35,
    padding: 10,
  },
  createInputText: {
    fontSize: 18,
    textAlign: "left",
  },
  createLabel: {
    fontSize: 20,
    fontWeight: "bold",
  },
  recentConsumedContainer: {
    alignItems: "flex-start",
    justifyContent: "center",
  },
  createLabelsContainer: {},
});
