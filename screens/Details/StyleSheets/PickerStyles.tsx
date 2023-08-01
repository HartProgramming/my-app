import { StyleSheet } from "react-native";

const pickerStyles = StyleSheet.create({
  cardContainer: {
    width: "75%",
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "center",
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 4,
  },
  picker: {
    backgroundColor: "white",
    width: "100%",
    borderStyle: "solid",
    borderColor: "black",
  },
  pickerItem: {
    backgroundColor: "white",
    width: "100%",
    color: "black",
    fontSize: 22,
  },
});

export default pickerStyles;
