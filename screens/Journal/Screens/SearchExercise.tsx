import Card from "../../../components/Card/Card";
import { StyleSheet } from "react-native";
import CardText from "../../../components/Card/CardText";
import RegimenButton from "../Components/Buttons/RegimenButton";
import SetMargin from "../../../functions/SetMargin";
import SearchInput from "../Components/Input/SearchInput";
import { useEffect, useState } from "react";
import { CriteriaExerciseInterface } from "../Interfaces/Interfaces";
import { Image } from "react-native";
import Jogging from "../../../images/cardicons/jogging.png";

export const displaySearchArr: CriteriaExerciseInterface[] = [
  { name: "Jogging", key: "jogging", miles: 3, resultsBoo: false },
  { name: "Push-ups", key: "push-ups", reps: 200, resultsBoo: false },
  { name: "Planks", key: "planks", minutes: 3, resultsBoo: false },
];

export default function SearchExercise() {
  const [exerciseValue, setExerciseValue] = useState<string>("");
  const [resultObject, setResultObject] = useState<any>();

  const handleRecommendation = () => {
    console.log("hi");
  };

  useEffect(() => {
    console.log(exerciseValue);
    console.log(resultObject);
  }, [exerciseValue, resultObject]);

  return (
    <Card scrollable={false} containerClass={styles.container}>
      <Card scrollable={false} containerClass={styles.recommendContainer}>
        <RegimenButton
          onPress={() => handleRecommendation()}
          label="Recommended"
        />
      </Card>
      <Card scrollable={false} containerClass={styles.inputContainer}>
        <SearchInput
          displaySearch={displaySearchArr}
          placeholder="Search Exercise"
          value={setExerciseValue}
          resultObject={setResultObject}
        />
      </Card>
      <Card scrollable={false} containerClass={styles.resultsContainer}>
        {resultObject !== undefined &&
          resultObject.map((value: any) => {
            return (
              <>
                <Card
                  scrollable={false}
                  containerClass={styles.resultImageCard}
                >
                  <Image style={styles.image} source={Jogging} />
                  <CardText
                    text={value.name}
                    textStyle={styles.resultsHeader}
                    container={styles.resultsHeaderContainer}
                  />
                </Card>
                <Card
                  scrollable={false}
                  containerClass={styles.resultsText}
                ></Card>
              </>
            );
          })}
      </Card>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  recommendContainer: {
    marginTop: SetMargin(0.16),
  },
  inputContainer: {},
  resultsContainer: {
    width: "85%",
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "red",
    alignSelf: "center",
    marginTop: SetMargin(0.06),
    flexDirection: "column",
  },
  resultsHeaderContainer: {},
  resultsHeader: {
    fontSize: 26,
    fontWeight: "bold",
  },
  resultImageCard: {
    width: "80%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  image: {
    height: 50,
    width: 50,
  },
  resultsText: {},
});
