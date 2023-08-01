import { Modal } from "react-native";
import { ActivityModalProps } from "../../../Activity/Components/Modal/ActivityModal";
import Card from "../../../../components/Card/Card";
import PhoneButton from "../../../../components/Inputs/PhoneButton";
import { StyleSheet } from "react-native";
import CardText from "../../../../components/Card/CardText";
import { SetStateAction } from "react";
import SetMargin from "../../../../functions/SetMargin";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import SlideDownBar from "../../../../components/Card/SlideDownBar";

interface DeleteModalProps {
  visible: any;
  showHide: any;
}

export default function LogoutDeleteModal({
  visible,
  showHide,
}: DeleteModalProps) {
  const handleClose = () => {
    showHide(false);
  };

  const handlePost = () => {};

  const handleSwipeClose = () => {};

  return (
    <Modal visible={visible} transparent animationType="fade">
      <Card scrollable={false} containerClass={styles.container}>
        <Card scrollable={false} containerClass={styles.contentContainer}>
          <SlideDownBar />

          <Card scrollable={false} containerClass={styles.actionsContainer}>
            <CardText
              bold
              text="Are You Sure?"
              container={styles.confirmContainer}
              textStyle={styles.confirmText}
            />
            <PhoneButton
              semiBold
              onPress={handlePost}
              text="Yes"
              buttonContainerClass={styles.buttonContainer}
              buttonClass={styles.button}
              textClass={styles.buttonText}
            />
            <PhoneButton
              semiBold
              onPress={handlePost}
              text="No"
              buttonContainerClass={styles.buttonContainer}
              buttonClass={styles.button}
              textClass={styles.buttonText}
            />
          </Card>
          <Card scrollable={false} containerClass={styles.closeLevelContainer}>
            <AntDesign
              onPress={handleClose}
              name="closecircle"
              size={40}
              color={"black"}
            />
          </Card>
        </Card>
      </Card>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,.4)",
    justifyContent: "flex-end",
  },

  contentContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    width: "100%",
    height: SetMargin(0.4),
    borderTopRightRadius: 35,
    borderTopLeftRadius: 35,
  },
  actionsContainer: {
    width: "80%",
    alignSelf: "center",
    alignItems: "center",
  },
  confirmContainer: {
    marginTop: SetMargin(0.05),
    marginBottom: SetMargin(0.03),
  },
  confirmText: {
    fontSize: 32,
    letterSpacing: 1,
  },
  buttonContainer: {
    width: "65%",
    marginBottom: SetMargin(0.02),
  },
  button: {
    backgroundColor: "black",
    padding: 10,
    alignItems: "center",
    width: "100%",
    borderRadius: 35,
  },
  buttonText: {
    color: "white",
    fontSize: 24,
  },
  closeLevelContainer: {
    width: "85%",
    alignItems: "flex-end",
    alignSelf: "center",
  },
});
