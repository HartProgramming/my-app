import { View, Text } from "react-native";
import NumberInput from "../../components/Inputs/NumberInput";
import { Picker } from "@react-native-picker/picker";
import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import PhoneButton from "../../components/Inputs/PhoneButton";
import { Dimensions } from "react-native";
import { ScrollView } from "react-native";

export default function Details() {
  const screenHeight = Dimensions.get("window").height;

  interface Data {
    age: any;
    muscle: any;
    weight: any;
    weightGoal: any;
    weeks: any;
    height: any;
  }

  const label: Label = {
    age: "Select your age (yrs):",
    height: "Select your height (ft,in):",
    weight: "Select your weight (lbs):",
    weightGoal: "Select your weight loss goal (lbs):",
    weeks: "Select weeks to reach goal:",
    muscle: "Select muscle mass gain:",
  };

  const [ageArr, setAgeArr]: any = useState();
  const [weightArr, setWeightArr]: any = useState();
  const [weightGoalArr, setWeightGoalArr]: any = useState();
  const [feetArr, setFeetArr]: any = useState();
  const [inchesArr, setInchesArr]: any = useState();
  const [muscleArr, setMuscleArr]: any = useState();
  const [weeksArr, setWeeksArr]: any = useState();
  const [muscle, setMuscle] = useState<React.FormEvent<HTMLInputElement>>();
  const [inches, setInches] = useState<React.FormEvent<HTMLInputElement>>();
  const [feet, setFeet] = useState<React.FormEvent<HTMLInputElement>>();
  const [weeks, setWeeks] = useState<React.FormEvent<HTMLInputElement>>();
  const [weightGoal, setWeightGoal] =
    useState<React.FormEvent<HTMLInputElement>>();
  const [weight, setWeight] = useState<React.FormEvent<HTMLInputElement>>();
  const [age, setAge] = useState<React.FormEvent<HTMLInputElement>>();
  const [data, setData] = useState<object>({});

  interface Label {
    age: string;
    height: string;
    weight: string;
    weightGoal: string;
    weeks: string;
    muscle: string;
  }

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
      let muscleArr: string[] = [];
      return (muscleArr = ["Maintain", "Gain", "Extreme"]);
    }
  }

  function generateItemsPicker(func: any) {
    interface Items {
      label: string;
      value: string;
    }
    let itemsArr: Items[] = [];
    for (let x of func) {
      itemsArr.push({ label: `${x}`, value: `${x}` });
    }
    return itemsArr;
  }

  const handleAge = (event: React.FormEvent<HTMLInputElement>) => {
    setAge(event);
  };

  const handleFeet = (event: React.FormEvent<HTMLInputElement>) => {
    setFeet(event);
  };

  const handleInches = (event: React.FormEvent<HTMLInputElement>) => {
    setInches(event);
  };

  const handleWeight = (event: React.FormEvent<HTMLInputElement>) => {
    setWeight(event);
  };

  const handleWeightGoal = (event: React.FormEvent<HTMLInputElement>) => {
    setWeightGoal(event);
  };

  const handleWeeks = (event: React.FormEvent<HTMLInputElement>) => {
    setWeeks(event);
  };

  const handleMuscle = (event: React.FormEvent<HTMLInputElement>) => {
    setMuscle(event);
  };

  const handleSubmit = () => {
    console.log(data);
  };

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
  }, []);

  useEffect(() => {
    const detailsData: Data = {
      age: age,
      muscle: muscle,
      weight: weight,
      weightGoal: weightGoal,
      weeks: weeks,
      height: `${feet}'${inches}"`,
    };
    setData(detailsData);
    console.log(data);
  }, [age, muscle, weight, weightGoal, weeks, feet, inches]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Your Info.</Text>
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
          <Text style={styles.inputLabel}>{label.weeks}</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={weeks}
              onValueChange={handleWeeks}
              style={styles.picker}
            >
              {weeksArr}
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
      </View>
      <View>
        <PhoneButton
          buttonClass={styles.buttonClass}
          buttonContainerClass={styles.buttonContaiinerClass}
          text="Submit"
          textClass={styles.textClass}
          onPress={handleSubmit}
        />
      </View>
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
    backgroundColor: "green",
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
    display: "flex",
    width: "95%",
    justifyContent: "flex-start",
    marginTop: 50,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
    width: "100%",
  },
  inputLabel: {
    fontSize: 18,
    fontWeight: "bold",
  },
  pickerContainer: {
    borderWidth: 1,
    borderRadius: 15,
    overflow: 'hidden',
    flexGrow: 1,
    backgroundColor: '#e2e2e2'
  },
  picker: {
    flex: 1,
    justifyContent: 'center',
  },
  pickerItem: {
    fontSize: 18,
  },
  buttonClass: {
    display: "flex",
    backgroundColor: "black",
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
    color: "green",
    fontWeight: "bold",
  },
});
