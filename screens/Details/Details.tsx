import { View, Text } from "react-native";
import NumberInput from "../../components/Inputs/NumberInput";
import { Picker } from "@react-native-picker/picker";
import React, {
  MutableRefObject,
  useEffect,
  useRef,
  useState,
  forwardRef,
} from "react";
import { StyleSheet } from "react-native";
import PhoneButton from "../../components/Inputs/PhoneButton";
import { Dimensions } from "react-native";
import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Card from "../../components/Card/Card";
import { StyleProp, ViewStyle } from "react-native";
import { CheckBox } from "react-native-elements";
import MobileSelector from "../../components/Inputs/MobileSelector";

interface DetailsProps {
  button: any;
  submitGoBackContainer: boolean;
  submitGoBackStyle: StyleProp<ViewStyle>;
  globalDetails: boolean;
  changeHeader: boolean;
}

export default function Details({
  changeHeader,
  globalDetails,
  button,
  submitGoBackContainer,
  submitGoBackStyle,
}: DetailsProps) {
  const screenHeight = Dimensions.get("window").height;

  const navigation = useNavigation();

  interface Data {
    age: any;
    muscle: any;
    weight: any;
    weightGoal: any;
    weeks: any;
    height: any;
    protein: number;
    calories: number;
    protcal: number;
    schedule: string[];
    numberDays: number;
    water: number;
  }

  const label: Label = {
    age: "Current Age (yrs): ",
    height: "Current Height (ft,in): ",
    weight: "Current Weight (lbs): ",
    weightGoal: "Ideal Weight (lbs): ",
    muscle: "Muscle Mass Gain: ",
    sex: "Sex: ",
    lifestyle: "Lifestyle: ",
    calorieLoss: "Calorie Burn Rate: ",
    days: "Most Active Days: ",
  };

  interface Label {
    age: string;
    height: string;
    weight: string;
    weightGoal: string;
    muscle: string;
    sex: string;
    lifestyle: string;
    calorieLoss: string;
    days: string;
  }

  interface DropdownInfo {
    label: string;
    value?: string;
    ref?: MutableRefObject<string> | undefined;
    checked?: boolean;
    id?: number;
  }

  const checkboxDaysArr: DropdownInfo[] = [
    { id: 1, label: "Monday", ref: useRef<string>("Monday"), checked: false },
    { id: 2, label: "Tuesday", ref: useRef<string>("Tuesday"), checked: false },
    {
      id: 3,
      label: "Wednesday",
      ref: useRef<string>("Wednesday"),
      checked: false,
    },
    {
      id: 4,
      label: "Thursday",
      ref: useRef<string>("Thursday"),
      checked: false,
    },
    { id: 5, label: "Friday", ref: useRef<string>("Friday"), checked: false },
    {
      id: 6,
      label: "Saturday",
      ref: useRef<string>("Saturday"),
      checked: false,
    },
    { id: 7, label: "Sunday", ref: useRef<string>("Sunday"), checked: false },
  ];

  const [ageArr, setAgeArr]: any = useState();
  const [weightArr, setWeightArr]: any = useState();
  const [weightGoalArr, setWeightGoalArr]: any = useState();
  const [feetArr, setFeetArr]: any = useState();
  const [inchesArr, setInchesArr]: any = useState();
  const [muscleArr, setMuscleArr]: any = useState();
  const [weeksArr, setWeeksArr]: any = useState();
  const [sexArr, setSexArr]: any = useState();
  const [lifestyleArr, setLifestyleArr]: any = useState();
  const [calorieLossArr, setCalorieLossArr]: any = useState();
  const [muscle, setMuscle] = useState<string>("");
  const [inches, setInches] = useState<string>("");
  const [feet, setFeet] = useState<string>("");
  const [weeks, setWeeks] = useState<number>(0);
  const [weightGoal, setWeightGoal] = useState<string>("");
  const [weight, setWeight] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [sex, setSex] = useState<string>("");
  const [lifestyle, setLifestyle] = useState<string>("");
  const [data, setData] = useState<object>({});
  const [bmr, setBmr] = useState<number>(0);
  const [tdee, setTdee] = useState<number>(0);
  const [calorieLoss, setCalorieLoss] = useState<string>("");
  const [proteinIntakeDaily, setProteinIntakeDaily] = useState<number>(0);
  const [calories, setCalories] = useState<number>(0);
  const [protcal, setProtcal] = useState<number>(0);
  const [lowestLevelCalories, setLowestLevelCalories] = useState<number>(0);
  const [checked, setChecked] = useState<boolean>(false);
  const [checkboxArr, setCheckBoxArr] = useState<any[]>(checkboxDaysArr);
  const [currentDay, setCurrentDay] = useState<any>("");
  const [checkboxElement, setCheckboxElement] = useState<any>();
  const [numberDaysExercised, setNumberDaysExercised] = useState<any>([]);
  const [exerciseSchedule, setExerciseSchedule] = useState<any>([]);
  const [water, setWater] = useState<number>(0);

  function generateNumbersArray(cat: string, num: number) {
    let arr: number[] = [];
    if (cat === "weight") {
      for (let i = 70; i <= num; i++) {
        arr.push(i);
      }
      return arr;
    } else if (cat === "age") {
      for (let i = 18; i <= num; i++) {
        arr.push(i);
      }
      return arr;
    } else if (cat === "feet") {
      for (let i = 4; i <= num; i++) {
        arr.push(i);
      }
      return arr;
    } else if (cat === "inches") {
      for (let i = 0; i <= num; i++) {
        arr.push(i);
      }
      return arr;
    } else if (cat === "weeks") {
      for (let i = 5; i <= num; i++) {
        arr.push(i);
      }
      return arr;
    } else if (cat === "muscle") {
      const muscleArr: DropdownInfo[] = [
        { label: "Maintain: 0.8g Protein/lb", value: "Maintain" },
        { label: "Gain: 1g Protein/lb", value: "Gain" },
        { label: "Extreme 1.2g Protein/lb", value: "Extreme" },
      ];
      return muscleArr;
    } else if (cat === "sex") {
      const sexArr: DropdownInfo[] = [
        { value: "Female", label: "Female" },
        { value: "Male", label: "Male" },
      ];
      return sexArr;
    } else if (cat === "lifestyle") {
      const lifestyleArr: DropdownInfo[] = [
        { value: "Sedentary", label: "Sedentary: No Exercise" },
        { value: "Light", label: "Light: Light Exercise 1-3 days/week" },
        {
          value: "Moderate",
          label: "Moderate: Moderate Exercise 3-5 days/week",
        },
        { value: "Active", label: "Active: Active Exercise 6-7 days/week" },
        {
          value: "Extreme",
          label: "Extreme: Extreme Exercise and Physical Job",
        },
      ];

      return lifestyleArr;
    } else if (cat === "calorie-loss") {
      let calorieLossArr: string[] = [];
      return (calorieLossArr = ["Maintain", "Light", "Moderate", "Extreme"]);
    }
  }

  function generateItemsPicker(func: any) {
    interface Items {
      label: string;
      value: string;
    }
    let itemsArr: Items[] = [];
    for (let x of func) {
      itemsArr.push(
        x.label === undefined
          ? { label: `${x}`, value: `${x}` }
          : { label: `${x.label}`, value: `${x.value}` }
      );
    }
    return itemsArr;
  }

  const handleAge = (event: string) => {
    setAge(event);
  };

  const handleFeet = (event: string) => {
    setFeet(event);
  };

  const handleInches = (event: string) => {
    setInches(event);
  };

  const handleWeight = (event: string) => {
    setWeight(event);
  };

  const handleWeightGoal = (event: string) => {
    setWeightGoal(event);
  };

  const handleMuscle = (event: string) => {
    setMuscle(event);
  };

  const handleSex = (event: string) => {
    setSex(event);
  };

  const handleLifestyle = (event: string) => {
    setLifestyle(event);
  };

  const handleCalorieLoss = (event: string) => {
    setCalorieLoss(event);
  };

  const handleCheck = (checkboxId: any) => {
    setCheckBoxArr((prevCheckboxes) =>
      prevCheckboxes.map((checkbox) => {
        if (checkbox.id === checkboxId) {
          return { ...checkbox, checked: !checkbox.checked };
        }
        return checkbox;
      })
    );
  };

  const handleSubmit = () => {
    console.log(data);
    /*
    if (data.calories === 0) {
      console.log("calories");
    }else if(data.water === 0){
      console.log('water')
    }
    */
   navigation.navigate('User Colors')
  };

  useEffect(() => {
    console.log(currentDay);
    console.log(checkboxArr);
    setExerciseSchedule(
      checkboxArr.filter((value: any) => value.checked === true)
    );
    console.log(exerciseSchedule);
  }, [checkboxArr]);

  useEffect(() => {
    setCheckBoxArr(checkboxDaysArr);
  }, []);

  useEffect(() => {
    if (sex === "Male") {
      setBmr(
        66.47 +
          6.24 * parseFloat(weight) +
          12.7 * (parseFloat(inches) + parseFloat(feet) * 12) -
          6.755 * parseFloat(age)
      );
    } else if (sex === "Female") {
      setBmr(
        655.1 +
          4.35 * parseFloat(weight) +
          (4.7 * (parseFloat(inches) + parseFloat(feet) * 12) -
            4.7 * parseFloat(age))
      );
    }

    setWater(parseFloat(weight) * 0.67);
    console.log(checkboxArr);
  }, [age, weight, inches, feet, sex, checkboxArr]);

  useEffect(() => {
    if (lifestyle === "Sedentary") {
      setTdee(1.2 * bmr);
    } else if (lifestyle === "Light") {
      setTdee(1.375 * bmr);
    } else if (lifestyle === "Moderate") {
      setTdee(1.55 * bmr);
    } else if (lifestyle === "Active") {
      setTdee(1.725 * bmr);
    } else if (lifestyle === "Extreme") {
      setTdee(1.9 * bmr);
    }
  }, [bmr, lifestyle]);

  useEffect(() => {
    setAgeArr(
      generateItemsPicker(generateNumbersArray("age", 70)).map((value) => {
        return (
          <Picker.Item
            style={styles.pickerItem}
            key={`${value.value}`}
            label={`${value.label}`}
            value={`${value.value}`}
          ></Picker.Item>
        );
      })
    );
    setFeetArr(
      generateItemsPicker(generateNumbersArray("feet", 7)).map((value) => {
        return (
          <Picker.Item
            style={styles.pickerItem}
            key={`${value.value}`}
            label={`${value.label}`}
            value={`${value.value}`}
          ></Picker.Item>
        );
      })
    );
    setInchesArr(
      generateItemsPicker(generateNumbersArray("inches", 11)).map((value) => {
        return (
          <Picker.Item
            style={styles.pickerItem}
            key={`${value.value}`}
            label={`${value.label}`}
            value={`${value.value}`}
          ></Picker.Item>
        );
      })
    );
    setWeightArr(
      generateItemsPicker(generateNumbersArray("weight", 350)).map((value) => {
        return (
          <Picker.Item
            style={styles.pickerItem}
            key={`${value.value}`}
            label={`${value.label}`}
            value={`${value.value}`}
          ></Picker.Item>
        );
      })
    );
    setWeightGoalArr(
      generateItemsPicker(generateNumbersArray("weight", 350)).map((value) => {
        return (
          <Picker.Item
            style={styles.pickerItem}
            key={`${value.value}`}
            label={`${value.label}`}
            value={`${value.value}`}
          ></Picker.Item>
        );
      })
    );
    setWeeksArr(
      generateItemsPicker(generateNumbersArray("weeks", 52)).map((value) => {
        return (
          <Picker.Item
            style={styles.pickerItem}
            key={`${value.value}`}
            label={`${value.label}`}
            value={`${value.value}`}
          ></Picker.Item>
        );
      })
    );
    setMuscleArr(
      generateItemsPicker(generateNumbersArray("muscle", 3)).map((value) => {
        return (
          <Picker.Item
            style={styles.pickerItem}
            key={`${value.value}`}
            label={`${value.label}`}
            value={`${value.value}`}
          ></Picker.Item>
        );
      })
    );

    setSexArr(
      generateItemsPicker(generateNumbersArray("sex", 2)).map((value) => {
        return (
          <Picker.Item
            style={styles.pickerItem}
            key={`${value.value}`}
            label={`${value.label}`}
            value={`${value.value}`}
          ></Picker.Item>
        );
      })
    );
    setCalorieLossArr(
      generateItemsPicker(generateNumbersArray("calorie-loss", 4)).map(
        (value) => {
          return (
            <Picker.Item
              style={styles.pickerItem}
              key={`${value.value}`}
              label={`${value.label}`}
              value={`${value.value}`}
            ></Picker.Item>
          );
        }
      )
    );
    setLifestyleArr(
      generateItemsPicker(generateNumbersArray("lifestyle", 3)).map((value) => {
        return (
          <Picker.Item
            style={styles.pickerItem}
            key={`${value.value}`}
            label={`${value.label}`}
            value={`${value.value}`}
          ></Picker.Item>
        );
      })
    );
  }, []);

  useEffect(() => {
    if (globalDetails) {
      setAge("30");
      setWeight("200");
      setWeeks(8);
      setWeightGoal("180");
      setFeet("5");
      setInches("8");
      setMuscle("gain");
    }
  }, []);

  useEffect(() => {
    const weightDifferenceLoss = parseFloat(weight) - parseFloat(weightGoal);
    const weightDifferenceGain = parseFloat(weightGoal) - parseFloat(weight);
    if (weightDifferenceLoss > 0) {
      if (calorieLoss === "Maintain") {
        setWeeks(0);
        setCalories(tdee);
      } else if (calorieLoss === "Light") {
        setWeeks(weightDifferenceLoss);
        setCalories(tdee - 500);
      } else if (calorieLoss === "Moderate") {
        setWeeks(weightDifferenceLoss * 0.75);
        setCalories(tdee - 750);
      } else if (calorieLoss === "Extreme") {
        setWeeks(weightDifferenceLoss * 0.5);
        setCalories(tdee - 1000);
      }
    }

    if (muscle === "Maintain") {
      const maintainProtein = 0.8;
      setProteinIntakeDaily(maintainProtein * parseFloat(weight));
      setProtcal(proteinIntakeDaily / calories);
    } else if (muscle === "Gain") {
      const moderateProtein = 1;
      setProteinIntakeDaily(moderateProtein * parseFloat(weight));
      setProtcal(proteinIntakeDaily / calories);
    } else if (muscle === "Extreme") {
      const extremeProtein = 1.2;
      setProteinIntakeDaily(extremeProtein * parseFloat(weight));
      setProtcal(proteinIntakeDaily / calories);
    }

    const detailsData: Data = {
      age: parseFloat(age),
      muscle: muscle,
      weight: weight,
      weightGoal: weightGoal,
      weeks: weeks,
      height: parseFloat(feet) * 12 + parseFloat(inches),
      protein: proteinIntakeDaily,
      calories: parseFloat(calories.toFixed(0)),
      protcal: parseFloat(protcal.toFixed(4)),
      schedule: exerciseSchedule.map((value: any) => value.label),
      numberDays: exerciseSchedule.length,
      water: parseFloat(water.toFixed(2)),
    };
    setData(detailsData);
    console.log(data);
  }, [
    calorieLoss,
    muscle,
    tdee,
    age,
    muscle,
    weight,
    weightGoal,
    weeks,
    feet,
    inches,
    proteinIntakeDaily,
    calories,
    exerciseSchedule,
  ]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {!changeHeader ? (
        <Text style={styles.header}>Your Info.</Text>
      ) : (
        <Text style={styles.header}>Update Info.</Text>
      )}
      <Text style={styles.subheader}>
        To take full advantage of the app and reaching your body weight goals,
        fill out the following information carefully. You can always change
        later.
      </Text>

      <View style={styles.inputsContainer}>
        <View style={styles.inputContainer}>
          <View>
            <Text style={styles.inputLabel}>{label.age}</Text>
          </View>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={age}
              onValueChange={handleAge}
              style={styles.picker}
            >
              {ageArr}
            </Picker>
          </View>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>{label.height}</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={feet}
              onValueChange={handleFeet}
              style={styles.picker}
            >
              {feetArr}
            </Picker>
          </View>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={inches}
              onValueChange={handleInches}
              style={styles.picker}
            >
              {inchesArr}
            </Picker>
          </View>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>{label.weight}</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={weight}
              onValueChange={handleWeight}
              style={styles.picker}
            >
              {weightArr}
            </Picker>
          </View>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>{label.weightGoal}</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={weightGoal}
              onValueChange={handleWeightGoal}
              style={styles.picker}
            >
              {weightGoalArr}
            </Picker>
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>{label.muscle}</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={muscle}
              onValueChange={handleMuscle}
              style={styles.picker}
            >
              {muscleArr}
            </Picker>
          </View>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>{label.sex}</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={sex}
              onValueChange={handleSex}
              style={styles.picker}
            >
              {sexArr}
            </Picker>
          </View>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>{label.lifestyle}</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={lifestyle}
              onValueChange={handleLifestyle}
              style={styles.picker}
            >
              {lifestyleArr} 
            </Picker>
          </View>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>{label.calorieLoss}</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={calorieLoss}
              onValueChange={handleCalorieLoss}
              style={styles.picker}
            >
              {calorieLossArr}
            </Picker>
          </View>
        </View>
        <Card scrollable={false} containerClass={styles.inputContainer}>
          <Text style={styles.inputLabel}>{label.days}</Text>
          <Card scrollable={false} containerClass={styles.pickerContainer}>
            {checkboxArr.map((value) => {
              return (
                <CheckBox
                  title={value.label}
                  checked={value.checked}
                  key={value.id}
                  onPress={() => handleCheck(value.id)}
                />
              );
            })}
          </Card>
        </Card>
      </View>
      <Card
        scrollable={false}
        containerClass={{ submitGoBackContainer } ? submitGoBackStyle : null}
      >
        <PhoneButton
          buttonClass={styles.buttonClass}
          buttonContainerClass={styles.buttonContaiinerClass}
          text="Submit"
          textClass={styles.textClass}
          onPress={handleSubmit}
        />
        {button}
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
    backgroundColor: "white",
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
  },
  subheader: {
    fontSize: 20,
    fontWeight: "bold",
  },
  inputsContainer: {
    width: "95%",
    justifyContent: "flex-start",
    marginTop: 50,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'space-around',
    marginBottom: 30,
    width: "100%",
  },
  inputLabel: {
    fontSize: 20,
    fontWeight: "bold",
    color: '#8c52ff'
  },
  pickerContainer: {
    borderWidth: 2,
    borderRadius: 15,
    overflow: "hidden",
    flexGrow: .8,
    backgroundColor: "white",
    borderColor: '#8c52ff',
    borderStyle: 'solid'
  },
  picker: {
    flex: 1,
    justifyContent: "center",
  },
  pickerItem: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black'
  },
  buttonClass: {
    display: "flex",
    backgroundColor: "#8c52ff",
    padding: 20,
    borderRadius: 15,
  },
  buttonContaiinerClass: {
    display: "flex",
    alignItems: "center",
  },
  textClass: {
    textAlign: "center",
    fontSize: 20,
    letterSpacing: 1.2,
    color: "white",
    fontWeight: "bold",
  },
});
