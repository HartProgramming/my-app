import { StyleSheet } from "react-native";
import PhoneButton from "../Inputs/PhoneButton";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import SetMargin from "../../functions/SetMargin";

export default function SlideDownBar() {
  const handleSwipeClose = () => {};

  return (
    <PhoneButton
      text=""
      image={
        <MaterialCommunityIcons
          style={styles.dragItem}
          name="drag-horizontal"
          size={40}
          color={"black"}
        />
      }
      onPress={handleSwipeClose}
      buttonContainerClass={styles.dragContainer}
      buttonClass={styles.dragButton}
      textClass={styles.dragText}
    />
  );
}

const styles = StyleSheet.create({
  dragContainer: {
    position: "absolute",
    zIndex: 2,
    alignItems: "center",
    left: SetMargin(0.17),
    backgroundColor: "rgba(0,0,0,.25)",
    width: SetMargin(0.17),
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    height: SetMargin(0.03),
  },
  dragButton: {},
  dragText: {},
  dragItem: {
    position: "absolute",
    left: "-15%",
    top: "-30%",
  },
});
