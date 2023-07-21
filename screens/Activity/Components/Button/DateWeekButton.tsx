import { StyleSheet } from "react-native";
import PhoneButton from "../../../../components/Inputs/PhoneButton";
import SetMargin from "../../../../functions/SetMargin";

interface DateWeekButtonProps {
  label: string;
  onPress: any;
  left: boolean;
}

export default function DateWeekButton({
  left,
  label,
  onPress,
}: DateWeekButtonProps) {
  return (
    <PhoneButton
      text={label}
      onPress={onPress}
      buttonContainerClass={styles.container}
      buttonClass={[
        styles.button,
        left ? styles.borderLeft : styles.borderRight,
      ]}
      textClass={styles.text}
    />
  );
}

const styles = StyleSheet.create({
  container: {
  },
  button: { 
    padding: 5,
},
  text: {
    fontSize: 22,
    fontFamily: "Poppins",
    fontWeight: "bold",
    marginLeft: 5,
    marginRight: 5
},
  borderLeft: {
    borderLeftColor: "black",
    borderLeftWidth: 1,
  },
  borderRight: {
    borderRightColor: "black",
    borderRightWidth: 1,
  },
});
