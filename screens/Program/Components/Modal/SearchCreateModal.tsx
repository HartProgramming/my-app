import { StyleSheet } from "react-native";
import EditModalBase from "./EditModalBase";
import SearchEditModal from "./SearchEditModal";
import CreateEditModal from "./CreateEditModal";
import { Modal, KeyboardAvoidingView } from "react-native";
import SetMargin from "../../../../functions/SetMargin";
import Card from "../../../../components/Card/Card";
import CardText from "../../../../components/Card/CardText";

export interface SearchCreateModalProps {
  type: "search" | "create" | "noShow";
  visible: boolean;
  day: string
}

export default function SearchCreateModal({
  type,
  visible,
  day 
}: SearchCreateModalProps) {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <KeyboardAvoidingView style={styles.modalContainer} behavior="height">
        <Card scrollable={false} containerClass={styles.dragDown}></Card>
        <Card scrollable={false} containerClass={styles.container}>
          {type === "search" && <SearchEditModal day={day} />}
          {type === "create" && <CreateEditModal day={day} />}
        </Card>
      </KeyboardAvoidingView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0, 0,0, 0.4)",
    justifyContent: "flex-end",
    alignItems: 'center'
  },
  modalContainer: {
    flex: 1
  },
  dragDown: {
    backgroundColor: 'rgba(255,255,255,.3)',
    width: '65%',
    height: '1.75%',
    position: 'absolute',
    zIndex: 2,
    top: '30%',
    left: '17.5%',
    borderBottomRightRadius: 35,
    borderBottomLeftRadius: 35
  }
});
