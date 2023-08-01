import { StyleSheet } from "react-native";
import Card from "../../../../components/Card/Card";
import CardText from "../../../../components/Card/CardText";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useSharedValue,
  withSpring,
  useAnimatedStyle,
} from "react-native-reanimated";
import { useState } from "react";
import { ManageProgramCardProps } from "../Interfaces/ManageProgramCardInterface";
import { AntDesign } from "@expo/vector-icons";
import PhoneButton from "../../../../components/Inputs/PhoneButton";
import SetMargin from "../../../../functions/SetMargin";
import InfoDeleteOptionalCard from "./InfoDeleteOptionalCard";

export default function ManageProgramCard({
  array,
  type,
}: ManageProgramCardProps) {
  const [counter, setCounter] = useState<number>(0);

  console.log(array.exerciseArray);

  const transX = useSharedValue(0);

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx: any) => {
      ctx.startX = transX.value;
    },
    onActive: (event, ctx: any) => {
      transX.value = ctx.startX + event.translationX;
    },
    onEnd: (event, ctx: any) => {
      if (Math.abs(event.translationX) > 10) {
        if (event.translationX < 0) {
          runOnJS(setCounter)((prev: any) =>
            Math.min((prev += 1), array.length - 1)
          );
        } else if (event.translationX > 0) {
          runOnJS(setCounter)((prev: any) => Math.max((prev -= 1), 0));
        }
      }
      transX.value = withSpring(0);
    },
  });

  const animatedSwipe = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: transX.value }],
    };
  });

  const handleEdit = () => {};

  return (
    <Card scrollable={false} containerClass={styles.programDataContainer}>
      <Card scrollable={false} containerClass={styles.program}>
        <PanGestureHandler onGestureEvent={gestureHandler}>
          <Animated.View style={animatedSwipe}>
            <Card scrollable={false} containerClass={styles.mealsContainer}>
              <CardText
                semiBold
                container={styles.titleHeaderContainer}
                textStyle={styles.titleHeader}
                text="Meals"
              />
              {type === "manage" &&
                array.mealArray.map((value) => {
                  return (
                    <CardText
                      medium
                      container={styles.dataInfoContainer}
                      textStyle={styles.dataInfo}
                      text={`${value.Meal}: ${value.Calories}kCal ${value.Protein}g`}
                    />
                  );
                })}
              {type === "edit" &&
                array.mealArray.map((value) => {
                  return (
                    <InfoDeleteOptionalCard
                      text={`${value.Meal}: ${value.Calories}kCal ${value.Protein}g`}
                    />
                  );
                })}
            </Card>
            <Card scrollable={false} containerClass={styles.exercisesContainer}>
              <CardText
                semiBold
                container={styles.titleHeaderContainer}
                textStyle={styles.titleHeader}
                text="Exercises"
              />
              {type === "manage" &&
                array.exerciseArray.map((value) => {
                  return (
                    <CardText
                      medium
                      container={styles.dataInfoContainer}
                      textStyle={styles.dataInfo}
                      text={`${value.Exercise}: ${
                        value.Reps > 0
                          ? `${value.Reps} Reps`
                          : value.Miles > 0
                          ? `${value.Miles} Miles`
                          : value.Minutes > 0
                          ? `${value.Minutes} Minutes`
                          : ""
                      }`}
                    />
                  );
                })}

              {type === "edit" &&
                array.exerciseArray.map((value) => {
                  return (
                   <InfoDeleteOptionalCard text={`${value.Exercise}: ${
                    value.Reps > 0
                      ? `${value.Reps} Reps`
                      : value.Miles > 0
                      ? `${value.Miles} Miles`
                      : value.Minutes > 0
                      ? `${value.Minutes} Minutes`
                      : ""
                  }`} />
                  );
                })}
            </Card>
          </Animated.View>
        </PanGestureHandler>
      </Card>
      <CardText
        text=""
        textStyle={styles.scrollText}
        container={styles.scrollBar}
      />
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {},

  programDataContainer: {
    width: "97%",
    alignSelf: "center",
    overflow: "hidden",
    borderBottomWidth: 2,
    borderLeftWidth: 2,
    borderStyle: "solid",
    borderColor: "black",
    flexDirection: "row",
  },
  program: {
    width: "96%",
  },
  dataInfoContainer: {
    width: "90%",
  },
  dataInfo: {
    fontSize: 20,
    marginLeft: SetMargin(0.01),
  },
  sliderButton: {},
  sliderText: {},
  mealsContainer: {},
  titleHeaderContainer: {
    borderBottomColor: "black",
    borderBottomWidth: 2,
    borderstyle: "solid",
    width: "100%",
    alignSelf: "center",
  },
  titleHeader: {
    fontSize: 26,
    letterSpacing: 0.8,
    width: "100%",
    alignSelf: "center",
    backgroundColor: "black",
    color: "white",
  },

  editButtonContainer: {
    width: "60%",
  },
  editButton: {
    backgroundColor: "black",
  },
  editButtonText: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
    letterSpacing: 0.8,
  },
  exercisesContainer: {},

  scrollBar: {
    width: "3%",
    backgroundColor: "rgba(0,0,0,.02)",
    borderRadius: 25,
    elevation: 25,
  },
  scrollText: {},
});
