import { StyleSheet } from "react-native";
import Card from "../../../../components/Card/Card";
import CardText from "../../../../components/Card/CardText";
import PhoneButton from "../../../../components/Inputs/PhoneButton";
import { MaterialIcons } from "@expo/vector-icons";
import { ProgramDetailsInterface } from "../../Components/Interfaces/ProgramDetailsInterface";
import { useEffect, useState } from "react";
import { DUMMYMANAGE } from "./DummyArray";
import SetMargin from "../../../../functions/SetMargin";
import { useNavigation } from "@react-navigation/native";
import Navigation from "../../../../objects/NavigationType";
import { PanGestureHandler } from "react-native-gesture-handler";
import TraverseDateButton from "../../../Activity/Components/Button/TraverseDateButton";
import Animated, {
  useSharedValue,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  withSpring,
  runOnJS,
} from "react-native-reanimated";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ManageProgramCard from "../../Components/Card/ManageProgramCard";

export default function ManageProgram() {
  const [manageArray, setManageArray] = useState<ProgramDetailsInterface>();
  const [counter, setCounter] = useState<any>(0);
  const [day, setDay] = useState<string>("");
  const [swipe, setSwipe] = useState(false);
  const [previousDateLog, setPreviousDateLog] = useState<boolean>(false);
  const [nextDateLog, setNextDateLog] = useState<boolean>(false);

  const navigation = useNavigation();

  useEffect(() => {
    setManageArray(DUMMYMANAGE[counter]);
    /* On load perform a get request to the backend and store the program as an array to be processed in the frontend */
  }, [counter]);

  const handleDay = (event: string) => {
    if (event === "Left") {
      setCounter((prev: any) => (prev !== 0 ? (prev -= 1) : 0));
    } else if (event === "Right") {
      setCounter((prev: any) =>
        prev !== DUMMYMANAGE.length ? (prev += 1) : DUMMYMANAGE.length
      );
    }
  };

  return (
    <Card scrollable={false} containerClass={styles.container}>
      <Card scrollable={false} containerClass={styles.topLevelContainer}>
        <CardText
          bold
          container={styles.manageHeaderContainer}
          textStyle={styles.manageHeader}
          text="Manage Program"
        /> 
      </Card>
      <ManageProgramCard type="manage" array={DUMMYMANAGE[counter]} />
      <Card scrollable={false} containerClass={styles.alternateDaysContainer}>
      <TraverseDateButton
            type="program"
            previous={setPreviousDateLog}
            next={setNextDateLog}
            index={0}
            date="Day 1"
            size={50}
            length={DUMMYMANAGE.length}
          />
      </Card>
      <Card scrollable={false} containerClass={styles.buttonsContainer}>
        <PhoneButton
          onPress={Navigation({ navigation }, "edit-program")}
          semiBold
          buttonContainerClass={styles.buttonContainer}
          buttonClass={styles.button}
          textClass={styles.buttonText}
          text="Edit"
        />
        <PhoneButton
          onPress={Navigation({ navigation }, "grocery-program")}
          semiBold
          buttonContainerClass={styles.buttonContainer}
          buttonClass={styles.button}
          textClass={styles.buttonText}
          text="Grocery List"
        />
      </Card>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  topLevelContainer: {
    width: "100%",
    alignItems: "center",
    marginTop: SetMargin(0.1),
  },
  
  manageHeaderContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  manageHeader: {
    fontSize: 32,
    letterSpacing: 1,
  },
  alternateDaysContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  arrowLeftButtonContainer: {},
  arrowLeftButton: {},
  arrowText: {
    display: "none",
  },
  arrowRightButtonContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  arrowRightButton: {},
  dayHeaderContainer: {},
  dayHeader: {
    padding: 15,
    fontSize: 26,
    letterSpacing: 0.8,
  },
  buttonsContainer: {
    width: "100%",
    marginTop: SetMargin(0.03),
  },
  buttonContainer: {
    borderTopColor: "black",
    borderTopWidth: 2,
    borderStyle: "solid",
    padding: 10,
  },
  button: {},
  buttonText: {
    fontSize: 32,
    textAlign: "center",
  },
});
