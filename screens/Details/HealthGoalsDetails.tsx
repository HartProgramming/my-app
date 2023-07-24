import ReusableDetails from "./ReusableDetails";
import Card from "../../components/Card/Card";
import { StyleSheet } from "react-native";
import { useEffect, useRef, useState } from "react";
import PhoneButton from "../../components/Inputs/PhoneButton";
import { useNavigation } from "@react-navigation/native";
import { fitnessGoals } from "./Classes/Details";
import Navigation from "../../objects/NavigationType";
import SetMargin from "../../functions/SetMargin";
import CardText from "../../components/Card/CardText";

export default function HealthGoalsDetails() {
  const [weightGoal, setWeightGoal] = useState<number>(0);
  const [muscleGoal, setMuscleGoal] = useState<string>("");
  const [data, setData] = useState<[]>([]);
  const [dataObj, setDataObj] = useState<any>();

  const navigation = useNavigation();

  const handleTrans = (param: any, event: string) => {
    return Navigation({ param }, event);
    console.log(dataObj);
  };

  useEffect(() => {
    fitnessGoals[0].selectedValue = weightGoal;
    fitnessGoals[1].selectedValue = muscleGoal;
  }, []);

  useEffect(() => {
    console.log(data);
    setDataObj(data);
  }, [data]);

  return (
    <Card scrollable={false} containerClass={styles.container}>
      <CardText
        text="Step 3 of 5"
        textStyle={styles.header}
        container={styles.headerContainer}
      />
      <ReusableDetails
        data={setData}
        header="Fitness Goals"
        selectorArray={fitnessGoals}
      />
      <PhoneButton
        text="Next"
        buttonClass={[styles.button, { backgroundColor: "red" }]}
        buttonContainerClass={styles.buttonContainer}
        onPress={() => handleTrans({ navigation }, "current-activity")}
        textClass={styles.text}
      />
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    marginTop: SetMargin(0.15),
    marginBottom: SetMargin(-0.15),
    alignItems: "center",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
  },
  buttonContainer: {
    width: "30%",
    alignSelf: "center",
  },
  button: {
    backgroundColor: "blue",
    alignItems: "center",
    padding: 15,
    borderRadius: 15,
    borderStyle: "solid",
    borderWidth: 2,
    marginTop: SetMargin(0.05),
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
