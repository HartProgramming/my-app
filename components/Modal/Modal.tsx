import React from "react";
import { StyleSheet, View, Modal, Text, TouchableOpacity } from "react-native";
import PhoneButton from "../Inputs/PhoneButton";

interface ModalProps {
  visible: boolean;
  onClose: any;
  name?: string;
  details: string;
  image?: File;
}

const ModalPopup = ({ visible, onClose, details, name, image }: ModalProps) => {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>{details}</Text>
          <PhoneButton
            onPress={onClose}
            buttonContainerClass={styles.closeButtonContainer}
            text="Close"
            textClass={styles.closeButtonText}
            buttonClass={styles.closeButton}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 10,
  },
  closeButtonContainer: {},
  closeButton: {
    backgroundColor: "#ccc",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: "flex-end",
  },
  closeButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default ModalPopup;
