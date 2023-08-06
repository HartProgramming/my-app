import Card from "../../../components/Card/Card";
import { StyleSheet } from "react-native";
import CardText from "../../../components/Card/CardText";
import Navigation from "../../../objects/NavigationType";
import { useNavigation } from "@react-navigation/native";
import SetMargin from "../../../functions/SetMargin";
import { useEffect, useState } from "react";
import MainRegimenButton from "../Components/Buttons/MainRegimenButton";
import { Image, Text } from "react-native";
import PhoneButton from "../../../components/Inputs/PhoneButton";
import OnDeckButton from "../Components/Buttons/OnDeckButton";
import OnDeckCard from "../Components/Card/MainScreen/OnDeckCard";
import SearchCreateModal from "../../Program/Components/Modal/SearchCreateModal";
import SearchCreateButtons from "../Components/Buttons/Main/SearchCreateButtons";
import AddRoutineCard from "../Components/Card/MainScreen/AddRoutineCard";
import { DUMMYEXERCISES, DUMMYMEALS } from "../../../dummydata/DummyArrays";
import CompleteCard from "../Components/Card/MainScreen/CompleteCard";

export default function MainRegimen() {
  const navigation = useNavigation();

  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalType, setModalType] = useState<"search" | "create" | "noShow">(
    "noShow"
  );
  const [userProgramType, setUserProgramType] = useState<
    "program" | "no-program"
  >("program");
  const [mealArrayCounter, setMealArrayCounter] = useState<any>(0);
  const [completeType, setCompleteType] = useState<
    "Complete" | "Meal" | "Exercise"
  >("Complete");

  const DUMMYARRAY = [{ Calories: 300 }, { Sodium: 40 }];

  useEffect(() => {
    /* backend sends a get request to determine if the user is using a program or no program */
    setUserProgramType("no-program");
    console.log(DUMMYMEALS[mealArrayCounter].Ingredients.map((item) => item));
  }, []);

  useEffect(() => {
    /*backend sends a get request to acquire exercise data */
  }, []);

  useEffect(() => {
    console.log(completeType);
    /* backends sends a get request to acquire meal data and computes the meal total */
  }, [completeType]);

  return (
    <Card scrollable={false} containerClass={styles.container}>
      <Card scrollable={true}>
        <OnDeckCard array={DUMMYARRAY} />
        <Card scrollable={false} containerClass={styles.todaysRoutineCards}>
          <CardText
            bold
            container={styles.todayHeaderContainer}
            textStyle={styles.todayHeader}
            text={
              userProgramType === "no-program"
                ? "Frequent Regimen"
                : "Today's Regimen"
            }
          />
          <AddRoutineCard
            counter={setMealArrayCounter}
            cardHeader="Exercises"
            cardType="Exercise"
            array={DUMMYEXERCISES[mealArrayCounter]}
          />
          <AddRoutineCard
            counter={setMealArrayCounter}
            cardHeader="Meals"
            cardType="Meal"
            array={DUMMYMEALS[mealArrayCounter]}
          />
        </Card>
        {userProgramType === "no-program" && (
          <Card scrollable={false} containerClass={styles.completeContainer}>
            <CardText
              bold
              text="One-Tap Complete"
              container={styles.completeHeaderContainer}
              textStyle={styles.completeHeader}
            />
            <CompleteCard
              setType={setCompleteType}
              completeType="Complete"
              completeText="Complete Program"
            />
            <CompleteCard
              setType={setCompleteType}
              completeType="Exercise"
              completeText="Complete Exercises"
            />
            <CompleteCard
              setType={setCompleteType}
              completeType="Meal"
              completeText="Complete Meals"
            />
          </Card>
        )}
        <SearchCreateButtons visible={setShowModal} type={setModalType} />
        <SearchCreateModal type={modalType} visible={showModal} day="Current" />
      </Card>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  onDeckContainer: {
    borderWidth: 2,
  },
  buttonsContainer: {
    marginTop: SetMargin(0.1),
    flexDirection: "row",
    width: "100%",
  },
  todaysRoutineCards: {
    width: "90%",
    alignSelf: "center",
    marginTop: SetMargin(0.04),
  },
  todayHeaderContainer: {},
  todayHeader: {
    fontSize: 28,
    letterSpacing: 0.5,
  },
  completeContainer: {
    width: "90%",
    borderRadius: 15,
    alignSelf: "center",
    marginTop: SetMargin(0.04),
  },
  completeHeaderContainer: {},
  completeHeader: {
    fontSize: 28,
    letterSpacing: 0.5,
  },
});
