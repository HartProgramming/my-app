import ReusableDetails from "./ReusableDetails";
import Card from "../../components/Card/Card";
import { StyleSheet } from "react-native";
import { SelectorArray } from "./ReusableDetails";
import { useEffect, useRef, useState } from "react";
import PhoneButton from "../../components/Inputs/PhoneButton";
import { useNavigation } from "@react-navigation/native";
import { lifestyleDetails } from "./Classes/Details";
import CardText from "../../components/Card/CardText";
import SetMargin from "../../functions/SetMargin";
import Navigation from "../../objects/NavigationType";

export default function ActivityDetails() {
  const [itemsArray, setItemsArray] = useState<SelectorArray[]>([]);
  const [weightGoal, setWeightGoal] = useState<number>(0);
  const [muscleGoal, setMuscleGoal] = useState<string>("");
  const [data, setData] = useState<any>([{ weightGoal: "", muscleGoal: "" }]);
  const [dataObj, setDataObj] = useState<any>();

  const navigation = useNavigation();

  const handleTrans = (event: string) => {
    Navigation({ navigation }, "");
    console.log(dataObj);
  };

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
        header="Lifestyle Details"
        selectorArray={lifestyleDetails}
      />
      <PhoneButton
        text="Next"
        buttonClass={[styles.button, { backgroundColor: "red" }]}
        buttonContainerClass={styles.buttonContainer}
        onPress={() => handleTrans}
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
    alignItems: "center",
    marginBottom: SetMargin(-0.1),
    marginTop: SetMargin(0.15),
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
  },
  buttonContainer: {
    width: "30%",
    alignSelf: "center",
    marginTop: SetMargin(0.03),
  },
  button: {
    backgroundColor: "blue",
    alignItems: "center",
    padding: 15,
    borderRadius: 15,
    borderStyle: "solid",
    borderWidth: 2,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    letterSpacing: 1.15,
  },
});
