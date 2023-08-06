import Card from "../../../components/Card/Card";
import { StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import { Dimensions } from "react-native";
import PhoneButton from "../../../components/Inputs/PhoneButton";
import ActivityModal from "../Components/Modal/ActivityModal";
import RecentActivityImageButton from "../Components/Button/RecentActivityImageButton";
import Jogging from "../../../images/cardimages/joggingstreet.jpeg";
import Chicken from "../../../images/cardimages/chickenbreast.jpeg";
import CardText from "../../../components/Card/CardText";
import SetMargin from "../../../functions/SetMargin";
import { MaterialIcons } from "@expo/vector-icons";
import DateWeekButton from "../Components/Button/DateWeekButton";
import ResultsMeter from "../Components/ResultsMeter/ResultsMeter";
import ProgramLogCard from "../../../components/Card/ProgramLogCard";
import TodayLogHeader from "../Components/Card/TodayLogHeader";
import { DUMMYMANAGE } from "../../Program/Screens/Manage/DummyArray";
import RecentButtonsCard from "../Components/Card/RecentButtonsCard";
import TraverseDateButton from "../Components/Button/TraverseDateButton";
import Dot from "../../../components/Indicators/Dot";

export interface ExerciseActivity {
  Exercise: string | undefined;
  Reps?: number | undefined;
  Miles?: number | undefined;
  Minutes?: number | undefined;
  CaloriesBurned?: number;
  Image?: any;
  Sets?: number | undefined;
  Weight?: number | undefined;
  ExerciseType?: string;
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

  const [nextDateLog, setNextDateLog] = useState<string>("");
  const [previousDateLog, setPreviousDateLog] = useState<string>("");

  const indicatorsArrayData: MeterDetails[] = [
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

  const [primaryResultsArray, setPrimaryResultsArray] = useState<
    MeterDetails[]
  >(indicatorsArrayData.filter((value, index) => index < 5));
  const [secondaryResultsArray, setSecondaryyResultsArray] = useState<
    MeterDetails[]
  >(indicatorsArrayData.filter((value, index) => index >= 5));

  const [elements, setElements] = useState<MeterDetails[]>(primaryResultsArray);

  const [datePosition, setDatePosition] = useState<number>(0);
  const [dateArrayString, setDateArrayString] = useState<string>("");
  const [weeklyArrayString, setWeeklyArrayString] = useState<string>("");
  const [dailyWeeklyType, setDailyWeeklyType] = useState<'daily' | 'weekly'>('daily');

  const [moreInfoButton, setMoreInfoButton] = useState<boolean>(false);
  const [morePerformanceButtonName, setMorePerformanceButtonName] =
    useState<boolean>(true);
  const [lessPerformanceButtonName, setLessPerformanceButtonName] =
    useState<boolean>(false);

  const [nextPerformanceDate, setNextPerformanceDate] =
    useState<boolean>(false);
  const [prevPerformanceDate, setPrevPerformanceDate] = useState<boolean>(true);

  const [modal, setModal] = useState<any>("");

  const windowWidth = Dimensions.get("window").width;

  const meterWidth = windowWidth * 0.55;

  useEffect(() => {
    setTimeout(() => {
      console.log(primaryResultsArray);
    }, 50);
    setElements(primaryResultsArray);
    console.log(caloriesBurned);
  }, []);

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

  const [dailyWeeklyButtonBackground, setDailyWeeklyButtonBackground] =
    useState<boolean>(false);

  const handleDaily = () => {
    setDailyWeeklyButtonBackground(true);
    setDailyWeeklyType('daily')
  };

  const handleWeekly = () => {
    setDailyWeeklyButtonBackground(false);
    setDailyWeeklyType('weekly')
  };

  const handleMoreInfo = (event: string) => {
    if (event === "More") {
      console.log("more");
      setMoreInfoButton(true);
      setElements(secondaryResultsArray);
    } else if (event === "Less") {
      setMoreInfoButton(false);
      setElements(primaryResultsArray);
    }
  };

  useEffect(() => {
    if (dailyWeeklyType === 'daily') {
      setDateArrayString(dateArrayString[datePosition]);
    } else if (dailyWeeklyType === 'weekly') {
      setDateArrayString(weeklyArrayString[datePosition]);
    }
  }, [datePosition, dailyWeeklyType]);

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
    console.log(morePerformanceButtonName);
    /* if previous date log then get date from backend at previous date */
    /* if next date log then get date from backend at next date */
  }, [previousDateLog, nextDateLog, morePerformanceButtonName]);

  return (
    <Card scrollable={true} containerClass={styles.container}>
      <Card scrollable={false} containerClass={styles.recentContainer}>
        <CardText
          text="Recent Activity"
          textStyle={styles.recentHeader}
          container={styles.recentHeaderContainer}
          bold
        />
        <RecentButtonsCard array={DUMMY_EXERCISE} />
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
        <CardText
          bold
          text="Performance"
          container={styles.performanceHeaderContainer}
          textStyle={styles.performanceHeader}
        />

        <Card scrollable={false} containerClass={styles.indicatorsContainer}>
          <Card scrollable={false} containerClass={styles.dateWeeklyContainer}>
            <CardText
              semiBold
              text={dailyWeeklyType === 'daily' ? 'Day: ' : 'Week: '}
              container={styles.dayHeaderContainer}
              textStyle={styles.dayHeader}
            />
            <TraverseDateButton
              type="log"
              previous={setPreviousDateLog}
              next={setNextDateLog}
              index={0}
              date="Today"
              size={50}
              length={0}
            />
          </Card>
          {elements.map((value) => {
            return (
              <ResultsMeter
                width={meterWidth}
                data={value.data}
                label={value.label}
                percentage={value.percentage}
              />
            );
          })}
        </Card>
        <Card
          scrollable={false}
          containerClass={styles.dateWeekButtonsContainer}
        >
          <DateWeekButton
            background={dailyWeeklyType === 'daily' ? true : false}
            onPress={() => setDailyWeeklyType('daily')}
            label="Daily"
          />
          <DateWeekButton
            background={dailyWeeklyType === 'weekly' ? true : false}
            onPress={() => setDailyWeeklyType('weekly')}
            label="Weekly"
          />
        </Card>
        <Card
          scrollable={false}
          containerClass={styles.moreInfoButtonsContainer}
        >
          <Card scrollable={false} containerClass={styles.dotsContainer}>
            <Dot highlighted={true} />
            <Dot highlighted={false} />
          </Card>
          <TraverseDateButton
            type="performance"
            next={setMorePerformanceButtonName}
            previous={setLessPerformanceButtonName}
            date={morePerformanceButtonName ? "More" : "Less"}
            size={50}
            index={0}
            length={0}
          />
        </Card>
        <Card scrollable={false} containerClass={styles.programLogContainer}>
          <ProgramLogCard
            mealArray={DUMMYMANAGE[0].mealArray}
            exerciseArray={DUMMYMANAGE[0].exerciseArray}
            cardHeader={<TodayLogHeader />}
          />
        </Card>
        <TraverseDateButton
          type="log"
          previous={setPreviousDateLog}
          next={setNextDateLog}
          index={0}
          date="Today"
          size={50}
          length={0}
        />
      </Card>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  activityContainer: {
    alignItems: "center",
    marginTop: SetMargin(0.05),
  },
  recentContainer: {
    marginTop: SetMargin(0.0905),
  },

  recentImagesContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  recentHeaderContainer: {
    alignSelf: "center",
    width: "90%",
  },
  recentHeader: {
    fontSize: 32,
    letterSpacing: 0.5,
  },
  performanceHeaderContainer: {
    width: "90%",
    alignSelf: "center",
  },
  performanceHeader: {
    fontSize: 32,
    letterSpacing: 0.5,
  },
  dayHeaderContainer: {},
  dayHeader: {
    fontSize: 26,
  },
  indicatorsContainer: {
    width: "90%",
    borderBottomWidth: 2,
  },
  border: {
    color: "#2196f3",
  },

  detailsContainer: {},
  dateWeeklyContainer: {
    flexDirection: "row",
    borderColor: "black",
    borderStyle: "solid",
    alignItems: "center",
    width: "90%",
    justifyContent: "flex-start",
    alignSelf: "center",
  },

  dateWeekButtonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
  },
  dotsContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '50%',
    padding: 7.5,
    alignSelf: 'center'
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
  programLogContainer: {
    width: "90%",
    marginBottom: SetMargin(0.05),
    marginTop: SetMargin(0.1),
    borderWidth: 2,
    borderLeftWidth: 0,
    borderRadius: 20,
  },
});

export default TodayScreen;
