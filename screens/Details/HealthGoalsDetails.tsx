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
import { MaterialIcons } from "@expo/vector-icons";
import { isSearchBarAvailableForCurrentPlatform } from "react-native-screens";

export default function HealthGoalsDetails({ route }: any) {
  const [weightGoal, setWeightGoal] = useState<number>(0);
  const [muscleGoal, setMuscleGoal] = useState<string>("");
  const [data, setData] = useState<[]>([]);
  const [dataObj, setDataObj] = useState<any>();

  const navigation = useNavigation();

  const handleTrans = (param: any, event: string) => {
    return Navigation({ param }, event);
    console.log(dataObj);
  };

  const component = route.params;

  useEffect(() => {
    console.log(component);
    fitnessGoals[0].selectedValue = weightGoal;
    fitnessGoals[1].selectedValue = muscleGoal;
  }, []);

  useEffect(() => {
    console.log(fitnessGoals.map((value) => value.selectedValue));
    console.log(data);
    setDataObj(data);
  }, [data]);

  return (
    <Card scrollable={false} containerClass={styles.container}>
      <CardText
        bold
        text={component === "Sign Up" ? "Step 3 of 5" : ""}
        textStyle={styles.header}
        container={component === 'Sign Up' ? styles.headerContainer : styles.updateHeaderContainer}
      />
      <ReusableDetails
        data={setData}
        header="Fitness Goals"
        selectorArray={fitnessGoals}
      />
      <PhoneButton
        semiBold
        text={"Next"}
        buttonClass={[
          styles.button,
          { backgroundColor: "black", color: "white" },
        ]}
        buttonContainerClass={styles.buttonContainer}
        onPress={
          component === "Sign Up"
            ? Navigation({ navigation }, "current-activity")
            : Navigation({ navigation }, "update-info")
        }
        textClass={styles.text}
      />
      <Card scrollable={false} containerClass={styles.backContainer}>
        {component === "Update" && (
          <PhoneButton
            text={""}
            image={
              <MaterialIcons
                name="keyboard-arrow-left"
                size={50}
                color={"black"}
              />
            }
            buttonClass={[styles.backButton]}
            buttonContainerClass={styles.backButtonContainer}
            onPress={
              component === "Sign Up"
                ? Navigation({ navigation }, "current-activity")
                : Navigation({ navigation }, "update-info")
            }
            textClass={styles.text}
          />
        )}
      </Card>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  updateHeaderContainer: {
    alignItems: "center",
    marginTop: SetMargin(-.1)
  },
  headerContainer: {
    marginTop: SetMargin(0.15),
    marginBottom: SetMargin(-0.15),
    alignItems: "center",
  },
  header: {
    fontSize: 28,
  },
  buttonContainer: {
    width: "55%",
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
    color: "white",
  },
  backContainer: {
    marginTop: SetMargin(0.06),
    width: "90%",
    alignSelf: "center",
    justifyContent: "center",
  },
  backButtonContainer: {
    width: "25%",
    alignItems: "center",
    justifyContent: "center",
  },
  backButton: {
    marginTop: SetMargin(0.01),
    marginBottom: SetMargin(-0.03),
  },

});
