import { useEffect, useState } from "react";
import ModalPopup from "../../../../components/Modal/Modal";
import { StyleSheet } from "react-native";
import Card from "../../../../components/Card/Card";
import { Modal } from "react-native";
import SetMargin from "../../../../functions/SetMargin";
import CardText from "../../../../components/Card/CardText";
import { Image, Text } from "react-native";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import PhoneButton from "../../../../components/Inputs/PhoneButton";
import SlideDownBar from "../../../../components/Card/SlideDownBar";
import MainRegimenButton from "../../../Journal/Components/Buttons/MainRegimenButton";


export interface ActivityModalProps {
  details: any;
  visible: any;
  showHide: any;
}

export default function ActivityModal({
  details,
  visible,
  showHide,
}: ActivityModalProps) {
  const [filtered, setFiltered] = useState<any>([]);

  const handleClose = () => {
    showHide(false);
  };
  const keysNotToDisplay = ["Meal", "Exercise", "Image"];

  const filteredEntries = Object.entries(details).filter(
    ([key]) => !keysNotToDisplay.includes(key)
  );

  const handleSwipeClose = () => {
    console.log('close')
  }

  useEffect(() => {
    setFiltered(filteredEntries);
    console.log(filtered);
  }, []); 

  return (
    <Modal visible={visible} transparent animationType="fade">
      <Card scrollable={false} containerClass={activity.container}>
        <Card scrollable={false} containerClass={activity.contentContainer}>
          <SlideDownBar />
          <Image style={activity.imageStyle} source={details.Image} />
          <AntDesign
            onPress={handleClose}
            style={activity.closeCircle}
            name="closecircle"
            size={40}
            color={"white"}
          />
          <CardText
            textStyle={activity.header}
            container={activity.headerContainer}
            text={details.Meal}
          />
          <Card scrollable={false} containerClass={activity.detailsContainer}>
            {filtered.map(([key, value]: any) => {
              return (
                <Card containerClass={activity.detailsTextContainer}>
                  <Text style={activity.detailsLabel}>{key}: </Text>
                  <Text style={activity.detailsText}>{value}</Text>
                </Card>
              );
            })}
          </Card>
        </Card>
      </Card>
    </Modal>
  );
}

const activity = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.04)",
  }, 

  closeCircle: {
    position: "absolute",
    marginLeft: SetMargin(0.42),
    marginTop: SetMargin(0.02),
  },
  contentContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    width: "100%",
    height: SetMargin(0.7),
    borderTopRightRadius: 35,
    borderTopLeftRadius: 35,
  },
  detailsContainer: {
    width: "90%",
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "black",
    alignSelf: "center",
    borderRadius: 15,
    padding: 10,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  header: {
    fontSize: 34,
    fontWeight: "bold",
  },
  headerContainer: {
    alignSelf: "center",
  },
  detailsTextContainer: {
    width: "50%",
  },
  detailsLabel: {
    fontSize: 18,
    fontWeight: "bold",
  },
  detailsText: {
    fontSize: 24,
  },
  closeButtonContainer: {
    width: "50%",
    alignSelf: "center",
  },
  closeButton: {
    backgroundColor: "black",
    padding: 5,
    borderRadius: 15,
  },
  closeButtonText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  imageStyle: {
    height: SetMargin(0.33),
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderTopRightRadius: 35,
    borderTopLeftRadius: 35,
  },
});
