import { StyleSheet } from "react-native";

const pickerStyles = StyleSheet.create({
  cardContainer: {
    width: "100%",
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: 15,
  },
  picker: {
    backgroundColor: "white",
    width: "70%",
    borderRadius: 15,
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 2,
  },
  pickerItem: {
    backgroundColor: "white",
    width: "100%",
    color: "black",
    fontSize: 22,
  },
});

export default pickerStyles;
