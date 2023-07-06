import { ReactNode, useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import { StyleSheet, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { EDGE_UNSUPPORTED_NODE_APIS } from "next/dist/shared/lib/constants";

export default function History() {
  const exerciseArr: exercisesArrObj[] = [];

  const uniqueExerciseLabels = new Set<string>();

  const [uniqueLabels, setUniqueLabels] = useState<string[]>([]);
  const [datesTitle, setDatesTitle] = useState<Dates[]>([]);
  const [daysElement, setDaysElement] = useState<ReactNode>();

  interface dataArrObj {
    date: Date;
    calories: number;
    burned: number;
    protein: number;
    protcal: number;
    exercises?: exercisesArrObj[];
  }

  interface exercisesArrObj {
    exercise: string;
    value: number | undefined;
  }

  const [dataObj, setDataObj] = useState<dataArrObj[]>([]);

  interface HistoryDetails {
    label: string;
  }

  const labelArray: HistoryDetails[] = [
    { label: "Categories" },
    { label: "Calories" },
    { label: "kCal Burned" },
    { label: "Protein" },
    { label: "Protcal" },
  ];

  const options: Intl.DateTimeFormatOptions = {
    month: "numeric",
    day: "numeric",
  };

  interface Dates {
    date: Date;
  }

  const datesArray: Dates[] = [
    { date: new Date("2023-01-06") },
    { date: new Date("2023-02-06") },
    { date: new Date("2023-03-06") },
    { date: new Date("2023-04-06") },
    { date: new Date("2023-05-06") },
    { date: new Date("2023-06-06") },
    { date: new Date("2023-07-06") },
    { date: new Date("2023-08-06") },
    { date: new Date("2023-09-06") },
    { date: new Date("2023-10-06") },
    { date: new Date("2023-11-06") },
    { date: new Date("2023-12-06") },
    { date: new Date("2023-13-06") },
    { date: new Date("2023-14-06") },
  ];

  useEffect(() => {
    const dateTitles = [];
    dateTitles.push(datesArray[datesArray.length - 1]);
    dateTitles.push(datesArray[datesArray.length - 6])
    setDatesTitle(dateTitles);
  }, []);

  useEffect(() => {
    const dataArray: dataArrObj[] = [
      {
        date: new Date("2023-16-06"),
        calories: 0.95,
        burned: 1,
        protein: 0.2,
        protcal: 0.07,
        exercises: [
          { exercise: "crunches", value: 115 },
          { exercise: "push-ups", value: 30 },
        ],
      },
      {
        date: new Date("2023-17-06"),
        calories: 0.88,
        burned: 0.9,
        protein: 0.7,
        protcal: 0.09,
        exercises: [{ exercise: "planks", value: 5 }],
      },
      {
        date: new Date("2023-18-06"),
        calories: 1,
        burned: 0.3,
        protein: 1,
        protcal: 0.13,
        exercises: [{ exercise: "sprinting", value: 2 }],
      },
      {
        date: new Date("2023-19-06"),
        calories: 1,
        burned: 0.3,
        protein: 1,
        protcal: 0.1,
        exercises: [
          { exercise: "jogging", value: 15 },
          { exercise: "sprinting", value: 5 },
        ],
      },
      {
        date: new Date("2023-20-06"),
        calories: 1,
        burned: 1,
        protein: 0.88,
        protcal: 0.1,
        exercises: [{ exercise: "jogging", value: 5 }],
      },
    ];

    setDataObj(dataArray);
    dataObj.map((value) => {
      {
        return value.exercises?.map((data) => {
          uniqueExerciseLabels.add(data.exercise);
        });
      }
    });
    const uniqueExerciseList = Array.from(uniqueExerciseLabels);
    setUniqueLabels(uniqueExerciseList);
  }, []);


  useEffect(() => {
    console.log(uniqueLabels);
  }, [dataObj]);

  return (
    <Card scrollable={false} containerClass={styles.container}>
      <Card scrollable={false} containerClass={styles.dateTitleContainer}>
        <Card scrollable={false} containerClass={styles.iconContainer}>
          <AntDesign name="left" size={24} color="#8c52ff" />
        </Card>
        <Card scrollable={false} containerClass={styles.daysContainer}>
          {datesTitle.map((value) => {
            return (
              <Text> {value.date.toLocaleDateString(undefined, options)}</Text>
            );
          })}
        </Card>
        <Card scrollable={false} containerClass={styles.iconContainer}>
          <AntDesign name="right" size={24} color="#8c52ff" />
        </Card>
      </Card>
      <Card scrollable={false} containerClass={styles.dataContainer}>
        <Card scrollable={false} containerClass={styles.datesContainer}>
          <Card scrollable={false} containerClass={styles.labelContainer}>
            <Text style={styles.label}>Cat.</Text>
          </Card>

          {dataObj.map((value) => {
            return (
              <Card scrollable={false} containerClass={styles.resultContainer}>
                <Text style={styles.label}>
                  {value.date.toLocaleDateString(undefined, options)}
                </Text>
              </Card>
            );
          })}
        </Card>
        <Card scrollable={false} containerClass={styles.datesContainer}>
          <Card scrollable={false} containerClass={styles.labelContainer}>
            <Text style={styles.label}>kCal</Text>
          </Card>

          {dataObj.map((value) => {
            return (
              <Card scrollable={false} containerClass={styles.resultContainer}>
                {value.calories >= 1 ? (
                  <AntDesign
                    name="checkcircle"
                    size={24}
                    color="#8c52ff"
                    style={styles.label}
                  />
                ) : (
                  <Text style={styles.label}>{value.calories}</Text>
                )}
              </Card>
            );
          })}
        </Card>
        <Card scrollable={false} containerClass={styles.datesContainer}>
          <Card scrollable={false} containerClass={styles.labelContainer}>
            <Text style={styles.label}>Burned</Text>
          </Card>

          {dataObj.map((value) => {
            return (
              <Card scrollable={false} containerClass={styles.resultContainer}>
                {value.burned >= 1 ? (
                  <AntDesign
                    name="checkcircle"
                    size={26}
                    color="#8c52ff"
                    style={styles.label}
                  />
                ) : (
                  <Text style={styles.label}>{value.burned}</Text>
                )}
              </Card>
            );
          })}
        </Card>
        <Card scrollable={false} containerClass={styles.datesContainer}>
          <Card scrollable={false} containerClass={styles.labelContainer}>
            <Text style={styles.label}>Protein</Text>
          </Card>

          {dataObj.map((value) => {
            return (
              <Card scrollable={false} containerClass={styles.resultContainer}>
                {value.protein >= 1 ? (
                  <AntDesign
                    name="checkcircle"
                    size={26}
                    color="#8c52ff"
                    style={styles.label}
                  />
                ) : (
                  <Text style={styles.label}>{value.protein}</Text>
                )}
              </Card>
            );
          })}
        </Card>
        <Card scrollable={false} containerClass={styles.datesContainer}>
          <Card scrollable={false} containerClass={styles.labelContainer}>
            <Text style={styles.label}>Protcal</Text>
          </Card>

          {dataObj.map((value) => {
            return (
              <Card scrollable={false} containerClass={styles.resultContainer}>
                {value.protcal >= 1 ? (
                  <AntDesign
                    name="checkcircle"
                    size={26}
                    color="#8c52ff"
                    style={styles.label}
                  />
                ) : (
                  <Text style={styles.label}>{value.protcal}</Text>
                )}
              </Card>
            );
          })}
        </Card>
        {uniqueLabels.map((label) => {
          return (
            <Card scrollable={false} containerClass={styles.datesContainer}>
              <Card scrollable={false} containerClass={styles.labelContainer}>
                <Text style={styles.label}>{label}</Text>
              </Card>
              {dataObj.map((value) => {
                return (
                  <Card
                    scrollable={false}
                    containerClass={styles.resultContainer}
                  >
                    <Text style={styles.label}>
                      {value.exercises?.find((ex) => ex.exercise === label)
                        ?.value || 0}
                    </Text>
                  </Card>
                );
              })}
            </Card>
          );
        })}
      </Card>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  dataContainer: {
    borderStyle: "solid",
    borderColor: "#8c52ff",
    borderWidth: 1,
    width: "95%",
    alignSelf: "center",
    height: 500,
    flexDirection: "column",
    justifyContent: "space-around",
  },
  datesContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    padding: 10,
    alignSelf: "center",
    borderStyle: "solid",
    borderColor: "#8c52ff",
    borderWidth: 3,
  },

  caloriesRowContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  labelContainer: {
    flex: 1.4,
    width: "20%",
    alignItems: "flex-start",
    justifyContent: "center",
    borderColor: '#8c52ff',
   
  },
  resultContainer: {
    flex: 0.8,
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "center",
  },
  dataObjContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    width: "80%",
    flexWrap: "wrap",
    alignContent: "space-between",
  },
  exerciseContainer: {
    height: 300,
  },
  dateTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "space-between",
    marginTop: 200,
    borderStyle: 'solid',
    borderWidth: 3,
    borderColor: 'blue',
    width: '50%'
  },
  iconContainer: {
  },
  daysContainer: {
    flexDirection: 'row'
  }
});
