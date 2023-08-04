import { StyleSheet } from "react-native";
import PhoneButton from "../../../../components/Inputs/PhoneButton";
import Card from "../../../../components/Card/Card";
import { useEffect, useState } from "react";

interface GroceryReplenishButtonsProps {
  onPress: any;
}

export default function GroceryReplenishButtons({
  onPress,
}: GroceryReplenishButtonsProps) {
  const [dataState, setDataState] = useState<"replenish" | "custom">(
    "replenish"
  );

  useEffect(() => {
    onPress(dataState);
  }, [dataState]);

  return (
    <Card scrollable={false} containerClass={styles.buttonsContainer}>
      <PhoneButton
        semiBold
        onPress={() => setDataState("replenish")}
        text="Replenish"
        buttonContainerClass={styles.buttonContainer}
        buttonClass={[
          styles.button,
          dataState === "replenish"
            ? styles.background
            : styles.alterBackground,
        ]}
        textClass={
          dataState === "replenish"
            ? styles.buttonTextWhite
            : styles.buttonTextBlack
        }
      />
      <PhoneButton
        semiBold
        onPress={() => setDataState("custom")}
        text="Custom"
        buttonContainerClass={styles.buttonContainer}
        buttonClass={[
          styles.button,
          dataState === "custom" ? styles.background : styles.alterBackground,
        ]}
        textClass={
          dataState === "custom"
            ? styles.buttonTextWhite
            : styles.buttonTextBlack
        }
      />
    </Card>
  );
}

const styles = StyleSheet.create({
  buttonsContainer: {
    width: "85%",
    borderWidth: 2,
    alignSelf: "center",
    flexDirection: 'row',
    alignItems: 'center'
  },
  buttonContainer: {
    width: "50%",
  },
  button: {
    width: "100%",
    alignItems: 'center'
  },
  buttonTextWhite: {
    fontSize: 26,
    color: "white",
  },
  buttonTextBlack: {
    fontSize: 26,
    color: "black",
  },
  background: {
    backgroundColor: "black",
  },
  alterBackground: {
    backgroundColor: "white",
  },
});
