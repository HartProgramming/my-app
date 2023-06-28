import Card from "../../components/Card/Card";
import { StyleSheet } from "react-native";
import { Text, View } from "react-native";
import Meter from "../../components/Meter/Meter";
import { useEffect, useState } from "react";
import { Dimensions } from "react-native";
import { Text as SvgText, TextProps } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaFrame } from "react-native-safe-area-context";
import PhoneButton from "../../components/Inputs/PhoneButton";
import InsertRegimen from "../InsertRegimen/InsertRegimen";

const TodayScreen: React.FC = () => {
  /* Performance Percentages */
  const [calorieIntakePercentage, setCalorieIntakePercentage] =
    useState<number>(0);
  const [caloriesBurnedPercentage, setCaloriesBurnedPercentage] =
    useState<number>(0);
  const [stepsTakenPercentage, setStepsPercentage] = useState<number>(0);
  const [proteinTakenPercentage, setProteinTakenPercentage] =
    useState<number>(0);
  const [protcalPercentage, setProtcalPercentage] = useState<number>(0);

  const [currentCalories, setCurrentCalories] = useState<number>(1040);
  const [maxCalories, setMaxCalories] = useState<number>(2220);
  const [calorieData, setCalorieData] = useState<string>("");

  const [caloriesBurned, setCaloriesBurned] = useState<number>(290);
  const [caloriesBurnedRecommend, setCaloriesBurnedRecommended] =
    useState<number>(880);
  const [calorieBurnedData, setCalorieBurnedData] = useState<string>("");

  const [stepsTaken, setStepsTaken] = useState<number>(20000);
  const [stepsTakenRecommended, setStepsRecommended] = useState<number>(10000);
  const [stepsData, setStepsData] = useState<string>("");

  const [protein, setProtein] = useState<number>(60);
  const [proteinRecommended, setProteinRecommended] = useState<number>(110);
  const [proteinData, setProteinData] = useState<string>("");

  const [protcal, setProtcal] = useState<number>(10);
  const [protcalRecommended, setProtcalRecommended] = useState<number>(10);
  const [protcalData, setProtcalData] = useState<string>("");

  const [elements, setElements] = useState<any>();
  const [mealElements, setMealElements] = useState<any>();
  const [exerciseElements, setExerciseElements] = useState<any>();
  const [mealsDisplay, setMealsDisplay] = useState<boolean>(false);
  const [exerciseDisplay, setExerciseDisplay] = useState<boolean>(true);

  const [alterButtonStyle, setAlterButtonStyle] = useState<boolean>(true);
  const [standardButtonStyle, setStandardButtonStyle] = useState<boolean>(true);

  const windowWidth = Dimensions.get("window").width;

  const meterWidth = windowWidth * 0.9;

  const navigation = useNavigation();

  const transScreen = (route: string) => {
    return navigation.navigate(route as never);
  };

  const handleButton = (event: string) => {
    if (event === "Meals") {
      setAlterButtonStyle(false);
      setStandardButtonStyle(false);
      setMealsDisplay(true)
    } else if (event === "Exercises") {
      setAlterButtonStyle(true);
      setStandardButtonStyle(true);
      setMealsDisplay(false)
    }
    console.log(event);
  };

  useEffect(() => {
    interface Meals {
      label: string;
      calories: number;
      protein: number;
      ounces: number;
    }

    interface Exercises {
      label: string;
      repsBoo: boolean;
      milesBoo: boolean;
      minutesBoo: boolean;
      reps?: number;
      miles?: number;
      minutes?: number;
    }

    const exerciseArray: Exercises[] = [
      {label: 'Pushups', reps: 20, repsBoo: true, milesBoo: false, minutesBoo: false},
      {label: 'Jog', miles: 3, repsBoo: false, milesBoo: true, minutesBoo: false},
      {label: 'Plank', minutes: 4, milesBoo: false, repsBoo: false, minutesBoo: true}
    ]

    const mealArray: Meals[] = [
      { label: "Steak", calories: 400, protein: 40, ounces: 10 },
      { label: "Greek Yogurt", calories: 100, protein: 20, ounces: 10 },
      { label: "Eggs", calories: 200, protein: 10, ounces: 10 },
    ];

    setExerciseElements(
      exerciseArray.map(value => {
        return (
          <Card scrollable={false} containerClass={styles.indicatorContainer}>
            <Text style={styles.label}>
              {value.label}: {value.milesBoo ? `${value.miles} Miles` : value.repsBoo ? `${value.reps} Reps` : `${value.minutes} Minutes`}
            </Text>
          </Card>
        );
      })
    )

    setMealElements(
      mealArray.map((value) => {
        return (
          <Card scrollable={false} containerClass={styles.indicatorContainer}>
            <Text style={styles.label}>
              {value.label}: {value.calories} kcal {value.protein}g{" "}
              {value.ounces}
              oz
            </Text>
          </Card>
        );
      })
    );
  }, []);

  useEffect(() => {
    interface MeterDetails {
      percentage: number;
      data: string;
      label: string;
    }

    const indicatorsArray: MeterDetails[] = [
      {
        label: "Current Calorie Intake",
        percentage: calorieIntakePercentage,
        data: calorieData,
      },
      {
        label: "Calories Burned",
        percentage: caloriesBurnedPercentage,
        data: calorieBurnedData,
      },
      { label: "Steps", percentage: stepsTakenPercentage, data: stepsData },
      {
        label: "Protein Consumed",
        percentage: proteinTakenPercentage,
        data: proteinData,
      },
      {
        label: "Protcal Levels",
        percentage: protcalPercentage,
        data: protcalData,
      },
    ];

    setElements(
      indicatorsArray.map((value) => {
        return (
          <Card
            key={value.label}
            scrollable={false}
            containerClass={styles.indicatorContainer}
          >
            <Text style={styles.label}>{value.label}</Text>
            <Meter
              data={value.data}
              strokeWidth={0}
              width={meterWidth}
              height={70}
              rectHeight={55}
              percentage={value.percentage}
              strokeLinecap={"round"}
              strokeProgress="#2196f3"
              progressFill="#2196f3"
              standardFill="#f3c04c"
              strokeStandard="white"
            ></Meter>
          </Card>
        );
      })
    );

    setCalorieIntakePercentage(currentCalories / maxCalories);
    setCaloriesBurnedPercentage(caloriesBurned / caloriesBurnedRecommend);
    setStepsPercentage(stepsTaken / stepsTakenRecommended);
    setProtcalPercentage(protcal / protcalRecommended);
    setProteinTakenPercentage(protein / proteinRecommended);
    setCalorieBurnedData(`${caloriesBurned}/${caloriesBurnedRecommend}`);
    setCalorieData(`${currentCalories}/${maxCalories}`);
    setStepsData(`${stepsTaken}/${stepsTakenRecommended}`);
    setProtcalData(`${protcal}/${protcalRecommended}`);
    setProteinData(`${protein}/${proteinRecommended}`);
  }, [
    calorieIntakePercentage,
    caloriesBurnedPercentage,
    stepsTakenPercentage,
    protcalPercentage,
    proteinTakenPercentage,
    protcalData,
    proteinData,
    calorieBurnedData,
    calorieData,
    stepsData,
  ]);

  return (
    <Card scrollable={true} containerClass={styles.container}>
      <Text onPress={() => transScreen('Regimen')}>Insert Regimen</Text>
      <Card scrollable={false} containerClass={styles.headerContainer}>
        <Text style={styles.header}>Today's Progress</Text>
      </Card>
      <Card scrollable={false} containerClass={styles.indicatorsContainer}>
        {elements}
      </Card>
      <Card
        scrollable={false}
        containerClass={[styles.dataContainer, meterWidth]}
      >
        <Card scrollable={false} containerClass={styles.buttonsContainer}>
          <PhoneButton
            buttonContainerClass={
              standardButtonStyle
                ? styles.buttonContainerClass
                : styles.alterButtonContainer
            }
            buttonClass={
              standardButtonStyle ? styles.buttonClass : styles.alterButtonClass
            }
            textClass={
              standardButtonStyle ? styles.textClass : styles.alterTextClass
            }
            text="Exercises"
            onPress={() => handleButton("Exercises")}
          />
          <PhoneButton
            buttonContainerClass={
              alterButtonStyle
                ? styles.alterButtonContainer
                : styles.buttonContainerClass
            }
            buttonClass={
              alterButtonStyle ? styles.alterButtonClass : styles.buttonClass
            }
            textClass={
              alterButtonStyle ? styles.alterTextClass : styles.textClass
            }
            text="Meals"
            onPress={() => handleButton("Meals")}
          />
        </Card>
        {mealsDisplay ? mealElements : exerciseElements}
      </Card>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4caf50",
  },
  headerContainer: {
    alignItems: "center",
    marginTop: 15,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    letterSpacing: 1.2,
    color: "white",
  },
  indicatorsContainer: {
    alignItems: "center",
    marginTop: 20,
    elevation: 5,
  },
  indicatorContainer: {
    marginTop: 10,
  },
  label: {
    fontSize: 21,
    fontWeight: "bold",
    color: "white",
  },
  border: {
    color: "#2196f3",
  },
  dataContainer: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "red",
    width: "85%",
    alignSelf: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    margin: "auto",
    width: "100%",
    alignItems: "center",
  },
  buttonContainerClass: {
    width: "50%",
  },
  buttonClass: {
    backgroundColor: "white",
    alignItems: "center",
    padding: 10,
  },
  textClass: {
    fontSize: 24,
    fontWeight: "bold",
    color: "green",
  },
  alterButtonContainer: {
    width: "50%",
  },
  alterButtonClass: {
    backgroundColor: "green",
    alignItems: "center",
    padding: 10,
  },
  alterTextClass: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default TodayScreen;
