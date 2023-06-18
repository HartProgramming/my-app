import Card from "../../components/Card/Card";
import { StyleSheet } from "react-native";
import { Text, View } from "react-native";
import Meter from "../../components/Meter/Meter";
import { useEffect, useState } from "react";
import { Dimensions } from "react-native";
import { Text as SvgText, TextProps } from "react-native-svg";

const TodayScreen: React.FC = () => {
  /* Performance Percentages */
  const [calorieIntakePercentage, setCalorieIntakePercentage] =
    useState<number>(20);
  const [caloriesBurnedPercentage, setCaloriesBurnedPercentage] =
    useState<number>(20);
  const [stepsTakenPercentage, setStepsPercentage] = useState<number>(20);
  const [proteinTakenPercentage, setProteinTakenPercentage] =
    useState<number>(20);
  const [protcalPercentage, setProtcalPercentage] = useState<number>(20);

  const [currentCalories, setCurrentCalories] = useState<number>(0);
  const [maxCalories, setMaxCalories] = useState<number>(0);
  const [calorieData, setCalorieData] = useState<string>("data");

  const [caloriesBurned, setCaloriesBurned] = useState<number>(0);
  const [caloriesBurnedRecommend, setCaloriesBurnedRecommended] =
    useState<number>(0);
  const [calorieBurnedData, setCalorieBurnedData] = useState<string>("data");

  const [stepsTaken, setStepsTaken] = useState<number>(0);
  const [stepsTakenRecommended, setStepsRecommended] = useState<number>(0);
  const [stepsData, setStepsData] = useState<string>("data");

  const [protein, setProtein] = useState<number>(0);
  const [proteinRecommended, setProteinRecommended] = useState<number>(0);
  const [proteinData, setProteinData] = useState<string>("data");

  const [protcal, setProtcal] = useState<number>(0);
  const [protcalRecommended, setProtcalRecommended] = useState<number>(0);
  const [protcalData, setProtcalData] = useState<string>("data");

  const [elements, setElements] = useState<any>();

  const windowWidth = Dimensions.get("window").width;

  const meterWidth = windowWidth * 0.9;

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

  useEffect(() => {
    setElements(
      indicatorsArray.map((value) => {
        return (
          <Card key={value.label} scrollable={false} containerClass={styles.indicatorContainer}>
            <Text style={styles.label}>{value.label}</Text>
            <Meter
              data={value.data}
              strokeWidth={4}
              width={meterWidth}
              height={90}
              percentage={value.percentage}
              strokeLinecap={"round"}
              strokeProgress="none"
              strokeStandard="white"
            ></Meter>
          </Card>
        );
      })
    );
  }, []);

  return (
    <Card scrollable={true} containerClass={styles.container}>
      <Card scrollable={false} containerClass={styles.headerContainer}>
        <Text style={styles.header}>Today's Progress</Text>
      </Card>
      <Card scrollable={false} containerClass={styles.indicatorsContainer}>
        {elements}
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
    color: 'white'
  },
  indicatorsContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  indicatorContainer: {
    marginTop: 10,
  },
  label: {
    fontSize: 21,
    fontWeight: "bold",
    color: 'white'
  },
  border: {
    color: "#2196f3"
  }
});

export default TodayScreen;
