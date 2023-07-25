import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import Card from "../../../../components/Card/Card";
import { Modal } from "react-native";
import SetMargin from "../../../../functions/SetMargin";
import CardText from "../../../../components/Card/CardText";
import { AntDesign } from "@expo/vector-icons";

interface FilterSortBaseModalProps {
  visible: boolean; 
  showHide: any;
  filter?: any;
  title: string;
  sort?: any;
}

export default function FilterSortBaseModal({
  visible,
  showHide,
  filter, 
  title,
  sort,
}: FilterSortBaseModalProps) {

  return (
    <Modal visible={visible} transparent animationType="fade">
        <Card scrollable={false} containerClass={activity.container}>
          <Card scrollable={false} containerClass={activity.noscroll}>
          <Card scrollable={true} containerClass={activity.contentContainer}>
            <AntDesign
              onPress={showHide}
              style={activity.closeCircle}
              name="closecircle"
              size={40}
              color={"black"}
            />
            <CardText
              textStyle={activity.header}
              container={activity.headerContainer}
              text={title}
            />
            <Card scrollable={false} containerClass={activity.detailsContainer}>
              {filter}
              {sort}
            </Card>
          </Card>
          </Card>

        </Card>
    </Modal>
  );
}

const activity = StyleSheet.create({
  container: {
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    flex: 1
  },
  closeCircle: {
    position: "absolute",
    marginLeft: SetMargin(0.42),
    marginTop: SetMargin(0.02),
    zIndex: 2
  },
  noscroll: {
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
    marginTop: SetMargin(0.06),
    alignSelf: "center",
    borderRadius: 15,
    padding: 10,
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
