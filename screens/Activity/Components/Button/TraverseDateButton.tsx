import { StyleSheet } from "react-native";
import { TraverseDateButtonProps } from "../../Interfaces/Interface";
import Card from "../../../../components/Card/Card";
import CardText from "../../../../components/Card/CardText";
import { MaterialIcons } from "@expo/vector-icons";
import SetMargin from "../../../../functions/SetMargin";
import { useAmp } from "next/amp";
import { useEffect, useState } from "react";

export default function TraverseDateButton({
  date,
  size,
  index,
  next,
  previous,
  type,
  length,
  onPress
}: TraverseDateButtonProps) {
  const [showIcon, setShowIcon] = useState<boolean>(false);

  const handlePrevious = () => {
    if (type === "log") {
      previous(true);
      next(false);
    } else if (type === "performance") {
      setShowIcon(false);
    }
  };

  const handleNext = () => {
    if (type === "log") {
      next(true);
      previous(false);
    } else if (type === "performance") {
      setShowIcon(true);
    }
  };

  return (
    <Card scrollable={false} containerClass={styles.container}>
      {type === "log" && (
        <>
          <Card scrollable={false} containerClass={styles.arrowContainer}>
            <MaterialIcons
              onPress={handlePrevious}
              name="keyboard-arrow-left"
              size={size}
              color={"black"}
            />
          </Card>
          <CardText
            semiBold
            container={styles.dateContainer}
            textStyle={styles.date}
            text={date}
          />
          <Card scrollable={false} containerClass={styles.arrowContainer}>
            {index > 0 && (
              <MaterialIcons
                name="keyboard-arrow-right"
                size={size}
                color={"black"}
                onPress={handleNext}
              />
            )}
          </Card>
        </>
      )}
      {type === "program" && (
        <>
          <Card scrollable={false} containerClass={styles.arrowContainer}>
            {index > 0 && (
              <MaterialIcons
                onPress={handlePrevious}
                name="keyboard-arrow-left"
                size={size}
                color={"black"}
              />
            )}
          </Card>
          <CardText
            semiBold
            container={styles.dateContainer}
            textStyle={styles.date}
            text={date}
          />
          <Card scrollable={false} containerClass={styles.arrowContainer}>
            {index - length !== 1 && (
              <MaterialIcons
                name="keyboard-arrow-right"
                size={size}
                color={"black"}
                onPress={handleNext}
              />
            )}
          </Card>
        </>
      )}
      {type === "performance" && (
        <>
          <Card scrollable={false} containerClass={styles.arrowContainer}>
            {showIcon && (
              <MaterialIcons
                onPress={handlePrevious}
                name="keyboard-arrow-left"
                size={size}
                color={"black"}
              />
            )}
          </Card>
          <CardText
            semiBold
            container={styles.dateContainer}
            textStyle={styles.date}
            text={!showIcon ? "Next" : "Prev"}
          />
          <Card scrollable={false} containerClass={styles.arrowContainer}>
            {showIcon === false && (
              <MaterialIcons
                name="keyboard-arrow-right"
                size={size}
                color={"black"}
                onPress={handleNext}
              />
            )}
          </Card>
        </>
      )}
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "55%",
    alignSelf: "center",
  },

  arrowContainer: {
    width: "27%",
  },
  dateContainer: {},
  date: {
    fontSize: 26,
    letterSpacing: 0.8,
  },
});
