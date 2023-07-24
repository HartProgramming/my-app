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
import CardText from "../../../components/Card/CardText";
import SetMargin from "../../../functions/SetMargin";
import DateArrowButton from "../Components/Button/DateArrowButton";
import { MaterialIcons } from "@expo/vector-icons";
import DateWeekButton from "../Components/Button/DateWeekButton";
import ResultsMeter from "../Components/ResultsMeter/ResultsMeter";

export interface ExerciseActivity {
  Exercise: string | undefined;
  Reps?: number | undefined;
  Miles?: number | undefined;
  Minutes?: number | undefined;
  CaloriesBurned?: number;
  Image?: any;
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
  Image?: any;
}

const TodayScreen: React.FC = () => {
  interface MeterDetails {
    percentage: number;
    data: string;
    label: string;
  }

  /* Performance Percentages */
  const [calorieIntakePercentage, setCalorieIntakePercentage] =
    useState<number>(0);
  const [caloriesBurnedPercentage, setCaloriesBurnedPercentage] =
    useState<number>(0);
  const [stepsTakenPercentage, setStepsPercentage] = useState<number>(0);
  const [proteinTakenPercentage, setProteinTakenPercentage] =
    useState<number>(0);
  const [protcalPercentage, setProtcalPercentage] = useState<number>(0);
  const [sodiumPercentage, setSodiumPercentage] = useState<number>(0);
  const [cholesterolPercentage, setCholesterolPercentage] = useState<number>(0);
  const [waterPercentage, setWaterPercentage] = useState<number>(0);
  const [carbsPercentage, setCarbsPercentage] = useState<number>(0);
  const [sugarPercentage, setSugarPercentage] = useState<number>(0);

  const [sodiumData, setSodiumData] = useState<string>("");
  const [cholesterolData, setCholesterolData] = useState<string>("");
  const [waterData, setWaterData] = useState<string>("");
  const [carbsData, setCarbsData] = useState<string>("");
  const [sugarsData, setSugarsData] = useState<string>("");

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

  const [datePosition, setDatePosition] = useState<number>(0);
  const [dateArrayString, setDateArrayString] = useState<string>("");
  const [weeklyArrayString, setWeeklyArrayString] = useState<string>("");
  const [dailyWeeklyBoo, setDailyWeeklyBoo] = useState<boolean>(false);

  const [moreInfoButton, setMoreInfoButton] = useState<boolean>(false);

  const [modal, setModal] = useState<any>("");

  const windowWidth = Dimensions.get("window").width;

  const meterWidth = windowWidth * 0.62;

  const indicatorsArrayData1: MeterDetails[] = [
    {
      label: "kCal",
      percentage: calorieIntakePercentage,
      data: calorieData,
    },
    {
      label: "Burned",
      percentage: caloriesBurnedPercentage,
      data: calorieBurnedData,
    },
    { label: "Steps", percentage: stepsTakenPercentage, data: stepsData },
    {
      label: "Protein",
      percentage: proteinTakenPercentage,
      data: proteinData,
    },
    {
      label: "Protcal",
      percentage: protcalPercentage,
      data: protcalData,
    },
  ];

  const indicatorsArrayData2: MeterDetails[] = [
    { label: "Sodium", percentage: sodiumPercentage, data: sodiumData },
    {
      label: "Chol",
      percentage: cholesterolPercentage,
      data: cholesterolData,
    },
    { label: "Water", percentage: waterPercentage, data: waterData },
    { label: "Carbs", percentage: carbsPercentage, data: carbsData },
    { label: "Sugar", percentage: sugarPercentage, data: sugarsData },
  ];

  const DUMMY_EXERCISE: ExerciseActivity[] = [
    {
      Exercise: "Jogging",
      Miles: 3,
      CaloriesBurned: 200,
      Image: Jogging,
    },
    {
      Exercise: "Pushups",
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

  const dateArray = ["Jan 1", "Dec 31", "Dec 30"];
  const weeklyArray = ["1/1-1/7", "1/8-1/15", "1/22-1/29"];

  const handlePreviousDate = () => {
    setDatePosition((prev) => (prev += 1));
    /* Async UseEffect to get dates */
  };

  const handleNextDate = () => {
    setDatePosition((prev) => (prev -= 1));
    /* Async UseEffect to get dates */
  };

  const handleDaily = () => {
    setDailyWeeklyBoo(true);
  };

  const handleWeekly = () => {
    setDailyWeeklyBoo(false);
  };

  const handleMoreInfo = (event: string) => {
    if (event === "More") {
      setMoreInfoButton(true);
      setElements(
        indicatorsArrayData2.map((value) => {
          return (
            <ResultsMeter
              label={value.label}
              data={value.data}
              width={meterWidth}
              percentage={value.percentage}
            />
          );
        })
      );
    } else if (event === "Less") {
      setMoreInfoButton(false);
      setElements(
        indicatorsArrayData1.map((value) => {
          return (
            <ResultsMeter
              label={value.label}
              data={value.data}
              width={meterWidth}
              percentage={value.percentage}
            />
          );
        })
      );
    }
  };

  useEffect(() => {
    if (dailyWeeklyBoo === true) {
      setDateArrayString(dateArrayString[datePosition]);
    } else if (dailyWeeklyBoo === false) {
      setDateArrayString(weeklyArrayString[datePosition]);
    }
  }, [datePosition, dailyWeeklyBoo]);

  useEffect(() => {
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

  useEffect(() => {
    setElements(
      indicatorsArrayData1.map((value) => {
        return (
          <ResultsMeter
            width={meterWidth}
            data={value.data}
            label={value.label}
            percentage={value.percentage}
          />
        );
      })
    );
  }, []);

  return (
    <Card scrollable={false} containerClass={styles.container}>
      <Card scrollable={false} containerClass={styles.recentContainer}>
        <CardText
          text="Recent Activity"
          textStyle={styles.recentHeader}
          container={styles.recentHeaderContainer}
          semiBold={true}
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
      <Card scrollable={false} containerClass={styles.activityContainer}>
        <Card scrollable={false} containerClass={styles.dateWeeklyContainer}>
          <Card scrollable={false} containerClass={styles.dateContainer}>
            <MaterialIcons
              name="keyboard-arrow-left"
              size={50}
              color="black"
              onPress={handlePreviousDate}
            />

            <CardText
              container={styles.dateHeaderContainer}
              textStyle={styles.dateHeader}
              semiBold={true}
              text={datePosition === 0 ? "Today" : dateArrayString}
            />
            {datePosition !== 0 && (
              <MaterialIcons
                name="keyboard-arrow-right"
                size={50}
                color="black"
                onPress={handleNextDate}
              />
            )}
          </Card>
          <Card
            scrollable={false}
            containerClass={styles.dateWeekButtonsContainer}
          >
            <DateWeekButton left={false} onPress={handleDaily} label="Daily" />
            <DateWeekButton left={true} onPress={handleWeekly} label="Weekly" />
          </Card>
        </Card>
        <Card scrollable={false} containerClass={styles.indicatorsContainer}>
          {elements}
        </Card>
        <Card
          scrollable={false}
          containerClass={styles.moreInfoButtonsContainer}
        >
          {moreInfoButton === false ? (
            <PhoneButton
              text="Next"
              semiBold={true}
              image={
                <MaterialIcons
                  name="keyboard-arrow-right"
                  size={50}
                  color="black"
                />
              }
              onPress={() => handleMoreInfo("More")}
              buttonContainerClass={styles.nextBackInfoButtonContainer}
              buttonClass={styles.nextTextContainer}
              textClass={styles.nextBackTextStyle}
            />
          ) : (
            <PhoneButton
              text="Prev"
              semiBold={true}
              image={
                <MaterialIcons
                  name="keyboard-arrow-left"
                  size={50}
                  color="black"
                />
              }
              onPress={() => handleMoreInfo("Less")}
              buttonContainerClass={styles.nextBackInfoButtonContainer}
              buttonClass={styles.prevTextContainer}
              textClass={styles.nextBackTextStyle}
            />
          )}
        </Card>
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
    letterSpacing: 1.2,
    color: "#8c52ff",
  },
  activityContainer: {
    alignItems: 'center',
    marginTop: SetMargin(-.01)
  },
  indicatorsContainer: {
    alignItems: "center",
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
  detailsContainer: {
    marginTop: SetMargin(0.01),
    paddingBottom: 5,
  },
  recentContainer: {
    marginTop: SetMargin(0.115),
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
    letterSpacing: 0.8,
  },
  dateWeeklyContainer: {
    flexDirection: "row",
    borderBottomColor: "black",
    borderBottomWidth: 3,
    borderStyle: "solid",
    alignItems: "center",
    width: "90%",
    justifyContent: "space-around",
  },
  dateContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: SetMargin(0.01),
  },
  dateHeaderContainer: {
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
  },
  dateHeader: {
    fontSize: 28,
    letterSpacing: 1.05,
  },
  dateWeekButtonsContainer: {
    flexDirection: "row",
    marginTop: SetMargin(0.02),
  },

  moreInfoButtonsContainer: {
    width: "80%",
  },
  nextBackInfoButtonContainer: {
    width: "40%",
    alignSelf: "center",
  },
  nextTextContainer: {
    width: "100%",
    flexDirection: "row-reverse",
    alignItems: "center",
  },
  prevTextContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  nextBackTextStyle: {
    fontSize: 24,
    color: "black",
    marginTop: SetMargin(0.008),
  },
});

export default TodayScreen;
