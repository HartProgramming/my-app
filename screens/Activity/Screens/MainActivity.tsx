import Card from "../../../components/Card/Card";
import { StyleSheet } from "react-native";
import { Text, View } from "react-native";
import Meter from "../../../components/Meter/Meter";
import { useEffect, useState } from "react";
import { Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import PhoneButton from "../../../components/Inputs/PhoneButton";
import ActivityModal from "../Components/Modal/ActivityModal";
import RecentActivityImageButton from "../Components/Button/RecentActivityImageButton";
import Jogging from "../../../images/cardimages/joggingstreet.jpeg";
import Chicken from "../../../images/cardimages/chickenbreast.jpeg";
import CardText from "../../../components/Card/CardHeader";
import SetMargin from "../../../functions/SetMargin";
import DateArrowButton from "../Components/Button/DateArrowButton";

export interface ExerciseActivity {
  Exercise: string | undefined;
  Reps?: number | undefined;
  Miles?: number | undefined;
  Minutes?: number | undefined;
  CaloriesBurned: number;
  Image: any;
}

export interface MealActivity {
  Meal: string;
  Calories: number;
  Protein: number;
  Fat?: number;
  Servings?: number;
  ServingSize?: number;
  Sodium?: number;
  Cholesterol?: number;
  Image: any;
}

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

  const [modal, setModal] = useState<any>("");

  const windowWidth = Dimensions.get("window").width;

  const meterWidth = windowWidth * 0.9;

  const navigation = useNavigation();

  const DUMMY_EXERCISE: ExerciseActivity[] = [
    {
      Exercise: "Jogging",
      Miles: 3,
      CaloriesBurned: 200,
      Image: Jogging,
    },
    {
      Exercise: "Push-ups",
      Reps: 150,
      CaloriesBurned: 200,
      Image: Jogging,
    },
    {
      Exercise: "Planks",
      Minutes: 3,
      CaloriesBurned: 100,
      Image: Jogging,
    },
  ];

  const DUMMY_MEALS: MealActivity[] = [
    {
      Meal: "Chicken",
      Calories: 400,
      Protein: 60,
      Image: Chicken,
      Sodium: 30,
      Cholesterol: 40,
      Servings: 3,
      ServingSize: 30,
    },
    { Meal: "Taco", Calories: 100, Protein: 60, Image: Chicken },
    { Meal: "Pizza", Calories: 400, Protein: 60, Image: Chicken },
  ];

  const transScreen = (route: string) => {
    return navigation.navigate(route as never);
  };

  const handleButton = (event: string) => {
    if (event === "Meals") {
      setAlterButtonStyle(false);
      setStandardButtonStyle(false);
      setMealsDisplay(true);
    } else if (event === "Exercises") {
      setAlterButtonStyle(true);
      setStandardButtonStyle(true);
      setMealsDisplay(false);
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
      {
        label: "Pushups",
        reps: 20,
        repsBoo: true,
        milesBoo: false,
        minutesBoo: false,
      },
      {
        label: "Jog",
        miles: 3,
        repsBoo: false,
        milesBoo: true,
        minutesBoo: false,
      },
      {
        label: "Plank",
        minutes: 4,
        milesBoo: false,
        repsBoo: false,
        minutesBoo: true,
      },
    ];

    const mealArray: Meals[] = [
      { label: "Steak", calories: 400, protein: 40, ounces: 10 },
      { label: "Greek Yogurt", calories: 100, protein: 20, ounces: 10 },
      { label: "Eggs", calories: 200, protein: 10, ounces: 10 },
    ];

    setExerciseElements(
      exerciseArray.map((value) => {
        return (
          <Card scrollable={false} containerClass={styles.indicatorContainer}>
            <Text style={styles.label}>
              {value.label}:{" "}
              {value.milesBoo
                ? `${value.miles} Miles`
                : value.repsBoo
                ? `${value.reps} Reps`
                : `${value.minutes} Minutes`}
            </Text>
          </Card>
        );
      })
    );

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
              height={30}
              rectHeight={30}
              percentage={value.percentage}
              strokeLinecap={"round"}
              strokeProgress="#e6e6e6"
              progressFill="#ededed"
              standardFill="#f6f6f6"
              strokeStandard="#8c52ff"
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
    <Card scrollable={false} containerClass={styles.container}>
      <Card scrollable={false} containerClass={styles.recentContainer}>
        <CardText
          text="Recent Activity"
          textStyle={styles.recentHeader}
          container={styles.recentHeaderContainer}
        />
        <Card scrollable={false} containerClass={styles.detailsContainer}>
          <Card
            scrollable={false}
            containerClass={styles.recentImagesContainer}
          >
            {DUMMY_EXERCISE.map((value) => {
              return (
                <>
                  <RecentActivityImageButton
                    label={value.Exercise}
                    source={value.Image}
                    showModal={() => setModal(value.Exercise)}
                  />
                  <ActivityModal
                    showHide={() => setModal("")}
                    details={value}
                    visible={modal === value.Exercise}
                  />
                </>
              );
            })}
          </Card>
        </Card>
        <Card scrollable={false} containerClass={styles.detailsContainer}>
          <Card
            scrollable={false}
            containerClass={styles.recentImagesContainer}
          >
            {DUMMY_MEALS.map((value) => {
              return (
                <>
                  <RecentActivityImageButton
                    label={value.Meal}
                    source={value.Image}
                    showModal={() => setModal(value.Meal)}
                  />
                  <ActivityModal
                    showHide={() => setModal("")}
                    details={value}
                    visible={modal === value.Meal}
                  />
                </>
              );
            })}
          </Card>
        </Card>
      </Card>
      <Card scrollable={false} containerClass={styles.indicatorsContainer}>
            <Card scrollable={false} containerClass={styles.dateContainer}>
              <DateArrowButton />
              <CardText text="Today"/>
              <DateArrowButton />
            </Card>
        {elements}
      </Card>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  headerContainer: {
    alignItems: "center",
    marginTop: 115,
  },
  header: {
    fontSize: 32,
    fontWeight: "bold",
    letterSpacing: 1.2,
    color: "#8c52ff",
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
    color: "#8c52ff",
  },
  border: {
    color: "#2196f3",
  },
  dataContainer: {
    borderWidth: 4,
    borderStyle: "solid",
    borderColor: "#8c52ff",
    width: "85%",
    alignSelf: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    margin: "auto",
    width: "100%",
    alignItems: "center",
    borderBottomWidth: 4,
    borderStyle: "solid",
    borderColor: "#8c52ff",
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
    color: "#8c52ff",
  },
  alterButtonContainer: {
    width: "50%",
  },
  alterButtonClass: {
    backgroundColor: "#8c52ff",
    alignItems: "center",
    padding: 10,
  },
  alterTextClass: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  detailsContainer: {
    marginTop: SetMargin(0.01),
    paddingBottom: 5,
  },
  recentContainer: {
    marginTop: SetMargin(0.1),
  },
  recentImagesContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  recentHeaderContainer: {
    alignSelf: "flex-start",
    marginLeft: SetMargin(0.02),
  },
  recentHeader: {
    fontSize: 32,
    fontWeight: "bold",
    letterSpacing: 1.2,
  },
  dateContainer: {

  }
});

export default TodayScreen;
