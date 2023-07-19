import PhoneButton from "../../../../components/Inputs/PhoneButton";
import { StyleSheet } from "react-native";
import { MainRegimenButtonProps } from "../../Interfaces/Interfaces";
import SetMargin from "../../../../functions/SetMargin";

export default function MainRegimenButton({
  label,
  onPress,
  left,
}: MainRegimenButtonProps) {
  return (
    <PhoneButton
      textClass={styles.text}
      buttonClass={
        left
          ? [styles.button, styles.borderLeft]
          : [styles.button, styles.borderRight]
      }
      buttonContainerClass={styles.container}
      text={label}
      onPress={onPress}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    backgroundColor: "blue",
    height: SetMargin(0.08),
    alignItems: "center",
    justifyContent: "center",
    elevation: 5
  },
  text: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    letterSpacing: 1.15,
    borderStyle: "solid",
  },
  borderLeft: {
    borderLeftColor: "white",
    borderLeftWidth: 1.5,
  },
  borderRight: {
    borderRightColor: "white",
    borderRightWidth: 1.5,
  },
});
